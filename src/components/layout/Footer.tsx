import { SITE_CONFIG } from "@/data/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div>
          <strong style={{ fontSize: "20px", color: "var(--ink)" }}>
            Sivakarthik Timber Depot
          </strong>
          <br />
          <span style={{ fontSize: "10px", letterSpacing: "2px" }}>
            TIMBER SUPPLIER QUALITY
          </span>
        </div>
        <div>
          © <span>{year}</span> {SITE_CONFIG.businessName}. All rights reserved.
        </div>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
