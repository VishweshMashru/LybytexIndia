"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const WA = "https://wa.me/919825124751?text=Hi%2C%20I%27d%20like%20to%20request%20your%20full%20fabric%20catalog.";

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 100); return () => clearTimeout(t); }, []);

  const s = (delay: number): React.CSSProperties => ({
    opacity: ready ? 1 : 0,
    transform: ready ? "none" : "translateY(28px)",
    transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section style={{
      minHeight: "100svh",
      background: "var(--ink)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingBottom: 72,
      paddingTop: 70, /* nav-total */
    }}>

      {/* Ghost watermark */}
      <div className="hero-ghost" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -54%)",
        pointerEvents: "none", userSelect: "none",
        opacity: ready ? 0.032 : 0,
        transition: "opacity 1.6s ease 0.3s",
        whiteSpace: "nowrap",
      }}>
        <span className="f-display" style={{ fontSize: "clamp(100px,18vw,220px)", color: "#fff" }}>LYBYTEX</span>
      </div>

      {/* Swatch column — desktop only */}
      <div className="hero-swatches" style={{
        position: "absolute", top: "50%", right: 64,
        transform: ready ? "translateY(-50%)" : "translateX(40px) translateY(-50%)",
        opacity: ready ? 1 : 0,
        transition: "opacity 0.9s ease 0.5s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s",
        display: "flex", flexDirection: "column", gap: 8, width: 200,
      }}>
        {[
          { cls: "sw-kente",      h: 150 },
          { cls: "sw-embroidery", h: 84  },
          { cls: "sw-scarf",      h: 84  },
          { cls: "sw-brissi",     h: 64  },
          { cls: "sw-president",  h: 64  },
        ].map(({ cls, h }, i) => (
          <div key={i} className={`zoom ${cls}`} style={{ height: h, borderRadius: 6, flexShrink: 0 }} />
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "0 64px", position: "relative", zIndex: 2, maxWidth: 820 }} className="page-px">
        <p style={{ ...s(120), fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24, display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
          Est. 1997 · Surat, India · 16 Collections
        </p>

        <h1 className="f-display hero-h" style={{
          ...s(240),
          fontSize: "clamp(72px, 12vw, 148px)",
          lineHeight: 0.9, color: "#fff", marginBottom: 36,
        }}>
          AFRICAN<br />
          <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}>FABRIC</span><br />
          HOUSE<span style={{ color: "var(--gold)" }}>.</span>
        </h1>

        <p style={{
          ...s(380),
          fontSize: 16, color: "rgba(255,255,255,0.42)",
          lineHeight: 1.8, fontWeight: 300, maxWidth: 500, marginBottom: 44,
        }}>
          Premium manufacturer and exporter of Kente, embroidery,
          scarves, and ceremonial fabrics — shipped directly from
          Surat to wholesalers across Africa.
        </p>

        <div className="hero-actions" style={{ ...s(480), display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <svg width={15} height={15} viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order via WhatsApp
          </a>
          <Link href="/shop" className="btn btn-ghost">Browse Collections →</Link>
        </div>

        {/* Stats */}
        <div className="hero-stats" style={{
          ...s(580),
          display: "flex", gap: 48, marginTop: 72,
          paddingTop: 36, borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          {[
            { n: "16",    l: "Collections"   },
            { n: "500+",  l: "Designs"       },
            { n: "24 yr", l: "Experience"    },
            { n: "Global",l: "Shipping"      },
          ].map(({ n, l }) => (
            <div key={l}>
              <div className="f-display hero-stat-num" style={{ fontSize: 30, color: "#fff", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.32)", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 5, fontWeight: 500 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
