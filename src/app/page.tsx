import { Hero } from "@/components/home/Hero";
import { AboutSection, ContactSection } from "@/components/home/Sections";
import { WoodCollectionSection } from "@/components/home/WoodCollection";
import { createPageMetadata } from "@/lib/metadata";

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
      <WoodCollectionSection />
      <ContactSection />
    </>
  );
}
