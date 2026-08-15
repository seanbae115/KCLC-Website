import Link from "next/link";
import { footerLinks, footerQuickLinks, langHref, siteInfo, type Lang } from "@/lib/nav";

export default function Footer({ lang }: { lang: Lang }) {
  const info = siteInfo[lang];
  const quick = footerQuickLinks[lang];
  const legal = footerLinks[lang];
  const contactHref = langHref("/contact", lang);
  const emergencyHref = langHref("/emergency", lang);

  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <img src="/kslc-logo.png" alt={info.name} />
          <p>{info.missionShort}</p>
          <p className="footer-emergency">
            {lang === "ko" ? (
              <>
                응급상황 시 <strong>911</strong>로 연락하십시오.{" "}
                <Link href={emergencyHref}>긴급상황 안내 보기</Link>
              </>
            ) : (
              <>
                In an emergency, call <strong>911</strong>.{" "}
                <Link href={emergencyHref}>See emergency information</Link>
              </>
            )}
          </p>
        </div>
        <div className="footer-links">
          {quick.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <strong>{info.name}</strong>
          <span>{info.address}</span>
          <span>
            <a href={info.phoneHref}>{info.phone}</a>
          </span>
          <span>
            <a href={`mailto:${info.email}`}>{info.email}</a>
          </span>
          <span>{info.domain}</span>
          <Link href={contactHref}>
            {lang === "ko" ? "문의·오시는 길 →" : "Contact & directions →"}
          </Link>
        </div>
      </div>
      <div className="shell footer-legal">
        {legal.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 {info.name}. All rights reserved.</span>
        <span>A Community Before a Campus.</span>
      </div>
    </footer>
  );
}
