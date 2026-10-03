import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "70px 20px" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>Page not found</h1>
      <p style={{ color: "#626b65", marginBottom: "24px" }}>The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-gold">Back to Home</Link>
    </div>
  );
}
