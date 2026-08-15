import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Notice from "@/components/Notice";

export const metadata: Metadata = {
  title: "Consultation Prep",
  description: "What to prepare before your KSLC consultation, and frequently asked questions.",
};

const materials = [
  "Photo ID",
  "Insurance card",
  "Recent government agency notices",
  "List of current medications",
  "Medical provider information",
  "Housing/income-related documents",
  "The one issue you'd most like solved first",
];

const faqs = [
  { q: "Who can request a consultation?", a: "Korean seniors themselves, as well as family members, caregivers, or institutional staff, can all request a consultation." },
  { q: "How long does a consultation take?", a: "An initial consultation usually takes about 15–30 minutes, depending on your situation." },
  { q: "Can family members join?", a: "Yes, we encourage family members or caregivers to participate together." },
  { q: "Is interpretation available?", a: "Consultations are offered primarily in Korean, with English support available when needed." },
  { q: "How is my personal information protected?", a: "Information shared during the consultation is used only to connect you to services and is kept secure." },
  { q: "What happens after the consultation?", a: "After connecting you to the right agency, we follow up to confirm you were actually able to get help." },
];

export default function ConsultationPrepPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/consultation-prep" />
      <main id="main">
        <PageHero
          kicker="BEFORE YOUR CONSULTATION"
          title="Consultation Prep"
          lead="You can start a consultation even without any documents. If you have them ready, the items below can help."
        />

        <section className="section">
          <div className="shell info-grid">
            <div>
              <p className="section-kicker">GOOD TO HAVE</p>
              <h2>Helpful materials</h2>
            </div>
            <ul className="info-list">
              {materials.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="shell">
            <Notice>You can start a consultation even without any documents. Just reach out with whatever you have.</Notice>
          </div>
        </section>

        <section className="section" style={{ background: "var(--warm)" }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">FAQ</p>
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tight" style={{ textAlign: "center" }}>
          <div className="shell">
            <Link className="button button-gold" href="/en/request">
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
