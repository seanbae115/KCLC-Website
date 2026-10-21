import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import type { Lang } from "@/lib/nav";
import { organizations } from "@/lib/organizations";

export default function OrganizationsContent({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return <><Header lang={lang} currentPath="/organizations" /><main id="main">
    <PageHero kicker="COMMUNITY CONNECTIONS" title={ko ? "관련 단체" : "Community Organizations"} lead={ko ? "건강하고 활기찬 일상을 위한 단체와 자원을 만나보세요. 로고나 홈페이지 버튼을 누르면 해당 단체의 공식 웹사이트로 연결됩니다." : "Explore organizations and resources for a healthy, active life. Select a logo or website button to visit the organization's official website."} />
    <section className="section"><div className="shell">
      <div className="organization-grid">
        {organizations.map(org => <article className="organization-card" key={org.id}>
          <a className="organization-logo" href={org.url} target="_blank" rel="noopener noreferrer" aria-label={`${org.name} — ${ko ? "공식 홈페이지 (새 창)" : "official website (opens in a new tab)"}`}><img src={org.logo} alt={org.name} width="165" height="64" /></a>
          <p className="section-kicker">{org.category[lang]}</p>
          <h2>{org.name}</h2><p>{org.description[lang]}</p>
          <a className="button button-gold" href={org.url} target="_blank" rel="noopener noreferrer">{ko ? "공식 홈페이지 방문 ↗" : "Visit official website ↗"}<span className="sr-only">{ko ? " (새 창)" : " (opens in a new tab)"}</span></a>
        </article>)}
      </div>
    </div></section>
  </main><Footer lang={lang} /></>;
}
