import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "접근성 안내",
  description: "KSLC 웹사이트의 접근성 목표와 안내입니다.",
};

export default function AccessibilityPage() {
  return (
    <>
      <Header lang="ko" currentPath="/accessibility" />
      <main id="main">
        <PageHero kicker="LEGAL" title="접근성 안내" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">최종 업데이트: 2026년 8월</p>

            <h2>1. 접근성 목표</h2>
            <p>
              KSLC 웹사이트는 시니어를 포함한 모든 방문자가 편리하게 이용할 수 있도록 WCAG 2.2 AA
              수준의 웹 접근성을 목표로 설계되었습니다.
            </p>

            <h2>2. 적용된 접근성 기준</h2>
            <ul>
              <li>본문 글자 크기: PC 18px 전후, 모바일 최소 16px</li>
              <li>버튼 높이 약 48px 이상의 충분한 터치 영역</li>
              <li>충분한 행간과 강한 명도 대비</li>
              <li>단순하고 일관된 메뉴 구조</li>
              <li>자동재생 영상 및 과도한 애니메이션 배제</li>
              <li>이미지 안에 중요한 문구를 넣지 않음</li>
              <li>전화번호 클릭 시 바로 통화 연결</li>
              <li>모든 의미 있는 이미지에 대체텍스트 제공</li>
              <li>키보드만으로 탐색 가능한 메뉴와 폼</li>
            </ul>

            <h2>3. 개선을 위한 노력</h2>
            <p>
              완벽한 접근성을 보장할 수는 없지만, KSLC는 지속적으로 웹사이트를 점검하고 개선해
              나갑니다.
            </p>

            <h2>4. 불편사항 신고</h2>
            <p>
              웹사이트 이용 중 접근성 문제를 발견하셨다면{" "}
              <a href="mailto:info@kslcampus.org">info@kslcampus.org</a> 또는 (657) 239-0226로 알려
              주십시오. 신속히 확인하고 개선하겠습니다.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
