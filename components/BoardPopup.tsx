"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/nav";

/** Dismissal is tracked per language, so switching languages shows it once more. */
const dismissKey = (lang: Lang) => `kslc-board-session-2026-10-10-${lang}`;
/** Midnight PT on October 11 — the morning after the session. */
const SHOW_UNTIL = Date.UTC(2026, 9, 11, 7, 0, 0);

export default function BoardPopup({ lang, currentPath }: { lang: Lang; currentPath: string }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef<Element | null>(null);
  const ko = lang === "ko";

  const close = useCallback(() => {
    try {
      localStorage.setItem(dismissKey(lang), "1");
    } catch {
      /* private browsing — it will simply show again next visit */
    }
    setOpen(false);
    (restoreFocus.current as HTMLElement | null)?.focus?.();
  }, [lang]);

  useEffect(() => {
    // Nothing to announce once the session has passed.
    if (Date.now() > SHOW_UNTIL) return;
    // They are already reading the recruitment page.
    if (currentPath === "/partnership") return;
    // The home page shows it on every visit while the session is still ahead;
    // elsewhere, closing it once is respected.
    if (currentPath !== "/") {
      let dismissed = false;
      try {
        dismissed = localStorage.getItem(dismissKey(lang)) === "1";
      } catch {
        dismissed = false;
      }
      if (dismissed) return;
    }
    const t = setTimeout(() => {
      restoreFocus.current = document.activeElement;
      setOpen(true);
    }, 700);
    return () => clearTimeout(t);
  }, [currentPath, lang]);

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
        aria-label={
          ko
            ? "KSLC 이사·전문위원 모집 안내"
            : "KSLC board member and advisor recruitment notice"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="popup-close" onClick={close}>
          <span aria-hidden="true">✕</span>
          <span className="sr-only">{ko ? "안내 닫기" : "Close this notice"}</span>
        </button>

        {/* The poster carries the whole message, so its alt text has to as well. */}
        <img
          className="popup-poster"
          src={ko ? "/board-recruitment-poster.jpg" : "/board-recruitment-poster-en.jpg"}
          alt={
            ko
              ? "KSLC 이사·전문위원 모집 안내. 모집 설명회는 10월 10일 토요일 오전 11시, KSLC 사무실(7342 Orangethorpe Ave. #B-109, Buena Park, CA 90621)에서 열립니다. 참석 여부는 10월 8일 목요일까지 알려주시기 바랍니다. 문의 (657) 239-0226."
              : "KSLC is recruiting board members and advisors. The information session is Saturday, October 10 at 11:00 AM at the KSLC office, 7342 Orangethorpe Ave. #B-109, Buena Park, CA 90621. Please tell us you are coming by Thursday, October 8. Call (657) 239-0226."
          }
        />

        <a className="popup-more" href={`${ko ? "/ko" : ""}/partnership/#board`} onClick={close}>
          {ko ? "모집 안내 자세히 보기 →" : "See the full details →"}
        </a>
      </div>
    </div>
  );
}
