import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How It Works",
  description: "From requesting a consultation to follow-up, learn the five steps of the KSLC Navigation Center process.",
};

const steps = [
  {
    number: "01",
    title: "Request a Consultation",
    desc: "Call or use the web form to tell us what help you need most right now.",
    prepare: "Just your name, phone number, and preferred language is enough.",
    expect: "A staff member will reach out within 1–2 business days.",
  },
  {
    number: "02",
    title: "Intake & Urgency Check",
    desc: "We listen to your situation and determine how quickly you need to be connected.",
    prepare: "It helps to have the one thing worrying you most in mind.",
    expect: "A 15–30 minute conversation, by phone or in person.",
  },
  {
    number: "03",
    title: "Needs Assessment",
    desc: "We review your health, benefits, housing, and caregiving needs and set priorities together.",
    prepare: "If you have them, an ID, insurance card, and recent notices help — but aren't required.",
    expect: "You can start the consultation even without any documents.",
  },
  {
    number: "04",
    title: "Personal Action Plan & Referral",
    desc: "We agree on the right agencies, application paths, and documents to prepare.",
    prepare: "Feel free to bring a family member or caregiver.",
    expect: "You'll receive concrete next steps and contact information.",
  },
  {
    number: "05",
    title: "Follow-Up & Outcome Check",
    desc: "We don't stop at the referral — we confirm you were actually able to use the service.",
    prepare: "Nothing extra to prepare.",
    expect: "A staff member will follow up to confirm the connection worked.",
  },
];

export default function ProcessPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/process" />
      <main id="main">
        <PageHero
          kicker="HOW IT WORKS"
          title="How It Works"
          lead="No Wrong Door, No One Walks Alone. From first contact to a confirmed outcome, in five steps."
        />

        <section className="section">
          <div className="shell">
            <div style={{ display: "grid", gap: 24 }}>
              {steps.map((s) => (
                <div className="card" key={s.number} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, alignItems: "start" }}>
                  <span className="service-number" style={{ fontSize: 24 }}>
                    {s.number}
                  </span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <p style={{ marginTop: 12, fontSize: 15 }}>
                      <strong style={{ color: "var(--navy)" }}>Good to prepare: </strong>
                      {s.prepare}
                    </p>
                    <p style={{ marginTop: 6, fontSize: 15 }}>
                      <strong style={{ color: "var(--navy)" }}>What to expect: </strong>
                      {s.expect}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tight" style={{ textAlign: "center" }}>
          <div className="shell">
            <Link className="button button-gold" href="/request">
              Request a Consultation Now
            </Link>
            <p style={{ marginTop: 20 }}>
              <Link href="/navigation-center#principles" style={{ color: "var(--navy)", fontWeight: 700 }}>
                See the 5 Case Management Principles behind this process →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
