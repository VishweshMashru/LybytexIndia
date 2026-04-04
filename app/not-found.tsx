import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 68, position: "relative" }}>
        <div style={{ textAlign: "center", padding: "0 48px" }}>
          <div className="f-display" style={{ fontSize: "clamp(120px,20vw,200px)", color: "rgba(255,255,255,0.05)", lineHeight: 1 }}>404</div>
          <h1 className="f-display" style={{ fontSize: "clamp(32px,5vw,56px)", color: "#fff", marginBottom: 20, marginTop: -20 }}>PAGE NOT FOUND</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", fontWeight: 300, marginBottom: 48 }}>
            That fabric isn&apos;t in our catalog. Head back and browse what we have.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Link href="/" className="btn btn-gold">Back to Home</Link>
            <Link href="/shop" className="btn" style={{ color: "rgba(255,255,255,0.5)", padding: "15px 0", background: "transparent", border: "none" }}>Browse Collections →</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
