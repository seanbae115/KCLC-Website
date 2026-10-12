import type { Lang } from "./nav";

/**
 * 상단 공지 배너.
 *
 * 공지를 추가하려면 아래 `notices` 배열에 하나 넣으면 됩니다.
 * 끝나는 날짜(`showUntil`)를 반드시 적으세요. 그 날이 지나면 배너는
 * 스스로 사라집니다 — 아무도 기억해서 내릴 필요가 없습니다.
 *
 * 2026년 10월 설명회 배너를 날짜가 지난 뒤에도 사람이 못 내려서
 * 이틀 동안 지난 행사를 광고한 일이 있었습니다. 그 일을 구조적으로
 * 막기 위한 장치입니다.
 *
 * 글자를 굵게 하려면 **별표 두 개**로 감싸세요.
 */
export type Notice = {
  /** 파일 안에서 구분하기 위한 이름. 화면에 나오지 않습니다. */
  id: string;
  /** 마지막으로 보일 날짜 (YYYY-MM-DD, 캘리포니아 기준). 이 날까지 보입니다. */
  showUntil: string;
  /** 왼쪽 작은 꼬리표. 예: 모집 / 안내 */
  tag: Record<Lang, string>;
  /** 본문. **별표 두 개**로 감싼 부분이 굵게 나옵니다. */
  text: Record<Lang, string>;
  /** 누르면 갈 주소. 한국어 쪽은 /ko 를 붙이지 않아도 알아서 붙습니다. */
  href: string;
  linkLabel: Record<Lang, string>;
};

/**
 * 지금 띄울 공지. 비어 있으면 배너가 아예 나오지 않습니다.
 *
 * 예시 (그대로 복사해서 날짜와 내용만 바꾸면 됩니다):
 *
 *   {
 *     id: "board-session-2026-10",
 *     showUntil: "2026-10-10",
 *     tag: { ko: "모집", en: "OPEN" },
 *     text: {
 *       ko: "KSLC가 **이사·전문위원**을 모집합니다. 설명회 **10월 10일(토) 오전 11시**",
 *       en: "KSLC is recruiting **board members and advisors**. Session **Saturday, October 10, 11:00 AM**",
 *     },
 *     href: "/partnership#board",
 *     linkLabel: { ko: "자세히 보기 →", en: "Learn more →" },
 *   },
 */
export const notices: Notice[] = [
  {
    id: "free-consult-notice",
    showUntil: "2026-10-31",
    tag: { ko: "안내", en: "NOTE" },
    text: {
      ko: "KSLC 상담은 **무료**입니다. 전화 **(657) 239-0226**",
      en: "KSLC consultations are **free**. Call **(657) 239-0226**",
    },
    href: "/request",
    linkLabel: { ko: "상담 요청 →", en: "Request consultation →" },
  },
];

/** 캘리포니아 기준 '오늘'(YYYY-MM-DD). 날짜 비교를 전부 이 기준으로 맞춥니다. */
export function todayInCalifornia(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** showUntil 날짜까지는 true. 문자열 비교로 충분합니다 (YYYY-MM-DD). */
export function isStillRunning(notice: Notice, today = todayInCalifornia()): boolean {
  return notice.showUntil >= today;
}
