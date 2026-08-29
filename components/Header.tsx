import Link from "next/link";
import { ctaNav, langHref, primaryNav, siteInfo, type Lang } from "@/lib/nav";

export default function Header({ lang, currentPath }: { lang: Lang; currentPath: string }) {
  const info = siteInfo[lang];
  const nav = primaryNav[lang];
  const cta = ctaNav[lang];
  const otherLang: Lang = lang === "ko" ? "en" : "ko";
  const logoHref = langHref("/", lang);

  return (
    <>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>{info.tagline}</span>
          <span className="topbar-contact">{info.phone} · Buena Park, California</span>
        </div>
      </div>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link className="brand" href={logoHref} aria-label={`${info.name} home`}>
            <img src="/kslc-logo.png" alt={info.name} />
          </Link>
          <div className="nav-actions">
            <Link className="nav-text-action" href={cta.referral.href}>
              {cta.referral.label}
            </Link>
            <Link className="nav-text-action" href={cta.donate.href}>
              {cta.donate.label}
            </Link>
            <Link className="nav-cta" href={cta.request.href}>
              {cta.request.label}
            </Link>
            <Link className="nav-lang" href={langHref(currentPath, otherLang)}>
              {lang === "ko" ? "한국어 | English" : "English | 한국어"}
            </Link>
          </div>
          <div className="mobile-controls">
            <Link className="nav-lang" href={langHref(currentPath, otherLang)}>
              {lang === "ko" ? "English" : "한국어"}
            </Link>
            <details className="mobile-nav">
              <summary aria-label={lang === "ko" ? "메뉴 열기" : "Open menu"}>
                {lang === "ko" ? "메뉴" : "Menu"}
              </summary>
              <div className="mobile-menu">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
                <Link href={cta.request.href}>{cta.request.label}</Link>
                <Link href={cta.referral.href}>{cta.referral.label}</Link>
                <Link href={cta.donate.href}>{cta.donate.label}</Link>
              </div>
            </details>
          </div>
        </div>
        <div className="shell nav-secondary">
          <nav className="desktop-nav" aria-label={lang === "ko" ? "주요 메뉴" : "Main menu"}>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
