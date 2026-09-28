import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Box, Check, DoorOpen, Hammer, House, Mail, MapPin, Phone, Sofa, Sparkles, Trees, Truck } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/data/site-config";

const applications = [
  { title: "Doors & windows", copy: "Distinctive natural character for the details that welcome you in.", icon: DoorOpen },
  { title: "Furniture", copy: "Timber for pieces made to live with, use and pass along.", icon: Sofa },
  { title: "Interiors", copy: "Warmth and texture for thoughtful, enduring spaces.", icon: Sparkles },
  { title: "Construction", copy: "A natural material for building and finishing projects.", icon: House },
];

export function AboutSection() {
  return (
    <section className="about-section section-wrap" id="about">
      <div className="about-visual">
        <Image src="/images/architectural-interior.jpg" alt="Sunlit contemporary interior with warm timber finishes" fill sizes="(max-width: 760px) 100vw, 45vw" />
        <div className="about-stamp"><Trees size={19} /><span>Nature,<br />made lasting.</span></div>
      </div>
      <div className="about-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> Who we are</p>
        <h2>Good timber<br />makes room for<br /><em>good work.</em></h2>
        <p>Siva Karthik Timber Depot brings together a considered wood collection for builders, architects, contractors, carpenters and homeowners.</p>
        <p>Whether you are shaping a home, planning an interior or choosing material for a craft, we are here to help you explore your options and make an informed enquiry.</p>
        <Link className="text-link" href="#contact">Talk to our team <ArrowUpRight size={15} /></Link>
      </div>
    </section>
  );
}

export function CollectionSection() {
  return (
    <section className="collection-section" id="collection">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> The collection</p>
            <h2>Wood with a<br /><em>story to tell.</em></h2>
          </div>
          <p>Explore our currently confirmed timber selection. Get in touch to discuss what your project needs.</p>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((product) => <ProductCard key={product.slug} product={product} />)}
          <div className="collection-note">
            <span className="note-icon"><Box size={22} /></span>
            <p className="eyebrow">Your project, your brief</p>
            <h3>Looking for a different wood?</h3>
            <p>Tell us what you are working on and ask about timber options for your project.</p>
            <Link className="text-link" href="#enquiry">Make an enquiry <ArrowUpRight size={15} /></Link>
          </div>
        </div>
        <div className="collection-footer"><span>01 confirmed variety</span><Link href="#product-teakwood">Explore teakwood <ArrowUpRight size={15} /></Link></div>
      </div>
    </section>
  );
}

export function ApplicationsSection() {
  return (
    <section className="applications-section section-wrap" id="applications">
      <div className="applications-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Made for many uses</p>
        <h2>From first sketch<br />to <em>final detail.</em></h2>
      </div>
      <div className="applications-grid">
        {applications.map(({ title, copy, icon: Icon }, index) => (
          <article className="application-item" key={title}>
            <span className="application-number">0{index + 1}</span>
            <Icon size={23} strokeWidth={1.4} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className="why-section">
      <div className="section-wrap why-inner">
        <div className="why-intro">
          <p className="eyebrow"><span className="eyebrow-line" /> A considered choice</p>
          <h2>Good decisions<br />start with <em>good information.</em></h2>
          <p>Choosing timber is part material, part project. We make it straightforward to ask questions and explore the details that matter to you.</p>
        </div>
        <div className="why-points">
          <article><span>01</span><div><h3>Clear product information</h3><p>Explore the details we can share and ask us about the right fit for your use.</p></div><Box size={19} /></article>
          <article><span>02</span><div><h3>Helpful conversations</h3><p>Tell us your project requirements and get a direct, personal response.</p></div><Hammer size={19} /></article>
          <article><span>03</span><div><h3>Simple enquiries</h3><p>Reach out by phone, email or WhatsApp — whichever works for you.</p></div><Truck size={19} /></article>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let&apos;s make something<br /><em>worth keeping.</em></h2>
        <Link className="button button-gold" href="#enquiry">Start a conversation <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}

export function ProductDetailsSections() {
  return (
    <>
      {PRODUCTS.map((product, index) => (
        <section className="product-detail-hero" id={`product-${product.slug}`} key={product.slug}>
          <div className="product-detail-image">
            <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 800px) 100vw, 52vw" />
          </div>
          <div className="product-detail-copy">
            <p className="eyebrow"><span /> {product.eyebrow}</p>
            <h2>{product.name}<br /><em>timber.</em></h2>
            <p className="product-detail-summary">{product.summary}</p>
            <p>{product.description}</p>
            <Link className="button button-dark" href="#enquiry">Enquire about {product.name} <ArrowUpRight size={16} /></Link>
            <span className="product-detail-caption">Product options are discussed per enquiry. No pricing or stock availability is listed online.</span>
          </div>
          <div className="section-wrap product-info">
            <section>
              <p className="eyebrow">0{index + 1} / Overview</p>
              <h3>A natural material<br /><em>with presence.</em></h3>
              <p>{product.description}</p>
            </section>
            <section className="product-applications">
              <p className="eyebrow">Common applications</p>
              <h3>Where it finds<br /><em>its place.</em></h3>
              <ul>{product.applications.map((application) => <li key={application}><Check size={16} /> {application}</li>)}</ul>
            </section>
            <section className="specification-section">
              <p className="eyebrow">Product details</p>
              <h3>Ask about<br /><em>your selection.</em></h3>
              <dl>{product.specifications.map((specification) => <div key={specification.label}><dt>{specification.label}</dt><dd>{specification.value}</dd></div>)}</dl>
            </section>
          </div>
        </section>
      ))}
    </>
  );
}

export function ContactSection() {
  const { contact } = SITE_CONFIG;

  return (
    <section className="contact-single-page" id="contact">
      <div className="inner-hero inner-hero-contact">
        <div className="section-wrap inner-hero-content">
          <p className="eyebrow"><span /> Start a conversation</p>
          <h2>We&apos;re here to<br /><em>talk timber.</em></h2>
          <p>Tell us what you are planning. We&apos;ll help you explore the next steps.</p>
        </div>
      </div>
      <div className="section-wrap contact-layout">
        <div className="contact-details">
          <p className="eyebrow"><span className="eyebrow-line" /> Contact us</p>
          <h2>Good projects<br />start with <em>a question.</em></h2>
          <p>Reach us using the contact details below, or share a few details in the enquiry form.</p>
          <div className="contact-methods">
            <a href={contact.phoneHref || "#enquiry"}><span><Phone size={18} /></span><div><small>Call us</small><strong>{contact.phoneDisplay}</strong></div><ArrowUpRight size={15} /></a>
            <a href={contact.emailHref || "#enquiry"}><span><Mail size={18} /></span><div><small>Email</small><strong>{contact.email}</strong></div><ArrowUpRight size={15} /></a>
            <div><span><MapPin size={18} /></span><div><small>Visit us</small><strong>{contact.address}</strong></div></div>
          </div>
          <p className="contact-note">Business contact details are being configured. Update them in <code>src/data/site-config.ts</code> before launch.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
