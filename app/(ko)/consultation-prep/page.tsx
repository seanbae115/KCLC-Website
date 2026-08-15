import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Notice from "@/components/Notice";

export const metadata: Metadata = {
  title: "상담 준비 안내",
  description: "KSLC 상담 전 준비하면 좋은 자료와 자주 묻는 질문을 안내합니다.",
};

const materials = [
  "신분증",
  "보험카드",
  "최근 정부기관 통지서",
  "복용약 목록",
  "의료기관 정보",
  "주거·소득 관련 서류",
  "가장 먼저 해결하고 싶은 문제",
];

const faqs = [
  { q: "상담은 누가 받을 수 있나요?", a: "한인 시니어 본인은 물론, 가족·보호자·기관 담당자도 상담을 요청하실 수 있습니다." },
  { q: "상담 시간은 얼마나 걸리나요?", a: "초기 상담은 보통 15~30분 정도 소요됩니다. 상황에 따라 달라질 수 있습니다." },
  { q: "가족이 함께 참여할 수 있나요?", a: "네, 가족이나 보호자가 함께 참여하시는 것을 권장합니다." },
  { q: "통역 지원이 되나요?", a: "한국어 상담을 기본으로 하며, 필요 시 영어 지원도 가능합니다." },
  { q: "개인정보는 어떻게 보호되나요?", a: "상담 중 알게 된 정보는 서비스 연결 목적으로만 사용되며 안전하게 관리됩니다." },
  { q: "상담 후에는 어떻게 진행되나요?", a: "필요한 기관에 연결해 드린 후, 실제로 도움을 받으셨는지 다시 확인 연락을 드립니다." },
];

export default function ConsultationPrepPage() {
  return (
    <>
      <Header lang="ko" currentPath="/consultation-prep" />
      <main id="main">
        <PageHero
          kicker="BEFORE YOUR CONSULTATION"
          title="상담 준비 안내"
          lead="서류가 모두 없어도 상담을 시작할 수 있습니다. 준비되어 있다면 아래 자료가 도움이 됩니다."
        />

        <section className="section">
          <div className="shell info-grid">
            <div>
              <p className="section-kicker">GOOD TO HAVE</p>
              <h2>준비하면 좋은 자료</h2>
            </div>
            <ul className="info-list">
              {materials.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="shell">
            <Notice>서류가 모두 없어도 상담을 시작할 수 있습니다. 지금 있는 것만 가지고 편하게 연락 주세요.</Notice>
          </div>
        </section>

        <section className="section" style={{ background: "var(--warm)" }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">FAQ</p>
                <h2>자주 묻는 질문</h2>
              </div>
            </div>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-tight" style={{ textAlign: "center" }}>
          <div className="shell">
            <Link className="button button-gold" href="/request">
              상담 요청하기
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
