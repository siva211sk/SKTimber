import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site-config";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_CONFIG.businessName,
      type: "website",
      images: [{ url: "/images/forest-canopy.jpg", width: 2200, height: 1467, alt: "Sunlight through a green forest canopy" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/forest-canopy.jpg"],
    },
  };
}
