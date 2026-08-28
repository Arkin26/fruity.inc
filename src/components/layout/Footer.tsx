import type { ReactNode } from "react";
import Link from "next/link";
import { SOCIAL_ICONS } from "@/components/socials/SocialIcons";
import {
  FOOTER_COPYRIGHT,
  FOOTER_LEGAL_LINKS,
  FOOTER_PAGES_COL_ONE,
  FOOTER_PAGES_COL_TWO,
  FOOTER_PARTNERS,
  FOOTER_CREATORS,
} from "@/lib/footer-data";
import { SOCIAL_PLATFORMS } from "@/lib/socials-data";
import type { NavLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-black px-2 pb-10 pt-16 sm:px-4 sm:pb-12 sm:pt-20 md:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <FooterLinkGroup title="Pages">
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 sm:gap-x-12">
              <FooterLinks links={FOOTER_PAGES_COL_ONE} />
              <FooterLinks links={FOOTER_PAGES_COL_TWO} />
            </div>
          </FooterLinkGroup>

          <FooterLinkGroup title="Creators">
            <FooterLinks links={FOOTER_CREATORS} />
          </FooterLinkGroup>
        </div>

        <div className="flex w-full flex-col gap-8 lg:w-[min(100%,22rem)] lg:items-end">
          <div className="grid w-full grid-cols-2 gap-2 sm:max-w-sm lg:max-w-none">
            {FOOTER_PARTNERS.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="flex aspect-[2.4/1] items-center justify-center rounded-sm border border-white/15 px-3 transition-colors hover:border-white/30"
              >
                <span
                  className="text-center font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wide sm:text-base"
                  style={partner.accent ? { color: partner.accent } : undefined}
                >
                  {partner.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="w-full sm:max-w-sm lg:max-w-none">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              Socials
            </p>
            <div className="grid grid-cols-6 gap-2">
              {SOCIAL_PLATFORMS.map((platform) => {
                const Icon =
                  SOCIAL_ICONS[platform.id as keyof typeof SOCIAL_ICONS];

                return (
                  <Link
                    key={platform.id}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.label}
                    className="flex aspect-square items-center justify-center rounded-sm border border-white/15 text-white transition-colors hover:border-white/30 hover:bg-white/[0.04]"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="w-full space-y-2 text-left sm:max-w-sm lg:max-w-none lg:text-right">
            <p className="text-[11px] leading-relaxed text-white/45">
              {FOOTER_COPYRIGHT}
            </p>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-white/45 lg:justify-end">
              {FOOTER_LEGAL_LINKS.map((link, index) => (
                <span key={link.href} className="inline-flex items-center gap-2">
                  {index > 0 ? <span className="text-white/25">|</span> : null}
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
        {title}
      </p>
      {children}
    </div>
  );
}

function FooterLinks({ links }: { links: NavLink[] }) {
  return (
    <ul className="space-y-1">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase leading-none tracking-wide text-white/90 transition-opacity hover:opacity-60 sm:text-3xl lg:text-4xl"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
