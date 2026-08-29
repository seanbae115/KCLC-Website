import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Notice from "@/components/Notice";

export const metadata: Metadata = {
  title: "긴급상황 안내",
  description: "KSLC는 응급 서비스가 아닙니다. 긴급상황 시 연락처를 안내합니다.",
};

export default function EmergencyPage() {
  return (
    <>
      <Header lang="ko" currentPath="/emergency" />
      <main id="main">
        <PageHero kicker="IMPORTANT" title="긴급상황 안내" />
        <section className="section">
          <div className="shell prose">
            <Notice>
              <strong>KSLC Navigation Center는 응급 서비스 기관이 아닙니다.</strong> 생명이 위급하거나
              즉각적인 안전 문제가 있는 경우 웹사이트나 이메일이 아니라 아래 긴급 연락처로 즉시
              연락하십시오.
            </Notice>

            <h2>생명이 위급한 응급상황</h2>
            <p>
              911에 즉시 전화하십시오. 화재, 심각한 부상, 의식 소실, 호흡곤란 등 생명이 위급한
              상황은 지체 없이 911로 연락해야 합니다.
            </p>

            <h2>노인 학대·방임이 의심될 때</h2>
            <p>노인 학대, 방임, 재정적 착취가 의심되는 경우 관할 Adult Protective Services(APS)에 신고하십시오.</p>

            <h2>정신건강 위기</h2>
            <p>
              자살 생각이나 정신건강 위기 상황에는 988 Suicide &amp; Crisis Lifeline(전화 또는
              문자 988)로 연락하십시오.
            </p>

            <h2>KSLC 상담이 필요한 경우</h2>
            <p>
              응급상황이 아니지만 도움이 필요하시다면 KSLC Navigation Center 714-788-2002로
              연락하시거나 <a href="/ko/request">상담 요청폼</a>을 이용해 주십시오. KSLC는 영업일
              기준 1~2일 이내에 회신을 드립니다.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
