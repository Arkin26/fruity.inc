type NavFrameProps = {
  variant?: "desktop" | "mobile";
  className?: string;
};

export function NavFrame({ variant = "desktop", className }: NavFrameProps) {
  const isMobile = variant === "mobile";
  const height = 50;
  const left = isMobile ? 250 : 200;
  const right = isMobile ? 1190 : 1240;
  const leftTop = isMobile ? 560 : 548;
  const leftBot = isMobile ? 519 : 508;
  const rightTop = isMobile ? 880 : 892;
  const rightBot = isMobile ? 921 : 932;

  return (
    <svg
      className={className}
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <rect
        x="0.5"
        y="0.5"
        width="1439"
        height={height - 1}
        rx="6"
        fill="none"
        stroke="rgba(255,255,255,0.38)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1={left}
        y1="0"
        x2={left}
        y2={height}
        stroke="rgba(255,255,255,0.38)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1={right}
        y1="0"
        x2={right}
        y2={height}
        stroke="rgba(255,255,255,0.38)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1={leftTop}
        y1="0"
        x2={leftBot}
        y2={height}
        stroke="rgba(255,255,255,0.38)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1={rightTop}
        y1="0"
        x2={rightBot}
        y2={height}
        stroke="rgba(255,255,255,0.38)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
