import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/data/site-config";

export function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container about-layout">
        <div className="about-text">
          <div
            className="section-label"
            style={{ color: "rgb(183, 120, 2)", fontSize: "1rem" }}
          >
            About Us
          </div>
          <p>
            <span
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                lineHeight: 1.2,
                color: "rgb(36, 24, 24)",
              }}
            >
              Since 2010, quality has never been a compromise.
            </span>
            <br />
            <br />
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
        <div className="about-image-col">
          <div className="about-values-row">
            <span className="about-value-pill">Quality</span>
            <span className="about-value-pill">Trust</span>
            <span className="about-value-pill">Value</span>
          </div>
          <Image
            src="/images/about.png"
            alt="About Sivakarthik Timber Depot"
            width={560}
            height={560}
            loading="lazy"
            quality={65}
            sizes="(max-width: 650px) 100vw, 35rem"
            style={{ width: "35rem", maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="about-footer">
        <div className="container">
          <span className="stat-item">
            <span className="stat-num">2010</span> Founded
          </span>
          <span className="stat-sep">◇───◇───◇</span>
          <span className="stat-item">
            <span className="stat-num">13+</span> Years Of Trusted Quality
          </span>
          <span className="stat-sep">◇───◇───◇</span>
          <span className="stat-item">Founded by M. Sesha Giri</span>
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
          <div className="section-label" style={{ fontSize: "2.5rem" }}>
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
                  color: "#823919",
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
            Sivakarthik Timber Depot
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
                  color: "#823919",
                }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Phone / WhatsApp
            </b>
            <div style={{ marginTop: "6px", lineHeight: "1.7", color: "#000" }}>
              {contact.contacts.map((c, i) => (
                <div key={i}>
                  <strong>
                    {i + 1}. {c.name}:
                  </strong>{" "}
                  <a
                    href={c.phoneHref}
                    style={{
                      color: "#000",
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
                  color: "#823919",
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
                  color: "#000",
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
                  color: "#823919",
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
                color: "#000",
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
                  color: "#823919",
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
              style={{
                display: "inline-block",
                marginTop: "8px",
                fontSize: "13px",
                color: "#b77802",
                fontWeight: 600,
              }}
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
