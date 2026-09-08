import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Notice from "@/components/Notice";
import EmergencyContacts, { emergencyWarning } from "@/components/EmergencyContacts";

export const metadata: Metadata = {
  title: "Emergency Contacts",
  description: "KSLC is not an emergency service. Here is who to contact first, by situation.",
};

export default function EmergencyPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/emergency" />
      <main id="main">
        <PageHero kicker="IMPORTANT" title="Emergency Contacts" />
        <section className="section">
          <div className="shell prose">
            <Notice className="emergency-warning">
              <strong>The KSLC Navigation Center is not an emergency service.</strong>
              <br />
              {emergencyWarning.en}
            </Notice>

            <h2>Who to contact, by situation</h2>
            <EmergencyContacts lang="en" />

            <h2>If you need a KSLC consultation</h2>
            <p>
              If this is not an emergency but you need help, call the KSLC Navigation Center at{" "}
              <a href="tel:+16572390226">(657) 239-0226</a> or use our{" "}
              <a href="/request">consultation request form</a>. KSLC responds within 1–2 business days.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
