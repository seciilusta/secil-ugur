import type { ThemeVariant } from "@/types";

type FloralAccentProps = {
  variant?: ThemeVariant;
  className?: string;
};

export function FloralAccent({ className = "" }: FloralAccentProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none opacity-40 ${className}`}
      aria-hidden
    >
      <path
        d="M60 40C60 28 52 18 40 18C28 18 20 28 20 40C20 52 28 62 40 62C52 62 60 52 60 40Z"
        stroke="#B8897A"
        strokeWidth="0.75"
      />
      <path
        d="M100 40C100 28 92 18 80 18C68 18 60 28 60 40C60 52 68 62 80 62C92 62 100 52 100 40Z"
        stroke="#B8897A"
        strokeWidth="0.75"
      />
      <path
        d="M40 40C40 32 34 26 26 26C18 26 12 32 12 40"
        stroke="#D4A5A5"
        strokeWidth="0.5"
      />
      <path
        d="M80 40C80 32 86 26 94 26C102 26 108 32 108 40"
        stroke="#D4A5A5"
        strokeWidth="0.5"
      />
      <path
        d="M60 10V70M30 25L90 55M90 25L30 55"
        stroke="#C9A89A"
        strokeWidth="0.4"
        opacity="0.6"
      />
      <circle cx="60" cy="40" r="3" stroke="#B8897A" strokeWidth="0.5" />
      <circle cx="40" cy="40" r="2" stroke="#D4A5A5" strokeWidth="0.5" />
      <circle cx="80" cy="40" r="2" stroke="#D4A5A5" strokeWidth="0.5" />
    </svg>
  );
}
