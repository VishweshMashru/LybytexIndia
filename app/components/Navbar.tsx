"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const WA = "https://wa.me/919825124751";

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const onDark = path === "/";
  const navBg = scrolled
    ? "rgba(10,10,10,0.97)"
    : onDark ? "rgba(10,10,10,0.2)" : "rgba(10,10,10,0.97)";

  return (
    <>
      {/* Kente stripe — always on top */}
      <div className="kente" style={{ position: "fixed", top: 0, left: 0, right: 0, height: 6, zIndex: 201 }} />

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 6, left: 0, right: 0, zIndex: 200,
        height: 64,
        background: navBg,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px",
        transition: "background 0.5s ease, border-color 0.5s ease",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 8 }}>
          <span className="f-display" style={{ fontSize: 24, color: "#fff", letterSpacing: "0.06em" }}>LYBYTEX</span>
          <span style={{ fontSize: 9, color: "var(--gold)", letterSpacing: "0.26em", textTransform: "uppercase", fontWeight: 600 }}>INDIA</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 40 }}>
          {[
            { label: "Collections", href: "/shop"    },
            { label: "Gallery",     href: "/gallery" },
            { label: "About",       href: "/about"   },
          ].map(({ label, href }) => (
            <Link key={label} href={href} style={{
              fontSize: 11, fontWeight: 500, letterSpacing: "0.12em",
              textTransform: "uppercase", textDecoration: "none",
              color: path === href ? "#fff" : "rgba(255,255,255,0.5)",
              borderBottom: path === href ? "1.5px solid var(--gold)" : "1.5px solid transparent",
              paddingBottom: 3, transition: "color 0.2s",
            }}>{label}</Link>
          ))}
        </div>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: "none", background: "none", border: "none", cursor: "pointer",
            padding: 8, flexDirection: "column", gap: 5,
          }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <span style={{ display: "block", width: 22, height: 1.5, background: "#fff", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 1.5, background: "#fff", transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 1.5, background: "#fff", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div style={{
        position: "fixed", top: 70, left: 0, right: 0, zIndex: 199,
        background: "rgba(10,10,10,0.98)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
        padding: "24px 24px 32px",
        display: "flex", flexDirection: "column", gap: 0,
      }}>
        {[
          { label: "Collections", href: "/shop"    },
          { label: "Gallery",     href: "/gallery" },
          { label: "About",       href: "/about"   },
        ].map(({ label, href }) => (
          <Link key={label} href={href} onClick={() => setMenuOpen(false)} style={{
            display: "block", padding: "18px 0",
            fontSize: 28, fontWeight: 500, letterSpacing: "0.02em",
            color: path === href ? "#fff" : "rgba(255,255,255,0.5)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }} className="f-display">{label}</Link>
        ))}
        <a href={WA} target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            marginTop: 24, background: "#22C55E", color: "#fff",
            padding: "16px 24px", borderRadius: 4,
            fontSize: 14, fontWeight: 600, letterSpacing: "0.06em",
            textTransform: "uppercase", textDecoration: "none",
          }}>
          <WaSvg /> Order via WhatsApp
        </a>
      </div>

      {/* WhatsApp FAB — all screens */}
      <a href={WA} target="_blank" rel="noopener noreferrer" className="wa-fab">
        <WaSvg size={22} /> WhatsApp Us
      </a>

      <style>{`
        @media (max-width: 768px) {
          nav { padding: 0 20px !important; height: 56px !important; }
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function WaSvg({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
