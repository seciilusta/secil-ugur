import Link from "next/link";
import type { ReactNode } from "react";
import { FloralAccent } from "@/components/decorations/FloralAccent";
import { LineArtAccent } from "@/components/decorations/LineArtAccent";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { CTA, ThemeVariant } from "@/types";

type HeroSectionProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  ctas?: CTA[];
  variant?: ThemeVariant;
  compact?: boolean;
};

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  ctas = [],
  variant = "landing",
  compact = false,
}: HeroSectionProps) {
  const theme = getTheme(variant);

  return (
    <section
      className={`relative flex flex-col items-center justify-center px-6 text-center ${
        compact ? "py-20 sm:py-28" : "min-h-[85vh] py-20 sm:min-h-[90vh]"
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ backgroundColor: theme.border }}
      />

      {variant === "engagement" && (
        <FloralAccent className="absolute left-4 top-16 h-16 w-24 sm:left-12 sm:h-20 sm:w-32" />
      )}
      {variant === "engagement" && (
        <FloralAccent className="absolute bottom-16 right-4 h-16 w-24 rotate-180 sm:right-12 sm:h-20 sm:w-32" />
      )}
      {variant === "wedding" && (
        <LineArtAccent className="absolute right-6 top-20 h-20 w-32 sm:right-16 sm:h-28 sm:w-44" />
      )}
      {variant === "wedding" && (
        <LineArtAccent className="absolute bottom-20 left-6 h-20 w-32 -scale-x-100 sm:left-16 sm:h-28 sm:w-44" />
      )}

      <p
        className={`${sans.className} mb-8 text-[11px] uppercase tracking-[0.4em]`}
        style={{ color: theme.accent }}
      >
        {eyebrow}
      </p>

      <h1
        className={`${serif.className} mb-4 max-w-4xl text-4xl font-light leading-tight tracking-wide sm:text-6xl md:text-7xl`}
        style={{ color: theme.text }}
      >
        {title}
      </h1>

      <div
        className="my-6 h-px w-16"
        style={{ backgroundColor: theme.accent }}
      />

      <p
        className={`${serif.className} mb-12 max-w-xl text-xl font-light italic tracking-wide sm:text-2xl`}
        style={{ color: theme.text }}
      >
        {subtitle}
      </p>

      {ctas.length > 0 && (
        <div className="flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:gap-5">
          {ctas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={`${sans.className} inline-flex h-12 items-center justify-center px-8 text-[11px] uppercase tracking-[0.25em] transition-opacity hover:opacity-80`}
              style={
                cta.style === "primary"
                  ? { backgroundColor: theme.text, color: theme.bg }
                  : {
                      border: `1px solid ${theme.text}`,
                      color: theme.text,
                    }
              }
            >
              {cta.label}
            </Link>
          ))}
        </div>
      )}

      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ backgroundColor: theme.border }}
      />
    </section>
  );
}
