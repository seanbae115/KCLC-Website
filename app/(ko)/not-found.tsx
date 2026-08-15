import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header lang="ko" currentPath="/" />
      <main id="main">
        <section className="section" style={{ textAlign: "center" }}>
          <div className="shell">
            <p className="section-kicker">404</p>
            <h1 style={{ color: "var(--navy)", fontSize: "36px" }}>페이지를 찾을 수 없습니다.</h1>
            <p style={{ color: "var(--ink-soft)", margin: "18px 0 32px" }}>
              요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
            </p>
            <Link className="button button-navy" href="/">
              홈으로 돌아가기
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
