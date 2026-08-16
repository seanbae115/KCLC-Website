import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThankYouContentEn from "./ThankYouContentEn";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your request has been received.",
};

export default function ThankYouPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/thank-you" />
      <main id="main">
        <Suspense fallback={null}>
          <ThankYouContentEn />
        </Suspense>
      </main>
      <Footer lang="en" />
    </>
  );
}
