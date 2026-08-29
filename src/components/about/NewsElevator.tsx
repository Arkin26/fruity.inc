"use client";

import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/lib/news-data";

type NewsElevatorProps = {
  articles: NewsArticle[];
};

export function NewsElevator({ articles }: NewsElevatorProps) {
  const loop = [...articles, ...articles];

  return (
    <div className="relative h-[min(72vh,640px)] w-full overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-32 bg-gradient-to-b from-black via-black/80 to-transparent sm:h-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-black via-black/70 to-transparent"
        aria-hidden
      />

      <div
        className="h-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]"
        aria-hidden={false}
      >
        <div className="animate-news-elevator flex flex-col gap-3 will-change-transform motion-reduce:animate-none">
          {loop.map((article, index) => (
            <NewsElevatorCard
              key={`${article.id}-${index}`}
              article={article}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsElevatorCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={article.href}
      className="group relative block h-44 shrink-0 overflow-hidden rounded-xl sm:h-48"
    >
      <div
        className="absolute inset-0"
        style={{ background: article.gradient }}
        aria-hidden
      />
      {article.image ? (
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      ) : null}

      <span className="absolute top-3 left-3 z-10 bg-[#2563EB] px-2 py-0.5 font-[family-name:var(--font-display)] text-[9px] font-bold uppercase tracking-wide text-white sm:text-[10px]">
        {article.category}
      </span>

      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pt-12 pb-3.5">
        <h3 className="font-[family-name:var(--font-display)] text-sm font-bold uppercase leading-tight tracking-wide text-white sm:text-base">
          {article.title}
        </h3>
        <p className="mt-1.5 text-[10px] text-white/50 sm:text-[11px]">
          DATE: {article.date}
        </p>
      </div>
    </Link>
  );
}
