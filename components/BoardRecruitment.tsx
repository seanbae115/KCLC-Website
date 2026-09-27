import { siteInfo, type Lang } from "@/lib/nav";

/**
 * Board and advisor recruitment, including the 2026-10-10 information session.
 * Remove or update the session block once that date has passed.
 */
export default function BoardRecruitment({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const info = siteInfo[lang];

  const areas = ko
    ? ["비영리 재정", "법률", "의료", "노인복지", "주거", "교통", "공공혜택", "기금개발", "지역사회 관계", "IT·데이터", "홍보"]
    : ["Nonprofit finance", "Law", "Healthcare", "Senior services", "Housing", "Transportation", "Public benefits", "Fund development", "Community relations", "IT & data", "Communications"];

  return (
    <section className="section" id="board" style={{ background: "var(--navy)", color: "white" }}>
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker light">BOARD &amp; ADVISORS</p>
            <h2 style={{ color: "white" }}>
              {ko ? "이사·전문위원을 모집합니다" : "We are recruiting board members and advisors"}
            </h2>
          </div>
          <p style={{ color: "rgba(255,255,255,.72)" }}>
            {ko
              ? "KSLC는 발대식에서 구성한 이사회를 바탕으로, 한인 시니어 지원 활동을 확대하기 위한 이사 및 전문위원 모집에 착수했습니다. 다양한 분야의 지역사회 경험과 전문성을 KSLC의 공익적 사명에 연결하기 위한 공식 이사회 확대 절차입니다."
              : "Building on the board formed at its launch, KSLC has begun recruiting directors and advisors to expand its work for Korean seniors. This is the formal process of widening the board so that community experience and expertise across many fields can serve KSLC's public mission."}
          </p>
        </div>

        <p className="board-areas-label">
          {ko ? "다음 분야의 경험을 가진 분을 폭넓게 찾고 있습니다" : "We are looking broadly for experience in"}
        </p>
        <ul className="board-areas">
          {areas.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <div className="board-session">
          <p className="section-kicker light">{ko ? "이사회 구성 설명회" : "INFORMATION SESSION"}</p>
          <dl>
            <div>
              <dt>{ko ? "일시" : "When"}</dt>
              <dd>
                {ko ? "10월 10일 토요일 오전 11시" : "Saturday, October 10, 11:00 AM"}
              </dd>
            </div>
            <div>
              <dt>{ko ? "장소" : "Where"}</dt>
              <dd>
                Korean Senior Life Campus (KSLC)
                <br />
                {info.address}
              </dd>
            </div>
            <div>
              <dt>{ko ? "문의" : "Contact"}</dt>
              <dd>
                <a href={info.phoneHref}>{info.phone}</a>
                {" · "}
                <a href={`mailto:${info.email}`}>{info.email}</a>
              </dd>
            </div>
          </dl>
          <a
            className="button button-gold"
            href={info.mapQuery}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ko ? "오시는 길 보기" : "Get directions"}
            <span aria-hidden="true"> ↗</span>
            <span className="sr-only"> ({ko ? "새 창에서 열림" : "opens in a new window"})</span>
          </a>
        </div>
      </div>
    </section>
  );
}
