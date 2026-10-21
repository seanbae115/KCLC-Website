import type { Metadata } from "next";
import OrganizationsContent from "@/components/OrganizationsContent";
export const metadata: Metadata = { title: "관련 단체", description: "건강하고 활기찬 일상을 위한 단체와 공식 홈페이지를 소개합니다." };
export default function Page() { return <OrganizationsContent lang="ko" />; }
