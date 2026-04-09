// app/robots.ts
// Place this file at: lybytex-fresh/app/robots.ts

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://lybytex.com/sitemap.xml",
  };
}
