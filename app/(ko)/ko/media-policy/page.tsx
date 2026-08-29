import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "사진·콘텐츠 사용정책",
  description: "KSLC 웹사이트에 사용된 사진과 콘텐츠의 사용 정책입니다.",
};

export default function MediaPolicyPage() {
  return (
    <>
      <Header lang="ko" currentPath="/media-policy" />
      <main id="main">
        <PageHero kicker="LEGAL" title="사진·콘텐츠 사용정책" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">최종 업데이트: 2026년 8월</p>

            <h2>1. 사진 사용 동의</h2>
            <p>
              웹사이트와 홍보물에 사용되는 한인 시니어, 가족, 자원봉사자, 리더십, 파트너십 행사 등의
              실제 사진은 사전에 촬영 대상자로부터 홈페이지·홍보물 사용 동의를 받은 후에만
              게시합니다.
            </p>

            <h2>2. 저작권 및 출처</h2>
            <p>
              웹사이트에 게시된 사진, 로고, 문서는 KSLC가 저작권을 보유하거나 정당한 사용 권한을
              확보한 자료입니다. 사전 서면 동의 없이 무단으로 복제·배포·상업적으로 이용할 수
              없습니다.
            </p>

            <h2>3. 로고 사용</h2>
            <p>
              KSLC 공식 로고는 승인된 브랜드 가이드에 따라서만 사용됩니다. 로고의 비율 변경, 색상
              변경, 요소 분리·재배열은 허용되지 않습니다.
            </p>

            <h2>4. 문의</h2>
            <p>
              사진 또는 콘텐츠 사용에 관한 문의는{" "}
              <a href="mailto:info@kslcampus.org">info@kslcampus.org</a>로 연락해 주십시오.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
