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
  const loop = [...ACTIVE_SALES, ...ACTIVE_SALES];

  return (
    <Link
      href="/shop"
      className="group relative flex aspect-[8/7] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black"
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(160deg, #1a2a4a 0%, #0d1520 40%, #1e3a5f 100%)",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-[#0d1520] via-[#0d1520]/80 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-black via-black/80 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]">
        <div className="animate-sales-elevator flex flex-col items-center gap-8 will-change-transform motion-reduce:animate-none">
          {loop.map((sale, index) => (
            <p
              key={`${sale}-${index}`}
              className="shrink-0 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-none tracking-wide text-white sm:text-5xl"
            >
              {sale}
            </p>
          ))}
        </div>
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
