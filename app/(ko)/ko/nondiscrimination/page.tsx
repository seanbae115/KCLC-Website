import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "차별금지 안내",
  description: "KSLC의 차별금지 원칙을 안내합니다.",
};

export default function NondiscriminationPage() {
  return (
    <>
      <Header lang="ko" currentPath="/nondiscrimination" />
      <main id="main">
        <PageHero kicker="LEGAL" title="차별금지 안내" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">최종 업데이트: 2026년 8월</p>

            <h2>차별금지 원칙</h2>
            <p>
              Korean Senior Life Campus(KSLC)는 인종, 피부색, 출신국가, 나이, 장애, 성별, 성적
              지향, 종교, 결혼 여부, 이민 신분과 관계없이 모든 분들께 서비스를 제공합니다.
            </p>
            <p>
              KSLC는 한인 시니어와 그 가족을 우선적인 대상으로 서비스를 안내하고 있으나, 도움이
              필요한 어떤 분도 차별 없이 상담을 요청하실 수 있습니다.
            </p>

            <h2>차별 신고</h2>
            <p>
              KSLC의 서비스 이용 중 차별을 경험하셨다고 느끼신다면{" "}
              <a href="mailto:info@kslcampus.org">info@kslcampus.org</a> 또는 (657) 239-0226로
              알려 주십시오. 모든 신고는 신중하게 검토됩니다.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
