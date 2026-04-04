import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const TIMELINE = [
  { year: "1997", title: "Founded", body: "Lyby Tex India opens as a small embroidery workshop in Salabatpura, Surat." },
  { year: "2002", title: "First African Export", body: "First wholesale shipments to Ghana. Kente-style fabrics quickly gain popularity across West Africa." },
  { year: "2010", title: "Range Expansion", body: "Added funeral fabrics, ceremonial Brissi, and polyester Duku scarves — becoming a one-stop supplier." },
  { year: "2016", title: "Obama & President Series", body: "Launched iconic custom-woven collections that became bestsellers across Ghana and Nigeria." },
  { year: "2024", title: "16 Collections · 500+ Designs", body: "Today shipping to markets across West, East, and Southern Africa with 51–100 in-house staff." },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div style={{ paddingTop: 70, background: "var(--ink)", position: "relative", overflow: "hidden" }}>
        <div style={{ padding: "100px 64px 120px", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Our Story</p>
          <h1 className="f-display" style={{ fontSize: "clamp(64px,9vw,120px)", lineHeight: 0.9, color: "#fff", marginBottom: 40 }}>
            WEAVING<br /><span style={{ color: "var(--gold)" }}>24 YEARS</span><br />OF QUALITY.
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.4)", fontWeight: 300, lineHeight: 1.8, maxWidth: 540 }}>
            From a single workshop in Surat to one of India's leading exporters of African-market textiles.
          </p>
        </div>
        <div style={{ position: "absolute", right: -80, top: -80, width: 500, height: 500, borderRadius: "50%", border: "80px solid rgba(184,134,11,0.05)", pointerEvents: "none" }} />
      </div>

      {/* Stats */}
      <div style={{ background: "var(--gray)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", maxWidth: 1200, margin: "0 auto" }}>
          {[
            { n: "1997", l: "Year Founded"     },
            { n: "51–100", l: "Employees"      },
            { n: "500+",  l: "Fabric Designs"  },
            { n: "24+",   l: "Export Markets"  },
          ].map(({ n, l }, i) => (
            <div key={l} style={{ padding: "48px 0", textAlign: "center", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
              <div className="f-display" style={{ fontSize: 48, color: "var(--ink)", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.13em", marginTop: 8, fontWeight: 500 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <section style={{ padding: "140px 64px", background: "#fff", maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>Timeline</p>
        <h2 className="f-display" style={{ fontSize: "clamp(48px,6vw,80px)", lineHeight: 0.92, color: "var(--ink)", marginBottom: 80 }}>OUR JOURNEY</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {TIMELINE.map(({ year, title, body }, i) => (
            <div key={year} style={{
              display: "grid", gridTemplateColumns: "120px 1fr",
              gap: 48, paddingBottom: i < TIMELINE.length - 1 ? 60 : 0,
              paddingTop: i > 0 ? 60 : 0,
              borderTop: i > 0 ? "1px solid var(--border)" : "none",
            }}>
              <div className="f-display" style={{ fontSize: 28, color: "var(--gold)", paddingTop: 4 }}>{year}</div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, fontWeight: 300 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
