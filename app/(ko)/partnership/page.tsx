import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "참여·협력",
  description: "병원·시청·재단·교회·비영리단체와의 기관 파트너십, 자원봉사, 후원 방법을 안내합니다.",
};

const partners = ["병원", "시청·카운티", "재단", "교회", "비영리단체", "시니어센터", "대학·교육기관"];
const volunteerRoles = ["상담지원", "통역", "행정", "디지털 교육", "친교·방문", "전문자문"];
const givingOptions = [
  { title: "창립후원", desc: "KSLC의 시작을 함께 세우는 후원입니다." },
  { title: "정기후원", desc: "매달 또는 매년 정기적으로 후원해 주세요." },
  { title: "프로그램 후원", desc: "특정 서비스 영역을 지정해 후원할 수 있습니다." },
  { title: "기업후원", desc: "기업·단체 차원의 파트너십 후원을 환영합니다." },
  { title: "물품·공간 지원", desc: "물품 기부나 공간 지원(In-kind)도 큰 힘이 됩니다." },
];

export default function PartnershipPage() {
  return (
    <>
      <Header lang="ko" currentPath="/partnership" />
      <main id="main">
        <PageHero
          kicker="GET INVOLVED"
          title="참여·협력"
          lead="병원, 시정부, 재단, 교회와 비영리단체가 각자의 전문성을 유지하면서 시니어 중심의 연결 체계를 함께 만들어 갑니다."
        />

        <section className="section" id="institutions">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">INSTITUTIONAL PARTNERSHIP</p>
                <h2>기관 파트너십</h2>
              </div>
              <p>기관을 대표해 협력을 논의하고 싶으시다면 기관 의뢰 문의폼을 이용해 주세요.</p>
            </div>
            <ul className="info-list plain" style={{ columns: 2, gap: 40 }}>
              {partners.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div style={{ marginTop: 28 }}>
              <Link className="button button-navy" href="/referral">
                기관 의뢰 문의하기
              </Link>
            </div>
          </div>
        </section>

        <section className="section" id="volunteer" style={{ background: "var(--warm)" }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">VOLUNTEER</p>
                <h2>자원봉사</h2>
              </div>
              <p>아래 영역에서 자원봉사자를 모십니다. 관심 있는 영역을 문의해 주세요.</p>
            </div>
            <div className="card-grid cols-3">
              {volunteerRoles.map((v) => (
                <div className="card" key={v}>
                  <h3>{v}</h3>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <Link className="button button-outline" href="/contact">
                자원봉사 문의하기
              </Link>
            </div>
          </div>
        </section>

        <section className="section" id="donate">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">DONATE</p>
                <h2>후원</h2>
              </div>
            </div>
            <div className="card-grid cols-3">
              {givingOptions.map((g) => (
                <div className="card" key={g.title}>
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                </div>
              ))}
            </div>
            <div className="notice notice-info" style={{ marginTop: 28 }}>
              초기에는 온라인 후원 결제 시스템을 바로 구축하지 않고 후원 문의로 시작합니다. 후원을
              원하시면 아래 문의하기 버튼으로 연락해 주시면 담당자가 안내해 드립니다.
            </div>
            <div style={{ marginTop: 20 }}>
              <Link className="button button-gold" href="/contact">
                후원 문의하기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
