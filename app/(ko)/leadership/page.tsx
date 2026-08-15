import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "리더십·조직",
  description: "Korean Senior Life Campus의 이사회와 준비위원회를 소개합니다.",
};

const board = [
  { name: "Peter Lee", title: "사무총장 · Executive Director", img: "/team/peter-lee.jpg" },
  { name: "배상도 · Sang Do Bae", title: "기획 및 마케팅 이사 · Director of Planning & Marketing", img: "/team/sangdo-bae.jpg" },
  { name: "David Kim", title: "대외협력 이사 · Director of External Relations", img: "/team/david-kim.jpg" },
  { name: "이선희 · Sunny Lee", title: "사회복지 1담당 이사 · Director of Social Welfare", img: "/team/sunny-lee.jpg" },
  { name: "문진성 · Jin Sung Moon", title: "사회복지 2담당 이사 · Director of Social Welfare", img: "/team/jinsung-moon.jpg" },
  { name: "박현숙 · Hyunsook Park", title: "회계 담당 이사 · Director of Finance", img: "/team/hyunsook-park.jpg" },
];

export default function LeadershipPage() {
  return (
    <>
      <Header lang="ko" currentPath="/leadership" />
      <main id="main">
        <PageHero
          kicker="LEADERSHIP"
          title="리더십·조직"
          lead="KSLC의 준비위원회 및 창립 리더십을 소개합니다. 확정되지 않은 직책이나 인물은 공개하지 않습니다."
        />
        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">BOARD OF DIRECTORS</p>
                <h2>이사회 · 준비위원회</h2>
              </div>
            </div>
            <div className="team-grid">
              {board.map((m) => (
                <div className="team-card" key={m.name}>
                  <img src={m.img} alt={m.name} />
                  <h3>{m.name}</h3>
                  <p>{m.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang="ko" />
    </>
  );
}
