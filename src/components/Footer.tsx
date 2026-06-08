import { couple, engagementEvent, weddingEvent } from "@/data/mock";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type FooterProps = {
  variant?: ThemeVariant;
};

export function Footer({ variant = "landing" }: FooterProps) {
  const theme = getTheme(variant);

  const dates =
    variant === "engagement"
      ? engagementEvent.dateDisplay
      : variant === "wedding"
        ? weddingEvent.dateDisplay
        : `${engagementEvent.dateDisplay} · ${weddingEvent.dateDisplay}`;

  return (
    <footer
      className="px-6 py-12 text-center"
      style={{ borderTop: `1px solid ${theme.border}` }}
    >
      <p
        className={`${serif.className} mb-2 text-2xl font-light tracking-wide`}
        style={{ color: theme.text }}
      >
        {couple.name}
      </p>
      <p
        className={`${sans.className} text-[11px] uppercase tracking-[0.3em]`}
        style={{ color: theme.accent }}
      >
        {dates}
      </p>
    </footer>
  );
}
