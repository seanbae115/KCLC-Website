import type { Lang } from "./nav";

export type Person = {
  nameKo: string;
  /** Preferred English form. Absent where we have not been told it yet. */
  nameEn?: string;
  photo?: string;
  title: Record<Lang, string>;
  /** Officer role decided at the 2026-09-24 launch, where one applies. */
  officer?: Record<Lang, string>;
};

/** Seven of the eleven who gathered at the launch form the board. */
export const board: Person[] = [
  {
    nameKo: "배상도",
    nameEn: "Sang Do Bae",
    photo: "/team/sangdo-bae.jpg",
    title: { ko: "회장", en: "Chair" },
    officer: { ko: "CEO", en: "CEO" },
  },
  {
    nameKo: "피터 리",
    nameEn: "Peter Lee",
    photo: "/team/peter-lee.jpg",
    title: { ko: "사무총장", en: "Executive Director" },
  },
  {
    nameKo: "데이비드 김",
    nameEn: "David Kim",
    photo: "/team/david-kim.jpg",
    title: { ko: "대외협력 이사", en: "Director of External Relations" },
    officer: { ko: "총무", en: "Secretary" },
  },
  {
    nameKo: "박현숙",
    nameEn: "Hyunsook Park",
    photo: "/team/hyunsook-park.jpg",
    title: { ko: "재정담당 이사", en: "Director of Finance" },
    officer: { ko: "CFO", en: "CFO" },
  },
  {
    nameKo: "이선희",
    nameEn: "Sunny Lee",
    photo: "/team/sunny-lee.jpg",
    title: { ko: "사회복지 1담당 이사", en: "Director of Social Welfare I" },
  },
  {
    nameKo: "문진성",
    nameEn: "Jin Sung Moon",
    photo: "/team/jinsung-moon.jpg",
    title: { ko: "사회복지 2담당 이사", en: "Director of Social Welfare II" },
  },
  {
    nameKo: "박미애",
    title: { ko: "봉사담당 이사", en: "Director of Volunteer Services" },
  },
];

/** The rest of the launch team, working directly with seniors. */
export const staff: Person[] = [
  { nameKo: "이윤정", title: { ko: "케이스 매니저", en: "Case Manager" } },
  { nameKo: "백성심", title: { ko: "케이스 매니저", en: "Case Manager" } },
  { nameKo: "배혜정", title: { ko: "상담 코디네이터", en: "Consultation Coordinator" } },
  { nameKo: "박하영", title: { ko: "협력사업 매니저", en: "Partnership Manager" } },
];

/** Caption order is left to right as the launch photo was taken. */
export const launchPhotoOrder = [
  "데이비드 김",
  "박미애",
  "피터 리",
  "이윤정",
  "문진성",
  "배혜정",
  "박하영",
  "백성심",
  "배상도",
  "이선희",
  "박현숙",
];

export const LAUNCH_DATE = { ko: "2026년 9월 24일", en: "September 24, 2026" };
