import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import GalleryPhotos from "./GalleryPhotos";
import { albums } from "@/lib/gallery";
import type { Lang } from "@/lib/nav";

export default function GalleryContent({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return <><Header lang={lang} currentPath="/gallery" /><main id="main">
    <PageHero kicker={ko ? "함께한 순간들" : "MOMENTS TOGETHER"} title={ko ? "사진 갤러리" : "Photo Gallery"} lead={ko ? "사람을 만나고 공동체를 만들어가는 KSLC의 순간들을 앨범으로 모았습니다." : "Explore the moments that bring people together and build the KSLC community."} />
    <section className="section"><div className="shell">
      {albums.map(album => <article className="gallery-album" key={album.id}>
        <div className="section-heading"><div><p className="section-kicker"><time dateTime={album.date}>{album.date.replaceAll("-", ".")}</time> · {album.photos.length}{ko ? "장의 사진" : " photo"}</p><h2>{album.title[lang]}</h2></div><p>{album.description[lang]}</p></div>
        <GalleryPhotos photos={album.photos} lang={lang} />
      </article>)}
    </div></section>
  </main><Footer lang={lang} /></>;
}
