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
    const koPath = slug ? `/${slug}` : "/";
    const enPath = slug ? `/en/${slug}` : "/en";
    entries.push({ url: `${base}${koPath}` });
    entries.push({ url: `${base}${enPath}` });
  }
  return entries;
}
