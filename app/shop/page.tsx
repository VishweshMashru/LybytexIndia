import Navbar from "../components/Navbar";
import ShopClient from "./ShopClient";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { PRODUCTS, CATEGORIES } from "../components/products";

export default function ShopPage() {
  return (
    <main style={{ background: "#fff" }}>
      <Navbar />
      <ShopClient products={PRODUCTS} categories={CATEGORIES} />
      <Contact />
      <Footer />
    </main>
  );
}
