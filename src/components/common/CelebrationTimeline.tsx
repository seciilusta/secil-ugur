import Link from "next/link";
import { DecorativeDivider } from "@/components/common/decorations/DecorativeDivider";
import { events } from "@/data";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type CelebrationTimelineProps = {
  variant?: ThemeVariant;
  compact?: boolean;
};

export function CelebrationTimeline({
  variant = "landing",
  compact = false,
}: CelebrationTimelineProps) {
  const theme = getTheme(variant);
  const dividerVariant = variant === "engagement" ? "floral" : "ornate";

  if (compact) {
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        {events.map((event, i) => (
          <div key={event.slug} className="flex items-center gap-3 sm:gap-6">
            <div className="text-center">
              <p
                className={`${sans.className} mb-1 text-[9px] uppercase tracking-[0.3em]`}
                style={{ color: theme.accent }}
              >
                {event.label}
              </p>
              <p
                className={`${serif.className} text-sm tracking-wider sm:text-base`}
                style={{ color: theme.text }}
              >
                {event.shortDate}
              </p>
            </div>
            {i === 0 && (
              <span
                className={`${serif.className} text-lg opacity-40`}
                style={{ color: theme.accent }}
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <DecorativeDivider
        color={theme.text}
        accentColor={theme.accent}
        variant={dividerVariant}
        className="mb-10"
      />

      <div className="flex flex-col items-center gap-0 sm:flex-row sm:items-stretch sm:justify-center sm:gap-0">
        {events.map((event, i) => (
          <div key={event.slug} className="flex flex-col items-center sm:flex-row">
            <Link
              href={event.href}
              className="group flex flex-col items-center px-8 py-6 text-center transition-opacity hover:opacity-80 sm:px-12"
            >
              <span
                className={`${sans.className} mb-3 text-[10px] uppercase tracking-[0.35em]`}
                style={{ color: theme.accentLight }}
              >
                {event.step}
              </span>
              <h3
                className={`${serif.className} mb-2 text-3xl font-normal tracking-wide sm:text-4xl`}
                style={{ color: theme.text }}
              >
                {event.label}
              </h3>
              <p
                className={`${serif.className} text-base tracking-[0.2em] sm:text-lg`}
                style={{ color: theme.accent }}
              >
                {event.shortDate}
              </p>
            </Link>

            {i === 0 && (
              <div className="flex flex-col items-center py-2 sm:flex-row sm:py-0">
                <div
                  className="h-8 w-px sm:h-px sm:w-12"
                  style={{ backgroundColor: theme.border }}
                />
                <span
                  className={`${serif.className} my-1 text-2xl font-light sm:mx-2 sm:my-0`}
                  style={{ color: theme.accent, opacity: 0.6 }}
                >
                  ↓
                </span>
                <div
                  className="h-8 w-px sm:hidden"
                  style={{ backgroundColor: theme.border }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <DecorativeDivider
        color={theme.text}
        accentColor={theme.accent}
        variant={dividerVariant}
        className="mt-10"
      />
    </div>
  );
}
