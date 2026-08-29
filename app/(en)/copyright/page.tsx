import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Copyright Notice",
  description: "Copyright notice for the KSLC website.",
};

export default function CopyrightPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/copyright" />
      <main id="main">
        <PageHero kicker="LEGAL" title="Copyright Notice" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">Last updated: August 2026</p>
            <h2>Copyright</h2>
            <p>
              © 2026 Korean Senior Life Campus. All rights reserved. Unless otherwise noted, all
              text, images, logos, and materials published on this website are the property of KSLC
              and are protected under applicable law.
            </p>
            <h2>Usage Restrictions</h2>
            <p>
              Content on this website may not be reproduced, distributed, transmitted, published, or
              used commercially without prior written consent. Personal, non-commercial viewing and
              quotation with attribution is permitted.
            </p>
            <h2>Contact</h2>
            <p>
              For copyright-related questions, contact <a href="mailto:info@kslcampus.org">info@kslcampus.org</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
