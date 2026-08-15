import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Non-Discrimination Notice",
  description: "KSLC's non-discrimination policy.",
};

export default function NondiscriminationPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/nondiscrimination" />
      <main id="main">
        <PageHero kicker="LEGAL" title="Non-Discrimination Notice" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">Last updated: August 2026</p>

            <h2>Our Policy</h2>
            <p>
              Korean Senior Life Campus (KSLC) serves all individuals regardless of race, color,
              national origin, age, disability, sex, sexual orientation, religion, marital status, or
              immigration status.
            </p>
            <p>
              While KSLC primarily focuses its outreach on Korean seniors and their families, anyone
              in need of assistance may request a consultation without discrimination.
            </p>

            <h2>Reporting a Concern</h2>
            <p>
              If you feel you have experienced discrimination while using KSLC's services, please let
              us know at <a href="mailto:info@kslcampus.org">info@kslcampus.org</a> or 714-788-2002.
              Every report is carefully reviewed.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
