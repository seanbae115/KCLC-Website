import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Notice from "@/components/Notice";
import { FORMSPREE } from "@/lib/forms";

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
          <div className="shell" style={{ display: "grid", gridTemplateColumns: "1.4fr .8fr", gap: 50 }}>
            <div className="form-card">
              <form action={FORMSPREE.referral} method="POST">
                <input type="hidden" name="_next" value="https://www.kslcampus.org/en/thank-you?form=referral" />
                <input type="hidden" name="_subject" value="[KSLC] Institutional Referral Inquiry" />
                <div className="form-grid">
                  <div className="field full">
                    <label htmlFor="org">Organization Name *</label>
                    <input type="text" id="org" name="Organization" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contactName">Contact Name *</label>
                    <input type="text" id="contactName" name="Contact Name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="Phone" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="Email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contactMethod">Preferred Contact Method</label>
                    <select id="contactMethod" name="Preferred Contact" defaultValue="Phone">
                      <option value="Phone">Phone</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="area">Referral Area *</label>
                    <input type="text" id="area" name="Referral Area" placeholder="e.g. post-discharge support, housing, public benefits" required />
                  </div>
                  <div className="field full">
                    <label htmlFor="notes">General Inquiry *</label>
                    <textarea id="notes" name="Inquiry" required />
                  </div>
                </div>
                <div className="form-actions">
                  <button type="submit" className="button button-gold">
                    Send Referral Inquiry
                  </button>
                </div>
              </form>
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
                <a href="/en/partnership#institutions" style={{ color: "var(--navy)", fontWeight: 700 }}>
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
