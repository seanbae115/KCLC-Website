export default function PageHero({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-inner">
        <p className="section-kicker light">{kicker}</p>
        <h1>{title}</h1>
        {lead ? <p className="page-hero-lead">{lead}</p> : null}
      </div>
    </section>
  );
}
