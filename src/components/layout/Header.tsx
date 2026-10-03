"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Wood Collection", href: "#woods" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container nav">
        <Link className="brand-logo" href="#home">
          <Image
            src="/images/logo.jpeg"
            alt="Sivakarthik Timber Depot"
            width={200}
            height={72}
            priority
            style={{ height: "100%", width: "auto", objectFit: "contain" }}
          />
        </Link>
        <nav
          className={`links${menuOpen ? " open" : ""}`}
          id="navLinks"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="#contact">
          GET A QUOTE ↗
        </Link>
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
