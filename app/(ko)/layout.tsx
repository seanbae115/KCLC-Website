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
    default: "Korean Senior Life Campus (KSLC) | 한인 시니어라면 가장 먼저 찾는 곳",
    template: "%s | KSLC",
  },
  description:
    "KSLC Navigation Center는 한인 시니어와 가족을 위해 건강, 공공혜택, 주거, 돌봄, 지역사회 서비스를 연결합니다.",
  alternates: { languages: { ko: "/ko", en: "/" } },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} ${montserrat.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          본문 바로가기
        </a>
        {children}
      </body>
    </html>
  );
}
