"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/data/site-config";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <Image
            src="/images/logo.jpeg"
            alt="Sivakarthik Timber Depot"
            width={150}
            height={25}
            priority
            style={{ height: "auto", width: "auto", objectFit: "contain" }}
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
