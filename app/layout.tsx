import type { Metadata } from "next";
import "./globals.css";
import RevealInit from "./components/RevealInit";

export const metadata: Metadata = {
  title: "LybyTex India — African Textile Manufacturer",
  description: "Premium manufacturer and exporter of Kente, embroidery, and ceremonial fabrics. Supplying wholesalers across Africa from Surat, India since 1997.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
