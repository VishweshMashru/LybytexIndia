import type { Metadata } from "next";
import "./globals.css";
import RevealInit from "./components/RevealInit";

export const metadata: Metadata = {
  metadataBase: new URL("https://lybytex.com"),
  title: {
    default: "LybyTex India — African Fabric Manufacturer & Exporter | Surat",
    template: "%s | LybyTex India",
  },
  description:
    "Premium African fabric manufacturer and exporter based in Surat, India. Wholesale Kente, Brissi embroidery, Duku scarves and ceremonial fabrics shipped globally to Ghana, Nigeria, Kenya and across Africa. Factory-direct pricing since 1997.",
  keywords: [
    "african fabric manufacturer india",
    "kente fabric wholesale india",
    "african fabric exporter surat",
    "brissi embroidery wholesale",
    "duku scarf manufacturer india",
    "african ceremonial fabric supplier",
    "kente cloth bulk order",
    "west african fabric india",
    "embroidery fabric manufacturer surat",
    "funeral fabric wholesale",
    "african wax print india",
    "textile exporter india africa",
    "fabric wholesale ghana nigeria kenya",
    "lybytex india",
  ],
  verification: {
    google: "dMEFaxv6QmNOGKR5vxhveet_1nD0A4zKF44i9OvRSI0",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lybytex.com",
    siteName: "LybyTex India",
    title: "LybyTex India — African Fabric Manufacturer & Exporter",
    description:
      "Wholesale Kente, Brissi embroidery and Duku scarves. Factory-direct from Surat, India to wholesalers across Africa.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "LybyTex India African Fabrics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LybyTex India — African Fabric Manufacturer",
    description: "Wholesale Kente, embroidery and Duku scarves direct from Surat, India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://lybytex.com",
  },
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
