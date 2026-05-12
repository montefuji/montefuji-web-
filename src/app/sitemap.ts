import type { MetadataRoute } from "next";
import { SEO_LANDING_PAGES } from "./seo-pages";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.montefuji.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...SEO_LANDING_PAGES.map((page) => ({
      url: new URL(`/${page.slug}`, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
  ];
}
