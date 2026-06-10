import { Monogram } from "@/components/common/decorations/Monogram";
import { ThemedButton } from "@/components/common/ThemedButton";
import { rsvpCta } from "@/data";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type RsvpCtaSectionProps = {
  variant?: ThemeVariant;
};

export function RsvpCtaSection({ variant = "landing" }: RsvpCtaSectionProps) {
  const theme = getTheme(variant);
  const isLanding = variant === "landing";

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: isLanding ? theme.text : theme.bgLayer }}
    >
      {!isLanding && (
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `linear-gradient(135deg, ${theme.bgAccent}, ${theme.bg})`,
          }}
          aria-hidden
        />
      )}
      {isLanding && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(248,245,241,0.3), transparent 50%)",
          }}
          aria-hidden
        />
      )}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left lg:py-14">
        <div className="flex items-center gap-6">
          <Monogram
            color={isLanding ? theme.bg : theme.text}
            accentColor={theme.gold}
            size="sm"
          />
          <div>
            <p
              className={`${sans.className} mb-2 text-[10px] uppercase tracking-[0.35em]`}
              style={{ color: isLanding ? theme.gold : theme.accent }}
            >
              {rsvpCta.eyebrow}
            </p>
            <p
              className={`${serif.className} text-2xl font-normal sm:text-3xl`}
              style={{ color: isLanding ? theme.bg : theme.text }}
            >
              {rsvpCta.title}
            </p>
          </div>
        </div>
        <ThemedButton href={rsvpCta.href} variant={variant} rounded>
          {rsvpCta.buttonLabel}
        </ThemedButton>
      </div>
    </section>
  );
}
