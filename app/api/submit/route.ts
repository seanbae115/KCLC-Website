import { NextResponse } from "next/server";
import type { Lang } from "@/lib/nav";
import { HONEYPOT, errorFor, formSchemas, type FormType } from "@/lib/formSchema";
import { buildMail, makeCaseId, saveRecord, sendNotifications, type Answers } from "@/lib/submissions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const isFormType = (v: unknown): v is FormType =>
  v === "request" || v === "referral" || v === "contact";
const isLang = (v: unknown): v is Lang => v === "ko" || v === "en";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const formType = body.formType;
  const lang = body.lang;
  if (!isFormType(formType) || !isLang(lang)) {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Bots fill hidden fields; people don't. Accept silently so they don't retry.
  if (typeof body[HONEYPOT] === "string" && body[HONEYPOT] !== "") {
    return NextResponse.json({ ok: true, caseId: makeCaseId() });
  }

  const schema = formSchemas[formType];
  const raw = (body.answers ?? {}) as Record<string, unknown>;
  const answers: Answers = {};
  for (const f of schema.fields) {
    const v = raw[f.key];
    if (Array.isArray(v)) answers[f.key] = v.filter((x): x is string => typeof x === "string").map((s) => s.trim()).slice(0, 30);
    else if (typeof v === "string") answers[f.key] = v.trim().slice(0, 5000);
  }

  // Server-side validation. This runs regardless of what the browser did.
  const errors: Record<string, string> = {};
  for (const f of schema.fields) {
    if (!f.required) continue;
    const v = answers[f.key];
    const empty = f.kind === "checkboxGroup" ? !Array.isArray(v) || v.length < 1 : !v || v === "";
    if (empty) errors[f.key] = errorFor(f, lang);
  }
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", errors }, { status: 422 });
  }

  const caseId = makeCaseId();
  const sourcePage = typeof body.sourcePage === "string" ? body.sourcePage.slice(0, 300) : "";

  const submission = { caseId, formType, lang, answers, sourcePage };

  // Record first, with the notification mail riding along. If this fails the
  // submission genuinely did not go through, so tell the visitor honestly
  // rather than showing a fake success.
  const stored = await saveRecord(submission, buildMail(submission));
  if (!stored.ok) {
    console.error(`[submit] STORAGE FAILED case=${caseId} form=${formType}: ${stored.reason}`);
    return NextResponse.json({ ok: false, error: "storage" }, { status: 502 });
  }

  // The record is safe from here on. A mail failure must not tell the visitor
  // to submit again — it gets logged loudly for staff instead.
  let admin = stored.mail?.admin ?? false;
  let ack = stored.mail?.ack ?? false;

  // Whatever Google did not deliver, try again over SMTP. Asking only for the
  // missing half keeps anyone from receiving the same message twice.
  if (!admin || !ack) {
    const retry = await sendNotifications(submission, { admin: !admin, ack: !ack });
    admin = admin || retry.admin;
    ack = ack || retry.ack;
    if (!admin || !ack) {
      console.error(
        `[submit] NOTIFY FAILED case=${caseId} admin=${admin} ack=${ack} google=${stored.mail?.error ?? "no reply"} smtp=${retry.reason ?? "unknown"} — record IS saved, staff must check the sheet`,
      );
    }
  }

  // Which path actually delivered. Without this the switch from SMTP to Google
  // is invisible, and a half-finished migration looks exactly like a working one.
  console.log(
    `[submit] OK case=${caseId} form=${formType} via=${stored.mail?.admin ? "google" : "smtp"} admin=${admin} ack=${ack}`,
  );

  return NextResponse.json({ ok: true, caseId, notified: admin });
}
