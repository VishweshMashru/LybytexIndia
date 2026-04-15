import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ShopClient from "./ShopClient";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { PRODUCTS, CATEGORIES } from "../components/products";

export const metadata: Metadata = {
  title: "All African Fabric Collections — Kente, Embroidery & Scarves",
  description: "Browse our full catalog of African fabrics. Wholesale Kente fabric, Brissi embroidery, Duku scarves and more — manufactured in Surat, India.",
  alternates: { canonical: "https://lybytex.com/shop" },
};

export default function ShopPage() {
  // Build product schema for Google
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "LybyTex India — African Fabric Collections",
    "url": "https://lybytex.com/shop",
    "itemListElement": PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "@id": `https://lybytex.com/shop#${p.id}`,
        "name": p.name,
        "description": p.meta,
        "category": p.category,
        "image": p.images?.[0] ?? "",
        "brand": {
          "@type": "Brand",
          "name": "LybyTex India",
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": p.price.replace("$", ""),
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "url": `https://lybytex.com/shop#${p.id}`,
          "seller": {
            "@type": "Organization",
            "name": "LybyTex India",
          },
        },
      },
    })),
  };

  return (
    <main style={{ background: "#fff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <ShopClient products={PRODUCTS} categories={CATEGORIES} />
      <Contact />
      <Footer />
    </main>
  );
}