"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const messages: Record<string, { title: string; body: string }> = {
  request: {
    title: "Your consultation request has been received.",
    body: "A KSLC staff member will contact you within 1–2 business days. For urgent medical or safety issues, call 911 or the appropriate emergency service.",
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
  const msg = messages[form] ?? messages.contact;
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="shell">
        <p className="section-kicker">Thank You</p>
        <h1 style={{ color: "var(--navy)", fontSize: 36, marginBottom: 18 }}>{msg.title}</h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: 560, margin: "0 auto 32px" }}>{msg.body}</p>
        <Link className="button button-navy" href="/en">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
