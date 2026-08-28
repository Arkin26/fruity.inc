type IconProps = {
  className?: string;
};

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12z" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.88-2.89h.41V9.4a6.34 6.34 0 1 0 5.5 6.28V8.69a8.16 8.16 0 0 0 4.19 1.15V6.4a4.85 4.85 0 0 1-1-.71z" />
    </svg>
  );
}

export function TwitchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M4 3 2 7v13h5v-4h4l2 4h5l-6-7 5-6zm12 9-3-4v4z" />
    </svg>
  );
}

export function DiscordIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.3 4.4A17.2 17.2 0 0 0 15.5 3a11 11 0 0 0-.5 1 10.4 10.4 0 0 0-4.8 0A11 11 0 0 0 9.7 3 17.1 17.1 0 0 0 5 4.4 18.2 18.2 0 0 0 1 16.8a17.3 17.3 0 0 0 5.3 2.7 12.5 12.5 0 0 0 1.1-1.8 11.2 11.2 0 0 1-1.7-.8l.4-.3a12.2 12.2 0 0 0 10.4 0l.4.3a11.2 11.2 0 0 1-1.7.8 12.5 12.5 0 0 0 1.1 1.8 17.2 17.2 0 0 0 5.3-2.7 18.1 18.1 0 0 0-2.7-12.4zM8.7 14.2c-1.1 0-2-.9-2-2.1s.9-2.1 2-2.1 2 1 2 2.1-.9 2.1-2 2.1zm6.6 0c-1.1 0-2-.9-2-2.1s.9-2.1 2-2.1 2 1 2 2.1-.9 2.1-2 2.1z" />
    </svg>
  );
}

export const SOCIAL_ICONS = {
  x: XIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
  twitch: TwitchIcon,
  discord: DiscordIcon,
} as const;
