import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Notice from "@/components/Notice";
import FormspreeForm from "@/components/FormspreeForm";
import { FORMSPREE_ENDPOINT } from "@/lib/forms";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description: "Request a KSLC consultation. We ask for only the minimum information, and respond within 1–2 business days.",
};

const helpAreas = ["Health & medical", "Insurance & public benefits", "IHSS & caregiving", "Housing", "Transportation & daily living", "Other"];

export default function RequestPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/request" />
      <main id="main">
        <PageHero
          kicker="REQUEST A CONSULTATION"
          title="Request a Consultation"
          lead="This form asks for only the minimum information. You can request a consultation even without any documents."
        />

        <section className="section">
          <div className="shell split-form">
            <div className="form-card">
              <FormspreeForm
                action={FORMSPREE_ENDPOINT}
                redirectTo="/thank-you?form=request"
                subject="[KSLC] Consultation Request"
                errorMessage="Something went wrong submitting this. Please try again shortly, or call us instead."
              >
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="name">Name *</label>
                    <input type="text" id="name" name="Name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="Phone" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">
                      Email <span className="hint">(optional)</span>
                    </label>
                    <input type="email" id="email" name="Email" />
                  </div>
                  <div className="field">
                    <label htmlFor="lang">Preferred Language *</label>
                    <select id="lang" name="Preferred Language" required defaultValue="">
                      <option value="" disabled>
                        Please select
                      </option>
                      <option value="한국어">Korean</option>
                      <option value="English">English</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="time">Safe Time to Contact You</label>
                    <input type="text" id="time" name="Best Time" placeholder="e.g. weekday mornings, weekday afternoons" />
                  </div>
                  <fieldset className="field full">
                    <legend>Are You the Senior, a Family Member, or an Agency? *</legend>
                    <div className="radio-row">
                      {["Myself", "Family member", "Agency staff"].map((r) => (
                        <label className="radio-item" key={r}>
                          <input type="radio" name="Relationship" value={r} required />
                          {r}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset className="field full">
                    <legend>What Areas Do You Need Help With? *</legend>
                    <div className="check-grid">
                      {helpAreas.map((a) => (
                        <label className="check-item" key={a}>
                          <input type="checkbox" name="Help Areas" value={a} />
                          {a}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="field full">
                    <label htmlFor="notes">
                      Anything Else You&apos;d Like to Share <span className="hint">(optional)</span>
                    </label>
                    <textarea id="notes" name="Notes" />
                  </div>
                  <div className="field full">
                    <label className="check-item">
                      <input type="checkbox" name="Consent" value="Agreed" required />
                      I agree that KSLC may contact me at the information above. *
                    </label>
                  </div>
                </div>
                <div className="form-actions">
                  <button type="submit" className="button button-gold">
                    Send Consultation Request
                  </button>
                </div>
                <p className="form-consent">
                  Please do not enter medical records, Social Security numbers, insurance numbers, or
                  other sensitive personal information in this form. Information you submit is used
                  only to connect you with services, in accordance with our{" "}
                  <a href="/privacy">Privacy Policy</a>.
                </p>
              </FormspreeForm>
            </div>
            <div className="form-side">
              <Notice>
                <strong>What happens next</strong>
                <br />
                Once your request is received, a KSLC staff member will contact you within 1–2
                business days. For urgent medical or safety issues, call 911 or the appropriate
                emergency service.
              </Notice>
              <div className="card">
                <h3>Prefer to call right away?</h3>
                <p>
                  <a href="tel:+17147882002" style={{ color: "var(--navy)", fontWeight: 700 }}>
                    714-788-2002
                  </a>
                </p>
                <p>Weekdays 9:00 AM – 5:00 PM</p>
              </div>
              <div className="card">
                <h3>Referring on behalf of an institution?</h3>
                <p>Hospitals and agency staff should use our separate institutional referral form.</p>
                <a href="/referral" style={{ color: "var(--navy)", fontWeight: 700 }}>
                  Institutional Referral Inquiry →
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
