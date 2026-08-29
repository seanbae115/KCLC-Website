// Handles any URL that doesn't match a route anywhere in the app (in either
// language). Required because this app has two root layouts (English at "/"
// and Korean at "/ko") — see https://nextjs.org/docs for global-not-found.
// This bypasses both layouts, so it imports its own styles/fonts.
import "./globals.css";
import { Noto_Sans_KR, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";

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
  title: "Page Not Found | KSLC",
  description: "The page you requested could not be found.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${notoSansKR.variable} ${montserrat.variable}`}>
      <body>
        <section
          className="section"
          style={{ textAlign: "center", minHeight: "70vh", display: "flex", alignItems: "center" }}
        >
          <div className="shell">
            <p className="section-kicker">404</p>
            <h1 style={{ color: "var(--navy)", fontSize: 40, marginBottom: 8 }}>Page not found.</h1>
            <p style={{ color: "var(--ink-soft)", margin: "8px 0 6px" }}>
              The page you requested may have been moved or removed.
            </p>
            <p style={{ color: "var(--ink-softer)", fontSize: 14, marginBottom: 32 }}>
              요청하신 페이지를 찾을 수 없습니다.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link className="button button-navy" href="/">
                Back to Home
              </Link>
              <Link className="button button-outline" href="/ko">
                한국어 홈으로
              </Link>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
