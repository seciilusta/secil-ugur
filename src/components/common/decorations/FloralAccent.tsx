type FloralAccentProps = {
  color?: string;
  accentColor?: string;
  className?: string;
};

export function FloralAccent({
  color = "#B8897A",
  accentColor = "#D4A5A5",
  className = "",
}: FloralAccentProps) {
  return (
    <svg
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none opacity-50 ${className}`}
      aria-hidden
    >
      <path
        d="M70 50 C70 35 58 22 42 22 C26 22 14 35 14 50 C14 65 26 78 42 78 C58 78 70 65 70 50Z"
        stroke={color}
        strokeWidth="0.6"
      />
      <path
        d="M126 50 C126 35 114 22 98 22 C82 22 70 35 70 50 C70 65 82 78 98 78 C114 78 126 65 126 50Z"
        stroke={color}
        strokeWidth="0.6"
      />
      <path
        d="M42 50 C42 42 36 36 28 36 C20 36 14 42 14 50"
        stroke={accentColor}
        strokeWidth="0.45"
      />
      <path
        d="M98 50 C98 42 104 36 112 36 C120 36 126 42 126 50"
        stroke={accentColor}
        strokeWidth="0.45"
      />
      <path d="M70 8 V92" stroke={color} strokeWidth="0.35" opacity="0.4" />
      <path d="M35 28 L105 72 M105 28 L35 72" stroke={accentColor} strokeWidth="0.3" opacity="0.35" />
      <circle cx="70" cy="50" r="4" stroke={color} strokeWidth="0.5" />
      <circle cx="42" cy="50" r="2.5" stroke={accentColor} strokeWidth="0.4" />
      <circle cx="98" cy="50" r="2.5" stroke={accentColor} strokeWidth="0.4" />
      <path
        d="M70 14 C65 18, 62 22, 60 28 M70 14 C75 18, 78 22, 80 28"
        stroke={accentColor}
        strokeWidth="0.35"
        opacity="0.5"
      />
    </svg>
  );
}
