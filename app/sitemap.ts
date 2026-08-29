import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://kslcampus.org";

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
