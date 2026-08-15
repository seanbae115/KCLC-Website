import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "저작권 안내",
  description: "KSLC 웹사이트의 저작권 안내입니다.",
};

export default function CopyrightPage() {
  return (
    <>
      <Header lang="ko" currentPath="/copyright" />
      <main id="main">
        <PageHero kicker="LEGAL" title="저작권 안내" />
        <section className="section">
          <div className="shell prose">
            <p className="updated">최종 업데이트: 2026년 8월</p>
            <h2>저작권</h2>
            <p>
              © 2026 Korean Senior Life Campus. All rights reserved. 이 웹사이트에 게시된 모든
              텍스트, 이미지, 로고, 자료는 별도로 명시되지 않는 한 KSLC의 저작물이며 관련 법률의
              보호를 받습니다.
            </p>
            <h2>이용 제한</h2>
            <p>
              사전 서면 동의 없이 웹사이트의 콘텐츠를 복제, 배포, 전송, 게시, 상업적으로 이용할 수
              없습니다. 개인적·비상업적 목적의 열람과 인용은 출처를 명시하는 경우에 한해
              허용됩니다.
            </p>
            <h2>문의</h2>
            <p>
              저작권 관련 문의는 <a href="mailto:info@kslcampus.org">info@kslcampus.org</a>로 연락해
              주십시오.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
