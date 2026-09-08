import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "KSLC 웹사이트의 개인정보 수집·이용·보호 원칙을 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header lang="ko" currentPath="/privacy" />
      <main id="main">
        <PageHero kicker="LEGAL" title="개인정보처리방침" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">최종 업데이트: 2026년 8월</p>

            <h2>1. 기본 원칙</h2>
            <p>
              Korean Senior Life Campus(KSLC)는 웹사이트를 통해 수집하는 개인정보를 상담 연결과
              서비스 제공 목적으로만 사용하며, 이용자의 동의 없이 제3자에게 제공하지 않습니다.
            </p>

            <h2>2. 웹사이트에서 수집하는 정보</h2>
            <p>상담 요청폼, 기관 의뢰 문의폼, 일반 문의폼을 통해 다음 정보를 수집할 수 있습니다.</p>
            <ul>
              <li>이름, 전화번호, 이메일</li>
              <li>선호 언어, 연락 가능 시간</li>
              <li>도움받고 싶은 영역 및 문의 내용</li>
              <li>기관 담당자의 경우 기관명과 담당자 연락처</li>
            </ul>

            <h2>3. 웹사이트에서 수집하지 않는 정보</h2>
            <p>KSLC는 공개 웹폼에서 다음과 같은 민감한 개인정보를 수집하지 않습니다.</p>
            <ul>
              <li>주민번호</li>
              <li>Medi-Cal·Medicare 번호, 보험 회원번호</li>
              <li>진단서·의료기록</li>
              <li>소득증빙, 은행정보</li>
              <li>신분증, 이민서류, 처방전</li>
              <li>건강보험 카드 사진</li>
            </ul>
            <p>
              웹사이트는 상담의 시작점만 제공합니다. 상세한 정보 확인과 서류 검토는 담당자가 연락한
              뒤 전화·방문 또는 별도의 안전한 방법으로 진행합니다.
            </p>

            <h2>4. 정보의 이용 목적</h2>
            <ul>
              <li>상담 요청에 대한 회신 및 서비스 연결</li>
              <li>기관 의뢰 문의에 대한 확인 및 협의</li>
              <li>일반 문의에 대한 답변</li>
              <li>내부 통계 작성 및 서비스 개선(비식별 처리)</li>
            </ul>

            <h2>5. 정보의 보관 및 파기</h2>
            <p>
              수집된 정보는 목적 달성에 필요한 기간 동안 보관하며, 목적이 달성된 이후에는 관련 법령에
              따라 안전하게 파기합니다.
            </p>

            <h2>6. 쿠키 및 방문통계</h2>
            <p>
              웹사이트 이용 현황을 파악하기 위해 방문통계 도구를 사용할 수 있습니다. 이를 통해
              개인을 식별하지 않으며, 서비스 개선 목적으로만 사용합니다.
            </p>

            <h2>7. 문의</h2>
            <p>
              개인정보 처리에 관한 문의는 <a href="mailto:info@kslcampus.org">info@kslcampus.org</a> 또는{" "}
              (657) 239-0226로 연락해 주십시오.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
