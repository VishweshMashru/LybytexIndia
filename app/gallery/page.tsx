"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SWATCHES = [
  { id: "k1", name: "Obama Kente — Classic",    collection: "Kente",      cls: "sw-kente",      story: "Gold · Red · Green · Black" },
  { id: "k2", name: "Obama Kente — Inverted",   collection: "Kente",      cls: "sw-kente",      story: "Green · Gold · Red",         cat: "kente" },
  { id: "e1", name: "Embroidery Brissi — Rose",   collection: "Embroidery", cls: "sw-embroidery", story: "Crimson · Burgundy · Plum",   cat: "embroidery" },
  { id: "e2", name: "Embroidery Brissi — Forest", collection: "Embroidery", cls: "sw-brissi",     story: "Forest · Sage · Deep Green",  cat: "embroidery" },
  { id: "e3", name: "Bead Brissi — Midnight",     collection: "Embroidery", cls: "sw-president",  story: "Violet · Plum · Navy",        cat: "embroidery" },
  { id: "s1", name: "Desebo Duku — Mocha",        collection: "Scarves",    cls: "sw-scarf",      story: "Mocha · Umber · Black",       cat: "scarf" },
  { id: "s2", name: "Meba Duku — Classic",        collection: "Scarves",    cls: "sw-scarf",      story: "Deep Brown · Amber",          cat: "scarf" },
  { id: "s3", name: "Desebo Shine Sequence",      collection: "Scarves",    cls: "sw-president",  story: "Gold · Violet · Shimmer",     cat: "scarf" },
];

const TABS = [
  { id: "all",        label: "All"         },
  { id: "kente",      label: "Kente"       },
  { id: "embroidery", label: "Embroidery"  },
  { id: "scarf",      label: "Scarves"     },
];

export default function GalleryPage() {
  const [active, setActive] = useState("all");
  const [hover, setHover] = useState<string | null>(null);
  const filtered = active === "all" ? SWATCHES : SWATCHES.filter(s => s.cat === active);

  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: 70, background: "var(--ink)" }}>
        <div style={{ padding: "100px 64px 0" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Gallery</p>
          <h1 className="f-display" style={{ fontSize: "clamp(64px,9vw,120px)", lineHeight: 0.9, color: "#fff", marginBottom: 16 }}>COLORWAYS</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", fontWeight: 300, marginBottom: 48, maxWidth: 480 }}>
            Real product photography coming soon. These represent our current color offerings per collection.
          </p>
          <div style={{ display: "flex", gap: 4 }}>
            {TABS.map(({ id, label }) => (
              <button key={id} onClick={() => setActive(id)} style={{
                padding: "11px 24px", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
                border: "1px solid", borderBottom: "none",
                borderColor: active === id ? "rgba(255,255,255,0.15)" : "transparent",
                borderRadius: "6px 6px 0 0",
                background: active === id ? "#fff" : "transparent",
                color: active === id ? "var(--ink)" : "rgba(255,255,255,0.4)",
                cursor: "pointer", transition: "all 0.2s",
              }}>{label}</button>
            ))}
          </div>
        </div>
      </div>

      <section style={{ padding: "64px 64px 140px", background: "var(--off)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16 }}>
          {filtered.map(s => (
            <div key={s.id}
              onMouseEnter={() => setHover(s.id)}
              onMouseLeave={() => setHover(null)}
              style={{
                borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)",
                background: "#fff",
                transform: hover === s.id ? "translateY(-8px)" : "none",
                boxShadow: hover === s.id ? "0 24px 56px rgba(0,0,0,0.1)" : "none",
                transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease",
                cursor: "pointer",
              }}>
              <div className={s.cls} style={{ height: 200, transition: "transform 0.6s", transform: hover === s.id ? "scale(1.04)" : "none" }} />
              <div style={{ padding: "18px 20px 22px" }}>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>{s.collection}</p>
                <p style={{ fontSize: 15, fontWeight: 500, color: "var(--ink)", marginBottom: 6 }}>{s.name}</p>
                <p style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.04em" }}>{s.story}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
