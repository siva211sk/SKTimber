import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src="/images/forest-canopy.jpg"
        alt="Layered green woodland illuminated by soft natural light"
        fill
        priority
        sizes="100vw"
        quality={85}
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow"><span /> Timber for considered living</p>
        <h1 id="hero-title">Rooted in Nature.<br /><em>Built for Generations.</em></h1>
        <p className="hero-intro">Quality timber for construction, interiors and craftsmanship — selected with care for the work you bring to life.</p>
        <div className="hero-actions">
          <Link className="button button-gold" href="#collection">Explore our collection <ArrowUpRight size={16} /></Link>
          <Link className="button button-outline-light" href="#enquiry">Get a quote</Link>
        </div>
      </div>
      <div className="hero-bottom">
        <span>Natural materials. Timeless possibilities.</span>
        <a href="#about" aria-label="Scroll to about section"><ArrowDown size={17} /> Discover</a>
      </div>
      <div className="hero-index"><span>01</span><i /> 03</div>
    </section>
  );
}
