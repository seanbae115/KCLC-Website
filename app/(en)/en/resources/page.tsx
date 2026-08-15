import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Resources",
  description: "Download KSLC's official presentation materials, guides, and consultation prep checklist.",
};

const downloads = [
  {
    tag: "PPT · English",
    title: "KSLC Official Presentation (English)",
    desc: "Official English-language overview of KSLC's vision, mission, and Navigation Center services.",
    href: "/downloads/KSLC_Official_Presentation_English_v2.0.pptx",
  },
  {
    tag: "PPT · Korean",
    title: "KSLC 공식 소개자료 (Korean)",
    desc: "Official Korean-language presentation covering KSLC's vision, mission, core values, and services.",
    href: "/downloads/KSLC_Official_Presentation_Korean_v2.0.pptx",
  },
];

export default function ResourcesPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/resources" />
      <main id="main">
        <PageHero
          kicker="RESOURCES"
          title="Resources"
          lead="A collection of guides and official materials from KSLC that are appropriate for public release."
        />

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">DOWNLOADS</p>
                <h2>Official Downloads</h2>
              </div>
            </div>
            <div className="download-list">
              {downloads.map((d) => (
                <div className="download-item" key={d.href}>
                  <div>
                    <span className="download-tag">{d.tag}</span>
                    <h3>{d.title}</h3>
                    <p>{d.desc}</p>
                  </div>
                  <a className="button button-navy" href={d.href} download>
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tight" style={{ paddingTop: 0 }}>
          <div className="shell">
            <div className="notice notice-info">
              Internal intake forms, staff-only materials, and documents containing personal
              information are not published in the public resource library. Usage guides, a
              consultation prep checklist, service brochures, senior policy briefs, benefits
              guides, housing resources, and event materials will be added here over time.
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
