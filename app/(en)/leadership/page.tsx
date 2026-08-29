import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the board of directors and founding leadership of Korean Senior Life Campus.",
};

const board = [
  { name: "Peter Lee", title: "Executive Director", img: "/team/peter-lee.jpg" },
  { name: "Sang Do Bae", title: "Director of Planning & Marketing", img: "/team/sangdo-bae.jpg" },
  { name: "David Kim", title: "Director of External Relations", img: "/team/david-kim.jpg" },
  { name: "Sunny Lee", title: "Director of Social Welfare", img: "/team/sunny-lee.jpg" },
  { name: "Jin Sung Moon", title: "Director of Social Welfare", img: "/team/jinsung-moon.jpg" },
  { name: "Hyunsook Park", title: "Director of Finance", img: "/team/hyunsook-park.jpg" },
];

export default function LeadershipPageEn() {
  return (
    <>
      <Header lang="en" currentPath="/leadership" />
      <main id="main">
        <PageHero
          kicker="LEADERSHIP"
          title="Leadership"
          lead="Meet KSLC's founding committee and leadership. Positions or individuals that are not yet confirmed are not published here."
        />
        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">BOARD OF DIRECTORS</p>
                <h2>Board of Directors</h2>
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
      <Footer lang="en" />
    </>
  );
}
