import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { AboutSection, ContactSection } from "@/components/home/Sections";
import { createPageMetadata } from "@/lib/metadata";

/* Lazy-load the interactive Wood Collection — it's below the fold and ships
   useState / onClick handlers that don't need to be in the initial bundle. */
const WoodCollectionSection = dynamic(
  () =>
    import("@/components/home/WoodCollection").then(
      (mod) => mod.WoodCollectionSection
    ),
  { ssr: true }
);

export const metadata = createPageMetadata({
  title: "Sivakarthik Timber Depot | Rooted in Quality",
  description:
    "Sivakarthik Timber Depot supplies premium teakwood for builders, architects and carpenters. Enquire for timber requirements.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Suspense>
        <WoodCollectionSection />
      </Suspense>
      <ContactSection />
    </>
  );
}
