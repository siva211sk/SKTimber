import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Wood collection", href: "#collection" },
  { label: "Applications", href: "#applications" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="#home" aria-label={`${SITE_CONFIG.businessName} home`}>
          <Image
            className="brand-logo"
            src="/svg/logo.svg"
            alt={`${SITE_CONFIG.businessName} logo`}
            width={100}
            height={26}
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <Link className="header-cta" href="#enquiry">
          Get a quote <ArrowUpRight size={15} />
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><Menu size={22} /></summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <Link className="mobile-quote" href="#enquiry">Get a quote <ArrowUpRight size={15} /></Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
