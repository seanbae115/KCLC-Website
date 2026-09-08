import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceFaq from "@/components/ServiceFaq";
import { serviceDetailsEn } from "@/lib/serviceDetails.en";
import { VERIFIED_ON } from "@/lib/serviceDetails";

export const metadata: Metadata = {
  title: "Services",
  description:
    "KSLC's five service areas: insurance and public benefits, IHSS and family caregiving, housing navigation, transportation and daily living, and connecting with local resources.",
};

const services = [
  {
    number: "01",
    title: "Insurance & Public Benefits",
    href: "#benefits",
    items: ["Medi-Cal", "Medicare", "SSI/SSA", "CalFresh", "Utility & living assistance"],
  },
  {
    number: "02",
    title: "IHSS & Family Caregiving",
    href: "#ihss",
    items: ["IHSS information", "Family caregiver support", "Adult day care", "In-home services", "Long-term care options"],
  },
  {
    number: "03",
    title: "Housing Navigation",
    href: "#housing",
    items: ["Senior apartments", "Affordable housing", "Rent burden support", "Eviction prevention", "Housing stability resources"],
  },
  {
    number: "04",
    title: "Transportation & Daily Living",
    href: "#transportation",
    items: ["Medical transportation", "Meal support", "Preventing social isolation", "Digital access", "Local programs"],
  },
  {
    number: "05",
    title: "Connecting with Local Resources",
    href: "#community",
    items: ["Mental health & family counseling", "Churches & nonprofits", "County/city services", "Specialist referrals"],
  },
];

export default function ServicesPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/services" />
      <main id="main">
        <PageHero
          kicker="SERVICES"
          title="Services"
          lead="Even if you come in with one concern, we look at the whole picture of what your life needs. Common questions for each area are answered below."
        />

        <section className="services section">
          <div className="shell">
            <div className="card-grid cols-3">
              {services.map((s) => (
                <div className="service-card" key={s.number} style={{ border: "1px solid #cbd0d3" }}>
                  <span className="service-number">{s.number}</span>
                  <h3>
                    <a href={s.href} style={{ color: "inherit" }}>
                      {s.title}
                    </a>
                  </h3>
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
              legal opinions, or approve or assign housing. Where professional judgment is required, we
              refer to the appropriate licensed or official agency.
            </p>
          </div>
        </section>

        <section className="section" style={{ background: "var(--warm)" }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">SERVICE DETAILS</p>
                <h2>Detailed guidance by service</h2>
              </div>
              <p>
                Public program rules change often. The information below is accurate as of the
                verification date shown, and eligibility and approval are decided by the relevant agency.
              </p>
            </div>
            {serviceDetailsEn.map((d) => (
              <ServiceFaq key={d.id} detail={d} lang="en" verifiedOn={VERIFIED_ON.en} />
            ))}
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
