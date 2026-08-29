import Link from "next/link";
import { ABOUT_CONTENT } from "@/lib/about-data";
import { NEWS_ARTICLES } from "@/lib/news-data";
import { NewsElevator } from "./NewsElevator";

export function AboutNewsSection() {
  return (
    <section className="relative bg-black px-2 py-12 sm:px-4 sm:py-16 md:px-6 md:py-20">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-6">
        <div className="px-2 lg:w-[60%] lg:px-0 lg:order-1">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold uppercase leading-none tracking-wide text-white sm:text-4xl">
              News
            </h3>
            <Link
              href="/news"
              className="shrink-0 text-[11px] font-bold uppercase tracking-wide text-white/50 transition-colors hover:text-white sm:text-xs"
            >
              See All
            </Link>
          </div>

          <NewsElevator articles={NEWS_ARTICLES} />
        </div>

        <div className="flex flex-col justify-center px-2 lg:w-[40%] lg:px-0 lg:pl-6 lg:order-2">
          <p className="text-xs text-white/50 sm:text-sm">Who we are</p>
          <h2 className="mt-1 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-none tracking-wide text-white sm:text-6xl md:text-7xl">
            {ABOUT_CONTENT.title}
          </h2>

          <p className="mt-8 font-[family-name:var(--font-display)] text-lg font-bold uppercase leading-snug tracking-wide text-white sm:text-xl md:text-2xl">
            {ABOUT_CONTENT.headline}
          </p>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/65 sm:text-base">
            {ABOUT_CONTENT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Link
            href={ABOUT_CONTENT.cta.href}
            className="mt-8 inline-flex w-fit rounded-sm bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-neutral-200 sm:px-6 sm:py-3"
          >
            {ABOUT_CONTENT.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
