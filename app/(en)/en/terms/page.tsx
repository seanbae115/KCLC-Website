import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the KSLC website.",
};

export default function TermsPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/terms" />
      <main id="main">
        <PageHero kicker="LEGAL" title="Terms of Use" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">Last updated: August 2026</p>

            <h2>1. Purpose of This Website</h2>
            <p>
              This website provides information about Korean Senior Life Campus (KSLC) and the KSLC
              Navigation Center, and accepts consultation requests and institutional referral
              inquiries.
            </p>

            <h2>2. Nature of Our Services</h2>
            <p>
              A consultation request or inquiry submitted through this website is only a starting
              point and does not itself constitute the provision of medical, legal, or financial
              services. KSLC does not provide or guarantee medical diagnosis or treatment, sell
              insurance, give legal opinions, or approve or assign housing. Where professional
              judgment is required, we refer to the appropriate licensed or official agency.
            </p>

            <h2>3. Accuracy of Content</h2>
            <p>
              KSLC works to keep the information on this website accurate, but public benefit
              programs and policies change frequently. Please confirm details specific to your
              situation with a staff member during a consultation.
            </p>

            <h2>4. Using the Website</h2>
            <ul>
              <li>Content on this website may not be reproduced, distributed, or used commercially without permission.</li>
              <li>Interfering with the normal operation of the website is prohibited.</li>
              <li>Please provide accurate information in any inquiry form.</li>
            </ul>

            <h2>5. External Links</h2>
            <p>
              This website may link to external websites belonging to public agencies, hospitals, and
              partner organizations. KSLC is not responsible for the content of external websites.
            </p>

            <h2>6. Changes to These Terms</h2>
            <p>These terms may be updated to reflect how our services operate; updates will be posted on this page.</p>

            <h2>7. Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:info@kslcampus.org">info@kslcampus.org</a> or 714-788-2002.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
