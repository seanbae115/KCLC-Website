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
    tag: "PDF · English",
    title: "KSLC Brochure (English)",
    desc: "A one-page English overview of KSLC's vision and Navigation Center services.",
    href: "/downloads/KSLC_Brochure_English.pdf",
  },
  {
    tag: "PDF · Korean",
    title: "KSLC 브로슈어 (Korean)",
    desc: "A one-page Korean-language introduction to KSLC's vision and Navigation Center services.",
    href: "/downloads/KSLC_Brochure_Korean.pdf",
  },
  {
    tag: "PPT · English",
    title: "Presentation for Service Users (English)",
    desc: "Official English presentation introducing KSLC services to new users.",
    href: "/downloads/KSLC_Presentation_English.pptx",
  },
  {
    tag: "PPT · Korean",
    title: "서비스 이용자를 위한 Presentation (Korean)",
    desc: "Official Korean presentation introducing KSLC services to new users.",
    href: "/downloads/KSLC_Presentation_Korean.pptx",
  },
  {
    tag: "PDF · Form",
    title: "Consultation Request Form (Korean)",
    desc: "A printable consultation request form you can fill out and submit in person or by mail.",
    href: "/downloads/KSLC_Consultation_Request_Form_KR.pdf",
  },
  {
    tag: "PDF · Form",
    title: "KSLC Membership Application (Korean)",
    desc: "The form used to register as a KSLC member.",
    href: "/downloads/KSLC_Membership_Application_KR.pdf",
  },
  {
    tag: "PDF · Survey",
    title: "Korean Senior Needs Survey (Korean)",
    desc: "A survey to understand the needs of Korean seniors locally. Your responses help shape our services.",
    href: "/downloads/KSLC_Senior_Needs_Survey_KR.pdf",
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
              information are not published in the public resource library. When filling out a form,
              please do not write down Social Security numbers, insurance numbers, or bank details —
              submit any required documents through a secure process after speaking with our staff.
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
