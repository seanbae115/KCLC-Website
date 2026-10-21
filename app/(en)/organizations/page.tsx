import type { Metadata } from "next";
import OrganizationsContent from "@/components/OrganizationsContent";
export const metadata: Metadata = { title: "Community Organizations", description: "Explore organizations and official websites for a healthy, active life." };
export default function Page() { return <OrganizationsContent lang="en" />; }
