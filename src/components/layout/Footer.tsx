import Link from "next/link";
import { ArrowUpRight, TreePine } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function Footer() {
  const socials = [
    { label: "Instagram", href: SITE_CONFIG.socialLinks.instagram },
    { label: "Facebook", href: SITE_CONFIG.socialLinks.facebook },
    { label: "LinkedIn", href: SITE_CONFIG.socialLinks.linkedin },
  ].filter((social) => social.href);

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand brand-light" href="/">
            <span className="brand-mark"><TreePine size={20} strokeWidth={1.6} /></span>
            <span className="brand-copy"><strong>{SITE_CONFIG.shortName}</strong><small>TIMBER DEPOT</small></span>
          </Link>
          <p>Thoughtful timber choices for the places we build, shape and call home.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="#about">About us</Link>
          <Link href="#collection">Wood collection</Link>
          <Link href="#applications">Applications</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Get in touch</h2>
          <span>{SITE_CONFIG.contact.address}</span>
          <a href={SITE_CONFIG.contact.phoneHref || "#contact"}>{SITE_CONFIG.contact.phoneDisplay}</a>
          <a href={SITE_CONFIG.contact.emailHref || "#contact"}>{SITE_CONFIG.contact.email}</a>
          <Link className="footer-enquiry" href="#enquiry">Make an enquiry <ArrowUpRight size={15} /></Link>
        </div>
        {socials.length > 0 && (
          <div className="footer-column">
            <h2>Follow along</h2>
            {socials.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={15} /></a>
            ))}
          </div>
        )}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.</span>
        <span>Natural materials. Considered choices.</span>
      </div>
    </footer>
  );
}
