import { Monogram } from "@/components/decorations/Monogram";
import { DecorativeDivider } from "@/components/decorations/DecorativeDivider";
import { couple, engagementEvent, weddingEvent } from "@/data/content";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type FooterProps = {
  variant?: ThemeVariant;
};

export function Footer({ variant = "landing" }: FooterProps) {
  const theme = getTheme(variant);
  const dividerVariant = variant === "engagement" ? "floral" : "ornate";

  const dates =
    variant === "engagement"
      ? engagementEvent.shortDate
      : variant === "wedding"
        ? weddingEvent.shortDate
        : `${engagementEvent.shortDate} · ${weddingEvent.shortDate}`;

  return (
    <footer
      className="px-6 py-14 text-center"
      style={{ borderTop: `1px solid ${theme.border}`, backgroundColor: theme.bgAccent }}
    >
      <Monogram
        color={theme.text}
        accentColor={theme.accent}
        size="sm"
        className="mx-auto mb-6"
      />
      <DecorativeDivider
        color={theme.text}
        accentColor={theme.accent}
        variant={dividerVariant}
        className="mb-6"
      />
      <p
        className={`${serif.className} mb-2 text-2xl font-normal tracking-wide sm:text-3xl`}
        style={{ color: theme.text }}
      >
        {couple.name}
      </p>
      <p
        className={`${sans.className} text-[10px] uppercase tracking-[0.35em]`}
        style={{ color: theme.accent }}
      >
        {dates}
      </p>
    </footer>
  );
}
