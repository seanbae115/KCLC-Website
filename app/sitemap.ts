import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// 정식 주소는 www 입니다. www 없는 주소는 308 로 여기로 넘어오므로,
// 공유 썸네일·사이트맵이 리다이렉트를 거치지 않도록 처음부터 www 로 적습니다.
const base = "https://www.kslcampus.org";

const slugs = [
  "",
  "about",
  "leadership",
  "navigation-center",
  "services",
  "process",
  "consultation-prep",
  "resources",
  "partnership",
  "referral",
  "request",
  "contact",
  "privacy",
  "terms",
  "accessibility",
  "nondiscrimination",
  "media-policy",
  "copyright",
  "emergency",
  "complaints",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const slug of slugs) {
    const enPath = slug ? `/${slug}` : "/";
    const koPath = slug ? `/ko/${slug}` : "/ko";
    entries.push({ url: `${base}${enPath}` });
    entries.push({ url: `${base}${koPath}` });
  }
  return entries;
}
