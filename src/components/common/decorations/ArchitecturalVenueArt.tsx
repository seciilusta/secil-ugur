type ArchitecturalVenueArtProps = {
  color?: string;
  accentColor?: string;
  className?: string;
};

/** Köşk / pavilion architectural line art — venue-inspired */
export function ArchitecturalVenueArt({
  color = "#3F3833",
  accentColor = "#9B8E83",
  className = "",
}: ArchitecturalVenueArtProps) {
  return (
    <svg
      viewBox="0 0 520 400"
      fill="none"
      className={`h-full w-full ${className}`}
      aria-hidden
    >
      <path
        d="M40 320 L40 160 L260 60 L480 160 L480 320"
        stroke={color}
        strokeWidth="0.8"
        opacity="0.55"
      />
      <path
        d="M60 320 L60 175 L260 85 L460 175 L460 320"
        stroke={accentColor}
        strokeWidth="0.5"
        opacity="0.45"
      />
      <path d="M260 60 V320" stroke={color} strokeWidth="0.45" opacity="0.35" />
      <path d="M140 320 L140 200 M380 320 L380 200" stroke={accentColor} strokeWidth="0.4" opacity="0.4" />
      <path
        d="M100 200 H420 M120 240 H400 M140 280 H380"
        stroke={color}
        strokeWidth="0.35"
        opacity="0.3"
      />
      <path
        d="M200 320 C220 280, 240 260, 260 255 C280 260, 300 280, 320 320"
        stroke={accentColor}
        strokeWidth="0.5"
        opacity="0.4"
      />
      <circle cx="260" cy="175" r="6" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <path
        d="M20 340 H500"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.35"
      />
      <path
        d="M80 340 C120 310, 180 295, 260 290 C340 295, 400 310, 440 340"
        stroke={accentColor}
        strokeWidth="0.4"
        opacity="0.35"
      />
      <text
        x="260"
        y="375"
        textAnchor="middle"
        fill={accentColor}
        opacity="0.4"
        fontSize="10"
        fontFamily="sans-serif"
        letterSpacing="0.25em"
      >
        ADEN ÇAMLIK KÖŞK
      </text>
    </svg>
  );
}
