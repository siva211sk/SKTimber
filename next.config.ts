import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Prevent MIME sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Referrer policy
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // HSTS (1 year)
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  // Cross-Origin Opener Policy
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  // Permissions policy
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.emailjs.com https://api.emailjs.com",
      "style-src 'self' 'unsafe-inline' https://db.onlinewebfonts.com",
      "font-src 'self' https://db.onlinewebfonts.com",
      "img-src 'self' data: blob: https://maps.gstatic.com https://maps.googleapis.com",
      "frame-src https://maps.google.com https://www.google.com",
      "connect-src 'self' https://api.emailjs.com",
      "worker-src blob:",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 65, 75],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Long cache for immutable static assets
      {
        source: "/svg/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/images/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/wood-collection/:slug", destination: "/#collection", permanent: true },
      { source: "/wood-collection", destination: "/#collection", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
