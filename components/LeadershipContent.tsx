import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import LaunchPhoto from "@/components/LaunchPhoto";
import { board, staff, type Person } from "@/lib/leadership";
import { langHref, type Lang } from "@/lib/nav";

function Roster({ people, lang }: { people: Person[]; lang: Lang }) {
  return (
    <div className="roster">
      {people.map((p) => (
        <div className="roster-row" key={p.nameKo}>
          <span className="roster-name">
            {p.nameKo}
            {p.nameEn && <small>{p.nameEn}</small>}
          </span>
          <span className="roster-title">
            {p.title[lang]}
            {p.officer && <span className="roster-officer">{p.officer[lang]}</span>}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function LeadershipContent({ lang }: { lang: Lang }) {
  const ko = lang === "ko";

  return (
    <>
      <Header lang={lang} currentPath="/leadership" />
      <main id="main">
        <PageHero
          kicker="LEADERSHIP"
          title={ko ? "리더십·조직" : "Leadership"}
          lead={
            ko
              ? "2026년 9월 24일 발대식에서 11명의 스태프가 모였고, 그중 7명으로 이사회를 구성했습니다."
              : "Eleven staff gathered at the launch on September 24, 2026; seven of them form the board."
          }
        />

        <section className="section">
          <div className="shell">
            <LaunchPhoto lang={lang} />
          </div>
        </section>

        <section className="section" style={{ background: "var(--warm)", paddingTop: 0 }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">BOARD OF DIRECTORS</p>
                <h2>{ko ? "이사회" : "Board of Directors"}</h2>
              </div>
              <p>
                {ko
                  ? "발대식에서 선임된 임원과 이사진입니다."
                  : "The officers and directors elected at the launch."}
              </p>
            </div>
            <Roster people={board} lang={lang} />

            <div className="section-heading" style={{ marginTop: 56 }}>
              <div>
                <p className="section-kicker">STAFF</p>
                <h2>{ko ? "스태프" : "Staff"}</h2>
              </div>
              <p>
                {ko
                  ? "어르신을 직접 만나 상담하고 기관 연결을 담당합니다."
                  : "They meet with seniors directly and handle consultations and referrals."}
              </p>
            </div>
            <Roster people={staff} lang={lang} />
          </div>
        </section>

        <section className="section-tight">
          <div className="shell">
            <div className="card" style={{ maxWidth: 680 }}>
              <h3>{ko ? "이사·전문위원을 모집합니다" : "We are recruiting board members and advisors"}</h3>
              <p>
                {ko
                  ? "비영리 재정, 법률, 의료, 노인복지, 주거, 교통, 공공혜택, 기금개발, 지역사회 관계, IT·데이터, 홍보 등의 경험을 가진 지역사회 인사를 찾고 있습니다."
                  : "We are looking for community members with experience in nonprofit finance, law, healthcare, senior services, housing, transportation, public benefits, fund development, community relations, IT and data, or communications."}
              </p>
              <div style={{ marginTop: 20 }}>
                <Link className="button button-navy" href={`${langHref("/partnership", lang)}#board`}>
                  {ko ? "모집 안내 보기" : "See the details"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
