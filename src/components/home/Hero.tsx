import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero" id="home">
      <Image
        className="hero-background"
        src="/images/homeBackground.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
        aria-hidden="true"
      />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-since">- Since 2010 -</div>
          <h1>
            Timber<br />
            <em>for Every Build.</em>
          </h1>
          <div className="hero-values">
            <span>Quality</span>
            <span>Trust</span>
            <span>Value</span>
          </div>
          <div className="actions">
            <Link className="btn btn-gold" href="#woods">
              EXPLORE OUR TIMBER ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
