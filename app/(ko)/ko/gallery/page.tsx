import type { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";
export const metadata: Metadata = { title: "사진 갤러리", description: "KSLC의 행사와 공동체 활동 사진을 앨범별로 만나보세요." };
export default function GalleryPage() { return <GalleryContent lang="ko" />; }
