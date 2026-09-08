import type { FaqBlock, ServiceDetail } from "@/lib/serviceDetails";
import type { Lang } from "@/lib/nav";

function Blocks({ blocks, lang }: { blocks: FaqBlock[]; lang: Lang }) {
  const newWindow = lang === "ko" ? "새 창에서 열림" : "opens in a new window";
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === "p") return <p key={i}>{b.text}</p>;
        if (b.type === "ul")
          return (
            <ul key={i}>
              {b.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          );
        if (b.type === "link")
          return (
            <p key={i} className="faq-link">
              <a href={b.href} target="_blank" rel="noopener noreferrer">
                {b.label}
                <span aria-hidden="true"> ↗</span>
                <span className="sr-only"> ({newWindow})</span>
              </a>
            </p>
          );
        return (
          <p key={i} className="faq-contact">
            <span className="faq-contact-label">{b.label}</span>
            <a href={b.tel}>{b.phone}</a>
            {b.note ? <span className="faq-contact-note">{b.note}</span> : null}
          </p>
        );
      })}
    </>
  );
}

export default function ServiceFaq({
  detail,
  lang,
  verifiedOn,
}: {
  detail: ServiceDetail;
  lang: Lang;
  verifiedOn: string;
}) {
  const heading = lang === "ko" ? `서비스 ${Number(detail.number)} — ${detail.title}` : `Service ${Number(detail.number)} — ${detail.title}`;

  return (
    <section className="service-detail" id={detail.id}>
      <div className="service-detail-head">
        <h2>{heading}</h2>
        <p className="verified-on">{verifiedOn}</p>
      </div>
      {detail.groups.map((g, gi) => (
        <div className="service-detail-group" key={g.heading ?? gi}>
          {g.heading ? <h3>{g.heading}</h3> : null}
          <div className="faq">
            {g.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="faq-body">
                  <Blocks blocks={f.blocks} lang={lang} />
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
