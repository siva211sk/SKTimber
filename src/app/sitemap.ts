import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: new URL("/", SITE_CONFIG.siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }];
}
