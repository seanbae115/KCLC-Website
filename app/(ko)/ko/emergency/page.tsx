import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Notice from "@/components/Notice";
import EmergencyContacts, { emergencyWarning } from "@/components/EmergencyContacts";

export const metadata: Metadata = {
  title: "긴급할 시 필요한 연락처",
  description: "KSLC는 응급 서비스가 아닙니다. 상황별로 먼저 연락해야 할 긴급 연락처를 안내합니다.",
};

export default function EmergencyPage() {
  return (
    <>
      <Header lang="ko" currentPath="/emergency" />
      <main id="main">
        <PageHero kicker="IMPORTANT" title="긴급할 시 필요한 연락처" />
        <section className="section">
          <div className="shell prose">
            <Notice className="emergency-warning">
              <strong>KSLC Navigation Center는 응급 서비스 기관이 아닙니다.</strong>
              <br />
              {emergencyWarning.ko}
            </Notice>

            <h2>상황별 연락처</h2>
            <EmergencyContacts lang="ko" />

            <h2>KSLC 상담이 필요한 경우</h2>
            <p>
              응급상황이 아니지만 도움이 필요하시다면 KSLC Navigation Center{" "}
              <a href="tel:+16572390226">(657) 239-0226</a>으로 연락하시거나{" "}
              <a href="/ko/request">상담 요청폼</a>을 이용해 주십시오. KSLC는 영업일 기준 1~2일
              이내에 회신을 드립니다.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
