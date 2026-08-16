import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Notice from "@/components/Notice";
import { FORMSPREE_ENDPOINT } from "@/lib/forms";

export const metadata: Metadata = {
  title: "병원·기관 의뢰 안내",
  description: "병원, 시청, 교회, 비영리단체가 한인 시니어를 KSLC에 의뢰할 수 있는 문의폼입니다.",
};

export default function ReferralPage() {
  return (
    <>
      <Header lang="ko" currentPath="/referral" />
      <main id="main">
        <PageHero
          kicker="INSTITUTIONAL REFERRAL"
          title="병원·기관 의뢰 안내"
          lead="1단계에서는 민감정보를 직접 제출하는 정식 의료 의뢰폼보다 기관 의뢰 문의를 받는 수준으로 운영합니다."
        />

        <section className="section">
          <div className="shell split-form">
            <div className="form-card">
              <form action={FORMSPREE_ENDPOINT} method="POST">
                <input type="hidden" name="_next" value="https://kslcampus.org/thank-you?form=referral" />
                <input type="hidden" name="_subject" value="[KSLC] 기관 의뢰 문의" />
                <div className="form-grid">
                  <div className="field full">
                    <label htmlFor="org">기관명 *</label>
                    <input type="text" id="org" name="기관명" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contactName">담당자 이름 *</label>
                    <input type="text" id="contactName" name="담당자 이름" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">전화번호 *</label>
                    <input type="tel" id="phone" name="전화번호" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">이메일 *</label>
                    <input type="email" id="email" name="이메일" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contactMethod">선호 연락방법</label>
                    <select id="contactMethod" name="선호 연락방법" defaultValue="전화">
                      <option value="전화">전화</option>
                      <option value="이메일">이메일</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="area">의뢰 분야 *</label>
                    <input type="text" id="area" name="의뢰 분야" placeholder="예: 퇴원 후 지원, 주거, 공공혜택 등" required />
                  </div>
                  <div className="field full">
                    <label htmlFor="notes">일반적인 문의내용 *</label>
                    <textarea id="notes" name="문의내용" required />
                  </div>
                </div>
                <div className="form-actions">
                  <button type="submit" className="button button-gold">
                    기관 의뢰 문의 보내기
                  </button>
                </div>
              </form>
            </div>
            <div className="form-side">
              <Notice>
                <strong>중요 안내</strong>
                <br />
                이 양식에는 의료기록, 주민번호, 보험번호, 진단서 또는 기타 민감한 개인정보를 입력하거나
                첨부하지 마십시오. KSLC 담당자가 연락드린 후 안전한 의뢰방법을 안내합니다.
              </Notice>
              <div className="card">
                <h3>협력 기관을 찾고 계신가요?</h3>
                <p>병원, 시청·카운티, 재단, 교회, 비영리단체, 시니어센터, 대학·교육기관과 협력합니다.</p>
                <a href="/partnership#institutions" style={{ color: "var(--navy)", fontWeight: 700 }}>
                  참여·협력 안내 보기 →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
