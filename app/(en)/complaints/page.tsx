import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact & Complaints",
  description: "How to submit a general inquiry or a complaint to KSLC, and how it's handled.",
};

export default function ComplaintsPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/complaints" />
      <main id="main">
        <PageHero kicker="LEGAL" title="Contact & Complaints" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">Last updated: August 2026</p>

            <h2>1. General Inquiries</h2>
            <p>
              General questions about KSLC services can be submitted through the inquiry form on our{" "}
              <a href="/contact">Contact &amp; Directions</a> page, by phone at (657) 239-0226, or by
              email at <a href="mailto:info@kslcampus.org">info@kslcampus.org</a>.
            </p>

            <h2>2. Filing a Complaint</h2>
            <p>If you experience an issue while using our services, please let us know using the contact information above. Including the following helps us respond effectively:</p>
            <ul>
              <li>Your contact information (phone or email)</li>
              <li>A description of when the issue occurred and what happened</li>
              <li>Your preferred resolution, if any (optional)</li>
            </ul>

            <h2>3. How Complaints Are Handled</h2>
            <ol>
              <li>Intake: We receive your complaint and confirm receipt.</li>
              <li>Review: A staff member reviews the situation and consults with relevant parties as needed.</li>
              <li>Response: We provide a resolution or status update within 5 business days.</li>
            </ol>

            <h2>4. Confidentiality</h2>
            <p>
              Information shared during the complaint process is used only for resolution purposes
              and is not disclosed beyond those involved.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
