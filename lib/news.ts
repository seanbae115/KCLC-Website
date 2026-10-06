import type { Lang } from "./nav";

export type NewsItem = {
  slug: string;
  /** Sort key. */
  date: string;
  dateLabel: Record<Lang, string>;
  kind: Record<Lang, string>;
  title: Record<Lang, string>;
  lead: Record<Lang, string>;
  /** Publication and reporter. */
  source: Record<Lang, string>;
  /** Scan of the printed page, cropped to this article. */
  clipping?: { src: string; alt: Record<Lang, string> };
  /** Where the piece can be read online, when it is published there. */
  href?: string;
};

const L = (ko: string, en: string) => ({ ko, en });

export const newsItems: NewsItem[] = [
  {
    slug: "hankook-2026-10-05",
    date: "2026-10-05",
    dateLabel: L("2026년 10월 5일", "October 5, 2026"),
    kind: L("언론 보도", "In the news"),
    title: L("“이사 및 전문 위원 모집해요”", "“We are recruiting directors and advisors”"),
    lead: L(
      "한인 시니어 삶터, 10일 설명회 부에나팍",
      "KSLC holds an information session in Buena Park on October 10.",
    ),
    source: L("한국일보 A12 · 2026년 10월 5일", "The Korea Times A12 · October 5, 2026"),
    clipping: {
      src: "/press/hankook-2026-10-05.jpg",
      alt: L(
        "2026년 10월 5일자 한국일보 지면. KSLC 이사·전문위원 모집 설명회 기사.",
        "The Korea Times of October 5, 2026, reporting the KSLC board and advisor information session.",
      ),
    },
  },
  {
    slug: "joongang-2026-10-05",
    date: "2026-10-05",
    dateLabel: L("2026년 10월 5일", "October 5, 2026"),
    kind: L("언론 보도", "In the news"),
    title: L("어르신 도울 이사·전문위원 모집", "Recruiting directors and advisors to help seniors"),
    lead: L(
      "한인 시니어 라이프 캠퍼스, 10일 부에나파크서 설명회",
      "Korean Senior Life Campus holds an information session in Buena Park on October 10.",
    ),
    source: L("중앙일보 오렌지카운티 12면 · 2026년 10월 5일", "The Korea Daily, Orange County p.12 · October 5, 2026"),
    clipping: {
      src: "/press/joongang-2026-10-05.jpg",
      alt: L(
        "2026년 10월 5일자 중앙일보 지면. KSLC 이사·전문위원 모집 설명회 기사.",
        "The Korea Daily of October 5, 2026, reporting the KSLC board and advisor information session.",
      ),
    },
  },
  {
    slug: "hankook-2026-09-28",
    date: "2026-09-28",
    dateLabel: L("2026년 9월 28일", "September 28, 2026"),
    kind: L("언론 보도", "In the news"),
    title: L("부에나팍 한인 시니어 위한 기관 문열어", "A center for Korean seniors opens in Buena Park"),
    lead: L(
      "KSLC, 복지·건강·주거·교통 한국어로 안내 무료 서비스",
      "KSLC guides seniors through benefits, health, housing and transportation in Korean — free of charge.",
    ),
    source: L("한국일보 풀러튼 A12 · 문태기 기자", "The Korea Times, Fullerton A12 · Taegi Moon"),
    clipping: {
      src: "/press/hankook-2026-09-28.jpg",
      alt: L(
        "2026년 9월 28일자 한국일보 풀러튼면 지면. KSLC 발대식 기사와 단체사진이 실려 있다.",
        "The Korea Times Fullerton section of September 28, 2026, carrying the KSLC launch story and group photograph.",
      ),
    },
  },
  {
    slug: "joongang-2026-09-28",
    date: "2026-09-25",
    dateLabel: L("2026년 9월 25일 · 지면 9월 28일", "September 25, 2026 · in print September 28"),
    kind: L("언론 보도", "In the news"),
    title: L("시니어 생활정보 서비스 한국어 제공", "Senior life information services, offered in Korean"),
    lead: L(
      "한인시니어라이프캠퍼스 발족 · 부에나파크 사무실서 무료봉사 · 배상도 회장 등 11명으로 시작",
      "Korean Senior Life Campus launches with eleven people, serving free of charge from its Buena Park office.",
    ),
    source: L("중앙일보 오렌지카운티 12면 · 임상환 기자", "The Korea Daily, Orange County p.12 · Sanghwan Lim"),
    clipping: {
      src: "/press/joongang-2026-09-28.jpg",
      alt: L(
        "2026년 9월 28일자 중앙일보 오렌지카운티면 지면. KSLC 발대식 기사와 단체사진이 실려 있다.",
        "The Korea Daily Orange County section of September 28, 2026, carrying the KSLC launch story and group photograph.",
      ),
    },
    href: "https://www.koreadaily.com/article/20260925200005814",
  },
];
