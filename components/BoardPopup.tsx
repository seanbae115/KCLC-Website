"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { siteInfo, type Lang } from "@/lib/nav";

const DISMISS_KEY = "kslc-board-session-2026-10-10";
/** Midnight PT on October 11 — the morning after the session. */
const SHOW_UNTIL = Date.UTC(2026, 9, 11, 7, 0, 0);

export default function BoardPopup({ lang, currentPath }: { lang: Lang; currentPath: string }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef<Element | null>(null);
  const ko = lang === "ko";
  const info = siteInfo[lang];

  const close = useCallback(() => {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* private browsing — it will simply show again next visit */
    }
    setOpen(false);
    (restoreFocus.current as HTMLElement | null)?.focus?.();
  }, []);

  useEffect(() => {
    // Nothing to announce once the session has passed.
    if (Date.now() > SHOW_UNTIL) return;
    // They are already reading the recruitment page.
    if (currentPath === "/partnership") return;
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      dismissed = false;
    }
    if (dismissed) return;
    const t = setTimeout(() => {
      restoreFocus.current = document.activeElement;
      setOpen(true);
    }, 700);
    return () => clearTimeout(t);
  }, [currentPath]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="popup-backdrop" onClick={close}>
      <div
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="popup-close" onClick={close}>
          <span aria-hidden="true">✕</span>
          <span className="sr-only">{ko ? "안내 닫기" : "Close this notice"}</span>
        </button>

        <img
          className="popup-poster"
          src="/board-recruitment-poster.jpg"
          alt={
            ko
              ? "KSLC 이사·전문위원 모집 안내 포스터. 모집 설명회는 10월 10일 토요일 오전 11시 KSLC 사무실에서 열립니다."
              : "KSLC board and advisor recruitment poster. The information session is Saturday, October 10 at 11:00 AM at the KSLC office."
          }
        />

        <div className="popup-body">
          <h2 id="popup-title">
            {ko ? "이사·전문위원을 모집합니다" : "We are recruiting board members and advisors"}
          </h2>
          <dl className="popup-facts">
            <div>
              <dt>{ko ? "설명회" : "Session"}</dt>
              <dd>{ko ? "10월 10일(토) 오전 11시" : "Saturday, October 10, 11:00 AM"}</dd>
            </div>
            <div>
              <dt>{ko ? "장소" : "Place"}</dt>
              <dd>{info.address}</dd>
            </div>
            <div>
              <dt>{ko ? "참석 신청" : "RSVP by"}</dt>
              <dd>{ko ? "10월 8일(목)까지" : "Thursday, October 8"}</dd>
            </div>
          </dl>

          <div className="popup-actions">
            <a className="button button-gold" href={info.phoneHref}>
              {ko ? `전화 신청 ${info.phone}` : `Call ${info.phone}`}
            </a>
            <a className="popup-more" href={`${ko ? "/ko" : ""}/partnership/#board`} onClick={close}>
              {ko ? "모집 안내 자세히 보기 →" : "See the full details →"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
