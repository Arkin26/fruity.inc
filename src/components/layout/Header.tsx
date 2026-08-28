"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LOGO_SRC,
  NAV_LEFT_LINKS,
  NAV_RIGHT_LINKS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      )}
    >
      <nav
        className="relative mx-auto flex h-16 items-center px-5 sm:h-[4.5rem] sm:px-8 lg:px-10"
        aria-label="Primary"
      >
        <div className="hidden flex-1 items-center gap-6 md:flex lg:gap-10">
          {NAV_LEFT_LINKS.map((link) => (
            <NavItem key={link.href} link={link} />
          ))}
        </div>

        <Link
          href="/"
          className="absolute left-1/2 block h-9 w-24 -translate-x-1/2 sm:h-10 sm:w-28"
        >
          <Image
            src={LOGO_SRC}
            alt="Fruity Inc"
            fill
            priority
            className={cn(
              "object-contain object-center transition-[filter] duration-300",
              scrolled && "invert"
            )}
          />
        </Link>

        <div className="hidden flex-1 items-center justify-end gap-6 md:flex lg:gap-10">
          {NAV_RIGHT_LINKS.map((link) => (
            <NavItem key={link.href} link={link} />
          ))}
        </div>

        <div className="ml-auto flex items-center gap-5 md:hidden">
          <NavItem link={{ href: "/search", label: "Search" }} />
          <NavItem link={{ href: "/cart", label: "Cart" }} />
        </div>
      </nav>
    </header>
  );
}

function NavItem({ link }: { link: { href: string; label: string } }) {
  return (
    <Link
      href={link.href}
      className="font-[family-name:var(--font-display)] text-[11px] font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-60 sm:text-xs"
    >
      {link.label}
    </Link>
  );
}
