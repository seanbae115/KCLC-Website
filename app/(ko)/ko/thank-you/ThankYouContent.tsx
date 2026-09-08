"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const messages: Record<string, { title: string; body: string }> = {
  request: {
    title: "상담 요청이 접수되었습니다.",
    body: "KSLC 담당자가 접수 내용을 확인한 뒤 일반적으로 1~2영업일 내 연락드리겠습니다. 위급한 상황은 KSLC의 답변을 기다리지 말고 911, 988 또는 해당 긴급기관에 연락하십시오.",
  },
  referral: {
    title: "기관 의뢰 문의가 접수되었습니다.",
    body: "KSLC 담당자가 확인 후 연락드리며, 안전한 의뢰 방법을 함께 안내해 드립니다.",
  },
  contact: {
    title: "문의가 접수되었습니다.",
    body: "KSLC 담당자가 빠른 시일 내에 답변드리겠습니다.",
  },
};

export default function ThankYouContent() {
  const params = useSearchParams();
  const form = params.get("form") ?? "contact";
  const caseId = params.get("case");
  const msg = messages[form] ?? messages.contact;

  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="shell">
        <p className="section-kicker">감사합니다</p>
        <h1 style={{ color: "var(--navy)", fontSize: 36, marginBottom: 18 }}>{msg.title}</h1>

        {caseId ? (
          <p className="case-id">
            <span>접수번호</span>
            <strong>{caseId}</strong>
          </p>
        ) : null}

        <p style={{ color: "var(--ink-soft)", maxWidth: 620, margin: "0 auto 24px", lineHeight: 1.9 }}>
          {msg.body}
        </p>
        <p style={{ color: "var(--ink-soft)", margin: "0 auto 32px" }}>
          전화 문의: <a href="tel:+16572390226" style={{ color: "var(--navy)", fontWeight: 800 }}>(657) 239-0226</a>
        </p>
        <Link className="button button-navy" href="/ko">
          홈으로 돌아가기
        </Link>
      </div>
    </section>
  );
}
