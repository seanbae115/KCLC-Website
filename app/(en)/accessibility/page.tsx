import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "The accessibility goals and features of the KSLC website.",
};

export default function AccessibilityPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/accessibility" />
      <main id="main">
        <PageHero kicker="LEGAL" title="Accessibility" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">Last updated: August 2026</p>

            <h2>1. Our Accessibility Goal</h2>
            <p>
              The KSLC website is designed to target WCAG 2.2 AA accessibility, so that all visitors,
              including seniors, can use it comfortably.
            </p>

            <h2>2. Accessibility Features We've Built In</h2>
            <ul>
              <li>Body text around 18px on desktop, minimum 16px on mobile</li>
              <li>Buttons roughly 48px tall with generous touch targets</li>
              <li>Generous line spacing and strong color contrast</li>
              <li>A simple, consistent menu structure</li>
              <li>No autoplaying video or excessive animation</li>
              <li>No important text embedded inside images</li>
              <li>Phone numbers connect directly to a call when tapped</li>
              <li>Alt text on all meaningful images</li>
              <li>Menus and forms that are fully keyboard-navigable</li>
            </ul>

            <h2>3. An Ongoing Effort</h2>
            <p>
              We can't guarantee perfect accessibility, but KSLC is committed to continually
              reviewing and improving this website.
            </p>

            <h2>4. Reporting an Issue</h2>
            <p>
              If you encounter an accessibility problem while using this website, please let us know
              at <a href="mailto:info@kslcampus.org">info@kslcampus.org</a> or 714-788-2002. We'll
              review and address it promptly.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
