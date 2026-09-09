import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Notice from "@/components/Notice";
import ConsultationForm, { RequiredCheckGroup } from "@/components/ConsultationForm";
import { emergencyWarning } from "@/components/EmergencyContacts";

export const metadata: Metadata = {
  title: "상담 요청",
  description: "KSLC 상담을 요청하세요. 최소한의 정보만 받으며, 영업일 기준 1~2일 이내에 연락드립니다.",
};

const helpAreas = ["건강·의료", "보험·공공혜택", "IHSS·돌봄", "주거", "교통·생활", "기타"];

export default function RequestPage() {
  return (
    <>
      <Header lang="ko" currentPath="/request" />
      <main id="main">
        <PageHero
          kicker="REQUEST A CONSULTATION"
          title="상담 요청"
          lead="상담 요청폼에서는 최소한의 정보만 받습니다. 서류가 모두 없어도 요청하실 수 있습니다."
        />

        <section className="section">
          <div className="shell split-form">
            <div className="form-card">
              <ConsultationForm
                formType="request"
                lang="ko"
                submitLabel="상담 요청 보내기"
              >
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="name">이름 *</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">전화번호 *</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">
                      이메일 <span className="hint">(선택)</span>
                    </label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="lang">선호 언어 *</label>
                    <select id="lang" name="preferredLanguage" required defaultValue="">
                      <option value="" disabled>
                        선택해 주세요
                      </option>
                      <option value="한국어">한국어</option>
                      <option value="English">English</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="time">안전하게 연락할 수 있는 시간</label>
                    <input type="text" id="time" name="contactTime" placeholder="예: 평일 오전, 평일 오후 등" />
                  </div>
                  <fieldset className="field full">
                    <legend>본인·가족·기관 여부 *</legend>
                    <div className="radio-row">
                      {["본인", "가족", "기관 담당자"].map((r) => (
                        <label className="radio-item" key={r}>
                          <input type="radio" name="relationship" value={r} required />
                          {r}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <RequiredCheckGroup
                    name="helpAreas"
                    legend="도움받고 싶은 영역 *"
                    options={helpAreas}
                  />
                  <div className="field full">
                    <label htmlFor="notes">
                      전하고 싶은 내용 <span className="hint">(선택)</span>
                    </label>
                    <textarea id="notes" name="notes" />
                  </div>
                  <div className="field full">
                    <label className="check-item">
                      <input type="checkbox" name="consent" value="동의함" required />
                      KSLC가 위 연락처로 연락하는 것에 동의합니다. *
                    </label>
                  </div>
                </div>
                <div className="notice emergency-warning" role="note">
                  <strong>위급한 상황이라면 이 양식을 사용하지 마십시오.</strong>
                  <br />
                  {emergencyWarning.ko}
                </div>
                <p className="form-consent">
                  이 양식에는 의료기록, 주민번호, 보험번호, 진단서 등 민감한 개인정보를 입력하지 마십시오.
                  제출하신 정보는 상담 연결 목적으로만 사용되며{" "}
                  <a href="/ko/privacy">개인정보처리방침</a>에 따라 관리됩니다.
                </p>
              </ConsultationForm>
            </div>
            <div className="form-side">
              <Notice>
                <strong>제출 후 안내</strong>
                <br />
                상담 요청이 접수되면 KSLC 담당자가 영업일 기준 1~2일 이내에 연락드립니다. 긴급한
                의료·안전 문제는 911 또는 해당 긴급기관에 연락하십시오.
              </Notice>
              <div className="card">
                <h3>바로 전화하고 싶으신가요?</h3>
                <p>
                  <a href="tel:+16572390226" style={{ color: "var(--navy)", fontWeight: 700 }}>
                    (657) 239-0226
                  </a>
                </p>
                <p>평일 오전 9시 – 오후 5시</p>
              </div>
              <div className="card">
                <h3>기관을 대표해 의뢰하시나요?</h3>
                <p>기관·병원 담당자는 별도의 기관 의뢰 문의폼을 이용해 주세요.</p>
                <a href="/ko/referral" style={{ color: "var(--navy)", fontWeight: 700 }}>
                  기관 의뢰 문의하기 →
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
