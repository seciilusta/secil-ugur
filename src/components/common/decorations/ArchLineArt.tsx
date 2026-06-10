type ArchLineArtProps = {
  color?: string;
  accentColor?: string;
  className?: string;
};

export function ArchLineArt({
  color = "#1A1008",
  accentColor = "#6E5840",
  className = "",
}: ArchLineArtProps) {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      className={`pointer-events-none w-full max-w-md opacity-40 ${className}`}
      aria-hidden
    >
      <path
        d="M20 100 L20 60 Q20 20, 200 20 Q380 20, 380 60 L380 100"
        stroke={color}
        strokeWidth="0.75"
      />
      <path
        d="M40 100 L40 65 Q40 35, 200 35 Q360 35, 360 65 L360 100"
        stroke={accentColor}
        strokeWidth="0.5"
        opacity="0.6"
      />
      <path d="M200 20 L200 100" stroke={accentColor} strokeWidth="0.35" opacity="0.4" />
      <path
        d="M120 100 L120 55 Q120 40, 200 40 Q280 40, 280 55 L280 100"
        stroke={color}
        strokeWidth="0.4"
        opacity="0.35"
      />
      <circle cx="200" cy="20" r="3" stroke={accentColor} strokeWidth="0.5" opacity="0.5" />
      <path d="M60 100 L340 100" stroke={color} strokeWidth="0.3" opacity="0.25" />
    </svg>
  );
}
