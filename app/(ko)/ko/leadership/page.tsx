import type { Metadata } from "next";
import LeadershipContent from "@/components/LeadershipContent";

export const metadata: Metadata = {
  title: "리더십·조직",
  description: "Korean Senior Life Campus의 이사회와 스태프를 소개합니다.",
};

export default function LeadershipPage() {
  return <LeadershipContent lang="ko" />;
}
