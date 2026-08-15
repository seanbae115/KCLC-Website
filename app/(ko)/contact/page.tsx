import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { FORMSPREE } from "@/lib/forms";

export const metadata: Metadata = {
  title: "문의·오시는 길",
  description: "KSLC 주소, 전화, 이메일, 운영시간과 오시는 길, 일반 문의폼을 안내합니다.",
};

export default function ContactPage() {
  return (
    <>
      <Header lang="ko" currentPath="/contact" />
      <main id="main">
        <PageHero kicker="CONTACT" title="문의·오시는 길" lead="궁금한 점이 있으시면 언제든지 연락 주세요." />

        <section className="section">
          <div className="shell" style={{ display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 50 }}>
            <div>
              <div className="card" style={{ marginBottom: 24 }}>
                <h3>연락처</h3>
                <ul>
                  <li>주소: 6291 Homewood Ave., Buena Park, CA 90621</li>
                  <li>
                    대표전화: <a href="tel:+17147882002">714-788-2002</a>
                  </li>
                  <li>
                    이메일: <a href="mailto:info@kslcampus.org">info@kslcampus.org</a>
                  </li>
                  <li>운영시간: 평일 오전 9시 – 오후 5시</li>
                  <li>사전 예약을 권장합니다.</li>
                </ul>
              </div>
              <div className="card">
                <h3>대중교통·주차</h3>
                <p>방문 전 전화로 주차 안내를 받으실 수 있습니다. 대중교통 이용 시 담당자에게 문의해 주세요.</p>
              </div>
              <div className="notice notice-info" style={{ marginTop: 24 }}>
                <strong>응급상황이신가요?</strong> 생명이 위급한 경우 즉시 911에 연락하십시오.{" "}
                <a href="/emergency">긴급상황 안내 보기 →</a>
              </div>
            </div>

            <div>
              <iframe
                className="map-frame"
                title="KSLC 위치 지도"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=6291+Homewood+Ave,+Buena+Park,+CA+90621&output=embed"
              />
              <div className="form-card" style={{ marginTop: 30 }}>
                <h3 style={{ color: "var(--navy)", marginTop: 0 }}>일반 문의</h3>
                <form action={FORMSPREE.contact} method="POST">
                  <input type="hidden" name="_next" value="https://www.kslcampus.org/thank-you?form=contact" />
                  <input type="hidden" name="_subject" value="[KSLC] 일반 문의" />
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="name">이름 *</label>
                      <input type="text" id="name" name="이름" required />
                    </div>
                    <div className="field">
                      <label htmlFor="email">이메일 *</label>
                      <input type="email" id="email" name="이메일" required />
                    </div>
                    <div className="field full">
                      <label htmlFor="phone">
                        전화번호 <span className="hint">(선택)</span>
                      </label>
                      <input type="tel" id="phone" name="전화번호" />
                    </div>
                    <div className="field full">
                      <label htmlFor="message">문의 내용 *</label>
                      <textarea id="message" name="문의 내용" required />
                    </div>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="button button-navy">
                      문의 보내기
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
