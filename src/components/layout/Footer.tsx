"use client";

import { SITE_CONFIG } from "@/data/site-config";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.jpeg"
            alt="Sivakarthik Timber Depot"
            style={{ height: "40px", width: "auto", objectFit: "contain" }}
          />
        </div>
        <div>
          © <span>{new Date().getFullYear()}</span>{" "}
          {SITE_CONFIG.businessName}. All rights reserved.
        </div>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
