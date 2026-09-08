import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceFaq from "@/components/ServiceFaq";
import { serviceDetailsKo } from "@/lib/serviceDetails.ko";
import { VERIFIED_ON } from "@/lib/serviceDetails";

export const metadata: Metadata = {
  title: "서비스 안내",
  description: "보험·공공혜택, IHSS·가족돌봄, 주거, 교통·생활지원, 지역 자원 연계까지 KSLC의 5개 서비스 영역을 안내합니다.",
};

const services = [
  {
    number: "01",
    title: "보험·공공혜택",
    href: "#benefits",
    items: ["Medi-Cal", "Medicare", "SSI·SSA", "CalFresh", "공과금 및 생활지원"],
  },
  {
    number: "02",
    title: "IHSS·가족돌봄",
    href: "#ihss",
    items: ["IHSS 정보", "가족돌봄자 지원", "성인주간보호", "재가서비스", "장기요양 선택 안내"],
  },
  {
    number: "03",
    title: "주거 Navigation",
    href: "#housing",
    items: ["시니어 아파트", "Affordable Housing", "임대료 부담", "퇴거 예방", "주거안정 자원"],
  },
  {
    number: "04",
    title: "교통·생활지원",
    href: "#transportation",
    items: ["진료 교통", "식사 지원", "사회적 고립 예방", "디지털 접근", "지역 프로그램"],
  },
  {
    number: "05",
    title: "지역 자원과의 연계 활동",
    href: "#community",
    items: ["정신건강·가정 상담 기관", "교회·비영리기관", "카운티·시청 서비스", "전문기관 의뢰"],
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
          lead="한 가지 문제로 찾아오셔도 삶 전체에 필요한 서비스를 함께 살펴봅니다. 각 영역의 자주 묻는 질문을 아래에서 확인하실 수 있습니다."
        />

        <section className="services section">
          <div className="shell">
            <div className="card-grid cols-3">
              {services.map((s) => (
                <div className="service-card" key={s.number} style={{ border: "1px solid #cbd0d3" }}>
                  <span className="service-number">{s.number}</span>
                  <h3>
                    <a href={s.href} style={{ color: "inherit" }}>
                      {s.title}
                    </a>
                  </h3>
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

        <section className="section" style={{ background: "var(--warm)" }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">SERVICE DETAILS</p>
                <h2>서비스별 자세한 안내</h2>
              </div>
              <p>
                공공제도 정보는 자주 바뀝니다. 아래 내용은 표시된 확인일 기준이며, 실제 자격과 승인은
                해당 기관이 결정합니다.
              </p>
            </div>
            {serviceDetailsKo.map((d) => (
              <ServiceFaq key={d.id} detail={d} lang="ko" verifiedOn={VERIFIED_ON.ko} />
            ))}
          </div>
        </section>

        <section className="section-tight">
          <div className="shell" style={{ textAlign: "center" }}>
            <Link className="button button-gold" href="/ko/request">
              상담 요청하기
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
