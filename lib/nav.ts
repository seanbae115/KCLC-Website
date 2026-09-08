export type Lang = "ko" | "en";

export type NavItem = { label: string; href: string };

export const siteInfo = {
  ko: {
    name: "Korean Senior Life Campus",
    shortName: "KSLC",
    tagline: "한인 시니어라면 가장 먼저 찾는 곳.",
    missionShort: "건강을 잇고, 공동체를 세우며, 다음 세대에 희망을 남깁니다.",
    phone: "(657) 239-0226",
    phoneHref: "tel:+16572390226",
    email: "info@kslcampus.org",
    address: "7342 Orangethorpe Ave, #B-109, Buena Park, CA 90621",
    mapQuery: "https://www.google.com/maps/search/?api=1&query=7342+Orangethorpe+Ave+%23B-109+Buena+Park+CA+90621",
    domain: "kslcampus.org",
  },
  en: {
    name: "Korean Senior Life Campus",
    shortName: "KSLC",
    tagline: "The first place Korean seniors turn to.",
    missionShort: "Connecting health, building community, and leaving a legacy of hope for future generations.",
    phone: "(657) 239-0226",
    phoneHref: "tel:+16572390226",
    email: "info@kslcampus.org",
    address: "7342 Orangethorpe Ave, #B-109, Buena Park, CA 90621",
    mapQuery: "https://www.google.com/maps/search/?api=1&query=7342+Orangethorpe+Ave+%23B-109+Buena+Park+CA+90621",
    domain: "kslcampus.org",
  },
};

// Primary top navigation (kept to 7 items per the brand/UX guidelines)
// English is the default language, served at "/". Korean is served at "/ko/...".
export const primaryNav: Record<Lang, NavItem[]> = {
  en: [
    { label: "Home", href: "/" },
    { label: "About KSLC", href: "/about" },
    { label: "Navigation Center", href: "/navigation-center" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Get Involved", href: "/partnership" },
    { label: "Contact", href: "/contact" },
  ],
  ko: [
    { label: "홈", href: "/ko" },
    { label: "KSLC 소개", href: "/ko/about" },
    { label: "Navigation Center", href: "/ko/navigation-center" },
    { label: "서비스", href: "/ko/services" },
    { label: "자료실", href: "/ko/resources" },
    { label: "참여·협력", href: "/ko/partnership" },
    { label: "문의", href: "/ko/contact" },
  ],
};

export const ctaNav: Record<Lang, { request: NavItem; referral: NavItem; donate: NavItem }> = {
  en: {
    request: { label: "Request Consultation", href: "/request" },
    referral: { label: "Institutional Referral", href: "/referral" },
    donate: { label: "Donate", href: "/partnership#donate" },
  },
  ko: {
    request: { label: "상담 요청", href: "/ko/request" },
    referral: { label: "기관 의뢰", href: "/ko/referral" },
    donate: { label: "후원하기", href: "/ko/partnership#donate" },
  },
};

export const footerLinks: Record<Lang, NavItem[]> = {
  en: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Non-Discrimination Notice", href: "/nondiscrimination" },
    { label: "Photo & Content Use Policy", href: "/media-policy" },
    { label: "Copyright Notice", href: "/copyright" },
    { label: "Emergency Information", href: "/emergency" },
    { label: "Contact & Complaints", href: "/complaints" },
  ],
  ko: [
    { label: "개인정보처리방침", href: "/ko/privacy" },
    { label: "이용약관", href: "/ko/terms" },
    { label: "접근성 안내", href: "/ko/accessibility" },
    { label: "차별금지 안내", href: "/ko/nondiscrimination" },
    { label: "사진·콘텐츠 사용정책", href: "/ko/media-policy" },
    { label: "저작권 안내", href: "/ko/copyright" },
    { label: "긴급상황 안내", href: "/ko/emergency" },
    { label: "문의 및 민원처리 안내", href: "/ko/complaints" },
  ],
};

export const footerQuickLinks: Record<Lang, NavItem[]> = {
  en: [
    { label: "About KSLC", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/process" },
    { label: "Resources", href: "/resources" },
    { label: "Get Involved", href: "/partnership" },
  ],
  ko: [
    { label: "KSLC 소개", href: "/ko/about" },
    { label: "리더십·조직", href: "/ko/leadership" },
    { label: "서비스 안내", href: "/ko/services" },
    { label: "이용 절차", href: "/ko/process" },
    { label: "자료실", href: "/ko/resources" },
    { label: "참여·협력", href: "/ko/partnership" },
  ],
};

// Given a language-neutral path (e.g. "/services", "/") return the href for each language.
// English is unprefixed (default); Korean is prefixed with "/ko".
export function langHref(path: string, lang: Lang): string {
  if (lang === "en") return path;
  return path === "/" ? "/ko" : `/ko${path}`;
}
