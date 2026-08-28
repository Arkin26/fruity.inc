import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/lib/news-data";
import { NEWS_ARTICLES } from "@/lib/news-data";

export function NewsSection() {
  const featured = NEWS_ARTICLES.find((article) => article.featured);
  const secondary = NEWS_ARTICLES.filter((article) => !article.featured);

  if (!featured) return null;

  return (
    <section className="px-2 py-12 sm:px-4 sm:py-16 md:px-6 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-6 px-2 sm:mb-10 sm:px-0">
        <h2 className="font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-none tracking-wide text-white sm:text-6xl md:text-7xl">
          News
        </h2>
        <Link
          href="/news"
          className="shrink-0 rounded-sm bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-neutral-200 sm:px-6 sm:py-3"
        >
          See News
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:grid-rows-3 lg:gap-3">
        <NewsCard article={featured} variant="featured" />
        {secondary.map((article) => (
          <NewsCard key={article.id} article={article} variant="compact" />
        ))}
      </div>
    </section>
  );
}

function NewsCard({
  article,
  variant,
}: {
  article: NewsArticle;
  variant: "featured" | "compact";
}) {
  const isFeatured = variant === "featured";

  return (
    <Link
      href={article.href}
      className={`group relative block overflow-hidden rounded-xl ${
        isFeatured
          ? "aspect-[4/5] lg:row-span-3 lg:aspect-auto lg:min-h-[520px]"
          : "aspect-[5/2] lg:aspect-auto lg:min-h-0"
      }`}
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
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={
            isFeatured
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 1024px) 100vw, 25vw"
          }
        />
      ) : null}

      <span className="absolute top-3 left-3 z-10 bg-[#2563EB] px-2.5 py-1 font-[family-name:var(--font-display)] text-[10px] font-bold uppercase tracking-wide text-white sm:top-4 sm:left-4 sm:text-[11px]">
        {article.category}
      </span>

      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/75 to-transparent px-4 pt-16 pb-4 sm:px-5 sm:pt-20 sm:pb-5">
        <h3
          className={`font-[family-name:var(--font-display)] font-bold uppercase leading-tight tracking-wide text-white ${
            isFeatured
              ? "text-lg sm:text-xl lg:text-2xl"
              : "text-sm sm:text-base lg:text-lg"
          }`}
        >
          {article.title}
        </h3>
        <p className="mt-2 text-[11px] text-white/55 sm:text-xs">
          DATE: {article.date}
        </p>
      </div>
    </Link>
  );
}
