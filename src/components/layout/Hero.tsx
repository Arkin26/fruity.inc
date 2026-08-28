import Image from "next/image";
import { ESTABLISHED, HASHTAG, HERO_IMAGE } from "@/lib/constants";

export function Hero() {
  return (
    <section id="hero" className="relative h-dvh w-full overflow-hidden bg-black">
      <HeroMedia />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-5 pb-5 sm:px-8 sm:pb-7">
        <p className="font-[family-name:var(--font-display)] text-[11px] font-semibold uppercase tracking-[0.22em] text-white sm:text-sm">
          {HASHTAG}
        </p>
        <p className="font-[family-name:var(--font-display)] text-[11px] font-semibold uppercase tracking-[0.22em] text-white sm:text-sm">
          {ESTABLISHED}
        </p>
      </div>
    </section>
  );
}

function HeroMedia() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {HERO_IMAGE ? (
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : null}
    </div>
  );
}
