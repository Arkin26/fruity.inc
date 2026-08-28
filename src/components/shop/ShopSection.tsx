import Link from "next/link";
import { PRODUCTS } from "@/lib/shop-data";
import { ProductCarousel } from "./ProductCarousel";

export function ShopSection() {
  return (
    <section className="px-2 py-12 sm:px-4 sm:py-16 md:px-6 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-6 px-2 sm:mb-10 sm:px-0">
        <div>
          <p className="text-xs text-white/50 sm:text-sm">
            Don&apos;t miss out on our latest drops
          </p>
          <h2 className="mt-1 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-none tracking-wide text-white sm:text-6xl md:text-7xl">
            Shop
          </h2>
        </div>
        <Link
          href="/shop"
          className="shrink-0 rounded-sm bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-neutral-200 sm:px-6 sm:py-3"
        >
          See Shop
        </Link>
      </div>

      <ProductCarousel products={PRODUCTS} />
    </section>
  );
}
