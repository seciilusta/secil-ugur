type BotanicalCornerProps = {
  color?: string;
  accentColor?: string;
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

/** White garden rose, ranunculus, lisianthus & eucalyptus — line art */
export function BotanicalCorner({
  color = "#8A7566",
  accentColor = "#B69B84",
  className = "",
  position = "top-left",
}: BotanicalCornerProps) {
  const rotation =
    position === "top-right"
      ? "scale-x-[-1]"
      : position === "bottom-left"
        ? "scale-y-[-1]"
        : position === "bottom-right"
          ? "scale-[-1]"
          : "";

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      className={`pointer-events-none h-28 w-28 opacity-50 sm:h-36 sm:w-36 ${rotation} ${className}`}
      aria-hidden
    >
      <path
        d="M20 140 C40 120, 60 100, 80 90 C100 80, 120 60, 140 40"
        stroke={accentColor}
        strokeWidth="0.5"
        opacity="0.5"
      />
      <path
        d="M30 130 C50 110, 70 95, 90 85"
        stroke={color}
        strokeWidth="0.4"
        opacity="0.4"
      />
      <circle cx="95" cy="55" r="14" stroke={color} strokeWidth="0.55" />
      <circle cx="95" cy="55" r="7" stroke={accentColor} strokeWidth="0.4" opacity="0.6" />
      <path
        d="M95 41 C90 35, 85 38, 88 45 M101 41 C106 35, 111 38, 108 45"
        stroke={color}
        strokeWidth="0.4"
      />
      <circle cx="70" cy="75" r="10" stroke={accentColor} strokeWidth="0.5" opacity="0.7" />
      <path
        d="M70 65 C67 60, 63 62, 65 68 M75 65 C78 60, 82 62, 80 68"
        stroke={color}
        strokeWidth="0.35"
      />
      <ellipse cx="115" cy="80" rx="8" ry="12" stroke={color} strokeWidth="0.45" opacity="0.6" />
      <path
        d="M50 100 C45 95, 40 98, 42 105 M55 95 L48 88 M60 100 L65 92"
        stroke={accentColor}
        strokeWidth="0.35"
        opacity="0.5"
      />
      <path
        d="M25 120 Q35 100, 55 85"
        stroke={color}
        strokeWidth="0.35"
        opacity="0.35"
      />
    </svg>
  );
}
