"use client";
import { useState, useRef } from "react";
import ProductCard from "../components/ProductCard";
import type { Product } from "../components/products";

type Category = { id: string; label: string };

export default function ShopClient({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const [active, setActive] = useState("all");
  const tabsRef = useRef<HTMLDivElement>(null);

  const filtered =
    active === "all" ? products : products.filter(p => p.cats.includes(active));

  const switchCat = (id: string) => {
    setActive(id);
    const el = tabsRef.current?.querySelector(
      `[data-cat="${id}"]`
    ) as HTMLElement;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <>
      {/* Dark header */}
      <div style={{ paddingTop: 70, background: "var(--ink)" }}>
        <div className="page-px" style={{ padding: "80px 64px 0" }}>
          <p
            style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--gold)", marginBottom: 16,
            }}
          >
            Collections
          </p>
          <h1
            className="f-display page-h1"
            style={{
              fontSize: "clamp(52px,9vw,110px)",
              lineHeight: 0.9, color: "#fff", marginBottom: 40,
            }}
          >
            ALL FABRICS
          </h1>
        </div>

        {/* Sticky scrollable category tabs */}
        <div
          className="cat-bar-sticky filter-tabs"
          ref={tabsRef}
          style={{ display: "flex", overflowX: "auto", padding: "0 20px" }}
        >
          {categories.map(({ id, label }) => {
            const count =
              id === "all"
                ? products.length
                : products.filter(p => p.cats.includes(id)).length;
            const isActive = active === id;
            return (
              <button
                key={id}
                data-cat={id}
                onClick={() => switchCat(id)}
                style={{
                  flexShrink: 0,
                  padding: "14px 22px",
                  fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "none",
                  borderBottom: isActive
                    ? "3px solid var(--gold)"
                    : "3px solid transparent",
                  background: "transparent",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                  cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap",
                }}
              >
                {label}
                <span style={{ marginLeft: 6, fontSize: 10, opacity: 0.5 }}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Product grid */}
      <section style={{ padding: "48px 64px 120px" }} className="page-px">
        <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 32 }}>
          Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}
        </p>

        <div
          className="product-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}
        >
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}

          {/* TikTok card — always last in the grid */}
          <a
            href="https://www.tiktok.com/@YOUR_TIKTOK_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              background: "#0a0a0a",
              borderRadius: 10,
              border: "1px solid #222",
              aspectRatio: "3/4",
              textDecoration: "none",
              transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 28px 60px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* Subtle kente stripe at top */}
            <div
              className="kente"
              style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4 }}
            />

            {/* TikTok icon */}
            <svg width={52} height={52} viewBox="0 0 24 24" fill="#fff">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
            </svg>

            <div style={{ textAlign: "center", padding: "0 24px" }}>
              <p style={{
                color: "#fff", fontSize: 17, fontWeight: 600,
                marginBottom: 8, lineHeight: 1.3,
              }}>
                See Our Full Collection
              </p>
              <p style={{
                color: "rgba(255,255,255,0.4)", fontSize: 13,
                fontWeight: 300, lineHeight: 1.7,
              }}>
                500+ designs on our TikTok — new fabrics posted weekly
              </p>
            </div>

            <span style={{
              background: "#fff",
              color: "#000",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "11px 28px",
              borderRadius: 50,
            }}>
              Follow @YOUR_TIKTOK_HANDLE
            </span>
          </a>
        </div>

        {/* Bottom CTA */}
        <div
          className="cta-strip"
          style={{
            marginTop: 80,
            background: "var(--ink)", borderRadius: 14,
            padding: "60px 56px",
            display: "grid", gridTemplateColumns: "1fr auto",
            gap: 40, alignItems: "center",
            position: "relative", overflow: "hidden",
          }}
        >
          <div
            className="kente"
            style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10 }}
          />
          <div>
            <p
              className="f-display section-h2"
              style={{ fontSize: "clamp(28px,4vw,48px)", color: "#fff", lineHeight: 1, marginBottom: 10 }}
            >
              CAN&apos;T FIND WHAT YOU NEED?
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
              We have 500+ designs. Message us and we&apos;ll send the full catalog.
            </p>
          </div>
          <a
            href="https://wa.me/919825124751?text=Hi%2C%20please%20send%20me%20your%20full%20fabric%20catalog."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ whiteSpace: "nowrap" }}
          >
            Request Full Catalog →
          </a>
        </div>
      </section>
    </>
  );
}