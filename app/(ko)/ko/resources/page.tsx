import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "자료실",
  description: "KSLC의 공식 소개자료, 브로슈어, 신청서와 설문지를 내려받으실 수 있습니다.",
};

const downloads = [
  {
    tag: "PDF · 국문",
    title: "KSLC 브로슈어 (국문)",
    desc: "KSLC의 비전과 Navigation Center 서비스를 한 장으로 정리한 소개 브로슈어입니다.",
    href: "/downloads/KSLC_Brochure_Korean.pdf",
  },
  {
    tag: "PDF · English",
    title: "KSLC Brochure (English)",
    desc: "A one-page English overview of KSLC's vision and Navigation Center services.",
    href: "/downloads/KSLC_Brochure_English.pdf",
  },
  {
    tag: "PPT · 국문",
    title: "서비스 이용자를 위한 Presentation (국문)",
    desc: "KSLC 서비스를 처음 접하시는 분을 위한 공식 발표자료입니다.",
    href: "/downloads/KSLC_Presentation_Korean.pptx",
  },
  {
    tag: "PPT · English",
    title: "Presentation for Service Users (English)",
    desc: "Official English presentation introducing KSLC services to new users.",
    href: "/downloads/KSLC_Presentation_English.pptx",
  },
  {
    tag: "PDF · 신청서",
    title: "상담지원 신청서",
    desc: "직접 작성해 방문 또는 우편으로 제출하실 수 있는 상담 신청 서식입니다.",
    href: "/downloads/KSLC_Consultation_Request_Form_KR.pdf",
  },
  {
    tag: "PDF · 신청서",
    title: "KSLC 회원등록 신청서",
    desc: "KSLC 회원으로 등록하실 때 작성하는 서식입니다.",
    href: "/downloads/KSLC_Membership_Application_KR.pdf",
  },
  {
    tag: "PDF · 설문지",
    title: "한인 시니어 필요도 조사 설문지",
    desc: "지역 한인 시니어의 필요를 파악하기 위한 설문지입니다. 작성해 주시면 서비스 개선에 반영됩니다.",
    href: "/downloads/KSLC_Senior_Needs_Survey_KR.pdf",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header lang="ko" currentPath="/resources" />
      <main id="main">
        <PageHero
          kicker="RESOURCES"
          title="자료실"
          lead="KSLC가 만든 자료 중 일반에 공개할 수 있는 안내서, 신청서, 공식 소개자료를 모았습니다."
        />

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">DOWNLOADS</p>
                <h2>공식 자료 다운로드</h2>
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
                    다운로드
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tight" style={{ paddingTop: 0 }}>
          <div className="shell">
            <div className="notice notice-info">
              내부 상담서식, Intake Form 원본, 직원용 상담자료, 개인정보가 포함된 자료는 공개
              자료실에 게시하지 않습니다. 작성하신 신청서에는 주민번호, 보험번호, 은행정보 등
              민감한 정보를 적지 마시고, 필요한 서류는 담당자 연락 후 안전한 절차로 제출해 주십시오.
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
