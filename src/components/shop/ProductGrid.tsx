import Link from "next/link";
import type { Product } from "@/lib/shop-data";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-4 md:gap-x-4 lg:gap-x-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col">
      <Link
        href={product.href}
        className="group relative block aspect-square w-full overflow-hidden bg-[#e8e8e8]"
      >
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity group-hover:opacity-90"
          style={{ background: product.gradient }}
          aria-hidden
        >
          <div className="h-[min(58%,200px)] w-[min(72%,170px)] rounded-lg bg-black/85 shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-[1.02]" />
        </div>
      </Link>

      <div className="mt-3 flex items-start justify-between gap-3">
        <Link href={product.href} className="min-w-0 flex-1">
          <p className="font-[family-name:var(--font-display)] text-[11px] font-bold uppercase leading-snug tracking-wide text-black sm:text-xs md:text-sm">
            {product.shopTitle}
          </p>
        </Link>
        <p className="shrink-0 font-[family-name:var(--font-display)] text-[11px] font-bold uppercase tracking-wide text-black sm:text-xs md:text-sm">
          {product.price}
        </p>
      </div>
    </article>
  );
}
