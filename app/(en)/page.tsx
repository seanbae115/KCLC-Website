import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const audiences = [
  { title: "Facing a language barrier", desc: "English-only paperwork and phone calls are stressful — we guide you in Korean." },
  { title: "Going door to door alone", desc: "So you don't have to visit the hospital, city hall, and insurer separately, we connect them for you." },
  { title: "Far from family", desc: "Even without a nearby adult child or caregiver, we help you plan and understand next steps." },
  { title: "Stuck after applying", desc: "Already applied but can't tell what happened next? We help you check status and reconnect." },
];

const services = [
  { number: "01", title: "Health & Medical Navigation", desc: "Connecting to primary/specialty care, hospital scheduling, post-discharge support, and medical transportation." },
  { number: "02", title: "Insurance & Public Benefits", desc: "Guidance on Medi-Cal, Medicare, SSI/SSA, and CalFresh applications and renewals." },
  { number: "03", title: "IHSS & Family Caregiving", desc: "IHSS information, family caregiver support, adult day care, and in-home services." },
  { number: "04", title: "Housing Navigation", desc: "Senior apartments, affordable housing, eviction prevention, and housing stability resources." },
  { number: "05", title: "Transportation & Daily Living", desc: "Medical transportation, meal support, preventing social isolation, and digital access." },
  { number: "06", title: "Legal & Community Resources", desc: "Legal aid organizations, citizenship/immigration information, and church/nonprofit connections." },
];

const steps = [
  ["01", "Request a Consultation", "Call or use the web form to tell us what help you need most right now."],
  ["02", "Intake & Urgency Check", "We listen to your situation and determine how quickly you need to be connected."],
  ["03", "Needs Assessment", "We review your health, benefits, housing, and caregiving needs and set priorities together."],
  ["04", "Personal Action Plan & Referral", "We agree on the right agencies, application paths, and documents to prepare."],
  ["05", "Follow-Up & Outcome Check", "We don't stop at the referral — we confirm you were actually able to use the service."],
];

const differences = [
  { title: "No Wrong Door", desc: "Whatever the problem, we walk with you to the right place." },
  { title: "Korean-First Guidance", desc: "We counsel in Korean from the start, not through translation." },
  { title: "Follow-Up to Outcome", desc: "We don't stop at the referral — we check that it actually worked." },
  { title: "Community Partnership", desc: "We build a safety net together with hospitals, cities, churches, and agencies." },
];

