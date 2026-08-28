import type { NavLink } from "@/lib/constants";

export const FOOTER_PAGES_COL_ONE: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
];

export const FOOTER_PAGES_COL_TWO: NavLink[] = [
  { href: "/creators", label: "Creators" },
  { href: "/schedule", label: "Schedule" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_CREATORS: NavLink[] = [
  { href: "/creator-house", label: "Creator House" },
];

export type FooterPartner = {
  name: string;
  href: string;
  accent?: string;
};

export const FOOTER_PARTNERS: FooterPartner[] = [
  { name: "Lorgar", href: "#", accent: "#7c3aed" },
  { name: "Performance Lab", href: "#" },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { href: "/terms", label: "Terms of Use" },
  { href: "/shipping", label: "Shipping Policy" },
  { href: "/returns", label: "Returns Policy" },
];

export const FOOTER_COPYRIGHT =
  "© 2025 - 2026, FRUITY INC. All rights reserved.";
