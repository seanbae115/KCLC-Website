import nodemailer from "nodemailer";
import type { Lang } from "./nav";
import { formSchemas, type FormType } from "./formSchema";
import { siteInfo } from "./nav";

export type Answers = Record<string, string | string[]>;

/** KSLC-YYYYMMDD-XXXX, dated in the campus's own timezone. */
export function makeCaseId(): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const ymd = `${get("year")}${get("month")}${get("day")}`;
  let rand = "";
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no look-alikes: I, O, 0, 1
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  for (const b of bytes) rand += alphabet[b % alphabet.length];
  return `KSLC-${ymd}-${rand}`;
}

const asText = (v: string | string[] | undefined): string =>
  Array.isArray(v) ? v.join(", ") : (v ?? "");

/**
 * Receipt time in the campus's own timezone, with the zone spelled out.
 * Recording UTC here would disagree with the date inside the case number
 * and leave staff reading two different days for the same submission.
 */
function receiptTimestamp(d = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZoneName: "short",
  }).formatToParts(d);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")} ${get("timeZoneName")}`;
}

/** What the Apps Script reports back about the mail it was asked to send. */
export type MailOutcome = { admin: boolean; ack: boolean; error?: string };

/**
 * Append the submission to the Google Sheet through a small Apps Script web app,
 * and ask that same script to send the notification mail.
 *
 * Google sends the mail under its own account, so no password is involved.
 * The SMTP app password used to be the only path, and it expired without warning
 * in October 2026 — notifications stopped for weeks while submissions piled up
 * unread. Mail that rides along with the record has one less thing to expire.
 *
 * The record is still written before anything is sent: if mail fails, the
 * submission is already safe.
 */
export async function saveRecord(
  row: {
    caseId: string;
    formType: FormType;
    lang: Lang;
    answers: Answers;
    sourcePage: string;
  },
  mail?: MailRequest,
): Promise<{ ok: true; mail?: MailOutcome } | { ok: false; reason: string }> {
  const url = process.env.SHEETS_WEBHOOK_URL;
  const secret = process.env.SHEETS_WEBHOOK_SECRET;
  if (!url || !secret) return { ok: false, reason: "SHEETS_WEBHOOK_URL/SECRET not configured" };

  const schema = formSchemas[row.formType];
  const flat: Record<string, string> = {};
  for (const f of schema.fields) flat[f.key] = asText(row.answers[f.key]);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        case_id: row.caseId,
        submitted_at: receiptTimestamp(),
        form_type: row.formType,
        lang: row.lang,
        source_page: row.sourcePage,
        status: "new",
        assigned_to: "",
        contact_attempts: "",
        ...flat,
        // Sending mail takes the script a few seconds, so allow more time below.
        mail,
      }),
      signal: AbortSignal.timeout(mail ? 25_000 : 10_000),
    });
    if (!res.ok) return { ok: false, reason: `sheet responded ${res.status}` };

    // Apps Script answers 200 even when it refuses the request, so the HTTP
    // status alone proves nothing. A wrong shared secret would otherwise look
    // like a successful save while no row was ever written — the visitor would
    // be thanked for a submission that does not exist anywhere.
    const body = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
      mail?: MailOutcome;
    };
    if (body.ok === false) {
      return { ok: false, reason: `sheet refused the record: ${body.error ?? "unknown"}` };
    }

    // An older copy of the Apps Script knows nothing about `mail` and simply
    // ignores it. Then `mail` comes back undefined and the caller falls back to
    // SMTP, so the site keeps working while the script is being updated.
    return { ok: true, mail: body.mail };
  } catch (e) {
    return { ok: false, reason: e instanceof Error ? e.message : "unknown error" };
  }
}

function transport() {
  const user = process.env.SMTP_USER?.trim();
  // 구글은 앱 비밀번호를 'abcd efgh ijkl mnop' 처럼 네 글자씩 끊어서 보여줍니다.
  // 보이는 대로 붙여넣는 것이 자연스러우므로 공백은 여기서 지웁니다.
  // 이 한 줄이 없으면 비밀번호를 제대로 받고도 로그인에 실패합니다.
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: true,
    auth: { user, pass },
  });
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function answersHtml(formType: FormType, lang: Lang, answers: Answers): string {
  return formSchemas[formType].fields
    .map((f) => {
      const v = asText(answers[f.key]);
      if (!v) return "";
      return `<tr><td style="padding:6px 14px 6px 0;color:#5b6470;vertical-align:top;white-space:nowrap">${esc(f.label[lang])}</td><td style="padding:6px 0;color:#1d2530"><strong>${esc(v).replace(/\n/g, "<br>")}</strong></td></tr>`;
    })
    .join("");
}

export type Submission = {
  caseId: string;
  formType: FormType;
  lang: Lang;
  answers: Answers;
  sourcePage: string;
};

