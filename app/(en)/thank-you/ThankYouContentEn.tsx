"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const messages: Record<string, { title: string; body: string }> = {
  request: {
    title: "Your consultation request has been received.",
    body: "A KSLC staff member will review your request and typically contact you within 1–2 business days. In an urgent situation, do not wait for a reply from KSLC — contact 911, 988, or the appropriate emergency agency.",
  },
  referral: {
    title: "Your institutional referral inquiry has been received.",
    body: "A KSLC staff member will review it and follow up with a safe referral process.",
  },
  contact: {
    title: "Your message has been received.",
    body: "A KSLC staff member will respond as soon as possible.",
  },
};

export default function ThankYouContentEn() {
  const params = useSearchParams();
  const form = params.get("form") ?? "contact";
  const caseId = params.get("case");
  const msg = messages[form] ?? messages.contact;

  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="shell">
        <p className="section-kicker">Thank You</p>
        <h1 style={{ color: "var(--navy)", fontSize: 36, marginBottom: 18 }}>{msg.title}</h1>

        {caseId ? (
          <p className="case-id">
            <span>Case number</span>
            <strong>{caseId}</strong>
          </p>
        ) : null}

        <p style={{ color: "var(--ink-soft)", maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.9 }}>
          {msg.body}
        </p>
        <p style={{ color: "var(--ink-soft)", margin: "0 auto 32px" }}>
          Phone: <a href="tel:+16572390226" style={{ color: "var(--navy)", fontWeight: 800 }}>(657) 239-0226</a>
        </p>
        <Link className="button button-navy" href="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
