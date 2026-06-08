type LineArtAccentProps = {
  className?: string;
};

export function LineArtAccent({ className = "" }: LineArtAccentProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none opacity-30 ${className}`}
      aria-hidden
    >
      <path
        d="M100 10C120 10 130 30 130 50C130 70 120 90 100 90C80 90 70 70 70 50C70 30 80 10 100 10Z"
        stroke="#2C1810"
        strokeWidth="0.75"
      />
      <path
        d="M100 25V75M75 50H125"
        stroke="#8B7355"
        strokeWidth="0.5"
      />
      <path
        d="M40 60C50 45 60 40 70 50C80 60 90 55 100 60C110 65 120 60 130 50C140 40 150 45 160 60"
        stroke="#2C1810"
        strokeWidth="0.6"
      />
      <path
        d="M20 100C60 85 140 85 180 100"
        stroke="#8B7355"
        strokeWidth="0.4"
      />
      <circle cx="100" cy="50" r="4" stroke="#8B7355" strokeWidth="0.5" />
    </svg>
  );
}
