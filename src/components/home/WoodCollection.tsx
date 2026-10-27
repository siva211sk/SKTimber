"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

const WOODS = [
  { name: "Palash Wood", sub: "Balasha", img: "/images/ballarsha.jpeg" },
  { name: "Teak Wood", sub: "Sagwan", img: "/images/teak.jpeg" },
  { name: "Neem Wood", sub: "Vepa", img: "/images/neam.jpeg" },
  { name: "Jamun Wood", sub: "Neredu", img: "/images/jamun.jpeg" },
  { name: "Babuca Wood", sub: "Thumma", img: "/images/babuca.jpeg" },
];

export function WoodCollectionSection() {
  const [active, setActive] = useState(0);
  const handleSelect = useCallback((i: number) => setActive(i), []);

  return (
    <section id="woods">
      <div className="wc-layout">
        {/* LEFT: header + card list */}
        <div className="wc-left">
          <div className="wc-header">
            <div className="wc-label">Wood Collection</div>
            <p className="wc-desc">
              Explore our carefully sourced timber collection, built for lasting
              space.
            </p>
          </div>
          <div className="wc-cards">
            {WOODS.map((wood, i) => (
              <div
                key={i}
                className={`wc-card${active === i ? " active" : ""}`}
                data-wood={i}
                onClick={() => handleSelect(i)}
              >
                <span className="wc-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="wc-card-text">
                  <strong>{wood.name}</strong>
                  <em>{wood.sub}</em>
                </div>
                <span className="wc-card-arrow">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: 5 image slots — Next.js Image for auto format/resize */}
        <div className="wc-right">
          {WOODS.map((wood, i) => (
            <div
              key={i}
              className={`wc-img-wrap${active === i ? " active" : ""}`}
              data-wood={i}
              onClick={() => handleSelect(i)}
            >
              <Image
                src={wood.img}
                alt={`${wood.name} — ${wood.sub}`}
                width={400}
                height={220}
                loading="lazy"
                quality={60}
                sizes="(max-width: 860px) 50vw, 200px"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <span className="wc-img-badge">
                {wood.name} — {wood.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
