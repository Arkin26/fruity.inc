export type SocialPlatform = {
  id: string;
  label: string;
  href: string;
  row: "top" | "bottom";
};

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { id: "x", label: "X / Twitter", href: "https://x.com", row: "top" },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    row: "top",
  },
  { id: "youtube", label: "YouTube", href: "https://youtube.com", row: "top" },
  { id: "tiktok", label: "TikTok", href: "https://tiktok.com", row: "top" },
  { id: "twitch", label: "Twitch", href: "https://twitch.tv", row: "bottom" },
  {
    id: "discord",
    label: "Discord",
    href: "https://discord.com",
    row: "bottom",
  },
];
