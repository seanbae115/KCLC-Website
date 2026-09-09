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
 * Append the submission to the Google Sheet through a small Apps Script web app.
 * This runs BEFORE any email: if mail delivery later fails, the record still exists.
 */
export async function saveRecord(row: {
  caseId: string;
  formType: FormType;
  lang: Lang;
  answers: Answers;
  sourcePage: string;
}): Promise<{ ok: true } | { ok: false; reason: string }> {
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
        submitted_at: new Date().toISOString(),
        form_type: row.formType,
        lang: row.lang,
        source_page: row.sourcePage,
        status: "new",
        assigned_to: "",
        contact_attempts: "",
        ...flat,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return { ok: false, reason: `sheet responded ${res.status}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, reason: e instanceof Error ? e.message : "unknown error" };
  }
}

function transport() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
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

/**
 * Notify staff, and send the visitor an acknowledgement.
 * Returns which messages actually went out so the caller can log a failure.
 */
export async function sendNotifications(args: {
  caseId: string;
  formType: FormType;
  lang: Lang;
  answers: Answers;
  sourcePage: string;
}): Promise<{ admin: boolean; ack: boolean; reason?: string }> {
  const t = transport();
  if (!t) return { admin: false, ack: false, reason: "SMTP_USER/SMTP_PASS not configured" };

  const info = siteInfo[args.lang];
  const from = `"KSLC" <${process.env.SMTP_USER}>`;
  const to = process.env.NOTIFY_TO || process.env.SMTP_USER!;
  const schema = formSchemas[args.formType];
  const rows = answersHtml(args.formType, args.lang, args.answers);

  let admin = false;
  let ack = false;
  let reason: string | undefined;

  // 1) Staff notification
  try {
    await t.sendMail({
      from,
      to,
      replyTo: asText(args.answers.email) || undefined,
      subject: `${schema.subject[args.lang]} — ${args.caseId}`,
      html: `<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:640px">
        <p style="margin:0 0 4px;color:#8a6d3b;font-weight:700;letter-spacing:.08em;font-size:12px">NEW SUBMISSION</p>
        <h2 style="margin:0 0 6px;color:#0e2a47">${esc(schema.subject[args.lang])}</h2>
        <p style="margin:0 0 18px;color:#5b6470;font-size:14px">접수번호 / Case ID: <strong style="color:#0e2a47">${esc(args.caseId)}</strong><br>
        접수 페이지 / Source: ${esc(args.sourcePage)}</p>
        <table style="border-collapse:collapse;font-size:15px">${rows}</table>
      </div>`,
    });
    admin = true;
  } catch (e) {
    reason = e instanceof Error ? e.message : "admin send failed";
  }

  // 2) Acknowledgement to the visitor (only when they gave an address)
  const visitor = asText(args.answers.email);
  if (visitor) {
    const ko = args.lang === "ko";
    try {
      await t.sendMail({
        from,
        to: visitor,
        subject: ko
          ? `[KSLC] 상담 요청이 접수되었습니다 — ${args.caseId}`
          : `[KSLC] We received your request — ${args.caseId}`,
        text: ko
          ? `KSLC 상담 요청이 접수되었습니다. 접수번호는 ${args.caseId}이며, 일반적으로 1~2영업일 내 담당자가 연락드립니다. 민감한 개인정보는 답장으로 보내지 마십시오. 위급한 상황은 911 또는 988에 연락하십시오. KSLC ${info.phone}`
          : `KSLC has received your request. Your case number is ${args.caseId}, and a staff member will usually contact you within 1-2 business days. Please do not send sensitive personal information by reply. In an emergency, contact 911 or 988. KSLC ${info.phone}`,
      });
      ack = true;
    } catch (e) {
      reason = reason ?? (e instanceof Error ? e.message : "ack send failed");
    }
  } else {
    ack = true; // nothing to send
  }

  return { admin, ack, reason };
}
