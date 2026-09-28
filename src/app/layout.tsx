import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/data/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.businessName} | Quality Timber for Every Project`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.businessName,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_CONFIG.businessName} | Quality Timber for Every Project`,
    description: SITE_CONFIG.description,
    url: "/",
    siteName: SITE_CONFIG.businessName,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/forest-canopy.jpg", width: 2200, height: 1467, alt: "Sunlight through a green forest canopy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.businessName,
    description: SITE_CONFIG.description,
    images: ["/images/forest-canopy.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17392e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.businessName,
    description: SITE_CONFIG.description,
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
