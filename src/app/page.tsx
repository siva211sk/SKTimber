import { Hero } from "@/components/home/Hero";
import { AboutSection, ApplicationsSection, CtaSection, CollectionSection, ContactSection, ProductDetailsSections, WhyChooseSection } from "@/components/home/Sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Quality Timber for Every Project",
  description: "Discover considered timber for construction, interiors and craftsmanship at Siva Karthik Timber Depot. Explore our wood collection and enquire today.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CollectionSection />
      <ProductDetailsSections />
      <ApplicationsSection />
      <WhyChooseSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
