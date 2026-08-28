import Link from "next/link";
import { SOCIAL_PLATFORMS } from "@/lib/socials-data";

export function SocialsSection() {
  const topPlatforms = SOCIAL_PLATFORMS.filter((p) => p.row === "top");
  const bottomPlatforms = SOCIAL_PLATFORMS.filter((p) => p.row === "bottom");

  return (
    <section className="px-2 py-12 sm:px-4 sm:py-16 md:px-6 md:py-20">
      <h2 className="mb-8 px-2 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-none tracking-wide text-white sm:mb-10 sm:px-0 sm:text-6xl md:text-7xl">
        Socials
      </h2>

      <div className="overflow-hidden rounded-2xl border border-white/15">
        <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {topPlatforms.map((platform) => (
            <SocialTile key={platform.id} platform={platform} variant="top" />
          ))}
          {bottomPlatforms.map((platform) => (
            <SocialTile
              key={platform.id}
              platform={platform}
              variant="bottom"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialTile({
  platform,
  variant,
}: {
  platform: (typeof SOCIAL_PLATFORMS)[number];
  variant: "top" | "bottom";
}) {
  return (
    <Link
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-center bg-black transition-colors hover:bg-white/[0.04] ${
        variant === "bottom" ? "col-span-1 lg:col-span-2" : ""
      } ${variant === "top" ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[5/3] sm:aspect-[2/1]"}`}
    >
      <p className="px-4 text-center font-[family-name:var(--font-display)] text-xs font-bold uppercase tracking-wide text-white sm:text-sm lg:text-base">
        {platform.label}
      </p>
    </Link>
  );
}
