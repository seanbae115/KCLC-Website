"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/nav";

type Photo = { src: string; alt: Record<Lang, string> };

export default function GalleryPhotos({ photos, lang }: { photos: Photo[]; lang: Lang }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const ko = lang === "ko";

  const step = useCallback(
    (by: number) => setSelected((i) => Math.min(photos.length - 1, Math.max(0, i + by))),
    [photos.length],
  );

  // 크게 보기에서는 사진이 여러 장이라 화살표 키로도 넘길 수 있게 합니다.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dialog.current?.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [step]);

  const open = (index: number) => {
    setSelected(index);
    dialog.current?.showModal();
  };

  return (
    <>
      <div className="gallery-photos">
        {photos.map((photo, index) => (
          <button
            type="button"
            className="gallery-photo"
            key={photo.src}
            onClick={() => open(index)}
            aria-label={`${photo.alt[lang]} — ${ko ? "크게 보기" : "View larger"}`}
          >
            {/* 타일은 가운데를 잘라 같은 크기로 보이고, 누르면 원본 전체가 열립니다. */}
            <img src={photo.src} alt={photo.alt[lang]} loading="lazy" />
            <span aria-hidden="true">{ko ? "크게 보기" : "View larger"}</span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-label={ko ? "사진 크게 보기" : "Photo viewer"}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="gallery-bar">
          <span className="gallery-count">
            {selected + 1} / {photos.length}
          </span>
          <div className="gallery-nav">
            <button
              type="button"
              onClick={() => step(-1)}
              disabled={selected === 0}
              aria-label={ko ? "이전 사진" : "Previous photo"}
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              disabled={selected === photos.length - 1}
              aria-label={ko ? "다음 사진" : "Next photo"}
            >
              →
            </button>
            <button type="button" className="gallery-close" onClick={() => dialog.current?.close()}>
              {ko ? "닫기 ×" : "Close ×"}
            </button>
          </div>
        </div>
        <img src={photos[selected].src} alt={photos[selected].alt[lang]} />
        <p>{photos[selected].alt[lang]}</p>
      </dialog>
    </>
  );
}
