// Offline regression checks: no network, real email, or spreadsheet writes.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const nodemailer = require('nodemailer');

function load(file, imports, extra = {}) {
  const module = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText;
  vm.runInNewContext(code, {
    module, exports: module.exports,
    require(name) { if (!(name in imports)) throw new Error(`Unexpected import: ${name}`); return imports[name]; },
    Request, Response, crypto, Intl, Date, AbortSignal, console: { error() {} }, ...extra,
  }, { filename: file });
  return module.exports;
}

async function main() {
  const schema = load('lib/formSchema.ts', {});
  const payload = { formType: 'request', lang: 'ko', answers: {
    name: '[테스트] Offline', phone: 'not-sent', email: 'applicant@example.invalid',
    preferredLanguage: 'ko', relationship: 'self', helpAreas: ['housing'], consent: 'yes',
  } };
  let events = [];
  let stored = true;
  let mailed = true;
  const route = load('app/api/submit/route.ts', {
    'next/server': { NextResponse: { json: (body, init) => Response.json(body, init) } },
    '@/lib/formSchema': schema,
    '@/lib/submissions': {
      makeCaseId: () => 'KSLC-OFFLINE-TEST',
      saveRecord: async () => { events.push('save'); return { ok: stored, reason: 'offline failure' }; },
      sendNotifications: async () => { events.push('mail'); return { admin: mailed, ack: mailed }; },
    },
  });
  const request = (body) => new Request('http://localhost/api/submit/', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
  });
  let response = await route.POST(request(payload));
  assert.equal(response.status, 200);
  assert.deepEqual(events, ['save', 'mail']);
  events = []; stored = false;
  response = await route.POST(request(payload));
  assert.equal(response.status, 502);
  assert.deepEqual(events, ['save']);
  events = []; stored = true; mailed = false;
  response = await route.POST(request(payload));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
  assert.deepEqual(events, ['save', 'mail']);
  events = [];
  response = await route.POST(request({ ...payload, answers: {} }));
  assert.equal(response.status, 422);
  assert.deepEqual(events, []);
  console.log('PASS: store before mail; storage failure stops mail; mail failure preserves success; required fields rejected');

  const messages = [];
  const stream = nodemailer.createTransport({ streamTransport: true, buffer: true, newline: 'unix' });
  const submissions = load('lib/submissions.ts', {
    nodemailer: { createTransport: () => ({ sendMail: async (mail) => {
      const result = await stream.sendMail(mail);
      messages.push(result);
      return result;
    } }) },
    './formSchema': schema,
    './nav': { siteInfo: { ko: { phone: 'offline' }, en: { phone: 'offline' } } },
  }, { process: { env: { SMTP_USER: 'staff@example.invalid', SMTP_PASS: 'offline', NOTIFY_TO: 'staff@example.invalid' } },
    fetch: () => { throw new Error('Network disabled in offline test'); } });
  for (const lang of ['ko', 'en']) {
    const result = await submissions.sendNotifications({ caseId: 'KSLC-OFFLINE-TEST', formType: 'request', lang,
      answers: { ...payload.answers, notes: '<script>unsafe</script>' }, sourcePage: '/request/' });
    assert.equal(result.admin, true);
    assert.equal(result.ack, true);
  }
  assert.equal(messages.length, 4);
  assert.equal(messages[0].envelope.to[0], 'staff@example.invalid');
  assert.equal(messages[1].envelope.to[0], 'applicant@example.invalid');
  assert.ok(messages.every(m => m.message.toString().includes('KSLC-OFFLINE-TEST')));
  console.log('PASS: updated Nodemailer composes Korean/English staff and applicant mail using offline stream transport');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
