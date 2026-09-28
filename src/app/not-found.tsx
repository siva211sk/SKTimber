import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404 · Page not found</p>
      <h1>This path doesn&apos;t<br /><em>lead to the woods.</em></h1>
      <p>The page may have moved, or the address may be mistyped.</p>
      <Link className="button button-dark" href="/">Return home</Link>
    </section>
  );
}
