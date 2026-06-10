type LineArtAccentProps = {
  color?: string;
  accentColor?: string;
  className?: string;
};

export function LineArtAccent({
  color = "#1A1008",
  accentColor = "#5C4A36",
  className = "",
}: LineArtAccentProps) {
  return (
    <svg
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none opacity-35 ${className}`}
      aria-hidden
    >
      <rect x="30" y="20" width="140" height="100" stroke={color} strokeWidth="0.6" />
      <rect x="38" y="28" width="124" height="84" stroke={accentColor} strokeWidth="0.4" opacity="0.6" />
      <path d="M30 20 L100 70 L170 20" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <path d="M30 120 L100 70 L170 120" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <path d="M100 20 V120" stroke={accentColor} strokeWidth="0.4" opacity="0.5" />
      <path
        d="M50 90 C70 75, 90 75, 100 80 C110 75, 130 75, 150 90"
        stroke={color}
        strokeWidth="0.5"
      />
      <circle cx="100" cy="70" r="5" stroke={accentColor} strokeWidth="0.5" />
      <path d="M10 130 H190" stroke={accentColor} strokeWidth="0.35" opacity="0.4" />
    </svg>
  );
}
