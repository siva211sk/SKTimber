import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/data/site-config";

export function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container about-layout">
        <div className="about-text">
          <div
            className="section-label"
            style={{ color: "rgb(183, 120, 2)", fontSize: "2.5rem" }}
          >
            About Us
          </div>
          <p>
            <span style={{ fontSize: "22px", color: "#000000ff" }}>
              Since 2010, quality has never been a compromise.
            </span>{" "}
            Siva Karthik Timber Depot was founded in 2010 by M.S. Giri, built
            on quality, trust, and value. That promise has carried us for over a
            decade, earning the trust of thousands of customers across Andhra
            Pradesh.
          </p>
          <p>
            For us, timber isn&apos;t just a product it&apos;s what helps people build
            homes, furniture, and memories that last. That&apos;s why we continue to
            invest in research and development, always working to offer better
            wood and a better experience, with our customers&apos; trust as our top
            priority.
          </p>
          <p>
            Today, as we take the Siva Karthik name beyond Andhra Pradesh, our
            values haven&apos;t changed. Quality, trust, and value built this brand
            and they&apos;re what will carry it forward, nationwide.
          </p>
        </div>
        <div className="about-image">
          <Image
            src="/images/about.png"
            alt="About Sivakarthik Timber Depot"
            width={560}
            height={560}
            style={{ width: "35rem", maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="about-footer">
        <div className="container">
          <span className="about-footer-item">
            <span className="icon-badge">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            2010 Founded
          </span>
          <span className="about-footer-item">
            <span className="icon-badge">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
            13+ year Of trusted quality
          </span>
          <span className="about-footer-item">
            <span className="icon-badge">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            Founded by M. Sesha Giri
          </span>
        </div>
      </div>
    </section>
  );
}

export function WoodCollectionSection() {
  const row1 = PRODUCTS.slice(0, 3);
  const row2 = PRODUCTS.slice(3, 5);

  return (
    <section
      className="section"
      id="woods"
      style={{ backgroundColor: "#581825", color: "#ffffff" }}
    >
      <div className="container">
        <div className="section-head" style={{ display: "block" }}>
          <div
            className="section-label"
            style={{ color: "rgb(255, 255, 255)", fontSize: "2.5rem" }}
          >
            Wood collection
          </div>
          <p
            style={{
              fontSize: "1.5rem",
              marginTop: "40px",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            &quot;Timber we are specialized in&quot;
          </p>
        </div>
        <div className="wood-grid">
          <div className="wood-row1">
            {row1.map((product) => (
              <div key={product.slug}>
                <article className="wood-card">
                  <div className="wood-info">
                    <p>{product.name}</p>
                    <br />
                    <span className="wood-spec-label">Specifications:</span>
                    <ul>
                      {product.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="wood-row2">
            {row2.map((product) => (
              <div key={product.slug}>
                <article className="wood-card">
                  <div className="wood-info">
                    <p>{product.name}</p>
                    <br />
                    <span className="wood-spec-label">Specifications:</span>
                    <ul>
                      {product.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { contact } = SITE_CONFIG;

  return (
    <section className="section" id="contact">
      <div className="container contact-layout">
        <div>
          <div className="section-label" style={{ fontSize: "4rem" }}>
            Contact Us
          </div>
          <div className="contact-detail">
            <b>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  verticalAlign: "-2px",
                  marginRight: "6px",
                  color: "#678064",
                }}
              >
                <path d="M3 21h18" />
                <path d="M9 8h1" />
                <path d="M9 12h1" />
                <path d="M9 16h1" />
                <path d="M14 8h1" />
                <path d="M14 12h1" />
                <path d="M14 16h1" />
                <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
              </svg>
              Business
            </b>
            {SITE_CONFIG.businessName}
          </div>
          <div className="contact-detail">
            <b>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  verticalAlign: "-2px",
                  marginRight: "6px",
                  color: "#678064",
                }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Phone / WhatsApp
            </b>
            <div style={{ marginTop: "6px", lineHeight: "1.7", color: "#526158" }}>
              {contact.contacts.map((c, i) => (
                <div key={i}>
                  <strong>{i + 1}. {c.name}:</strong>{" "}
                  <a
                    href={c.phoneHref}
                    className="contact-link"
                    style={{
                      color: "#294c36",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-detail">
            <b>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  verticalAlign: "-2px",
                  marginRight: "6px",
                  color: "#678064",
                }}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </b>
            <span style={{ display: "block", marginTop: "4px" }}>
              <a
                href={contact.emailHref}
                style={{
                  color: "#294c36",
                  fontWeight: 600,
                  textDecoration: "underline",
                }}
              >
                {contact.email}
              </a>
            </span>
          </div>
          <div className="contact-detail">
            <b>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  verticalAlign: "-2px",
                  marginRight: "6px",
                  color: "#678064",
                }}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Address
            </b>
            <span
              style={{
                display: "block",
                marginTop: "4px",
                lineHeight: "1.6",
                color: "#526158",
              }}
            >
              S.No. 185, Renigunta Rd, Korramenugunta,
              <br />
              Tirupati, Andhra Pradesh - 517501
            </span>
          </div>
          <div className="contact-detail">
            <b>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  verticalAlign: "-2px",
                  marginRight: "6px",
                  color: "#678064",
                }}
              >
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Location
            </b>
            <div className="contact-map-wrap">
              <iframe
                src={contact.mapsEmbed}
                width="100%"
                height="180"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sivakarthik Timber Depot Location"
              />
            </div>
            <a
              href={contact.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="maps-link"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
