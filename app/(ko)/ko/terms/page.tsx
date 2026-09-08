import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "이용약관",
  description: "KSLC 웹사이트 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <>
      <Header lang="ko" currentPath="/terms" />
      <main id="main">
        <PageHero kicker="LEGAL" title="이용약관" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">최종 업데이트: 2026년 8월</p>

            <h2>1. 웹사이트의 목적</h2>
            <p>
              이 웹사이트는 Korean Senior Life Campus(KSLC)와 KSLC Navigation Center에 대한 정보를
              제공하고, 상담 요청과 기관 의뢰 문의를 접수하기 위해 운영됩니다.
            </p>

            <h2>2. 서비스의 성격</h2>
            <p>
              웹사이트를 통한 상담 요청 및 문의는 상담의 시작점일 뿐이며, 그 자체로 의료·법률·재정
              서비스의 제공을 의미하지 않습니다. KSLC는 의료 진단·치료, 보험 판매, 법률 의견, 주택
              배정·승인을 제공하거나 보장하지 않으며, 전문 판단이 필요한 경우 적절한 면허기관과
              공식 담당기관으로 연결합니다.
            </p>

            <h2>3. 콘텐츠의 정확성</h2>
            <p>
              KSLC는 웹사이트 정보의 정확성을 위해 노력하지만, 공공혜택 제도와 정책은 수시로 변경될
              수 있습니다. 개별 상황에 대한 정확한 안내는 담당자와의 상담을 통해 확인해 주십시오.
            </p>

            <h2>4. 웹사이트 이용</h2>
            <ul>
              <li>웹사이트의 콘텐츠를 무단으로 복제·배포·상업적으로 이용할 수 없습니다.</li>
              <li>웹사이트의 정상적인 운영을 방해하는 행위를 금지합니다.</li>
              <li>문의폼에는 사실에 근거한 정보를 입력해 주십시오.</li>
            </ul>

            <h2>5. 외부 링크</h2>
            <p>
              웹사이트에는 공공기관, 병원, 파트너 기관 등 외부 웹사이트로 연결되는 링크가 포함될 수
              있습니다. KSLC는 외부 웹사이트의 콘텐츠에 대해 책임지지 않습니다.
            </p>

            <h2>6. 약관의 변경</h2>
            <p>이 약관은 서비스 운영 상황에 따라 변경될 수 있으며, 변경 시 이 페이지에 게시합니다.</p>

            <h2>7. 문의</h2>
            <p>
              이용약관에 관한 문의는 <a href="mailto:info@kslcampus.org">info@kslcampus.org</a> 또는{" "}
              (657) 239-0226로 연락해 주십시오.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
