export type Lang = "ko" | "en";

export type NavItem = { label: string; href: string };

export const siteInfo = {
  ko: {
    name: "Korean Senior Life Campus",
    shortName: "KSLC",
    tagline: "한인 시니어라면 가장 먼저 찾는 곳.",
    missionShort: "건강을 잇고, 공동체를 세우며, 다음 세대에 희망을 남깁니다.",
    phone: "714-788-2002",
    phoneHref: "tel:+17147882002",
    email: "info@kslcampus.org",
    address: "6291 Homewood Ave., Buena Park, CA 90621",
    mapQuery: "https://www.google.com/maps/search/?api=1&query=6291+Homewood+Ave+Buena+Park+CA+90621",
    domain: "kslcampus.org",
  },
  en: {
    name: "Korean Senior Life Campus",
    shortName: "KSLC",
    tagline: "The first place Korean seniors turn to.",
    missionShort: "Connecting health, building community, and leaving a legacy of hope for future generations.",
    phone: "714-788-2002",
    phoneHref: "tel:+17147882002",
    email: "info@kslcampus.org",
    address: "6291 Homewood Ave., Buena Park, CA 90621",
    mapQuery: "https://www.google.com/maps/search/?api=1&query=6291+Homewood+Ave+Buena+Park+CA+90621",
    domain: "kslcampus.org",
  },
};

// Primary top navigation (kept to 7 items per the brand/UX guidelines)
export const primaryNav: Record<Lang, NavItem[]> = {
  ko: [
    { label: "홈", href: "/" },
    { label: "KSLC 소개", href: "/about" },
    { label: "Navigation Center", href: "/navigation-center" },
    { label: "서비스", href: "/services" },
    { label: "자료실", href: "/resources" },
    { label: "참여·협력", href: "/partnership" },
    { label: "문의", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/en" },
    { label: "About KSLC", href: "/en/about" },
    { label: "Navigation Center", href: "/en/navigation-center" },
    { label: "Services", href: "/en/services" },
    { label: "Resources", href: "/en/resources" },
    { label: "Get Involved", href: "/en/partnership" },
    { label: "Contact", href: "/en/contact" },
  ],
};

export const ctaNav: Record<Lang, { request: NavItem; referral: NavItem; donate: NavItem }> = {
  ko: {
    request: { label: "상담 요청", href: "/request" },
    referral: { label: "기관 의뢰", href: "/referral" },
    donate: { label: "후원하기", href: "/partnership#donate" },
  },
  en: {
    request: { label: "Request Consultation", href: "/en/request" },
    referral: { label: "Institutional Referral", href: "/en/referral" },
    donate: { label: "Donate", href: "/en/partnership#donate" },
  },
};

export const footerLinks: Record<Lang, NavItem[]> = {
  ko: [
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용약관", href: "/terms" },
    { label: "접근성 안내", href: "/accessibility" },
    { label: "차별금지 안내", href: "/nondiscrimination" },
    { label: "사진·콘텐츠 사용정책", href: "/media-policy" },
    { label: "저작권 안내", href: "/copyright" },
    { label: "긴급상황 안내", href: "/emergency" },
    { label: "문의 및 민원처리 안내", href: "/complaints" },
  ],
  en: [
    { label: "Privacy Policy", href: "/en/privacy" },
    { label: "Terms of Use", href: "/en/terms" },
    { label: "Accessibility", href: "/en/accessibility" },
    { label: "Non-Discrimination Notice", href: "/en/nondiscrimination" },
    { label: "Photo & Content Use Policy", href: "/en/media-policy" },
    { label: "Copyright Notice", href: "/en/copyright" },
    { label: "Emergency Information", href: "/en/emergency" },
    { label: "Contact & Complaints", href: "/en/complaints" },
  ],
};

export const footerQuickLinks: Record<Lang, NavItem[]> = {
  ko: [
    { label: "KSLC 소개", href: "/about" },
    { label: "리더십·조직", href: "/leadership" },
    { label: "서비스 안내", href: "/services" },
    { label: "이용 절차", href: "/process" },
    { label: "자료실", href: "/resources" },
    { label: "참여·협력", href: "/partnership" },
  ],
  en: [
    { label: "About KSLC", href: "/en/about" },
    { label: "Leadership", href: "/en/leadership" },
    { label: "Services", href: "/en/services" },
    { label: "How It Works", href: "/en/process" },
    { label: "Resources", href: "/en/resources" },
    { label: "Get Involved", href: "/en/partnership" },
  ],
};

// Given a language-neutral path (e.g. "/services", "/" ) return the href for each language.
export function langHref(path: string, lang: Lang): string {
  if (lang === "ko") return path;
  return path === "/" ? "/en" : `/en${path}`;
}
