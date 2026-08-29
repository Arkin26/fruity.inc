import Link from "next/link";
import { FEATURED_PRODUCTS } from "@/lib/shop-data";
import { ProductGrid } from "./ProductGrid";

export function ShopSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <ProductGrid products={FEATURED_PRODUCTS} />

      <div className="mt-10 flex justify-center sm:mt-12">
        <Link
          href="/shop"
          className="font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wide text-black underline decoration-2 underline-offset-4 transition-opacity hover:opacity-60 sm:text-base"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
