import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "자료실",
  description: "KSLC의 공식 소개자료, 이용 안내서, 상담 준비 체크리스트를 내려받으실 수 있습니다.",
};

const downloads = [
  {
    tag: "PDF · 국문",
    title: "KSLC 공식 소개자료 (국문)",
    desc: "KSLC의 비전, 미션, 핵심가치와 Navigation Center 서비스를 담은 공식 발표자료입니다.",
    href: "/downloads/KSLC_Official_Presentation_Korean_v2.0.pptx",
  },
  {
    tag: "PPT · English",
    title: "KSLC Official Presentation (English)",
    desc: "Official English-language overview of KSLC's vision, mission, and Navigation Center services.",
    href: "/downloads/KSLC_Official_Presentation_English_v2.0.pptx",
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
          lead="KSLC가 만든 자료 중 일반에 공개할 수 있는 안내서와 공식 소개자료를 모았습니다."
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
              자료실에 게시하지 않습니다. 향후 이용 안내서, 상담 준비 체크리스트, 서비스 안내자료,
              시니어 정책 브리핑, 공공혜택 안내, 주거자료, 행사자료가 이곳에 추가될 예정입니다.
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
