import type { Lang } from "./nav";
import type { RoleKey } from "@/components/RoleIcon";

export type Person = {
  nameKo: string;
  /** Preferred English form. Absent where we have not been told it yet. */
  nameEn?: string;
  photo?: string;
  title: Record<Lang, string>;
  /** Officer role decided at the 2026-09-24 launch, where one applies. */
  officer?: Record<Lang, string>;
  /** Symbol shown in place of a portrait until a photo is supplied. */
  roleIcon?: RoleKey;
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
    nameEn: "Miae Park",
    photo: "/team/miae-park.jpg",
    title: { ko: "봉사담당 이사", en: "Director of Volunteer Services" },
  },
];

/** The rest of the launch team, working directly with seniors. */
export const staff: Person[] = [
  { nameKo: "김윤정", nameEn: "Yoonjung Kim", photo: "/team/yoonjung-kim.jpg", title: { ko: "케이스 매니저", en: "Case Manager" } },
  { nameKo: "백성심", nameEn: "Sungsim Baek", photo: "/team/sungsim-baek.jpg", title: { ko: "케이스 매니저", en: "Case Manager" } },
  { nameKo: "배혜정", nameEn: "Hyejung Bae", photo: "/team/hyejung-bae.jpg", title: { ko: "상담 코디네이터", en: "Consultation Coordinator" } },
  { nameKo: "박하영", title: { ko: "협력사업 매니저", en: "Partnership Manager" }, roleIcon: "partnership" },
];

/** Left to right as the launch photograph was taken. */
const photoOrderKo = [
  "데이비드 김",
  "박미애",
  "피터 리",
  "김윤정",
  "문진성",
  "배혜정",
  "박하영",
  "백성심",
  "배상도",
  "이선희",
  "박현숙",
];

/** Caption names in photograph order, in the language being read. */
export function launchPhotoNames(lang: Lang): string[] {
  const all = [...board, ...staff];
  return photoOrderKo.map((ko) => {
    const p = all.find((x) => x.nameKo === ko);
    if (!p) return ko;
    return lang === "en" ? (p.nameEn ?? p.nameKo) : p.nameKo;
  });
}

export const LAUNCH_DATE = { ko: "2026년 9월 24일", en: "September 24, 2026" };
