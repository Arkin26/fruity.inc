import Image from "next/image";
import Link from "next/link";
import { FEATURED_CARDS } from "@/lib/shop-data";

export function FeaturedCards() {
  return (
    <section className="grid grid-cols-1 gap-2 px-2 pt-2 md:grid-cols-2 md:gap-3 md:px-4">
      {FEATURED_CARDS.map((card) => (
        <FeaturedCard key={card.title} card={card} />
      ))}
    </section>
  );
}

function FeaturedCard({
  card,
}: {
  card: (typeof FEATURED_CARDS)[number];
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
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <CardPlaceholder variant={card.title.includes("ABOUT") ? "team" : "product"} />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-5 pb-5 pt-16">
        <p className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase leading-none tracking-wide text-white sm:text-3xl md:text-4xl">
          {card.title}
        </p>
      </div>
    </Link>
  );
}

function CardPlaceholder({ variant }: { variant: "team" | "product" }) {
  if (variant === "team") {
    return (
      <div className="absolute inset-0 flex items-end justify-center pb-16 opacity-40">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-32 w-10 rounded-t-full bg-white/20"
              style={{ height: `${100 + i * 12}px` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-y-8 left-[28%] w-px bg-white/30" />
      <div className="absolute inset-y-8 right-[28%] w-px bg-white/30" />
      <div className="h-36 w-32 rounded-xl bg-zinc-800/80 shadow-2xl" />
    </div>
  );
}
