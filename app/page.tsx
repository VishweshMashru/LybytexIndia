import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import ProductCard from "./components/ProductCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { PRODUCTS } from "./components/products";
import Link from "next/link";

export default function Home() {
  const featured = PRODUCTS.slice(0, 6);

  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />

      {/* Stats bar */}
      <div style={{ background: "var(--gray)", borderBottom: "1px solid var(--border)" }}>
        <div className="stats-bar" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", maxWidth: 1200, margin: "0 auto" }}>
          {[
            { n: "16",    l: "Collections"      },
            { n: "500+",  l: "Fabric Designs"   },
            { n: "24 yr", l: "Since 1997"        },
            { n: "Global",l: "Shipping"          },
          ].map(({ n, l }, i) => (
            <div key={l} style={{ padding: "40px 0", textAlign: "center", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
              <div className="f-display stat-num" style={{ fontSize: 44, color: "var(--ink)", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.13em", marginTop: 8, fontWeight: 500 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured products */}
      <section className="section-py page-px" style={{ padding: "120px 64px", background: "#fff" }}>
        <div className="reveal" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>Featured</p>
            <h2 className="f-display section-h2" style={{ fontSize: "clamp(44px,6vw,88px)", lineHeight: 0.92, color: "var(--ink)" }}>
              OUR<br />COLLECTIONS
            </h2>
          </div>
          <Link href="/shop" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", textDecoration: "none", borderBottom: "1.5px solid var(--ink)", paddingBottom: 3 }}>
            All 16 lines →
          </Link>
        </div>

        <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* Editorial dark section */}
      <section className="section-py page-px editorial-grid" style={{
        background: "var(--ink)", padding: "120px 64px",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div className="kente" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10 }} />

        <div className="reveal-left">
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>16 Collections · In Stock</p>
          <h2 className="f-display section-h2" style={{ fontSize: "clamp(44px,6vw,88px)", lineHeight: 0.92, color: "#fff", marginBottom: 36 }}>
            EVERY<br />LINE<br /><span style={{ color: "var(--gold)" }}>READY.</span>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", fontWeight: 300, lineHeight: 1.8, marginBottom: 44, maxWidth: 380 }}>
            Kente, Brissi embroidery, Duku scarves — our full catalog ships directly from Surat to your warehouse, anywhere in Africa.
          </p>
          <Link href="/shop" className="btn btn-gold">Browse Full Catalog →</Link>
        </div>

        <div className="reveal-right">
          {[
            { group: "Kente",               items: ["Obama Kente", "Obama Kente with Stone"] },
            { group: "Embroidery / Brissi",  items: ["Bead Brissi","Brissi Beads Embroidery","Brissi Stone & Flag","Brissi with Stone","Air Condition Brissi Stone","Air Condition Brissi Embr."] },
            { group: "Scarves (Duku)",        items: ["Desebo Duku","Desebo with Stone","Desebo Cross Line","Desebo Shine Sequence","Meba Duku","40 Cupstone Meba","3 Cupstone Bell","Air Condition Bell"] },
          ].map(({ group, items }, gi) => (
            <div key={group} style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "20px 0", ...(gi === 2 ? { borderBottom: "1px solid rgba(255,255,255,0.07)" } : {}) }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>{group}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px" }}>
                {items.map(item => <span key={item} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why LybyTex */}
      <section className="section-py page-px" style={{ padding: "120px 64px", background: "var(--off)" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>Why LybyTex</p>
          <h2 className="f-display section-h2" style={{ fontSize: "clamp(44px,6vw,72px)", lineHeight: 0.95, color: "var(--ink)" }}>DIRECT FROM<br />THE FACTORY</h2>
        </div>
        <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, maxWidth: 1100, margin: "0 auto" }}>
          {[
            { n: "01", title: "No Middlemen",            body: "We manufacture everything in-house. Factory-direct pricing means you pay less for the same quality." },
            { n: "02", title: "24 Years Export",          body: "Shipping to Ghana, Nigeria, Kenya, and across Africa since 2002. We know the logistics." },
            { n: "03", title: "500+ Designs In Stock",    body: "Large catalog with immediate availability — no waiting on production for standard lines." },
          ].map(({ n, title, body }) => (
            <div key={n} className="reveal" style={{ background: "#fff", padding: "44px 36px", border: "1px solid var(--border)" }}>
              <div className="f-display" style={{ fontSize: 52, color: "var(--border)", lineHeight: 1, marginBottom: 24 }}>{n}</div>
              <div className="divider" style={{ marginBottom: 20 }} />
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", marginBottom: 12, lineHeight: 1.3 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, fontWeight: 300 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
