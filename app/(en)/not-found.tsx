import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFoundEn() {
  return (
    <>
      <Header lang="en" currentPath="/" />
      <main id="main">
        <section className="section" style={{ textAlign: "center" }}>
          <div className="shell">
            <p className="section-kicker">404</p>
            <h1 style={{ color: "var(--navy)", fontSize: "36px" }}>Page not found.</h1>
            <p style={{ color: "var(--ink-soft)", margin: "18px 0 32px" }}>
              The page you requested may have been moved or removed.
            </p>
            <Link className="button button-navy" href="/">
              Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
