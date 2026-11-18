import { Fragment } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import LaunchPhoto from "@/components/LaunchPhoto";
import { eventItems, newsItems, videoItems, type NewsItem } from "@/lib/news";
import type { Lang } from "@/lib/nav";

export default function NewsContent({ lang }: { lang: Lang }) {
  const ko = lang === "ko";

  const renderNewsItem = (n: NewsItem) => (
    <article className="clipping">
      <div className="clipping-meta">
        <time className="download-tag" dateTime={n.date}>{n.dateLabel[lang]}</time>
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
  );

  const items = [
    {
      date: "2026-09-24",
      slug: "kslc-launch",
      content: <LaunchPhoto lang={lang} />,
    },
    ...eventItems.map((event) => ({
      date: event.date,
      slug: event.slug,
      content: (
        <article className="clipping">
          <div className="clipping-meta">
            <time className="download-tag" dateTime={event.date}>{event.dateLabel[lang]}</time>
            <h3>{event.title[lang]}</h3>
            <p>{event.lead[lang]}</p>
          </div>
          <figure className="clipping-figure">
            <img src={event.photo.src} alt={event.photo.alt[lang]} width={event.photo.width} height={event.photo.height} loading="lazy" />
          </figure>
          {"body" in event && event.body && (
            <details style={{ gridColumn: "1 / -1", lineHeight: 1.8 }}>
              <summary style={{ cursor: "pointer", color: "var(--navy)", fontWeight: 700 }}>
                {ko ? "보도자료 전문 읽기" : "Read the full press release"}
              </summary>
              {event.body.map((paragraph, index) => <p key={index}>{paragraph[lang]}</p>)}
            </details>
          )}
        </article>
      ),
    })),
    ...newsItems.map((item) => ({
      date: item.date,
      slug: item.slug,
      content: renderNewsItem(item),
    })),
    ...videoItems.map((v) => ({
      date: v.date,
      slug: v.slug,
      content: (
        <article className="video-item">
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
            <time className="download-tag" dateTime={v.date}>{v.dateLabel[lang]}</time>
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
      ),
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Header lang={lang} currentPath="/news" />
      <main id="main">
        <PageHero
          kicker="NEWS"
          title={ko ? "소식" : "News"}
          lead={
            ko
              ? "KSLC의 행사 소식과 영상, 언론 보도를 모았습니다."
              : "Events, videos, and press coverage from KSLC."
          }
        />

        <section className="section">
          <div className="shell">
            <h2 className="sr-only">{ko ? "최신 소식" : "Latest news"}</h2>
            <div className="clipping-list">
              {items.map(({ slug, content }) => <Fragment key={slug}>{content}</Fragment>)}
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
