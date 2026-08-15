import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "서비스 안내",
  description: "건강·의료, 보험·공공혜택, IHSS·가족돌봄, 주거, 교통·생활지원, 법률·지역자원까지 KSLC의 6개 서비스 영역을 안내합니다.",
};

const services = [
  {
    number: "01",
    title: "건강·의료 Navigation",
    items: ["주치의·전문의 연결", "병원 예약", "퇴원 후 지원", "의료교통", "예방관리 안내"],
  },
  {
    number: "02",
    title: "보험·공공혜택",
    items: ["Medi-Cal", "Medicare", "SSI·SSA", "CalFresh", "공과금 및 생활지원"],
  },
  {
    number: "03",
    title: "IHSS·가족돌봄",
    items: ["IHSS 정보", "가족돌봄자 지원", "성인주간보호", "재가서비스", "장기요양 선택 안내"],
  },
  {
    number: "04",
    title: "주거 Navigation",
    items: ["시니어 아파트", "Affordable Housing", "임대료 부담", "퇴거 예방", "주거안정 자원"],
  },
  {
    number: "05",
    title: "교통·생활지원",
    items: ["진료 교통", "식사 지원", "사회적 고립 예방", "디지털 접근", "지역 프로그램"],
  },
  {
    number: "06",
    title: "법률·지역자원",
    items: ["법률구조기관", "시민권·이민 정보", "교회·비영리기관", "카운티·시청 서비스", "전문기관 의뢰"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header lang="ko" currentPath="/services" />
      <main id="main">
        <PageHero
          kicker="SERVICES"
          title="서비스 안내"
          lead="한 가지 문제로 찾아오셔도 삶 전체에 필요한 서비스를 함께 살펴봅니다. 초기에는 각 영역을 한 페이지에서 안내해 드립니다."
        />

        <section className="services section">
          <div className="shell">
            <div className="card-grid cols-3">
              {services.map((s) => (
                <div className="service-card" key={s.number} style={{ border: "1px solid #cbd0d3" }}>
                  <span className="service-number">{s.number}</span>
                  <h3>{s.title}</h3>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="service-boundary">
              KSLC는 의료 진단·치료, 보험 판매, 법률 의견 또는 주택 배정·승인을 제공하거나 보장하지
              않습니다. 전문 판단이 필요한 경우 적절한 면허기관과 공식 담당기관으로 연결합니다.
            </p>
          </div>
        </section>

        <section className="section-tight">
          <div className="shell" style={{ textAlign: "center" }}>
            <Link className="button button-gold" href="/request">
              상담 요청하기
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
