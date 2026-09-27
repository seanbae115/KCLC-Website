import type { Metadata } from "next";
import NewsContent from "@/components/NewsContent";

export const metadata: Metadata = {
  title: "News",
  description: "KSLC's launch, press coverage, and official announcements.",
};

export default function NewsPageEn() {
  return <NewsContent lang="en" />;
}
