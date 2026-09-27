import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import LaunchPhoto from "@/components/LaunchPhoto";
import { newsItems } from "@/lib/news";
import type { Lang } from "@/lib/nav";

export default function NewsContent({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const press = newsItems.filter((n) => n.body);
  const coverage = newsItems.filter((n) => n.external);

  return (
    <>
      <Header lang={lang} currentPath="/news" />
      <main id="main">
        <PageHero
          kicker="NEWS"
          title={ko ? "소식" : "News"}
          lead={
            ko
              ? "KSLC의 발대 소식과 언론 보도, 공식 보도자료를 모았습니다."
              : "KSLC's launch, press coverage, and official announcements."
          }
        />

        <section className="section">
          <div className="shell">
            <LaunchPhoto lang={lang} />
          </div>
        </section>

        {coverage.length > 0 && (
          <section className="section-tight" style={{ paddingTop: 0 }}>
            <div className="shell">
              <div className="section-heading">
                <div>
                  <p className="section-kicker">{ko ? "언론 보도" : "IN THE NEWS"}</p>
                  <h2>{ko ? "언론에 소개된 KSLC" : "KSLC in the press"}</h2>
                </div>
              </div>
              <div className="download-list">
                {coverage.map((n) => (
                  <div className="download-item" key={n.slug}>
                    <div>
                      <span className="download-tag">{n.dateLabel[lang]}</span>
                      <h3>{n.title[lang]}</h3>
                      <p>{n.lead[lang]}</p>
                      <p className="news-source">{n.external!.source[lang]}</p>
                    </div>
                    <a
                      className="button button-navy"
                      href={n.external!.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ko ? "기사 보기" : "Read article"}
                      <span aria-hidden="true"> ↗</span>
                      <span className="sr-only"> ({ko ? "새 창에서 열림" : "opens in a new window"})</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {press.map((n) => (
          <section className="section" style={{ background: "var(--warm)" }} key={n.slug}>
            <div className="shell">
              <article className="press-release">
                <p className="section-kicker">
                  {n.kind[lang]} · {n.dateLabel[lang]}
                </p>
                <h2>{n.title[lang]}</h2>
                <p className="press-lead">{n.lead[lang]}</p>

                {n.body!.map((b, i) => {
                  if (b.type === "h") return <h3 key={i}>{b.text[lang]}</h3>;
                  if (b.type === "quote")
                    return (
                      <blockquote key={i}>
                        {b.text[lang]}
                        <cite>{b.by[lang]}</cite>
                      </blockquote>
                    );
                  return <p key={i}>{b.text[lang]}</p>;
                })}

                <div className="press-contact">
                  <p className="section-kicker">{ko ? "문의" : "MEDIA CONTACT"}</p>
                  <p>
                    {ko ? "배상도 회장" : "Sang Do Bae, Chair"} · Korean Senior Life Campus
                    <br />
                    7342 Orangethorpe Ave. #B-109, Buena Park, CA 90621
                    <br />
                    <a href="tel:+16572390226">(657) 239-0226</a> ·{" "}
                    <a href="mailto:info@kslcampus.org">info@kslcampus.org</a>
                  </p>
                </div>
              </article>
            </div>
          </section>
        ))}
      </main>
      <Footer lang={lang} />
    </>
  );
}
