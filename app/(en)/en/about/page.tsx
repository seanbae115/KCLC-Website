import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About KSLC",
  description: "Learn about Korean Senior Life Campus's founding story, vision, mission, and core values.",
};

const problems = [
  { title: "Language & Cultural Barriers", desc: "Hearing information isn't the same as understanding, deciding, and asking questions.", answer: "We open a first door of trust through Korean-language navigation and interpretation." },
  { title: "System Complexity", desc: "Medi-Cal, Medicare, IHSS, SSI, and housing support are disconnected paths.", answer: "One Door, Many Services — connecting several services from a single point." },
  { title: "Fragmented Services", desc: "Being referred to an agency doesn't always lead to actually using it.", answer: "Warm referral and follow-up that doesn't stop at the introduction." },
  { title: "Housing & Health Risk", desc: "Problems are often discovered only after they become a crisis.", answer: "Early consultation and needs assessment to catch issues sooner." },
  { title: "Transportation & Digital Barriers", desc: "Appointments, applications, and follow-up are often hard to manage alone.", answer: "We help with both transportation and digital access." },
  { title: "Social Isolation", desc: "Loneliness and lack of information reduce participation.", answer: "We reconnect through relationships, education, and volunteering." },
];

const values = [
  { title: "Dignity", desc: "Every senior is the author of their own choices. We explain and seek consent rather than deciding for them." },
  { title: "Love", desc: "Care and welcome come before process. We listen for the loneliness and fear behind the urgent problem." },
  { title: "Excellence", desc: "We turn good intentions into precise practice, through current information and training." },
  { title: "Connection", desc: "We connect multiple services from one door — No Wrong Door, warm referral, and follow-up." },
  { title: "Integrity", desc: "We say what we don't know. No exaggeration, no guarantees, no hidden costs." },
  { title: "Innovation", desc: "We test small, learn, and improve." },
  { title: "Stewardship", desc: "We responsibly manage money, information, relationships, and space." },
];

const roadmap = [
  { phase: "Phase 0", title: "Community Building", desc: "Building the founding committee, official brand, partner relationships, and first users." },
  { phase: "Phase 1", title: "Navigation Center", desc: "Operating a Korean-language Senior Navigation Desk with closed-loop referral. This is where KSLC is today." },
  { phase: "Phase 2", title: "Community Service Center", desc: "Expanding into day programs, wellness, education, and caregiver support." },
  { phase: "Phase 3", title: "Life Campus", desc: "Building a Korean Senior Life Campus where trust, navigation, programs, and partnerships come together in one place." },
];

export default function AboutPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/about" />
      <main id="main">
        <PageHero
          kicker="ABOUT KSLC"
          title="About KSLC"
          lead="We don't build the building first. We listen to one person's story, build trust, connect scattered services, and build a community that cares for one another."
        />

        <section className="purpose">
          <div className="shell purpose-grid">
            <div>
              <p className="section-kicker">OUR STORY</p>
              <h2>
                Community first,
                <br />
                campus second.
              </h2>
            </div>
            <div className="purpose-copy">
              <p className="purpose-lead">
                KSLC was founded to help Korean seniors keep the life opportunities they deserve,
                despite barriers of language, systems, health, housing, transportation, and isolation.
              </p>
              <p>
                We are not an organization that runs a single program. We are a community platform
                that connects public agencies, hospitals, churches, nonprofits, families, and
                volunteers around one person&apos;s life. When that community has grown enough, the
                Korean Senior Life Campus will be built — not as a building, but as a living promise.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--warm)" }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">THE CHALLENGE</p>
                <h2>Problems Korean seniors face — and KSLC&apos;s response</h2>
              </div>
            </div>
            <div className="card-grid cols-3">
              {problems.map((p) => (
                <div className="card" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <p style={{ marginTop: 14, color: "var(--navy)", fontWeight: 700 }}>→ {p.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell info-grid">
            <div>
              <p className="section-kicker">MISSION &amp; VISION</p>
              <h2>Vision &amp; Mission</h2>
            </div>
            <div className="purpose-copy">
              <p className="purpose-lead">Mission</p>
              <p>
                KSLC connects Korean seniors to Korean-language navigation and to health, public
                benefits, housing, caregiving, education, and social participation services, so they
                can live healthy, dignified, and meaningful lives.
              </p>
              <p className="purpose-lead">Vision</p>
              <p>
                To be the first place Korean seniors turn to — starting in Orange County and growing
                into a comprehensive Senior Life Campus representing the Korean community across
                North America.
              </p>
              <blockquote>Connecting health, building community, and leaving a legacy of hope for future generations.</blockquote>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--warm)" }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">CORE VALUES</p>
                <h2>Core Values</h2>
              </div>
            </div>
            <div className="card-grid cols-3">
              {values.map((v) => (
                <div className="card" key={v.title}>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">OUR JOURNEY</p>
                <h2>Community to Campus Roadmap</h2>
              </div>
              <p>We don&apos;t secure a facility first — we grow in order: trust → navigation → programs → community → campus.</p>
            </div>
            <div className="roadmap">
              {roadmap.map((r) => (
                <div className="roadmap-item" key={r.phase}>
                  <strong>{r.phase}</strong>
                  <p>
                    <strong style={{ color: "var(--navy)" }}>{r.title}</strong> — {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="shell">
            <div className="card" style={{ maxWidth: 640 }}>
              <h3>Curious about our leadership and organization?</h3>
              <p>Meet the board and founding leadership guiding KSLC.</p>
              <div style={{ marginTop: 20 }}>
                <Link className="button button-navy" href="/en/leadership">
                  View Leadership
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tight" style={{ paddingTop: 0 }}>
          <div className="shell">
            <div className="card" style={{ maxWidth: 640 }}>
              <h3>Official Organization Information</h3>
              <ul>
                <li>Official name: Korean Senior Life Campus (KSLC)</li>
                <li>Address: 6291 Homewood Ave., Buena Park, CA 90621</li>
                <li>Phone: 714-788-2002</li>
                <li>Email: info@kslcampus.org</li>
                <li>Service area: Orange County, California</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
