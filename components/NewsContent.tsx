import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import LaunchPhoto from "@/components/LaunchPhoto";
import { newsItems } from "@/lib/news";
import type { Lang } from "@/lib/nav";

export default function NewsContent({ lang }: { lang: Lang }) {
  const ko = lang === "ko";

  return (
    <>
      <Header lang={lang} currentPath="/news" />
      <main id="main">
        <PageHero
          kicker="NEWS"
          title={ko ? "소식" : "News"}
          lead={
            ko
              ? "KSLC의 발대 소식과 언론 보도를 모았습니다."
              : "KSLC's launch and the press coverage that followed."
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
                <p className="section-kicker">IN THE PRESS</p>
                <h2>{ko ? "언론에 소개된 KSLC" : "KSLC in the press"}</h2>
              </div>
            </div>

            <div className="clipping-list">
              {newsItems.map((n) => (
                <article className="clipping" key={n.slug}>
                  <div className="clipping-meta">
                    <span className="download-tag">{n.dateLabel[lang]}</span>
                    <h3>{n.title[lang]}</h3>
                    <p>{n.lead[lang]}</p>
                    <p className="news-source">{n.source[lang]}</p>
                    {n.href && (
                      <a
                        className="button button-navy"
                        href={n.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {ko ? "온라인 기사 보기" : "Read online"}
                        <span aria-hidden="true"> ↗</span>
                        <span className="sr-only">
                          {" "}
                          ({ko ? "새 창에서 열림" : "opens in a new window"})
                        </span>
                      </a>
                    )}
                  </div>

                  {n.clipping && (
                    <figure className="clipping-figure">
                      <img src={n.clipping.src} alt={n.clipping.alt[lang]} loading="lazy" />
                    </figure>
                  )}
                </article>
              ))}
            </div>

            <p className="service-boundary">
              {ko
                ? "지면 이미지의 저작권은 각 언론사에 있습니다. KSLC 관련 보도 부분만 발췌해 게재합니다."
                : "Copyright in the printed pages belongs to each publication. Only the portion covering KSLC is reproduced here."}
            </p>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
