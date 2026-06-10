type WeddingBotanicalAccentProps = {
  color?: string;
  accentColor?: string;
  className?: string;
};

/** Subtle white roses, orchids, olive — architectural pages only */
export function WeddingBotanicalAccent({
  color = "#9B8E83",
  accentColor = "#C6B08E",
  className = "",
}: WeddingBotanicalAccentProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      className={`pointer-events-none opacity-30 ${className}`}
      aria-hidden
    >
      <path d="M10 60 C30 50, 50 45, 60 50" stroke={accentColor} strokeWidth="0.4" />
      <ellipse cx="75" cy="45" rx="10" ry="6" stroke={color} strokeWidth="0.45" transform="rotate(-20 75 45)" />
      <circle cx="40" cy="35" r="8" stroke={color} strokeWidth="0.4" opacity="0.6" />
      <path d="M55 55 L62 40 M48 30 L42 22" stroke={accentColor} strokeWidth="0.35" opacity="0.5" />
      <path d="M90 55 C95 48, 100 42, 108 38" stroke={color} strokeWidth="0.35" opacity="0.4" />
    </svg>
  );
}
