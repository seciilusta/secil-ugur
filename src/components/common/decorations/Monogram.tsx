import { serif } from "@/lib/fonts";

type MonogramProps = {
  color?: string;
  accentColor?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizes = {
  sm: "h-14 w-14 text-lg",
  md: "h-20 w-20 text-2xl",
  lg: "h-28 w-28 text-4xl sm:h-32 sm:w-32 sm:text-5xl",
  xl: "h-36 w-36 text-5xl sm:h-44 sm:w-44 sm:text-6xl",
};

export function Monogram({
  color = "#1A1008",
  accentColor = "#6E5840",
  size = "lg",
  className = "",
}: MonogramProps) {
  return (
    <div
      className={`relative flex items-center justify-center ${sizes[size]} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke={accentColor}
          strokeWidth="0.6"
          opacity="0.5"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke={accentColor}
          strokeWidth="0.4"
          opacity="0.3"
        />
        <path
          d="M50 8 L50 92 M8 50 L92 50"
          stroke={accentColor}
          strokeWidth="0.3"
          opacity="0.2"
        />
        <path
          d="M22 22 C35 35, 35 65, 22 78"
          stroke={accentColor}
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M78 22 C65 35, 65 65, 78 78"
          stroke={accentColor}
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>
      <span
        className={`${serif.className} relative z-10 font-normal tracking-[0.15em]`}
        style={{ color }}
      >
        S<span style={{ color: accentColor, fontStyle: "italic" }}>&</span>U
      </span>
    </div>
  );
}
