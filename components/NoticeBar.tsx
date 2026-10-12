"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { langHref, type Lang } from "@/lib/nav";
import { isStillRunning, type Notice } from "@/lib/notices";

/**
 * 끝나는 날짜가 지나면 스스로 사라지는 공지 배너.
 *
 * 왜 클라이언트 쪽에서 날짜를 다시 보는가:
 * 페이지는 배포할 때 미리 만들어져 저장됩니다. 그래서 서버에서 한 번 판단한
 * 날짜는 다음 배포 때까지 그대로 굳어버립니다. 방문자의 브라우저에서 한 번 더
 * 확인해야, 배포를 하지 않아도 날짜가 지난 공지가 내려갑니다.
 *
 * 처음 그릴 때는 서버와 같은 모양으로 그려야 하므로(화면 떨림 방지) 일단
 * 보여주고, 날짜가 지났으면 바로 감춥니다.
 */
export default function NoticeBar({ notice, lang }: { notice: Notice; lang: Lang }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!isStillRunning(notice)) setHidden(true);
  }, [notice]);

  if (hidden) return null;

  return (
    <div className="announce">
      <div className="shell announce-inner">
        <span className="announce-tag">{notice.tag[lang]}</span>
        <p>{renderBold(notice.text[lang])}</p>
        <Link href={langHref(notice.href, lang)}>{notice.linkLabel[lang]}</Link>
      </div>
    </div>
  );
}

/** **별표 두 개**로 감싼 부분을 굵게 바꿉니다. */
function renderBold(text: string) {
  return text.split(/\*\*/).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>,
  );
}
