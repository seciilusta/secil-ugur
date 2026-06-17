import { Monogram } from "@/components/common/decorations/Monogram";
import { DecorativeDivider } from "@/components/common/decorations/DecorativeDivider";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type FooterProps = {
  variant?: ThemeVariant;
};

export function Footer({ variant = "landing" }: FooterProps) {
  const theme = getTheme(variant);
  const dividerVariant = variant === "engagement" ? "floral" : "ornate";

  return (
    <footer
      className="px-4 py-10 text-center sm:px-6 sm:py-14"
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
        className={`${serif.className} mb-2 text-xl font-normal tracking-wide sm:text-3xl`}
        style={{ color: theme.text }}
      >
        Seçil & Uğur
      </p>
      <p
        className={`${sans.className} text-[9px] uppercase tracking-[0.22em] sm:text-[10px] sm:tracking-[0.35em]`}
        style={{ color: theme.accent }}
      >
        {variant === "engagement" ? "04.07.2026" : "04.10.2026"}
      </p>
    </footer>
  );
}
