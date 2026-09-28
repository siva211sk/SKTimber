import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link className="product-image-wrap" href={`#product-${product.slug}`} aria-label={`Explore ${product.name}`}>
        <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 700px) 100vw, 50vw" />
        <span className="product-card-index">01 / WOOD</span>
        <span className="product-card-arrow"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="product-card-body">
        <p className="eyebrow">{product.eyebrow}</p>
        <div className="product-card-title">
          <h3>{product.name}</h3>
          <span aria-hidden="true">01</span>
        </div>
        <p>{product.summary}</p>
        <Link className="text-link" href={`#product-${product.slug}`}>Discover {product.name.toLowerCase()} <ArrowUpRight size={15} /></Link>
      </div>
    </article>
  );
}