export default function HomePageEn() {
  return (
    <>
      <Header lang="en" currentPath="/" />
      <main id="main">
        <section className="hero" id="top">
          <img className="hero-photo" src="/hero-community.jpg" alt="" />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">KOREAN SENIOR LIFE CAMPUS · A COMMUNITY BEFORE A CAMPUS</p>
              <h1>
                Start getting help
                <br />
                <span>in one place.</span>
              </h1>
              <p className="hero-lead">
                Find health, benefits, housing, and caregiving information in one place — and stay
                with the KSLC Navigation Center until you&apos;re actually connected to the service you
                need.
              </p>
              <div className="hero-actions">
                <Link className="button button-gold" href="/request">
                  Request Consultation
                </Link>
                <Link className="button button-outline" href="/services">
                  View Services
                </Link>
                <Link className="text-link dark" href="/referral">
                  Institutional Referral <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="hero-trust">
                <span>Korean-first guidance</span>
                <span>Orange County local network</span>
                <span>Follow-up to outcome</span>
              </div>
              <div className="hero-links">
                <Link href="/leadership">View Leadership →</Link>
                <a href="https://www.hyosarangusa.org/" target="_blank" rel="noreferrer">
                  Hyo Sarang Mission →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="purpose" id="about">
          <div className="shell purpose-grid">
            <div>
              <p className="section-kicker">WHY KSLC</p>
              <h2>
                We see the person
                <br />
                before the paperwork.
              </h2>
            </div>
            <div className="purpose-copy">
              <p className="purpose-lead">
                It&apos;s not that services don&apos;t exist — many seniors can&apos;t reach the help they need
                because the system is too complex and language and digital barriers are too high.
              </p>
              <p>
                The KSLC Navigation Center doesn&apos;t provide every service directly. We are a community
                gateway that connects existing public, medical, housing, legal, and community resources
                around one person&apos;s life.
              </p>
              <blockquote>&ldquo;We don&apos;t stop at the referral. We follow up to the outcome.&rdquo;</blockquote>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">WHO WE HELP</p>
                <h2>People we help</h2>
              </div>
              <p>You don&apos;t need just one reason to reach out. Tell us your situation and we&apos;ll help sort it out.</p>
            </div>
            <div className="card-grid cols-4">
              {audiences.map((a) => (
                <div className="card" key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">WHAT WE DO</p>
                <h2>Integrated navigation, starting at one door</h2>
              </div>
              <p>Even if you come in with one concern, we look at the whole picture of what your life needs.</p>
            </div>
            <div className="card-grid cols-3">
              {services.map((s) => (
                <div className="service-card" key={s.number} style={{ border: "1px solid #cbd0d3" }}>
                  <span className="service-number">{s.number}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="service-boundary">
              KSLC does not provide or guarantee medical diagnosis or treatment, sell insurance, give
              legal opinions, or approve or assign housing. Where professional judgment is required, we
              refer to the appropriate licensed or official agency.
            </p>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link className="button button-navy" href="/services">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="shell process-grid">
            <div className="process-intro">
              <p className="section-kicker light">HOW IT WORKS</p>
              <h2>
                From first contact
                <br />
                to a confirmed outcome
              </h2>
              <p>No Wrong Door, No One Walks Alone.</p>
            </div>
            <div className="steps">
              {steps.map(([number, title, description]) => (
                <article className="step" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">WHY IT&apos;S DIFFERENT</p>
                <h2>What makes KSLC different</h2>
              </div>
            </div>
            <div className="card-grid cols-4">
              {differences.map((d) => (
                <div className="card" key={d.title}>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="partners section" id="partners">
          <div className="shell partners-grid">
            <div className="partner-visual" aria-hidden="true">
              <div className="connection center">KSLC</div>
              <div className="connection c1">Medical</div>
              <div className="connection c2">Housing</div>
              <div className="connection c3">Government</div>
              <div className="connection c4">Community</div>
            </div>
            <div>
              <p className="section-kicker">COMMUNITY PARTNERSHIP</p>
              <h2>
                Building a safe network
                <br />
                together with the community
              </h2>
              <p>
                Hospitals, city and county government, housing agencies, churches, and nonprofits each
                keep their own expertise while we build a senior-centered connection system together.
              </p>
              <Link className="text-link dark" href="/partnership">
                Partner with us <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="resources section" id="resources">
          <div className="shell resource-card">
            <div>
              <p className="section-kicker">OFFICIAL RESOURCE</p>
              <h2>Official KSLC Materials</h2>
              <p>
                Download our official presentation covering KSLC&apos;s vision, mission, core values, and
                Navigation Center services from the Resources page.
              </p>
            </div>
            <div className="resource-action">
              <span>Go to Resources</span>
              <Link className="button button-navy" href="/resources">
                Visit Resources
              </Link>
              <small>Guides · Checklists · Official Materials</small>
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="shell contact-card" style={{ background: "var(--warm)", color: "var(--charcoal)", boxShadow: "none", border: "1px solid var(--rule)" }}>
            <div>
              <p className="section-kicker">SUPPORT KSLC</p>
              <h2 style={{ color: "var(--navy)" }}>Join us as a donor or volunteer</h2>
              <p style={{ color: "var(--ink-soft)" }}>
                From founding and recurring gifts to program sponsorships, and volunteering as
                consultation support, interpretation, administration, or digital literacy training —
                there are many ways to get involved.
              </p>
            </div>
            <div className="contact-actions">
              <Link className="button button-gold" href="/partnership#donate">
                Donate
              </Link>
              <Link className="button button-outline" href="/partnership#volunteer">
                Volunteer
              </Link>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="shell contact-card">
            <div>
              <p className="section-kicker light">START HERE</p>
              <h2>You don&apos;t need to know where to start.</h2>
              <p>Tell us the one thing worrying you most right now. We&apos;ll help you find the next step.</p>
              <p style={{ fontSize: 14, marginTop: 24 }}>Hours: Weekdays 9:00 AM – 5:00 PM (appointments recommended)</p>
            </div>
            <div className="contact-actions">
              <a className="button button-white" href="tel:+17147882002">
                Call 714-788-2002
              </a>
              <a
                className="address-link"
                href="https://www.google.com/maps/search/?api=1&query=7342+Orangethorpe+Ave+%23B-109+Buena+Park+CA+90621"
                target="_blank"
                rel="noreferrer"
              >
                7342 Orangethorpe Ave, #B-109
                <br />
                Buena Park, CA 90621
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
