import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThankYouContent from "./ThankYouContent";

export const metadata: Metadata = {
  title: "감사합니다",
  description: "요청이 정상적으로 접수되었습니다.",
};

export default function ThankYouPage() {
  return (
    <>
      <Header lang="ko" currentPath="/thank-you" />
      <main id="main">
        <Suspense fallback={null}>
          <ThankYouContent />
        </Suspense>
      </main>
      <Footer lang="ko" />
    </>
  );
}
