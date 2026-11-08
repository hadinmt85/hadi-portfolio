import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://hadinemati.ir/sitemap.xml",
    host: "https://hadinemati.ir",
  };
}
