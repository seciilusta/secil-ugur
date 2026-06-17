"use client";

import { CountdownBlock } from "@/components/common/CountdownBlock";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionSeparator } from "@/components/common/decorations/SectionSeparator";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

const HEADINGS = {
  engagement: { eyebrow: "Kutlamaya Kalan", title: "Geri Sayım" },
  wedding: { eyebrow: "Tarihi Not Edin", title: "Düğüne Kalan" },
  landing: { eyebrow: "Takviminize Not Edin", title: "Geri Sayım" },
} as const;

type CountdownSectionProps = {
  variant?: ThemeVariant;
  id?: string;
  compact?: boolean;
};

export function CountdownSection({
  variant = "landing",
  id = "countdown",
  compact = false,
}: CountdownSectionProps) {
  const theme = getTheme(variant);
  const { eyebrow, title } = HEADINGS[variant];

  const isEngagement = variant === "engagement";
  const isLanding = variant === "landing";

  const sectionClassName = compact
    ? "px-4 py-8 sm:px-6 sm:py-10 lg:py-12"
    : isEngagement
      ? "px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16"
      : "px-4 py-10 sm:px-6 sm:py-16 lg:py-24";

  const headingClassName = compact
    ? "mb-6 mt-2 sm:mb-8"
    : isEngagement
      ? "mb-7 mt-4 sm:mb-9 sm:mt-5"
      : "mb-8 mt-6 sm:mb-12 sm:mt-8";

  const cardStyle = {
    borderRadius: isEngagement ? "24px" : "28px",
    boxShadow: `inset 0 0 0 1px ${theme.cardBorder}66`,
    background:
      isEngagement || compact
        ? "linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.12) 100%)"
        : undefined,
  };

  return (
    <section id={id} className={sectionClassName}>
      <SectionSeparator variant={variant} />

      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        variant={variant}
        className={headingClassName}
      />

      {isLanding ? (
        <div
          className="mx-auto flex max-w-3xl flex-col overflow-hidden rounded-[28px] divide-y sm:flex-row sm:divide-x sm:divide-y-0"
          style={cardStyle}
        >
          <CountdownBlock
            label="Nişan"
            date={new Date("2026-07-04T15:00:00+03:00")}
            variant={variant}
            shortDate="04.07.2026"
          />

          <CountdownBlock
            label="Düğün"
            date={new Date("2026-10-04T19:00:00+03:00")}
            variant={variant}
            shortDate="04.10.2026"
          />
        </div>
      ) : (
        <div
          className={`mx-auto flex flex-col overflow-hidden ${
            isEngagement ? "max-w-xl rounded-[24px]" : "max-w-3xl rounded-[28px]"
          }`}
          style={cardStyle}
        >
          <CountdownBlock
            label={isEngagement ? "" : "Düğün"}
            date={
              new Date(
                isEngagement
                  ? "2026-07-04T15:00:00+03:00"
                  : "2026-10-04T19:00:00+03:00",
              )
            }
            variant={variant}
            shortDate={isEngagement ? "" : "04.10.2026"}
          />
        </div>
      )}
    </section>
  );
}