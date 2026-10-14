import type { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";
export const metadata: Metadata = { title: "Photo Gallery", description: "Photo albums from KSLC events and community activities." };
export default function GalleryPage() { return <GalleryContent lang="en" />; }
