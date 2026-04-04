"use client";
import { useInView } from "../hooks/useInView";

const WA = "919825124751";

const QUICK = [
  { label: "Request Full Catalog",    msg: "Hi, I'd like to request your full fabric catalog." },
  { label: "Kente Fabrics",           msg: "Hi, I'm interested in your Kente collection. Can you share pricing?" },
  { label: "Embroidery / Brissi",     msg: "Hi, I'd like to know more about your Brissi and embroidery fabrics." },
  { label: "Scarves (Duku)",          msg: "Hi, I'm looking to order Duku scarves in bulk. Please share your catalog." },
  { label: "Custom / Bulk Order",     msg: "Hi, I'd like to discuss a custom bulk fabric order." },
  { label: "Sample Request",          msg: "Hi, I'd like to request fabric samples before placing an order." },
];

function WaSvg() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Contact() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="contact" ref={ref} style={{ background: "var(--ink)", padding: "120px 64px", position: "relative", overflow: "hidden" }} className="page-px section-py">
      <div className="kente" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10 }} />
      <div style={{ position: "absolute", right: -120, bottom: -120, width: 500, height: 500, borderRadius: "50%", border: "70px solid rgba(184,134,11,0.05)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)", transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)", marginBottom: 60 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 18 }}>Get In Touch</p>
          <h2 className="f-display contact-h2" style={{ fontSize: "clamp(52px,8vw,108px)", lineHeight: 0.9, color: "#fff", marginBottom: 24 }}>
            READY<br />TO <span style={{ color: "var(--gold)" }}>ORDER?</span>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: 1.8, maxWidth: 480 }}>
            Tap a topic below — it opens WhatsApp with a message ready to send. We respond within a few hours.
          </p>
        </div>

        {/* Quick buttons */}
        <div
          className="contact-quick"
          style={{
            display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 60,
            opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}
        >
          {QUICK.map(({ label, msg }) => (
            <a
              key={label}
              href={`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "18px 20px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10, textDecoration: "none", color: "#fff",
                fontSize: 14, fontWeight: 400,
                transition: "background 0.2s, border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(184,134,11,0.12)"; el.style.borderColor = "rgba(184,134,11,0.35)"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.transform = "none"; }}
            >
              <span style={{ color: "#22C55E" }}><WaSvg /></span>
              <span style={{ flex: 1 }}>{label}</span>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 14 }}>→</span>
            </a>
          ))}
        </div>

        {/* Contact details */}
        <div
          className="contact-details"
          style={{
            display: "grid", gridTemplateColumns: "repeat(4,1fr)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.3s",
          }}
        >
          {[
            { label: "WhatsApp",  value: "+91 98251 24751",          href: `https://wa.me/${WA}` },
            { label: "Email",     value: "Lybytexindia@gmail.com",   href: "mailto:Lybytexindia@gmail.com" },
            { label: "Location",  value: "Salabatpura, Surat 395003, India", href: "#" },
            { label: "Hours",     value: "Mon – Fri, 8am – 5pm IST", href: "#" },
          ].map(({ label, value, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ display: "block", padding: "28px 24px", borderRight: "1px solid rgba(255,255,255,0.07)", textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
            >
              <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 8 }}>{label}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 300, lineHeight: 1.5 }}>{value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
