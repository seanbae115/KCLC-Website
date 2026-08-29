import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Partner with KSLC as a hospital, city, foundation, church, or nonprofit — or get involved as a volunteer or donor.",
};

const partners = ["Hospitals", "City & county government", "Foundations", "Churches", "Nonprofits", "Senior centers", "Colleges & universities"];
const volunteerRoles = ["Consultation support", "Interpretation", "Administration", "Digital literacy training", "Fellowship & visitation", "Professional advising"];
const givingOptions = [
  { title: "Founding Gift", desc: "Help build KSLC's very beginning." },
  { title: "Recurring Gift", desc: "Give monthly or annually on an ongoing basis." },
  { title: "Program Sponsorship", desc: "Designate your gift to a specific service area." },
  { title: "Corporate Sponsorship", desc: "We welcome company- and organization-level partnerships." },
  { title: "In-Kind Support", desc: "Donated goods or space also make a big difference." },
];

export default function PartnershipPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/partnership" />
      <main id="main">
        <PageHero
          kicker="GET INVOLVED"
          title="Get Involved"
          lead="Hospitals, city government, foundations, churches, and nonprofits each keep their own expertise while we build a senior-centered connection system together."
        />

        <section className="section" id="institutions">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">INSTITUTIONAL PARTNERSHIP</p>
                <h2>Institutional Partnership</h2>
              </div>
              <p>If you represent an institution and want to discuss a partnership, please use the institutional referral form.</p>
            </div>
            <ul className="info-list plain" style={{ columns: 2, gap: 40 }}>
              {partners.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div style={{ marginTop: 28 }}>
              <Link className="button button-navy" href="/referral">
                Institutional Referral Inquiry
              </Link>
            </div>
          </div>
        </section>

        <section className="section" id="volunteer" style={{ background: "var(--warm)" }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">VOLUNTEER</p>
                <h2>Volunteer</h2>
              </div>
              <p>We're recruiting volunteers in the areas below. Let us know which area interests you.</p>
            </div>
            <div className="card-grid cols-3">
              {volunteerRoles.map((v) => (
                <div className="card" key={v}>
                  <h3>{v}</h3>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <Link className="button button-outline" href="/contact">
                Volunteer Inquiry
              </Link>
            </div>
          </div>
        </section>

        <section className="section" id="donate">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">DONATE</p>
                <h2>Donate</h2>
              </div>
            </div>
            <div className="card-grid cols-3">
              {givingOptions.map((g) => (
                <div className="card" key={g.title}>
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                </div>
              ))}
            </div>
            <div className="notice notice-info" style={{ marginTop: 28 }}>
              We're starting with donation inquiries rather than an online payment system. If you'd
              like to give, please reach out using the button below and a staff member will guide
              you through it.
            </div>
            <div style={{ marginTop: 20 }}>
              <Link className="button button-gold" href="/contact">
                Donation Inquiry
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
