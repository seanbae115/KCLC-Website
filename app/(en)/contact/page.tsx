import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FormspreeForm from "@/components/FormspreeForm";
import { FORMSPREE_ENDPOINT } from "@/lib/forms";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: "KSLC address, phone, email, hours, directions, and a general inquiry form.",
};

export default function ContactPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/contact" />
      <main id="main">
        <PageHero kicker="CONTACT" title="Contact & Directions" lead="If you have any questions, please reach out anytime." />

        <section className="section">
          <div className="shell split-info">
            <div>
              <div className="card" style={{ marginBottom: 24 }}>
                <h3>Contact Information</h3>
                <ul>
                  <li>Address: 7342 Orangethorpe Ave, #B-109, Buena Park, CA 90621</li>
                  <li>
                    Phone: <a href="tel:+16572390226">(657) 239-0226</a>
                  </li>
                  <li>
                    Email: <a href="mailto:info@kslcampus.org">info@kslcampus.org</a>
                  </li>
                  <li>Hours: Weekdays 9:00 AM – 5:00 PM</li>
                  <li>Appointments are recommended.</li>
                </ul>
              </div>
              <div className="card">
                <h3>Transit & Parking</h3>
                <p>Call ahead for parking guidance before your visit. For public transit, please contact our office.</p>
              </div>
              <div className="notice notice-info" style={{ marginTop: 24 }}>
                <strong>In an emergency?</strong> If there is a life-threatening emergency, call 911
                immediately. <a href="/emergency">See emergency information →</a>
              </div>
            </div>

            <div>
              <iframe
                className="map-frame"
                title="KSLC Location Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=7342+Orangethorpe+Ave,+%23B-109,+Buena+Park,+CA+90621&output=embed"
              />
              <div className="form-card" style={{ marginTop: 30 }}>
                <h3 style={{ color: "var(--navy)", marginTop: 0 }}>General Inquiry</h3>
                <FormspreeForm
                  action={FORMSPREE_ENDPOINT}
                  redirectTo="/thank-you?form=contact"
                  subject="[KSLC] General Inquiry"
                  lang="en"
                  submitLabel="Send Message"
                  submitVariant="button-navy"
                >
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="name">Name *</label>
                      <input type="text" id="name" name="Name" required />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" name="Email" required />
                    </div>
                    <div className="field full">
                      <label htmlFor="phone">
                        Phone Number <span className="hint">(optional)</span>
                      </label>
                      <input type="tel" id="phone" name="Phone" />
                    </div>
                    <div className="field full">
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" name="Message" required />
                    </div>
                  </div>
                </FormspreeForm>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
