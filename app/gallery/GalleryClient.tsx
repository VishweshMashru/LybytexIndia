"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PRODUCTS } from "../components/products";

const TABS = [
  { id: "all",        label: "All"                 },
  { id: "kente",      label: "Kente"               },
  { id: "embroidery", label: "Embroidery / Brissi"  },
  { id: "scarf",      label: "Scarves (Duku)"       },
];

const WA_BASE = "https://wa.me/919825124751?text=";

export default function GalleryClient() {
  const [active, setActive] = useState("all");
  const [hover, setHover] = useState<string | null>(null);

  const filtered = active === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cats.includes(active));

  return (
    <main>
      <Navbar />

      {/* Header */}
      <div style={{ paddingTop: 70, background: "var(--ink)" }}>
        <div className="page-px" style={{ padding: "80px 64px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
            Gallery
          </p>
          <h1 className="f-display page-h1" style={{ fontSize: "clamp(52px,9vw,110px)", lineHeight: 0.9, color: "#fff", marginBottom: 16 }}>
            ALL PRODUCTS
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", fontWeight: 300, marginBottom: 40, maxWidth: 480 }}>
            Browse our full range of African fabrics. Tap any product to inquire on WhatsApp.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="filter-tabs" style={{ display: "flex", overflowX: "auto", padding: "0 20px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {TABS.map(({ id, label }) => {
            const count = id === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.cats.includes(id)).length;
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                style={{
                  flexShrink: 0,
                  padding: "14px 22px",
                  fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                  border: "none",
                  borderBottom: isActive ? "3px solid var(--gold)" : "3px solid transparent",
                  background: "transparent",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                  cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap",
                }}
              >
                {label}
                <span style={{ marginLeft: 6, fontSize: 10, opacity: 0.5 }}>({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery grid */}
      <section className="page-px" style={{ padding: "48px 64px 120px", background: "var(--off)" }}>
        <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 32 }}>
          Showing {filtered.length} products
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {filtered.map(product => {
            const firstImage = product.images?.[0];
            const msg = encodeURIComponent(`Hi, I'm interested in ${product.name}. Can you share pricing and availability?`);

            return (
              <a
                key={product.id}
                href={`${WA_BASE}${msg}`}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHover(product.id)}
                onMouseLeave={() => setHover(null)}
                style={{
                  display: "block",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "#fff",
                  textDecoration: "none",
                  transform: hover === product.id ? "translateY(-6px)" : "none",
                  boxShadow: hover === product.id ? "0 20px 48px rgba(0,0,0,0.1)" : "none",
                  transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease",
                }}
              >
                {/* Image */}
                <div style={{ aspectRatio: "3/4", position: "relative", overflow: "hidden", background: "var(--gray)" }}>
                  {firstImage ? (
                    <Image
                      src={firstImage}
                      alt={product.name}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                        transform: hover === product.id ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                  ) : (
                    <div
                      className={product.swatch}
                      style={{
                        position: "absolute", inset: 0,
                        transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                        transform: hover === product.id ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                  )}

                  {product.badge && (
                    <span style={{
                      position: "absolute", top: 12, left: 12, zIndex: 2,
                      fontSize: 9, fontWeight: 600, letterSpacing: "0.1em",
                      textTransform: "uppercase", padding: "4px 10px", borderRadius: 20,
                      background: product.badge.type === "hot" ? "var(--gold)" : product.badge.type === "new" ? "var(--green)" : "var(--ink)",
                      color: "#fff",
                    }}>
                      {product.badge.label}
                    </span>
                  )}

                  {/* WhatsApp tap hint on hover */}
                  <div style={{
                    position: "absolute", inset: 0, zIndex: 3,
                    background: "rgba(10,10,10,0.45)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    opacity: hover === product.id ? 1 : 0,
                    transition: "opacity 0.25s ease",
                  }}>
                    <span style={{
                      background: "#22C55E", color: "#fff",
                      fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                      textTransform: "uppercase", padding: "10px 22px", borderRadius: 50,
                    }}>
                      Inquire on WhatsApp
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "14px 16px 18px" }}>
                  <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>
                    {product.category}
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)", marginBottom: 4 }}>
                    {product.name}
                  </p>
                  <p style={{ fontSize: 11, color: "var(--muted)" }}>
                    {product.meta}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* TikTok CTA */}
        <div style={{
          marginTop: 64,
          background: "var(--ink)", borderRadius: 14,
          padding: "60px 56px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 40, flexWrap: "wrap",
          position: "relative", overflow: "hidden",
        }}>
          <div className="kente" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6 }} />
          <div>
            <p className="f-display" style={{ fontSize: "clamp(28px,4vw,48px)", color: "#fff", lineHeight: 1, marginBottom: 10 }}>
              SEE MORE ON TIKTOK
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
              New fabrics posted weekly — follow us for the full 500+ collection.
            </p>
          </div>
          <a
            href="https://www.tiktok.com/@lybytexindia"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#fff", color: "#000",
              padding: "14px 28px", borderRadius: 50,
              fontSize: 13, fontWeight: 700, letterSpacing: "0.04em",
              textDecoration: "none", whiteSpace: "nowrap",
            }}
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
            Follow @lybytexindia
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
