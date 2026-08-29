import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Photo & Content Use Policy",
  description: "The usage policy for photos and content on the KSLC website.",
};

export default function MediaPolicyPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/media-policy" />
      <main id="main">
        <PageHero kicker="LEGAL" title="Photo & Content Use Policy" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">Last updated: August 2026</p>

            <h2>1. Photo Consent</h2>
            <p>
              Real photos of Korean seniors, families, volunteers, leadership, and partnership events
              used on this website and in promotional materials are published only after obtaining
              consent from the individuals photographed for website and promotional use.
            </p>

            <h2>2. Copyright & Attribution</h2>
            <p>
              Photos, logos, and documents published on this website are either owned by KSLC or used
              with proper authorization. They may not be reproduced, distributed, or used commercially
              without prior written consent.
            </p>

            <h2>3. Logo Use</h2>
            <p>
              The official KSLC logo may only be used according to the approved brand guide. Changing
              the logo's proportions or colors, or separating or rearranging its elements, is not
              permitted.
            </p>

            <h2>4. Contact</h2>
            <p>
              For questions about using photos or content, contact us at{" "}
              <a href="mailto:info@kslcampus.org">info@kslcampus.org</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
