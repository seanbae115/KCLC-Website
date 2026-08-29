import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description: "Health & medical, insurance & benefits, IHSS & family caregiving, housing, transportation, and legal & community resources — KSLC's six service areas.",
};

const services = [
  { number: "01", title: "Health & Medical Navigation", items: ["Primary/specialty care connections", "Hospital scheduling", "Post-discharge support", "Medical transportation", "Preventive care guidance"] },
  { number: "02", title: "Insurance & Public Benefits", items: ["Medi-Cal", "Medicare", "SSI/SSA", "CalFresh", "Utility & living assistance"] },
  { number: "03", title: "IHSS & Family Caregiving", items: ["IHSS information", "Family caregiver support", "Adult day care", "In-home services", "Long-term care options"] },
  { number: "04", title: "Housing Navigation", items: ["Senior apartments", "Affordable housing", "Rent burden support", "Eviction prevention", "Housing stability resources"] },
  { number: "05", title: "Transportation & Daily Living", items: ["Medical transportation", "Meal support", "Preventing social isolation", "Digital access", "Local programs"] },
  { number: "06", title: "Legal & Community Resources", items: ["Legal aid organizations", "Citizenship/immigration information", "Churches & nonprofits", "County/city services", "Specialist referrals"] },
];

export default function ServicesPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/services" />
      <main id="main">
        <PageHero
          kicker="SERVICES"
          title="Services"
          lead="Even if you come in with one concern, we look at the whole picture. Initially, each area is presented on a single page."
        />

        <section className="services section">
          <div className="shell">
            <div className="card-grid cols-3">
              {services.map((s) => (
                <div className="service-card" key={s.number} style={{ border: "1px solid #cbd0d3" }}>
                  <span className="service-number">{s.number}</span>
                  <h3>{s.title}</h3>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="service-boundary">
              KSLC does not provide or guarantee medical diagnosis or treatment, sell insurance, give
              legal opinions, or approve or assign housing. Where professional judgment is required,
              we refer to the appropriate licensed or official agency.
            </p>
          </div>
        </section>

        <section className="section-tight">
          <div className="shell" style={{ textAlign: "center" }}>
            <Link className="button button-gold" href="/request">
              Request a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
