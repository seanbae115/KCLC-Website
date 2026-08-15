import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Notice from "@/components/Notice";

export const metadata: Metadata = {
  title: "Emergency Information",
  description: "KSLC is not an emergency service. Emergency contact information.",
};

export default function EmergencyPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/emergency" />
      <main id="main">
        <PageHero kicker="IMPORTANT" title="Emergency Information" />
        <section className="section">
          <div className="shell prose">
            <Notice>
              <strong>The KSLC Navigation Center is not an emergency service.</strong> If there is a
              life-threatening or immediate safety issue, contact the numbers below right away —
              not the website or email.
            </Notice>

            <h2>Life-Threatening Emergency</h2>
            <p>
              Call 911 immediately. Fire, serious injury, loss of consciousness, difficulty
              breathing, and other life-threatening situations require an immediate 911 call.
            </p>

            <h2>Suspected Elder Abuse or Neglect</h2>
            <p>If you suspect elder abuse, neglect, or financial exploitation, report it to your local Adult Protective Services (APS).</p>

            <h2>Mental Health Crisis</h2>
            <p>
              For thoughts of suicide or a mental health crisis, contact the 988 Suicide &amp; Crisis
              Lifeline (call or text 988).
            </p>

            <h2>Need to Talk to KSLC?</h2>
            <p>
              If it's not an emergency but you need help, call the KSLC Navigation Center at
              714-788-2002 or use our <a href="/en/request">consultation request form</a>. KSLC
              responds within 1–2 business days.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