/**
 * The two messages, fully written out, ready for whoever sends them.
 *
 * The wording lives here rather than inside the Apps Script so that every
 * sentence a visitor reads stays in this repository, under review, in both
 * languages. The script is only a postman.
 */
export type MailRequest = {
  admin: { to: string; subject: string; html: string; replyTo?: string };
  ack: { to: string; subject: string; text: string } | null;
};

export function buildMail(args: Submission): MailRequest {
  const info = siteInfo[args.lang];
  const schema = formSchemas[args.formType];
  const rows = answersHtml(args.formType, args.lang, args.answers);
  const visitor = asText(args.answers.email);
  const ko = args.lang === "ko";

  return {
    admin: {
      to: process.env.NOTIFY_TO || process.env.SMTP_USER || "",
      replyTo: visitor || undefined,
      subject: `${schema.subject[args.lang]} — ${args.caseId}`,
      html: `<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:640px">
        <p style="margin:0 0 4px;color:#8a6d3b;font-weight:700;letter-spacing:.08em;font-size:12px">NEW SUBMISSION</p>
        <h2 style="margin:0 0 6px;color:#0e2a47">${esc(schema.subject[args.lang])}</h2>
        <p style="margin:0 0 18px;color:#5b6470;font-size:14px">접수번호 / Case ID: <strong style="color:#0e2a47">${esc(args.caseId)}</strong><br>
        접수 페이지 / Source: ${esc(args.sourcePage)}</p>
        <table style="border-collapse:collapse;font-size:15px">${rows}</table>
      </div>`,
    },
    ack: visitor
      ? {
          to: visitor,
          subject: ko
            ? `[KSLC] 상담 요청이 접수되었습니다 — ${args.caseId}`
            : `[KSLC] We received your request — ${args.caseId}`,
          text: ko
            ? `KSLC 상담 요청이 접수되었습니다. 접수번호는 ${args.caseId}이며, 일반적으로 1~2영업일 내 담당자가 연락드립니다. 민감한 개인정보는 답장으로 보내지 마십시오. 위급한 상황은 911 또는 988에 연락하십시오. KSLC ${info.phone}`
            : `KSLC has received your request. Your case number is ${args.caseId}, and a staff member will usually contact you within 1-2 business days. Please do not send sensitive personal information by reply. In an emergency, contact 911 or 988. KSLC ${info.phone}`,
        }
      : null,
  };
}

/**
 * The reserve path: send over SMTP with the app password.
 *
 * Google itself now sends the mail alongside the record, and this only runs for
 * whatever that did not deliver. Two independent paths — if the app password
 * expires the Google path still works, and if the script is mid-update SMTP
 * still works. `want` keeps a message from being sent twice.
 */
export async function sendNotifications(
  args: Submission,
  want: { admin: boolean; ack: boolean } = { admin: true, ack: true },
): Promise<{ admin: boolean; ack: boolean; reason?: string }> {
  if (!want.admin && !want.ack) return { admin: true, ack: true };

  const t = transport();
  if (!t) return { admin: false, ack: false, reason: "SMTP_USER/SMTP_PASS not configured" };

  const mail = buildMail(args);
  const from = `"KSLC" <${process.env.SMTP_USER}>`;

  let admin = !want.admin;
  let ack = !want.ack;
  let reason: string | undefined;

  if (want.admin) {
    try {
      await t.sendMail({ from, ...mail.admin });
      admin = true;
    } catch (e) {
      reason = e instanceof Error ? e.message : "admin send failed";
    }
  }

  if (want.ack) {
    if (!mail.ack) {
      ack = true; // the visitor gave no address; nothing to send
    } else {
      try {
        await t.sendMail({ from, ...mail.ack });
        ack = true;
      } catch (e) {
        reason = reason ?? (e instanceof Error ? e.message : "ack send failed");
      }
    }
  }

  return { admin, ack, reason };
}

export type SelfTestResult = {
  ok: boolean;
  caseId: string;
  at: string;
  checks: {
    /** 스프레드시트에 한 줄이 실제로 기록되었는가. */
    sheet: boolean;
    /** 구글(Apps Script)이 점검 메일을 보냈는가 — 평소 알림이 나가는 길입니다. */
    googleMail: boolean;
    /** 예비 경로인 메일 서버에 아직 로그인이 되는가 (앱 비밀번호 만료를 잡습니다). */
    smtpLogin: boolean;
  };
  /** 실패한 항목의 사유. 사람이 읽고 바로 조치할 수 있게 적습니다. */
  problems: string[];
};

