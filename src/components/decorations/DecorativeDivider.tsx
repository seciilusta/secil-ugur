type DecorativeDividerProps = {
  color?: string;
  accentColor?: string;
  className?: string;
  variant?: "ornate" | "simple" | "floral";
};

export function DecorativeDivider({
  color = "#6E5840",
  accentColor = "#6E5840",
  className = "",
  variant = "ornate",
}: DecorativeDividerProps) {
  if (variant === "simple") {
    return (
      <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden>
        <span className="h-px w-12 sm:w-20" style={{ backgroundColor: color, opacity: 0.4 }} />
        <span
          className="h-1.5 w-1.5 rotate-45"
          style={{ backgroundColor: accentColor, opacity: 0.6 }}
        />
        <span className="h-px w-12 sm:w-20" style={{ backgroundColor: color, opacity: 0.4 }} />
      </div>
    );
  }

  if (variant === "floral") {
    return (
      <svg
        viewBox="0 0 240 24"
        fill="none"
        className={`mx-auto h-6 w-48 sm:w-60 ${className}`}
        aria-hidden
      >
        <path d="M0 12 H90" stroke={color} strokeWidth="0.5" opacity="0.4" />
        <path d="M150 12 H240" stroke={color} strokeWidth="0.5" opacity="0.4" />
        <circle cx="120" cy="12" r="3" stroke={accentColor} strokeWidth="0.5" opacity="0.6" />
        <path
          d="M120 6 C115 10, 110 12, 105 12 M120 6 C125 10, 130 12, 135 12 M120 18 C115 14, 110 12, 105 12 M120 18 C125 14, 130 12, 135 12"
          stroke={accentColor}
          strokeWidth="0.4"
          opacity="0.5"
        />
        <path
          d="M108 12 C104 8, 100 6, 96 8 M132 12 C136 8, 140 6, 144 8"
          stroke={color}
          strokeWidth="0.35"
          opacity="0.35"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 28"
      fill="none"
      className={`mx-auto h-7 w-56 sm:w-72 ${className}`}
      aria-hidden
    >
      <path d="M0 14 H100" stroke={color} strokeWidth="0.5" opacity="0.35" />
      <path d="M180 14 H280" stroke={color} strokeWidth="0.5" opacity="0.35" />
      <path
        d="M130 14 L140 14 M150 14 L160 14"
        stroke={accentColor}
        strokeWidth="0.6"
        opacity="0.5"
      />
      <path
        d="M140 8 L140 20 M150 10 L150 18"
        stroke={accentColor}
        strokeWidth="0.5"
        opacity="0.45"
      />
      <circle cx="140" cy="14" r="1.5" fill={accentColor} opacity="0.5" />
      <circle cx="150" cy="14" r="1.5" fill={accentColor} opacity="0.5" />
      <path
        d="M120 14 C125 10, 130 8, 135 10 M165 14 C160 10, 155 8, 150 10"
        stroke={color}
        strokeWidth="0.4"
        opacity="0.3"
      />
    </svg>
  );
}
