import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Return Policy",
  description: "Return and refund policy for LybyTex India wholesale fabric orders.",
};

export default function ReturnPolicyPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 70, background: "var(--ink)" }}>
        <div className="kente" style={{ height: 6 }} />
        <div className="page-px" style={{ padding: "80px 64px 60px" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>Policy</p>
          <h1 className="f-display page-h1" style={{ fontSize: "clamp(48px,7vw,96px)", lineHeight: 0.9, color: "#fff" }}>
            RETURN POLICY
          </h1>
        </div>
      </div>

      <section className="page-px" style={{ padding: "80px 64px 120px", maxWidth: 800 }}>
        <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 40 }}>Last updated: April 2026</p>

        {[
  {
    title: "All Sales Are Final",
    body: "LybyTex India is a wholesale manufacturer and exporter. All sales are final. We do not accept returns, exchanges, or issue refunds under any circumstances once an order has been placed.",
  },
  {
    title: "Damaged or Lost Goods",
    body: "LybyTex India is not responsible for any damage, loss, or delay that occurs during transit. Once goods have been dispatched and handed to the logistics provider, responsibility transfers to the buyer. We recommend buyers arrange appropriate shipping insurance for their orders.",
  },
  {
    title: "Order Cancellations",
    body: "Orders cannot be cancelled once placed and confirmed. Please ensure all fabric specifications, quantities, and colors are verified before confirming your order. We are happy to answer any questions prior to purchase via WhatsApp.",
  },
  {
    title: "Wholesale Policy",
    body: "As a wholesale supplier, our minimum order quantities and pricing are set at the time of order confirmation. Buyers are responsible for verifying all order details before confirming.",
  },
  {
    title: "Contact Us",
    body: "For any pre-order questions, please contact us via WhatsApp at +91 98251 24751 or email Lybytexindia@gmail.com. We are available Monday to Friday, 8am to 5pm IST.",
  },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid var(--border)" }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: 12 }}>{title}</h2>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, fontWeight: 300 }}>{body}</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}