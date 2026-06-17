import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionSeparator } from "@/components/common/decorations/SectionSeparator";
import { detailLabels } from "@/data";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { Event, ThemeVariant } from "@/types";

type EventDetailsProps = {
  event: Event;
  variant: ThemeVariant;
};

export function EventDetails({ event, variant }: EventDetailsProps) {
  const theme = getTheme(variant);

  const details = [
    { label: detailLabels.date, value: `${event.weekday}, ${event.dateDisplay}` },
    { label: detailLabels.time, value: event.time },
    { label: detailLabels.venue, value: event.venue, mapsUrl: event.mapsUrl },
    { label: detailLabels.location, value: event.location },
    ...(event.dressCode
      ? [{ label: detailLabels.dressCode, value: event.dressCode }]
      : []),
  ] as { label: string; value: string; mapsUrl?: string }[];

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
      <SectionSeparator variant={variant} />
      <SectionHeading
        eyebrow="Bilgiler"
        title="Bilmeniz Gerekenler"
        variant={variant}
        className="mb-8 mt-6 sm:mb-12 sm:mt-8"
      />

      <div
        className="mx-auto grid max-w-3xl gap-px sm:grid-cols-2"
        style={{ backgroundColor: theme.cardBorder }}
      >
        {details.map((detail) => (
          <div
            key={detail.label}
            className="px-5 py-6 text-center sm:px-8 sm:py-8 sm:text-left"
            style={{ backgroundColor: theme.cardBg }}
          >
            <p
              className={`${sans.className} mb-2 text-[9px] uppercase tracking-[0.24em] sm:mb-3 sm:text-[10px] sm:tracking-[0.3em]`}
              style={{ color: theme.accent }}
            >
              {detail.label}
            </p>
            <p
              className={`${serif.className} text-base font-normal leading-snug sm:text-xl`}
              style={{ color: theme.text }}
            >
              {detail.value}
            </p>
            {detail.mapsUrl && (
              <a
                href={detail.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${sans.className} mt-2 inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.18em] transition-opacity hover:opacity-70 sm:mt-3 sm:text-[10px] sm:tracking-[0.22em]`}
                style={{ color: theme.accent }}
              >
                Yol Tarifi →
              </a>
            )}
          </div>
        ))}
      </div>

      <p
        className={`${serif.className} mx-auto mt-8 max-w-2xl text-center text-base font-normal leading-relaxed sm:mt-12 sm:text-xl`}
        style={{ color: theme.text }}
      >
        {event.description}
      </p>
    </section>
  );
}
