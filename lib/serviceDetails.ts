// Shared shape for the detailed service Q&A content added per the
// 2026-09-05 development spec. Content itself lives in the per-language files.

export type FaqBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "link"; label: string; href: string }
  | { type: "contact"; label: string; phone: string; tel: string; note?: string };

export type Faq = { q: string; blocks: FaqBlock[] };

export type FaqGroup = { heading?: string; faqs: Faq[] };

export type ServiceDetail = {
  /** Anchor id, e.g. "benefits" */
  id: string;
  number: string;
  title: string;
  groups: FaqGroup[];
  /** Optional closing note rendered under the group (used by service 5). */
  outro?: FaqBlock[];
};

/** Public-benefit information verification date required by the spec. */
export const VERIFIED_ON = { ko: "최종 확인: 2026년 9월 5일", en: "Last verified: September 5, 2026" };
