"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const messages: Record<string, { title: string; body: string }> = {
  request: {
    title: "상담 요청이 접수되었습니다.",
    body: "KSLC 담당자가 영업일 기준 1~2일 이내에 연락드리겠습니다. 긴급한 의료·안전 문제는 911 또는 해당 긴급기관에 연락하십시오.",
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
  const msg = messages[form] ?? messages.contact;
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="shell">
        <p className="section-kicker">감사합니다</p>
        <h1 style={{ color: "var(--navy)", fontSize: 36, marginBottom: 18 }}>{msg.title}</h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: 560, margin: "0 auto 32px" }}>{msg.body}</p>
        <Link className="button button-navy" href="/">
          홈으로 돌아가기
        </Link>
      </div>
    </section>
  );
}
