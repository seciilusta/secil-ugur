type DecorativeDividerProps = {
  color?: string;
  accentColor?: string;
  className?: string;
  variant?: "ornate" | "simple" | "floral";
};

export function DecorativeDivider({
  color = "#D8D1C5",
  accentColor = "#96A084",
  className = "",
  variant = "ornate",
}: DecorativeDividerProps) {
  if (variant === "simple") {
    return (
      <div
        className={`flex items-center justify-center gap-3 ${className}`}
        aria-hidden
      >
        <span
          className="h-px w-10 sm:w-16"
          style={{ backgroundColor: color, opacity: 0.75 }}
        />
        <span
          className="h-1.5 w-1.5 rotate-45 rounded-[1px]"
          style={{ backgroundColor: accentColor, opacity: 0.75 }}
        />
        <span
          className="h-px w-10 sm:w-16"
          style={{ backgroundColor: color, opacity: 0.75 }}
        />
      </div>
    );
  }

  if (variant === "floral")  {
    return (
      <div
        className={`flex items-center justify-center gap-3 ${className}`}
        aria-hidden
      >
        <span
          className="h-px w-16 sm:w-24"
          style={{ backgroundColor: color, opacity: 0.45 }}
        />
  
        <span className="relative flex h-3 w-5 items-center justify-center">
          <span
            className="absolute h-2 w-2 rotate-45 rounded-[1px]"
            style={{ backgroundColor: accentColor, opacity: 0.7 }}
          />
          <span
            className="absolute h-1 w-1 rounded-full"
            style={{ backgroundColor: color, opacity: 0.55 }}
          />
        </span>
  
        <span
          className="h-px w-16 sm:w-24"
          style={{ backgroundColor: color, opacity: 0.45 }}
        />
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 300 36"
      fill="none"
      className={`mx-auto h-9 w-56 sm:w-72 ${className}`}
      aria-hidden
    >
      {/* fine horizontal lines */}
      <path d="M10 18H112" stroke={color} strokeWidth="0.7" opacity="0.65" />
      <path d="M188 18H290" stroke={color} strokeWidth="0.7" opacity="0.65" />

      {/* subtle short inner lines */}
      <path d="M118 18H132" stroke={color} strokeWidth="0.6" opacity="0.45" />
      <path d="M168 18H182" stroke={color} strokeWidth="0.6" opacity="0.45" />

      {/* central diamond */}
      <path
        d="M150 9L159 18L150 27L141 18L150 9Z"
        stroke={accentColor}
        strokeWidth="0.8"
        opacity="0.75"
      />
      <circle cx="150" cy="18" r="1.6" fill={accentColor} opacity="0.65" />

      {/* tiny side dots */}
      <circle cx="136" cy="18" r="1" fill={color} opacity="0.55" />
      <circle cx="164" cy="18" r="1" fill={color} opacity="0.55" />

      {/* soft ornamental curls */}
      <path
        d="M128 18C134 12 140 12 144 16"
        stroke={color}
        strokeWidth="0.55"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M172 18C166 12 160 12 156 16"
        stroke={color}
        strokeWidth="0.55"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M128 18C134 24 140 24 144 20"
        stroke={color}
        strokeWidth="0.55"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M172 18C166 24 160 24 156 20"
        stroke={color}
        strokeWidth="0.55"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}