// app/components/SchemaOrg.tsx
// Add <SchemaOrg /> to your homepage app/page.tsx

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lybytex.com/#organization",
        "name": "LybyTex India",
        "url": "https://lybytex.com",
        "logo": "https://lybytex.com/logo.png",
        "description":
          "Premium manufacturer and exporter of African textiles including Kente fabric, Brissi embroidery, and Duku scarves. Based in Surat, India since 1997.",
        "foundingDate": "1997",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Salabatpura",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "postalCode": "395003",
          "addressCountry": "IN",
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-98251-24751",
            "contactType": "sales",
            "areaServed": ["GH", "NG", "KE", "ZA", "CI", "SN", "GLOBAL"],
            "availableLanguage": "English",
          },
        ],
        "sameAs": [
          "https://wa.me/919825124751",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://lybytex.com/#website",
        "url": "https://lybytex.com",
        "name": "LybyTex India",
        "description": "African fabric manufacturer and exporter — Kente, embroidery, Duku scarves",
        "publisher": { "@id": "https://lybytex.com/#organization" },
      },
      {
        "@type": "LocalBusiness",
        "name": "LybyTex India",
        "image": "https://lybytex.com/logo.png",
        "priceRange": "$$",
        "telephone": "+91-98251-24751",
        "email": "Lybytexindia@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 3/1954, Shidhi Sheri, Salabatpura",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "postalCode": "395003",
          "addressCountry": "IN",
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "08:00",
            "closes": "17:00",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
