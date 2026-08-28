"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from "@/components/icons";
import type { Product } from "@/lib/shop-data";

type ProductCarouselProps = {
  products: Product[];
};

export function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -container.clientWidth : container.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Previous products"
        className="absolute top-[34%] left-0 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm bg-white text-black shadow-md transition-colors hover:bg-neutral-200 sm:h-10 sm:w-10 lg:top-[38%]"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Next products"
        className="absolute top-[34%] right-0 z-10 flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm bg-white text-black shadow-md transition-colors hover:bg-neutral-200 sm:h-10 sm:w-10 lg:top-[38%]"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>

      <div
        ref={scrollRef}
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article
      data-product-card
      className="flex w-full min-w-0 flex-col overflow-hidden rounded-2xl"
    >
      <Link
        href={product.href}
        className="group relative block aspect-[4/5] w-full overflow-hidden rounded-t-2xl"
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: product.gradient }}
        >
          <div className="h-[min(55%,220px)] w-[min(70%,180px)] rounded-xl bg-black/10 shadow-[0_24px_48px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-[1.03]">
            <div className="mx-auto mt-[12%] h-1.5 w-[35%] rounded-full bg-black/10" />
            <div className="mt-[10%] flex flex-col items-center gap-1 px-4">
              <div className="h-px w-[30%] bg-black/15" />
              <div className="text-[10px] font-bold tracking-widest text-black/30 sm:text-xs">
                FRUITY
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex items-start justify-between gap-3 bg-black px-3 py-3 sm:px-4 sm:py-4">
        <Link href={product.href} className="min-w-0 flex-1">
          <p className="font-[family-name:var(--font-display)] text-xs font-bold uppercase leading-snug tracking-wide text-white sm:text-sm lg:text-[15px]">
            {product.title}
          </p>
        </Link>
        <Link
          href={product.href}
          aria-label={`View ${product.title}`}
          className="flex h-8 w-8 shrink-0 items-center justify-center bg-zinc-800 text-white/70 transition-colors hover:text-white"
        >
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
