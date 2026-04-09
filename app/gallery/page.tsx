import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Fabric Gallery — Kente, Embroidery & Scarf Colorways",
  description:
    "Browse colorways and fabric samples from LybyTex India. Kente weaves, Brissi embroidery patterns, Duku scarves and more. 500+ designs available for wholesale order.",
  keywords: [
    "kente fabric colors",
    "african embroidery patterns",
    "duku scarf styles",
    "african fabric samples",
    "brissi fabric wholesale",
  ] as unknown as string,
  alternates: { canonical: "https://lybytex.com/gallery" },
  openGraph: {
    title: "African Fabric Gallery | LybyTex India",
    description: "Browse 500+ African fabric designs — Kente, Brissi embroidery, Duku scarves.",
    url: "https://lybytex.com/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}