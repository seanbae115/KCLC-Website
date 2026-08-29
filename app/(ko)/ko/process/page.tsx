import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "이용 절차",
  description: "상담 요청부터 Follow-up까지 KSLC Navigation Center의 다섯 단계 이용 절차를 안내합니다.",
};

const steps = [
  {
    number: "01",
    title: "상담 요청",
    desc: "전화 또는 웹폼으로 지금 가장 필요한 도움을 말씀해 주세요.",
    prepare: "이름, 연락처, 선호 언어만 있으면 충분합니다.",
    expect: "영업일 기준 1~2일 이내에 담당자가 연락드립니다.",
  },
  {
    number: "02",
    title: "초기 상담 및 긴급도 확인",
    desc: "상황을 함께 듣고 얼마나 빠른 연결이 필요한지 확인합니다.",
    prepare: "지금 가장 걱정되는 문제 한 가지를 정리해 두시면 좋습니다.",
    expect: "전화 또는 방문으로 15~30분 정도 이야기를 나눕니다.",
  },
  {
    number: "03",
    title: "Needs Assessment",
    desc: "건강·혜택·주거·돌봄 상황과 우선순위를 함께 정리합니다.",
    prepare: "준비되어 있다면 신분증, 보험카드, 최근 통지서가 도움이 됩니다.",
    expect: "서류가 모두 없어도 상담을 시작할 수 있습니다.",
  },
  {
    number: "04",
    title: "개인별 Action Plan 및 기관 연결",
    desc: "적합한 기관과 신청 경로, 준비할 서류와 다음 행동을 정합니다.",
    prepare: "가족이나 보호자와 함께 참여하셔도 좋습니다.",
    expect: "구체적인 다음 단계와 연락처를 안내받습니다.",
  },
  {
    number: "05",
    title: "Follow-up 및 결과 확인",
    desc: "소개로 끝내지 않고 실제 이용 여부와 다음 단계를 확인합니다.",
    prepare: "별도로 준비하실 것은 없습니다.",
    expect: "담당자가 연결이 잘 이루어졌는지 다시 확인 연락을 드립니다.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Header lang="ko" currentPath="/process" />
      <main id="main">
        <PageHero
          kicker="HOW IT WORKS"
          title="이용 절차"
          lead="No Wrong Door, No One Walks Alone. 처음 연락부터 결과 확인까지 다섯 단계로 함께 걷습니다."
        />

        <section className="section">
          <div className="shell">
            <div className="card-grid cols-1" style={{ display: "grid", gap: 24 }}>
              {steps.map((s) => (
                <div className="card" key={s.number} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, alignItems: "start" }}>
                  <span className="service-number" style={{ fontSize: 24 }}>
                    {s.number}
                  </span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <p style={{ marginTop: 12, fontSize: 15 }}>
                      <strong style={{ color: "var(--navy)" }}>준비하면 좋은 것: </strong>
                      {s.prepare}
                    </p>
                    <p style={{ marginTop: 6, fontSize: 15 }}>
                      <strong style={{ color: "var(--navy)" }}>기대할 수 있는 것: </strong>
                      {s.expect}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tight" style={{ textAlign: "center" }}>
          <div className="shell">
            <Link className="button button-gold" href="/ko/request">
              지금 상담 요청하기
            </Link>
            <p style={{ marginTop: 20 }}>
              <Link href="/ko/navigation-center#principles" style={{ color: "var(--navy)", fontWeight: 700 }}>
                이 절차를 이끄는 KSLC 사례관리 5대 운영원칙 보기 →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
