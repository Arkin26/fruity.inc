import Image from "next/image";
import Link from "next/link";
import { ACTIVE_SALES, COLLECTION_CARD } from "@/lib/shop-data";

export function FeaturedCards() {
  return (
    <section className="grid grid-cols-1 gap-2 px-2 pt-2 md:grid-cols-[2fr_3fr] md:gap-3 md:px-4">
      <SalesBox />
      <CollectionCard card={COLLECTION_CARD} />
    </section>
  );
}

function SalesBox() {
  return (
    <div className="relative flex aspect-[8/7] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(160deg, #1a2a4a 0%, #0d1520 40%, #1e3a5f 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex items-end justify-between px-5 pt-5">
        <p className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase leading-none tracking-wide text-white sm:text-3xl">
          On Sale
        </p>
        <Link
          href="/shop"
          className="text-[10px] font-bold uppercase tracking-wide text-white/50 transition-colors hover:text-white sm:text-xs"
        >
          Shop All
        </Link>
      </div>

      <div className="relative z-10 mt-4 flex flex-1 flex-col gap-2 overflow-hidden px-3 pb-3 sm:px-4 sm:pb-4">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-6 bg-gradient-to-b from-[#0d1520] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-8 bg-gradient-to-t from-black to-transparent"
          aria-hidden
        />

        <div className="animate-sales-elevator flex flex-col gap-2 will-change-transform motion-reduce:animate-none">
          {[...ACTIVE_SALES, ...ACTIVE_SALES].map((sale, index) => (
            <Link
              key={`${sale.id}-${index}`}
              href={sale.href}
              className="group relative shrink-0 overflow-hidden rounded-xl border border-white/10 px-4 py-3 transition-colors hover:border-white/25"
            >
              <div
                className="absolute inset-0 opacity-70 transition-opacity group-hover:opacity-90"
                style={{ background: sale.gradient }}
                aria-hidden
              />
              <div className="relative z-10 flex items-center justify-between gap-3">
                <p className="font-[family-name:var(--font-display)] text-xs font-bold uppercase leading-tight tracking-wide text-white sm:text-sm">
                  {sale.title}
                </p>
                <span className="shrink-0 rounded-sm bg-white px-2 py-1 font-[family-name:var(--font-display)] text-[10px] font-bold uppercase tracking-wide text-black sm:text-[11px]">
                  {sale.discount}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function CollectionCard({
  card,
}: {
  card: typeof COLLECTION_CARD;
}) {
  return (
    <Link
      href={card.href}
      className="group relative block aspect-[8/7] overflow-hidden rounded-2xl border border-white/10"
    >
      <div
        className="absolute inset-0"
        style={{ background: card.gradient }}
        aria-hidden
      />
      {card.image ? (
        <Image
          src={card.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      ) : (
        <CardPlaceholder />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-5 pb-5 pt-16">
        <p className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase leading-none tracking-wide text-white sm:text-3xl md:text-4xl">
          {card.title}
        </p>
      </div>
    </Link>
  );
}

function CardPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-y-8 left-[28%] w-px bg-white/30" />
      <div className="absolute inset-y-8 right-[28%] w-px bg-white/30" />
      <div className="h-36 w-32 rounded-xl bg-zinc-800/80 shadow-2xl" />
    </div>
  );
}
