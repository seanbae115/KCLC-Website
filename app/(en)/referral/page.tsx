import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Notice from "@/components/Notice";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Institutional Referral",
  description: "A referral inquiry form for hospitals, city agencies, churches, and nonprofits to refer Korean seniors to KSLC.",
};

export default function ReferralPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/referral" />
      <main id="main">
        <PageHero
          kicker="INSTITUTIONAL REFERRAL"
          title="Institutional Referral"
          lead="In Phase 1, we operate a referral inquiry process rather than a formal medical referral form that submits sensitive information directly."
        />

        <section className="section">
          <div className="shell split-form">
            <div className="form-card">
              <ConsultationForm
                formType="referral"
                lang="en"
                submitLabel="Send Referral Inquiry"
              >
                <div className="form-grid">
                  <div className="field full">
                    <label htmlFor="org">Organization Name *</label>
                    <input type="text" id="org" name="organization" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contactName">Contact Name *</label>
                    <input type="text" id="contactName" name="contactName" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contactMethod">Preferred Contact Method</label>
                    <select id="contactMethod" name="preferredContact" defaultValue="Phone">
                      <option value="Phone">Phone</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="area">Referral Area *</label>
                    <input type="text" id="area" name="referralArea" placeholder="e.g. post-discharge support, housing, public benefits" required />
                  </div>
                  <div className="field full">
                    <label htmlFor="notes">General Inquiry *</label>
                    <textarea id="notes" name="inquiry" required />
                  </div>
                </div>
              </ConsultationForm>
            </div>
            <div className="form-side">
              <Notice>
                <strong>Important</strong>
                <br />
                Please do not enter or attach medical records, Social Security numbers, insurance
                numbers, diagnosis reports, or other sensitive personal information in this form. A
                KSLC staff member will contact you to arrange a safe referral method.
              </Notice>
              <div className="card">
                <h3>Looking for a partner organization?</h3>
                <p>We partner with hospitals, city/county agencies, foundations, churches, nonprofits, senior centers, and colleges.</p>
                <a href="/partnership#institutions" style={{ color: "var(--navy)", fontWeight: 700 }}>
                  See Get Involved →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
