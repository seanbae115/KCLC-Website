import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Navigation Center",
  description: "KSLC Navigation Center의 역할, No Wrong Door 방식, 이용 대상과 서비스지역을 안내합니다.",
};

const features = [
  { title: "No Wrong Door", desc: "어떤 문제로 문의하셔도 맞는 곳까지 함께 찾아갑니다. 잘못된 문을 두드렸다고 걱정하지 마세요." },
  { title: "한국어 중심 상담", desc: "번역이 아니라 처음부터 한국어로 상담합니다. 필요 시 영어 지원도 가능합니다." },
  { title: "Closed-Loop Referral", desc: "기관을 소개하는 데서 끝내지 않고, 실제로 연결되었는지 다시 확인합니다." },
  { title: "한 사람 중심 Navigation", desc: "Intake → Assessment → Action Plan → Referral → Follow-up 과정을 함께 걷습니다." },
];

const principles = [
  { title: "사람 전체를 봅니다.", desc: "한 가지 문제만 처리하지 않고 주거·건강·보험·식사·교통·돌봄·사회적 관계·안전을 함께 살핍니다." },
  { title: "실제 연결될 때까지 돕습니다.", desc: "전화번호만 제공하지 않습니다. 이용자의 동의를 받아 필요한 기관과 연결하고, 필요하면 함께 연락하는 '동행형 연계'를 실시합니다." },
  { title: "결과를 끝까지 확인합니다.", desc: "3일·14일·30일 후속관리를 통해 기관 연결, 실제 서비스 이용, 문제 개선 여부를 확인하고 필요하면 다시 평가합니다." },
  { title: "시니어의 선택과 동의를 존중합니다.", desc: "KSLC가 대신 결정하지 않습니다. 충분히 설명하고 이용자의 선택과 동의를 바탕으로 실행계획을 함께 결정합니다." },
  { title: "변화된 삶을 측정합니다.", desc: "상담 건수보다 실제 서비스 연결, 혜택 유지, 주거 안정, 의료 접근, 문제 해결과 같은 결과를 성과로 기록합니다." },
];

export default function NavigationCenterPage() {
  return (
    <>
      <Header lang="ko" currentPath="/navigation-center" />
      <main id="main">
        <PageHero
          kicker="NAVIGATION CENTER"
          title="정보를 찾는 데서 끝나지 않습니다."
          lead="필요한 서비스에 실제로 연결될 때까지, KSLC Navigation Center가 함께합니다."
        />

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">WHAT IT IS</p>
                <h2>Navigation Center란 무엇인가</h2>
              </div>
            </div>
            <div className="card-grid cols-4">
              {features.map((f) => (
                <div className="card" key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process section" id="principles">
          <div className="shell process-grid">
            <div className="process-intro">
              <p className="section-kicker light">OFFICIAL DECLARATION</p>
              <h2>
                KSLC 사례관리
                <br />
                5대 운영원칙
              </h2>
              <p>
                KSLC는 시니어의 문제를 단순히 안내하는 데서 끝내지 않습니다. 필요를 발견하고, 함께
                계획하고, 실제 서비스로 연결하며, 그 결과까지 확인합니다.
              </p>
            </div>
            <div className="steps">
              {principles.map((p, i) => (
                <article className="step" key={p.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="shell" style={{ marginTop: 56, textAlign: "center" }}>
            <p style={{ color: "var(--gold-light)", fontWeight: 700, letterSpacing: ".01em", fontSize: 15 }}>
              발견하고 → 함께 계획하고 → 연결하고 → 확인하고 → 결과를 남긴다
            </p>
            <p style={{ marginTop: 22, color: "white", fontFamily: "Georgia, serif", fontSize: 21, fontStyle: "italic", maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
              &ldquo;우리는 상담 건수를 자랑하지 않습니다. 우리는 변화된 삶의 수를 측정합니다.&rdquo;
            </p>
          </div>
        </section>

        <section className="section" style={{ background: "var(--warm)" }}>
          <div className="shell info-grid">
            <div>
              <p className="section-kicker">WHO WE SERVE</p>
              <h2>이용 대상과 서비스지역</h2>
            </div>
            <ul className="info-list plain">
              <li>이용 대상: Orange County 거주 한인 시니어와 가족, 보호자</li>
              <li>서비스지역: Orange County, California (Fullerton · Buena Park · Anaheim 중심)</li>
              <li>언어 지원: 한국어, 영어</li>
              <li>상담 비용: 무료</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">SCOPE</p>
                <h2>제공하지 않는 서비스</h2>
              </div>
            </div>
            <div className="notice">
              KSLC는 의료 진단·치료, 보험 판매, 법률 의견, 주택 배정·승인을 직접 제공하거나 보장하지
              않습니다. 전문 판단이 필요한 경우 적절한 면허기관과 공식 담당기관으로 연결해 드립니다.
            </div>
            <div className="notice notice-info" style={{ marginTop: 16 }}>
              <strong>응급상황이신가요?</strong> 생명이 위급하거나 즉각적인 안전 문제가 있다면 즉시
              911에 연락하십시오. <Link href="/emergency">긴급상황 안내 보기 →</Link>
            </div>
          </div>
        </section>

        <section className="section-tight">
          <div className="shell">
            <div className="card-grid cols-2">
              <div className="card">
                <h3>이용 절차가 궁금하신가요?</h3>
                <p>상담 요청부터 결과 확인까지 다섯 단계를 안내합니다.</p>
                <div style={{ marginTop: 20 }}>
                  <Link className="button button-navy" href="/process">
                    이용 절차 보기
                  </Link>
                </div>
              </div>
              <div className="card">
                <h3>상담을 준비 중이신가요?</h3>
                <p>상담 전 무엇을 준비하면 좋은지 미리 확인하세요.</p>
                <div style={{ marginTop: 20 }}>
                  <Link className="button button-outline" href="/consultation-prep">
                    상담 준비 안내
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
