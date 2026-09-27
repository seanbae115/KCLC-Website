import type { Metadata } from "next";
import NewsContent from "@/components/NewsContent";

export const metadata: Metadata = {
  title: "소식",
  description: "KSLC의 발대 소식과 언론 보도, 공식 보도자료를 모았습니다.",
};

export default function NewsPage() {
  return <NewsContent lang="ko" />;
}
