export const SITE_NAME = "Fruity Inc";
export const SITE_DESCRIPTION = "Fruity Inc — a creator house.";

export const HASHTAG = "#FRUITYINC";
export const ESTABLISHED = "ESTABLISHED 2025";

export const HERO_IMAGE: string | null = null;

export const LOGO_SRC = "/images/white-logo.png";

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LEFT_LINKS: NavLink[] = [
  { href: "/shop", label: "Shop" },
  { href: "/content", label: "Content" },
  { href: "/about", label: "About" },
];

export const NAV_RIGHT_LINKS: NavLink[] = [
  { href: "/account", label: "Account" },
  { href: "/search", label: "Search" },
  { href: "/cart", label: "Cart" },
];
