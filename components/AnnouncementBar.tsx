import Link from "next/link";
import { langHref, type Lang } from "@/lib/nav";

/**
 * Time-limited notice for the 2026-10-10 board information session.
 * Remove this component (and its use in Header) once the session has passed.
 */
export default function AnnouncementBar({ lang }: { lang: Lang }) {
  const href = `${langHref("/partnership", lang)}#board`;
  return (
    <div className="announce">
      <div className="shell announce-inner">
        <span className="announce-tag">{lang === "ko" ? "모집" : "OPEN"}</span>
        <p>
          {lang === "ko" ? (
            <>
              KSLC가 <strong>이사·전문위원</strong>을 모집합니다. 이사회 구성 설명회{" "}
              <strong>10월 10일(토) 오전 11시</strong>
            </>
          ) : (
            <>
              KSLC is recruiting <strong>board members and advisors</strong>. Information session{" "}
              <strong>Saturday, October 10, 11:00 AM</strong>
            </>
          )}
        </p>
        <Link href={href}>{lang === "ko" ? "자세히 보기 →" : "Learn more →"}</Link>
      </div>
    </div>
  );
}
