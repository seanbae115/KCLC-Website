import type { Metadata } from "next";
import { Noto_Sans_KR, Montserrat } from "next/font/google";
import "../globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kslcampus.org"),
  title: {
    default: "Korean Senior Life Campus (KSLC) | A Community Before a Campus",
    template: "%s | KSLC",
  },
  description:
    "KSLC Navigation Center connects Korean seniors and their families to health, benefits, housing, care, and community services.",
  alternates: { languages: { en: "/en", ko: "/" } },
  icons: { icon: "/favicon.svg" },
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSansKR.variable} ${montserrat.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
