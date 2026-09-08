import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the KSLC website collects, uses, and protects personal information.",
};

export default function PrivacyPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/privacy" />
      <main id="main">
        <PageHero kicker="LEGAL" title="Privacy Policy" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">Last updated: August 2026</p>

            <h2>1. Our Approach</h2>
            <p>
              Korean Senior Life Campus (KSLC) uses personal information collected through this
              website only to connect you with services and provide consultation. We do not share it
              with third parties without your consent.
            </p>

            <h2>2. Information We Collect</h2>
            <p>Through the consultation request form, institutional referral form, and general contact form, we may collect:</p>
            <ul>
              <li>Name, phone number, email</li>
              <li>Preferred language and best time to reach you</li>
              <li>The areas you'd like help with and your message</li>
              <li>For institutional contacts: organization name and staff contact information</li>
            </ul>

            <h2>3. Information We Do Not Collect</h2>
            <p>KSLC does not collect the following sensitive personal information through public web forms:</p>
            <ul>
              <li>Social Security numbers</li>
              <li>Medi-Cal/Medicare numbers, insurance member IDs</li>
              <li>Diagnosis reports or medical records</li>
              <li>Proof of income, bank information</li>
              <li>Photo ID, immigration documents, prescriptions</li>
              <li>Photos of health insurance cards</li>
            </ul>
            <p>
              This website is only a starting point for a consultation. Detailed intake and document
              review happens after a staff member contacts you, by phone, in person, or through
              another secure method.
            </p>

            <h2>4. How We Use Information</h2>
            <ul>
              <li>Responding to consultation requests and connecting you with services</li>
              <li>Reviewing and coordinating on institutional referral inquiries</li>
              <li>Responding to general inquiries</li>
              <li>Internal statistics and service improvement (de-identified)</li>
            </ul>

            <h2>5. Retention & Deletion</h2>
            <p>
              We retain collected information only as long as necessary to fulfill its purpose, and
              securely delete it afterward in accordance with applicable law.
            </p>

            <h2>6. Cookies & Analytics</h2>
            <p>
              We may use analytics tools to understand how the website is used. These tools do not
              identify individuals and are used solely to improve our services.
            </p>

            <h2>7. Contact</h2>
            <p>
              For questions about how we handle personal information, contact us at{" "}
              <a href="mailto:info@kslcampus.org">info@kslcampus.org</a> or (657) 239-0226.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
