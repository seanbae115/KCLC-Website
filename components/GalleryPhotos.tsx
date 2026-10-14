"use client";

import { useRef, useState } from "react";
import type { Lang } from "@/lib/nav";

type Photo = { src: string; alt: Record<Lang, string> };
export default function GalleryPhotos({ photos, lang }: { photos: Photo[]; lang: Lang }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const ko = lang === "ko";
  return <>
    <div className="gallery-photos">{photos.map((photo, index) => <button type="button" className="gallery-photo" key={photo.src} onClick={() => { setSelected(index); dialog.current?.showModal(); }} aria-label={`${photo.alt[lang]} — ${ko ? "크게 보기" : "View larger"}`}>
      <img src={photo.src} alt={photo.alt[lang]} loading="lazy" />
      <span>{ko ? "사진 크게 보기 ↗" : "View photo ↗"}</span>
    </button>)}</div>
    <dialog ref={dialog} className="gallery-dialog" aria-label={ko ? "사진 크게 보기" : "Photo viewer"} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <button type="button" className="button button-navy" onClick={() => dialog.current?.close()}>{ko ? "닫기 ×" : "Close ×"}</button>
      <img src={photos[selected].src} alt={photos[selected].alt[lang]} />
      <p>{photos[selected].alt[lang]}</p>
    </dialog>
  </>;
}
