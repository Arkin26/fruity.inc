"use client";

import Link from "next/link";
import { useState } from "react";
import type { ProductColor, ProductDetail } from "@/lib/shop-data";
import { cn } from "@/lib/utils";

type ProductDetailViewProps = {
  product: ProductDetail;
  initialColor: ProductColor;
};

export function ProductDetailView({
  product,
  initialColor,
}: ProductDetailViewProps) {
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const isHoodie = product.id.includes("hoodie");
  const garmentFill =
    selectedColor.id === "black" ? "bg-zinc-900" : "bg-zinc-100";
  const garmentAccent =
    selectedColor.id === "black" ? "text-white/30" : "text-black/30";

  return (
    <div className="bg-black px-2 py-10 sm:px-4 sm:py-14 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-block text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-white/80"
        >
          ← Back to shop
        </Link>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-6">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl transition-[background] duration-500"
              style={{ background: selectedColor.gradient }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={cn(
                    "shadow-[0_32px_64px_rgba(0,0,0,0.25)] transition-colors duration-500",
                    garmentFill,
                    isHoodie
                      ? "h-[min(62%,300px)] w-[min(72%,220px)] rounded-2xl"
                      : "h-[min(55%,260px)] w-[min(70%,200px)] rounded-xl",
                  )}
                >
                  {isHoodie && (
                    <div
                      className={cn(
                        "mx-auto mt-[8%] h-[28%] w-[55%] rounded-t-full border-4 border-current",
                        garmentAccent,
                      )}
                    />
                  )}
                  <div className="mx-auto mt-[12%] h-1.5 w-[35%] rounded-full bg-current opacity-10" />
                  <div className="mt-[10%] flex flex-col items-center gap-1 px-4">
                    <div className="h-px w-[30%] bg-current opacity-15" />
                    <div
                      className={cn(
                        "text-[11px] font-bold tracking-widest sm:text-xs",
                        garmentAccent,
                      )}
                    >
                      FRUITY
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                Available sizes
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "min-w-11 rounded-sm border px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors",
                      selectedSize === size
                        ? "border-white bg-white text-black"
                        : "border-white/20 text-white/70 hover:border-white/40 hover:text-white",
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                {product.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select ${color.label}`}
                  aria-pressed={selectedColor.id === color.id}
                  className={cn(
                    "h-8 w-8 rounded-full border-2 transition-all",
                    selectedColor.id === color.id
                      ? "border-white scale-110"
                      : "border-transparent hover:scale-105",
                  )}
                  style={{ backgroundColor: color.swatch }}
                />
              ))}
            </div>

            <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold uppercase leading-tight tracking-wide text-white sm:text-4xl md:text-5xl">
              {product.title}
            </h1>
            <p className="mt-2 text-sm uppercase tracking-widest text-white/50">
              {product.subtitle}
            </p>

            <p className="mt-6 font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
              {product.price}
            </p>

            <p className="mt-2 text-sm text-white/50">
              Color:{" "}
              <span className="text-white/80">{selectedColor.label}</span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-sm bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-neutral-200"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="rounded-sm border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
              Product details
            </h2>
            <ul className="mt-5 space-y-3">
              {product.info.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-relaxed text-white/60"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-h-[200px] rounded-xl border border-dashed border-white/15 bg-black/40 sm:min-h-[240px]" />
        </div>
      </div>
    </div>
  );
}
