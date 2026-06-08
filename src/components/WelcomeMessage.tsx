import { DecorativeDivider } from "@/components/decorations/DecorativeDivider";
import { serif } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type WelcomeMessageProps = {
  message: string;
  variant?: ThemeVariant;
};

export function WelcomeMessage({
  message,
  variant = "landing",
}: WelcomeMessageProps) {
  const theme = getTheme(variant);
  const dividerVariant = variant === "engagement" ? "floral" : "ornate";

  return (
    <section className="px-6 py-16 sm:py-24">
      <div
        className="mx-auto max-w-2xl px-8 py-12 text-center sm:px-14 sm:py-16"
        style={{
          backgroundColor: theme.cardBg,
          border: `1px solid ${theme.cardBorder}`,
          boxShadow: `inset 0 0 0 1px ${theme.border}`,
        }}
      >
        <DecorativeDivider
          color={theme.text}
          accentColor={theme.accent}
          variant={dividerVariant}
          className="mb-8"
        />
        <p
          className={`${serif.className} text-lg font-normal leading-relaxed tracking-wide sm:text-xl sm:leading-relaxed`}
          style={{ color: theme.text }}
        >
          {message}
        </p>
        <DecorativeDivider
          color={theme.text}
          accentColor={theme.accent}
          variant={dividerVariant}
          className="mt-8"
        />
      </div>
    </section>
  );
}