/**
 * 상담 신청이 실제로 접수되는지 스스로 점검합니다.
 *
 * 실제 신청과 **똑같은 길**(같은 환경변수, 같은 시트 웹훅, 같은 발송 방식)을
 * 지나가므로, 길 중간이 끊기면 여기서 걸립니다.
 *
 * 메일 경로가 둘(구글 / 예비 SMTP)이므로 둘 다 확인합니다. 감시하지 않는
 * 예비 경로는 예비가 아니라, 필요할 때 이미 죽어 있는 길입니다.
 *
 * 이 점검이 필요한 이유: 2026년 9월에 받는 메일함이 죽어 있었고, 10월에는
 * 앱 비밀번호가 폐기됐습니다. 두 번 다 사이트는 완벽히 정상으로 보였고
 * 신청만 조용히 전달되지 않았습니다. 사람 눈에 보이지 않는 고장이라,
 * 기계가 정기적으로 확인해야 합니다.
 */
export async function runSelfTest(): Promise<SelfTestResult> {
  const caseId = makeCaseId();
  const at = receiptTimestamp();
  const problems: string[] = [];
  const checks = { sheet: false, googleMail: false, smtpLogin: false };

  const to = process.env.NOTIFY_TO || process.env.SMTP_USER || "";

  // 1) 시트 기록 + 2) 구글이 보내는 점검 메일 (실제 알림과 같은 경로)
  const url = process.env.SHEETS_WEBHOOK_URL;
  const secret = process.env.SHEETS_WEBHOOK_SECRET;
  if (!url || !secret) {
    problems.push("SHEETS_WEBHOOK_URL 또는 SHEETS_WEBHOOK_SECRET 환경변수가 없습니다.");
  } else if (!to) {
    problems.push("NOTIFY_TO 환경변수가 없어 점검 메일을 보낼 곳을 알 수 없습니다.");
  } else {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          case_id: caseId,
          submitted_at: at,
          form_type: "self-test",
          lang: "ko",
          source_page: "/api/self-test",
          note: "자동 점검 (실제 상담 신청이 아닙니다)",
          status: "self-test",
          assigned_to: "",
          contact_attempts: "",
          mail: {
            admin: {
              to,
              subject: `[KSLC 자동점검] 정상 — ${caseId}`,
              html: `<div style="font-family:system-ui,sans-serif;max-width:620px;line-height:1.7">
                <p>KSLC 홈페이지 자동 점검입니다. 사람이 보낸 메일이 아닙니다.</p>
                <p>점검 시각: <strong>${esc(at)}</strong><br>점검 번호: <strong>${esc(caseId)}</strong></p>
                <p>이 메일이 도착했다는 것은 <strong>상담 신청 알림이 정상으로 전달된다</strong>는 뜻입니다.
                조치할 일은 없습니다. 이 메일이 오지 않는 주가 있으면 홈페이지 담당자에게 알려주세요.</p>
              </div>`,
            },
            ack: null,
          },
        }),
        signal: AbortSignal.timeout(25_000),
      });
      if (res.ok) {
        const body = (await res.json().catch(() => ({}))) as {
          ok?: boolean;
          error?: string;
          mail?: MailOutcome;
        };
        // 200 with ok:false means the script rejected us — almost always a
        // mismatched secret. Nothing was written, so this is not a pass.
        if (body.ok === false) {
          problems.push(
            `시트가 기록을 거부했습니다 (${body.error ?? "원인 불명"}). ` +
              "Apps Script 의 SECRET 과 Vercel 의 SHEETS_WEBHOOK_SECRET 이 다른지 확인하세요.",
          );
        } else {
          checks.sheet = true;
        }
        if (!checks.sheet) {
          // 기록도 안 됐으면 메일 여부를 따질 단계가 아닙니다.
        } else if (!body.mail) {
          problems.push(
            "구글 쪽 Apps Script 가 아직 옛 버전입니다. 메일을 보내지 못합니다 " +
              "(docs/apps-script.gs 를 붙여넣고 '새 버전'으로 다시 배포해야 합니다).",
          );
        } else if (!body.mail.admin) {
          problems.push(`구글이 점검 메일을 보내지 못했습니다: ${body.mail.error ?? "원인 불명"}`);
        } else {
          checks.googleMail = true;
        }
      } else {
        problems.push(`시트 기록 실패: 응답 ${res.status}`);
      }
    } catch (e) {
      problems.push(`시트 기록 실패: ${e instanceof Error ? e.message : "원인 불명"}`);
    }
  }

  // 3) 예비 경로 점검 — 로그인만 확인하고 메일은 보내지 않습니다.
  //    매주 같은 내용의 메일이 두 통씩 쌓이는 것을 피하기 위해서입니다.
  const t = transport();
  if (!t) {
    problems.push("예비 경로가 없습니다: SMTP_USER 또는 SMTP_PASS 환경변수가 비어 있습니다.");
  } else {
    try {
      await t.verify();
      checks.smtpLogin = true;
    } catch (e) {
      problems.push(
        `예비 메일 경로 로그인 실패(앱 비밀번호가 폐기된 것으로 보입니다): ${
          e instanceof Error ? e.message : "원인 불명"
        }`,
      );
    }
  }

  const ok = checks.sheet && checks.googleMail && checks.smtpLogin;
  return { ok, caseId, at, checks, problems };
}
