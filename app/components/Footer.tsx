"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#060606", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="footer-grid page-px" style={{ padding: "72px 64px 56px", display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr", gap: 56 }}>

        <div className="footer-brand">
          <div className="f-display" style={{ fontSize: 26, color: "#fff", marginBottom: 4, letterSpacing: "0.04em" }}>
            LYBYTEX <span style={{ color: "var(--gold)" }}>INDIA</span>
          </div>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.22)", marginBottom: 20, letterSpacing: "0.06em" }}>Est. 1997 · Surat, Gujarat, India</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.28)", lineHeight: 1.8, fontWeight: 300, maxWidth: 280 }}>
            Premium manufacturer and exporter of African textiles. Supplying wholesalers globally from India's textile capital.
          </p>
          
          <div className="kente" style={{ height: 3, width: 64, borderRadius: 2, marginTop: 28 }} />
        </div>

        {[
          { title: "Collections", links: [
            { label: "Kente Fabrics",       href: "/shop?cat=kente"      },
            { label: "Embroidery / Brissi", href: "/shop?cat=embroidery" },
            { label: "Scarves (Duku)",      href: "/shop?cat=scarf"      },
            { label: "All Collections →",   href: "/shop"                },
          ]},
          { title: "Company", links: [
            { label: "About Us",    href: "/about"    },
            { label: "Gallery",     href: "/gallery"  },
            { label: "Contact",     href: "/#contact" },
          ]},
          { title: "Contact", links: [
            { label: "+91 98251 24751",        href: "https://wa.me/919825124751"      },
            { label: "+91 95375 17519",        href: "https://wa.me/919537517519"      },
            { label: "Lybytexindia@gmail.com", href: "mailto:Lybytexindia@gmail.com"  },
            { label: "Surat, Gujarat, India",  href: "#"                               },
            { label: "Return Policy", href: "/return-policy" },
          ]},
          { title: "TikTok", links:[
            { label: "TikTok @lybytexindia", href: "https://www.tiktok.com/@lybytexindia" },
          ]},
        ].map(({ title, links }) => (
          <div key={title}>
            <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 22 }}>{title}</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 13 }}>
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.42)"}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      

      <div className="page-px" style={{ padding: "18px 64px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.16)" }}>© 2026 LybyTex India. All rights reserved.</p>
        <div className="kente" style={{ height: 3, width: 48, borderRadius: 2 }} />
      </div>
    </footer>
  );
}
