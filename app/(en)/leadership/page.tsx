import type { Metadata } from "next";
import LeadershipContent from "@/components/LeadershipContent";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the board and staff of Korean Senior Life Campus.",
};

export default function LeadershipPageEn() {
  return <LeadershipContent lang="en" />;
}
