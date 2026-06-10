import { DecorativeDivider } from "@/components/common/decorations/DecorativeDivider";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  variant?: ThemeVariant;
  className?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  variant = "landing",
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const theme = getTheme(variant);
  const dividerVariant = variant === "engagement" ? "floral" : "ornate";
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`${alignClass} ${className}`}>
      <p
        className={`${sans.className} mb-4 text-[10px] uppercase tracking-[0.35em]`}
        style={{ color: theme.accent }}
      >
        {eyebrow}
      </p>
      <h2
        className={`${serif.className} mb-6 text-3xl font-normal tracking-wide sm:text-4xl md:text-5xl`}
        style={{ color: theme.text }}
      >
        {title}
      </h2>
      <DecorativeDivider
        color={theme.text}
        accentColor={theme.accent}
        variant={dividerVariant}
        className={align === "left" ? "!mx-0" : undefined}
      />
    </div>
  );
}
