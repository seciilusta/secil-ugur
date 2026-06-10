import Link from "next/link";
import type { ReactNode } from "react";
import { CelebrationTimeline } from "@/components/common/CelebrationTimeline";
import { ArchLineArt } from "@/components/common/decorations/ArchLineArt";
import { DecorativeDivider } from "@/components/common/decorations/DecorativeDivider";
import { FloralAccent } from "@/components/common/decorations/FloralAccent";
import { LineArtAccent } from "@/components/common/decorations/LineArtAccent";
import { Monogram } from "@/components/common/decorations/Monogram";
import { events } from "@/data";
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
  showDates?: boolean;
  showTimeline?: boolean;
};

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  ctas = [],
  variant = "landing",
  compact = false,
  showDates = false,
  showTimeline = false,
}: HeroSectionProps) {
  const theme = getTheme(variant);
  const isEngagement = variant === "engagement";
  const isWedding = variant === "wedding";
  const isLanding = variant === "landing";

  const dividerVariant = isEngagement ? "floral" : "ornate";
  const textureClass = isEngagement
    ? "texture-warm"
    : isWedding
      ? "texture-editorial"
      : "texture-paper";

  return (
    <section
      className={`relative overflow-hidden px-6 text-center ${
        compact ? "py-20 sm:py-28" : "min-h-[88vh] py-16 sm:min-h-[92vh] sm:py-20"
      }`}
    >
      <div className={`absolute inset-0 ${textureClass}`} aria-hidden />

      {isEngagement && (
        <>
          <FloralAccent
            color={theme.decorative}
            accentColor={theme.accentLight}
            className="absolute -left-4 top-24 h-24 w-32 sm:left-8 sm:h-32 sm:w-40"
          />
          <FloralAccent
            color={theme.decorative}
            accentColor={theme.accentLight}
            className="absolute -right-4 bottom-24 h-24 w-32 rotate-180 sm:right-8 sm:h-32 sm:w-40"
          />
        </>
      )}

      {isWedding && (
        <>
          <LineArtAccent
            color={theme.text}
            accentColor={theme.accent}
            className="absolute -right-8 top-16 h-28 w-36 sm:right-4 sm:h-36 sm:w-48"
          />
          <LineArtAccent
            color={theme.text}
            accentColor={theme.accent}
            className="absolute -left-8 bottom-16 h-28 w-36 -scale-x-100 sm:left-4 sm:h-36 sm:w-48"
          />
        </>
      )}

      <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center">
        {isLanding && (
          <ArchLineArt
            color={theme.text}
            accentColor={theme.accent}
            className="mb-6 sm:mb-8"
          />
        )}

        <Monogram
          color={theme.text}
          accentColor={theme.accent}
          size={compact ? "md" : "xl"}
          className="mb-6 sm:mb-8"
        />

        <p
          className={`${sans.className} mb-6 text-[10px] uppercase tracking-[0.45em]`}
          style={{ color: theme.accent }}
        >
          {eyebrow}
        </p>

        <div
          className="invitation-border relative w-full px-6 py-10 sm:px-12 sm:py-14"
          style={{
            backgroundColor: theme.cardBg,
            boxShadow: `inset 0 0 0 1px ${theme.accent}40, inset 0 0 0 5px transparent, inset 0 0 0 6px ${theme.accent}20`,
          }}
        >
          {isEngagement && (
            <FloralAccent
              color={theme.decorative}
              accentColor={theme.accentLight}
              className="absolute -top-4 left-1/2 h-8 w-16 -translate-x-1/2"
            />
          )}

          <h1
            className={`${serif.className} mb-5 text-4xl font-normal leading-[1.1] tracking-wide sm:text-6xl md:text-7xl`}
            style={{ color: theme.text }}
          >
            {title}
          </h1>

          <DecorativeDivider
            color={theme.text}
            accentColor={theme.accent}
            variant={dividerVariant}
            className="mb-6"
          />

          <p
            className={`${serif.className} mx-auto max-w-lg text-lg font-normal italic leading-relaxed sm:text-xl`}
            style={{ color: theme.text, opacity: 0.9 }}
          >
            {subtitle}
          </p>

          {showDates && !compact && (
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
              {events.map((event) => (
                <div key={event.slug} className="text-center">
                  <p
                    className={`${sans.className} mb-1.5 text-[9px] uppercase tracking-[0.35em]`}
                    style={{ color: theme.accent }}
                  >
                    {event.label}
                  </p>
                  <p
                    className={`${serif.className} text-xl tracking-[0.15em] sm:text-2xl`}
                    style={{ color: theme.text }}
                  >
                    {event.shortDate}
                  </p>
                </div>
              ))}
            </div>
          )}

          {compact && showDates && (
            <p
              className={`${serif.className} mt-6 text-xl tracking-[0.15em] sm:text-2xl`}
              style={{ color: theme.accent }}
            >
              {events.find((e) =>
                isEngagement ? e.slug === "engagement" : e.slug === "wedding",
              )?.shortDate}
            </p>
          )}
        </div>

        {showTimeline && (
          <div className="mt-10 w-full">
            <CelebrationTimeline variant={variant} compact={compact} />
          </div>
        )}

        {ctas.length > 0 && (
          <div className="mt-10 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:gap-5">
            {ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className={`${sans.className} inline-flex h-12 items-center justify-center px-10 text-[10px] uppercase tracking-[0.3em] transition-all hover:opacity-85`}
                style={
                  cta.style === "primary"
                    ? { backgroundColor: theme.text, color: theme.bg }
                    : {
                        border: `1px solid ${theme.text}`,
                        color: theme.text,
                        backgroundColor: "transparent",
                      }
                }
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ backgroundColor: theme.border }}
      />
    </section>
  );
}
