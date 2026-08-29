import Image from "next/image";
import Link from "next/link";
import { COLLECTION_CARD, SALES_POSTER } from "@/lib/shop-data";

export function FeaturedCards() {
  return (
    <section className="px-2 pt-2 pb-12 sm:pb-16 md:px-4 md:pb-20">
      <div className="grid grid-cols-1 gap-2 md:h-[min(28vw,22rem)] md:grid-cols-[2fr_3fr] md:gap-3">
        <SalesBox />
        <CollectionCard card={COLLECTION_CARD} />
      </div>
    </section>
  );
}

function SalesBox() {
  return (
    <Link
      href={SALES_POSTER.href}
      className="group relative flex aspect-[10/7] h-full min-h-0 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black px-6 text-center md:aspect-auto"
    >
      <div
        className="absolute inset-0 opacity-70 transition-opacity group-hover:opacity-80"
        style={{
          background:
            "linear-gradient(160deg, #1a2a4a 0%, #0d1520 40%, #1e3a5f 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4">
        <p className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase leading-none tracking-wide text-white sm:text-3xl md:text-4xl">
          {SALES_POSTER.headline}
        </p>
        <p className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-none tracking-wide text-white sm:text-5xl md:text-6xl">
          {SALES_POSTER.highlight}
        </p>
        <p className="max-w-[16rem] text-xs leading-relaxed text-white/60 sm:text-sm md:text-base">
          {SALES_POSTER.description}
        </p>
      </div>
    </Link>
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
      className="group relative block aspect-[10/7] h-full min-h-0 overflow-hidden rounded-2xl border border-white/10 md:aspect-auto"
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
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pb-4 pt-12 sm:px-5 sm:pb-5 sm:pt-16">
        <p className="font-[family-name:var(--font-display)] text-xl font-bold uppercase leading-none tracking-wide text-white sm:text-2xl md:text-3xl lg:text-4xl">
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
      <div className="h-28 w-28 rounded-xl bg-zinc-800/80 shadow-2xl sm:h-36 sm:w-32" />
    </div>
  );
}
