type CoupleLineArtProps = {
  color?: string;
  accentColor?: string;
  className?: string;
};

/** Placeholder for future couple photo — proposal / embrace line art */
export function CoupleLineArt({
  color = "#1A1008",
  accentColor = "#6E5840",
  className = "",
}: CoupleLineArtProps) {
  return (
    <svg
      viewBox="0 0 480 560"
      fill="none"
      className={`h-full w-full ${className}`}
      aria-hidden
    >
      <rect
        x="24"
        y="24"
        width="432"
        height="512"
        stroke={accentColor}
        strokeWidth="0.5"
        opacity="0.25"
      />
      <path
        d="M24 120 H456 M24 440 H456"
        stroke={accentColor}
        strokeWidth="0.35"
        opacity="0.2"
      />
      <ellipse
        cx="240"
        cy="200"
        rx="120"
        ry="140"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.15"
      />
      <path
        d="M180 380 C200 320, 220 300, 240 310 C260 300, 280 320, 300 380"
        stroke={color}
        strokeWidth="0.75"
        opacity="0.5"
      />
      <path
        d="M200 310 C210 260, 230 240, 240 250 C250 240, 270 260, 280 310"
        stroke={color}
        strokeWidth="0.6"
        opacity="0.45"
      />
      <circle cx="215" cy="255" r="18" stroke={color} strokeWidth="0.55" opacity="0.4" />
      <circle cx="265" cy="255" r="18" stroke={color} strokeWidth="0.55" opacity="0.4" />
      <path
        d="M160 400 C190 360, 210 350, 240 355 C270 350, 290 360, 320 400"
        stroke={accentColor}
        strokeWidth="0.5"
        opacity="0.35"
      />
      <path
        d="M120 480 Q240 420, 360 480"
        stroke={accentColor}
        strokeWidth="0.4"
        opacity="0.3"
      />
      <text
        x="240"
        y="520"
        textAnchor="middle"
        fill={accentColor}
        opacity="0.35"
        fontSize="11"
        fontFamily="sans-serif"
        letterSpacing="0.2em"
      >
        FOTOĞRAF YAKINDA
      </text>
    </svg>
  );
}
