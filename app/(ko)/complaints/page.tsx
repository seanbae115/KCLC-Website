import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "문의 및 민원처리 안내",
  description: "KSLC에 대한 문의와 민원을 제출하고 처리받는 절차를 안내합니다.",
};

export default function ComplaintsPage() {
  return (
    <>
      <Header lang="ko" currentPath="/complaints" />
      <main id="main">
        <PageHero kicker="LEGAL" title="문의 및 민원처리 안내" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">최종 업데이트: 2026년 8월</p>

            <h2>1. 문의 방법</h2>
            <p>
              KSLC 서비스에 대한 일반 문의는 <a href="/contact">문의·오시는 길</a> 페이지의
              문의폼, 전화 714-788-2002, 또는 이메일{" "}
              <a href="mailto:info@kslcampus.org">info@kslcampus.org</a>로 접수하실 수 있습니다.
            </p>

            <h2>2. 민원(불편사항) 제출</h2>
            <p>
              서비스 이용 중 불편사항이나 민원이 있으시면 위 연락처로 알려 주십시오. 민원 접수 시
              다음 정보를 포함해 주시면 처리에 도움이 됩니다.
            </p>
            <ul>
              <li>연락처(전화 또는 이메일)</li>
              <li>민원 발생 일시와 상황에 대한 설명</li>
              <li>희망하시는 처리 방향(선택)</li>
            </ul>

            <h2>3. 처리 절차</h2>
            <ol>
              <li>접수: 민원을 접수하고 접수 확인을 회신합니다.</li>
              <li>검토: 담당자가 상황을 확인하고 필요한 경우 관련자와 협의합니다.</li>
              <li>회신: 영업일 기준 5일 이내에 처리 결과 또는 진행 상황을 안내합니다.</li>
            </ol>

            <h2>4. 비밀 보장</h2>
            <p>
              민원 처리 과정에서 알게 된 정보는 처리 목적으로만 사용하며 관련자 이외에 공개하지
              않습니다.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
