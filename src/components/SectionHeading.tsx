import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  variant?: ThemeVariant;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  variant = "landing",
  className = "",
}: SectionHeadingProps) {
  const theme = getTheme(variant);

  return (
    <div className={`text-center ${className}`}>
      <p
        className={`${sans.className} mb-3 text-[11px] uppercase tracking-[0.3em]`}
        style={{ color: theme.accent }}
      >
        {eyebrow}
      </p>
      <h2
        className={`${serif.className} text-3xl font-light tracking-wide sm:text-4xl`}
        style={{ color: theme.text }}
      >
        {title}
      </h2>
    </div>
  );
}
