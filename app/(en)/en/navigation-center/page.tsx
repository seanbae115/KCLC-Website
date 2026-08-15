import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Navigation Center",
  description: "Learn about the KSLC Navigation Center's role, the No Wrong Door approach, who we serve, and our service area.",
};

const features = [
  { title: "No Wrong Door", desc: "Whatever your concern, we help you find the right place. There's no such thing as knocking on the wrong door." },
  { title: "Korean-First Consultation", desc: "We counsel in Korean from the start, not through translation. English support is also available." },
  { title: "Closed-Loop Referral", desc: "We don't stop at making a referral — we confirm that the connection actually happened." },
  { title: "Person-Centered Navigation", desc: "We walk through intake, assessment, action plan, referral, and follow-up together." },
];

const principles = [
  { title: "We see the whole person.", desc: "We don't just address one issue — we look at housing, health, insurance, meals, transportation, caregiving, social connection, and safety together." },
  { title: "We help until you're actually connected.", desc: "We don't just hand you a phone number. With your consent, we connect you to the right agency and, when needed, make the call together with you." },
  { title: "We follow up on the outcome, to the end.", desc: "Through 3-day, 14-day, and 30-day follow-up, we confirm the referral happened, the service was actually used, and the problem improved — and reassess if it didn't." },
  { title: "We respect the senior's choice and consent.", desc: "KSLC does not decide for you. We explain fully and build the action plan together, based on your choice and consent." },
  { title: "We measure changed lives.", desc: "Instead of counting consultations, we track outcomes: services actually connected, benefits retained, housing stabilized, medical access gained, problems resolved." },
];

export default function NavigationCenterPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/navigation-center" />
      <main id="main">
        <PageHero
          kicker="NAVIGATION CENTER"
          title="It doesn't stop at finding information."
          lead="The KSLC Navigation Center stays with you until you're actually connected to the service you need."
        />

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">WHAT IT IS</p>
                <h2>What is the Navigation Center?</h2>
              </div>
            </div>
            <div className="card-grid cols-4">
              {features.map((f) => (
                <div className="card" key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process section" id="principles">
          <div className="shell process-grid">
            <div className="process-intro">
              <p className="section-kicker light">OFFICIAL DECLARATION</p>
              <h2>
                KSLC&apos;s 5 Case
                <br />
                Management Principles
              </h2>
              <p>
                KSLC doesn&apos;t stop at simply pointing you toward information. We discover the need,
                plan together, connect you to real services, and follow up on the result.
              </p>
            </div>
            <div className="steps">
              {principles.map((p, i) => (
                <article className="step" key={p.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="shell" style={{ marginTop: 56, textAlign: "center" }}>
            <p style={{ color: "var(--gold-light)", fontWeight: 700, letterSpacing: ".01em", fontSize: 15 }}>
              Discover → Plan Together → Connect → Confirm → Leave a Result
            </p>
            <p style={{ marginTop: 22, color: "white", fontFamily: "Georgia, serif", fontSize: 21, fontStyle: "italic", maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
              &ldquo;We don&apos;t boast about the number of consultations. We measure the number of
              changed lives.&rdquo;
            </p>
          </div>
        </section>

        <section className="section" style={{ background: "var(--warm)" }}>
          <div className="shell info-grid">
            <div>
              <p className="section-kicker">WHO WE SERVE</p>
              <h2>Who we serve &amp; service area</h2>
            </div>
            <ul className="info-list plain">
              <li>Who we serve: Korean seniors, families, and caregivers in Orange County</li>
              <li>Service area: Orange County, California (centered on Fullerton, Buena Park, Anaheim)</li>
              <li>Language support: Korean, English</li>
              <li>Cost: Free</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">SCOPE</p>
                <h2>Services we don&apos;t provide</h2>
              </div>
            </div>
            <div className="notice">
              KSLC does not provide or guarantee medical diagnosis or treatment, sell insurance, give
              legal opinions, or approve or assign housing. Where professional judgment is required,
              we refer to the appropriate licensed or official agency.
            </div>
            <div className="notice notice-info" style={{ marginTop: 16 }}>
              <strong>In an emergency?</strong> If there is a life-threatening or immediate safety
              issue, call 911 right away. <Link href="/en/emergency">See emergency information →</Link>
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="shell">
            <div className="card-grid cols-2">
              <div className="card">
                <h3>Curious how the process works?</h3>
                <p>From requesting a consultation to confirming the outcome, in five steps.</p>
                <div style={{ marginTop: 20 }}>
                  <Link className="button button-navy" href="/en/process">
                    See How It Works
                  </Link>
                </div>
              </div>
              <div className="card">
                <h3>Preparing for a consultation?</h3>
                <p>See what to prepare before your consultation.</p>
                <div style={{ marginTop: 20 }}>
                  <Link className="button button-outline" href="/en/consultation-prep">
                    Consultation Prep
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
