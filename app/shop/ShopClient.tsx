"use client";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import type { Product } from "../components/products";

type Category = { id: string; label: string };

const PRODUCT_GROUPS = [
  {
    group: "Kente",
    items: ["obama-kente", "obama-kente-stone"],
  },
  {
    group: "Embroidery / Brissi",
    items: ["bead-brissi","brissi-beads-embroidery","brissi-stone-flag","brissi-with-stone","aircondition-brissi-stone","aircondition-brissi-embroidery"],
  },
  {
    group: "Scarves (Duku)",
    items: ["desebo-duku","desebo-duku-stone","desebo-crossline","desebo-shine","meba-duku","3cup-stone-beads","40cup-meba","aircondition-bell"],
  },
];

export default function ShopClient({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const [active, setActive] = useState("all");
  const [openGroups, setOpenGroups] = useState<string[]>(["Kente", "Embroidery / Brissi", "Scarves (Duku)"]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = active === "all"
    ? products
    : active.startsWith("group:")
    ? products.filter(p => {
        const groupName = active.replace("group:", "");
        const group = PRODUCT_GROUPS.find(g => g.group === groupName);
        return group ? group.items.includes(p.id) : false;
      })
    : products.filter(p => p.id === active);

  const toggleGroup = (group: string) => {
    setOpenGroups(prev =>
      prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
    );
  };

  const activeLabelMap: Record<string, string> = {
    all: "All Products",
    ...PRODUCT_GROUPS.reduce((acc, g) => {
      acc[`group:${g.group}`] = g.group;
      g.items.forEach(id => {
        const p = products.find(pr => pr.id === id);
        if (p) acc[id] = p.name;
      });
      return acc;
    }, {} as Record<string, string>),
  };

  return (
    <>
      {/* Dark header */}
      <div style={{ paddingTop: 70, background: "var(--ink)" }}>
        <div className="page-px" style={{ padding: "80px 64px 40px" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
            Collections
          </p>
          <h1 className="f-display page-h1" style={{ fontSize: "clamp(52px,9vw,110px)", lineHeight: 0.9, color: "#fff" }}>
            ALL FABRICS
          </h1>
        </div>
      </div>

      {/* Body: sidebar + grid */}
      <div className="page-px" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 48, padding: "48px 64px 120px", alignItems: "start" }} id="shop-body">

        {/* ── SIDEBAR (desktop) ── */}
        <aside style={{ position: "sticky", top: 80 }} className="shop-sidebar">
          {/* Mobile dropdown toggle */}
          <button
            className="mobile-filter-btn"
            onClick={() => setMobileOpen(o => !o)}
            style={{
              display: "none", width: "100%",
              padding: "12px 16px",
              background: "var(--ink)", color: "#fff",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 6, cursor: "pointer",
              fontSize: 13, fontWeight: 500,
              justifyContent: "space-between", alignItems: "center",
            }}
          >
            <span>{activeLabelMap[active] ?? "Filter"}</span>
            <span style={{ transform: mobileOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
          </button>

          <div className={`sidebar-inner${mobileOpen ? " open" : ""}`} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {/* All */}
            <button
              onClick={() => { setActive("all"); setMobileOpen(false); }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "10px 0", background: "none", border: "none",
                borderBottom: "1px solid var(--border)",
                cursor: "pointer", fontSize: 13, fontWeight: active === "all" ? 600 : 400,
                color: active === "all" ? "var(--ink)" : "var(--muted)",
                textAlign: "left",
              }}
            >
              All Products
              <span style={{ fontSize: 11, color: "var(--muted)" }}>{products.length}</span>
            </button>

            {/* Groups */}
            {PRODUCT_GROUPS.map(({ group, items }) => {
              const isOpen = openGroups.includes(group);
              const groupActive = active === `group:${group}`;
              return (
                <div key={group}>
                  {/* Group header */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid var(--border)", cursor: "pointer" }}
                    onClick={() => toggleGroup(group)}
                  >
                    <button
                      onClick={e => { e.stopPropagation(); setActive(`group:${group}`); setMobileOpen(false); }}
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        fontSize: 12, fontWeight: 600, letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: groupActive ? "var(--gold)" : "var(--ink)",
                        textAlign: "left", padding: 0,
                      }}
                    >
                      {group}
                    </button>
                    <span style={{ fontSize: 11, color: "var(--muted)", userSelect: "none" }}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>

                  {/* Individual items */}
                  {isOpen && (
                    <div style={{ display: "flex", flexDirection: "column", paddingLeft: 12, marginBottom: 4 }}>
                      {items.map(id => {
                        const product = products.find(p => p.id === id);
                        if (!product) return null;
                        const isActive = active === id;
                        return (
                          <button
                            key={id}
                            onClick={() => { setActive(id); setMobileOpen(false); }}
                            style={{
                              display: "flex", alignItems: "center", justifyContent: "space-between",
                              padding: "8px 0", background: "none", border: "none",
                              borderBottom: "1px solid var(--border)",
                              cursor: "pointer", fontSize: 13, textAlign: "left",
                              color: isActive ? "var(--gold)" : "var(--muted)",
                              fontWeight: isActive ? 500 : 400,
                            }}
                          >
                            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              {isActive && <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--gold)", display: "block", flexShrink: 0 }} />}
                              {product.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* ── PRODUCT GRID ── */}
        <div>
          <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 32 }}>
            Showing {filtered.length} {filtered.length === 1 ? "product" : "products"}
            {active !== "all" && (
              <button
                onClick={() => setActive("all")}
                style={{ marginLeft: 12, fontSize: 11, color: "var(--gold)", background: "none", border: "none", cursor: "pointer", fontWeight: 500 }}
              >
                Clear ×
              </button>
            )}
          </p>

          <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}

            {/* TikTok card */}
            <a
              href="https://www.tiktok.com/@lybytexindia"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 20,
                background: "#0a0a0a", borderRadius: 10,
                border: "1px solid #222", aspectRatio: "3/4",
                textDecoration: "none",
                transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                position: "relative", overflow: "hidden",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "none"}
            >
              <div className="kente" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4 }} />
              <svg width={48} height={48} viewBox="0 0 24 24" fill="#fff">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
              </svg>
              <div style={{ textAlign: "center", padding: "0 20px" }}>
                <p style={{ color: "#fff", fontSize: 15, fontWeight: 600, marginBottom: 6 }}>See Full Collection</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 300, lineHeight: 1.6 }}>500+ designs on our TikTok</p>
              </div>
              <span style={{ background: "#fff", color: "#000", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "9px 22px", borderRadius: 50 }}>
                Follow Us
              </span>
            </a>
          </div>

          {/* Bottom CTA */}
          <div className="cta-strip" style={{
            marginTop: 64, background: "var(--ink)", borderRadius: 14,
            padding: "56px 48px",
            display: "grid", gridTemplateColumns: "1fr auto",
            gap: 32, alignItems: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div className="kente" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6 }} />
            <div>
              <p className="f-display section-h2" style={{ fontSize: "clamp(24px,3vw,44px)", color: "#fff", lineHeight: 1, marginBottom: 8 }}>
                CAN&apos;T FIND WHAT YOU NEED?
              </p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
                We have 500+ designs. Message us for the full catalog.
              </p>
            </div>
            <a href="https://wa.me/919825124751?text=Hi%2C%20please%20send%20me%20your%20full%20fabric%20catalog." target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ whiteSpace: "nowrap" }}>
              Request Catalog →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #shop-body { grid-template-columns: 1fr !important; gap: 0 !important; padding: 0 20px 80px !important; }
          .shop-sidebar { position: static !important; }
          .mobile-filter-btn { display: flex !important; margin-bottom: 24px; margin-top: 24px; }
          .sidebar-inner { display: none; }
          .sidebar-inner.open { display: flex !important; background: var(--off); border: 1px solid var(--border); border-radius: 8px; padding: 8px 16px; margin-bottom: 24px; }
        }
      `}</style>
    </>
  );
}
