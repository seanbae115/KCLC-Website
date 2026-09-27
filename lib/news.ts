import type { Lang } from "./nav";

export type Block =
  | { type: "p"; text: Record<Lang, string> }
  | { type: "quote"; text: Record<Lang, string>; by: Record<Lang, string> }
  | { type: "h"; text: Record<Lang, string> };

export type NewsItem = {
  slug: string;
  /** Sort key. */
  date: string;
  dateLabel: Record<Lang, string>;
  kind: Record<Lang, string>;
  title: Record<Lang, string>;
  lead: Record<Lang, string>;
  body?: Block[];
  external?: { href: string; source: Record<Lang, string> };
};

const L = (ko: string, en: string) => ({ ko, en });

export const newsItems: NewsItem[] = [
  {
    slug: "koreadaily-2026-09-25",
    date: "2026-09-25",
    dateLabel: L("2026년 9월 25일", "September 25, 2026"),
    kind: L("언론 보도", "In the news"),
    title: L("시니어 생활정보 서비스 한국어 제공", "Senior life information services, offered in Korean"),
    lead: L(
      "중앙일보가 KSLC 발대식과 활동 내용을 보도했습니다.",
      "The Korea Daily reported on the KSLC launch and the services it offers.",
    ),
    external: { href: "https://www.koreadaily.com/article/20260925200005814", source: L("중앙일보 · 임상환 기자", "The Korea Daily · Sanghwan Lim") },
  },
];
