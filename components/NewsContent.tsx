import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import LaunchPhoto from "@/components/LaunchPhoto";
import { newsItems, videoItems } from "@/lib/news";
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

        <section className="section" style={{ background: "var(--warm)", paddingBottom: 0 }}>
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">ON AIR</p>
                <h2>{ko ? "영상으로 보는 KSLC" : "KSLC on air"}</h2>
              </div>
            </div>

            <div className="video-list">
              {videoItems.map((v) => (
                <article className="video-item" key={v.slug}>
                  <div className="video-embed">
                    {/* nocookie host: the visitor is not tracked until they press play. */}
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                      title={v.title[lang]}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="video-meta">
                    <span className="download-tag">{v.dateLabel[lang]}</span>
                    <h3>{v.title[lang]}</h3>
                    <p>{v.lead[lang]}</p>
                    <p className="news-source">{v.source[lang]}</p>
                    <a
                      className="text-link"
                      href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ko ? "유튜브에서 보기" : "Watch on YouTube"}
                      <span aria-hidden="true"> ↗</span>
                      <span className="sr-only">
                        {" "}
                        ({ko ? "새 창에서 열림" : "opens in a new window"})
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
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
