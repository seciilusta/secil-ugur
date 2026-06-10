import Link from "next/link";
import { sans, serif } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { Event } from "@/types";

type LandingEventCardProps = {
  event: Event;
};

export function LandingEventCard({ event }: LandingEventCardProps) {
  const theme = getTheme(event.slug);

  return (
    <div
      className="flex h-full flex-col overflow-hidden"
      style={{
        backgroundColor: theme.cardBg,
        border: `1px solid ${theme.cardBorder}`,
      }}
    >
      {/* Map thumbnail — clicking opens Google Maps */}
      <div className="relative h-36 shrink-0 overflow-hidden sm:h-40">
        {event.mapsEmbedUrl ? (
          <>
            {/*
              The iframe renders the map. pointer-events: none lets the
              overlay anchor catch the click and open Google Maps.
              Replace src when the Maps Embed API key is confirmed.
            */}
            <iframe
              src={event.mapsEmbedUrl}
              title={`${event.venue} haritası`}
              className="h-full w-full border-0"
              loading="lazy"
              style={{ pointerEvents: "none" }}
              aria-hidden
            />
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label={`${event.venue} konumunu Google Maps'te aç`}
            />
          </>
        ) : (
          /* Venue illustration placeholder — drop in image when available */
          <div
            className="h-full w-full"
            style={{ backgroundColor: theme.bgLayer }}
            data-placeholder={`${event.slug}-venue-illustration`}
          />
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
        <p
          className={`${sans.className} mb-2 text-[10px] uppercase tracking-[0.38em]`}
          style={{ color: theme.accent }}
        >
          {event.label}
        </p>

        <p
          className={`${serif.className} mb-4 text-2xl font-normal sm:text-3xl`}
          style={{ color: theme.text }}
        >
          {event.dateDisplay}
        </p>

        <div className="mb-4 h-px" style={{ backgroundColor: theme.border }} />

        <p
          className={`${sans.className} mb-5 text-sm`}
          style={{ color: theme.text, opacity: 0.68 }}
        >
          {event.weekday} · {event.time}
        </p>

        {/* Venue row: name left — location + maps link right */}
        <div className="mt-auto flex items-baseline justify-between gap-3">
          <p
            className={`${serif.className} shrink-0 whitespace-nowrap text-base font-normal sm:text-lg`}
            style={{ color: theme.text }}
          >
            {event.venue}
          </p>
          <a
            href={event.mapsUrl ?? event.href}
            target={event.mapsUrl ? "_blank" : undefined}
            rel={event.mapsUrl ? "noopener noreferrer" : undefined}
            className={`${sans.className} shrink-0 text-[10px] uppercase tracking-[0.22em] transition-opacity hover:opacity-70`}
            style={{ color: theme.accent }}
          >
            {event.location} · Yol Tarifi →
          </a>
        </div>

        {/* Primary CTA */}
        <Link
          href={event.href}
          className={`${sans.className} mt-6 inline-flex h-11 w-full items-center justify-center rounded-sm text-[10px] uppercase tracking-[0.28em] transition-colors duration-200`}
          style={{ backgroundColor: theme.buttonBg, color: theme.buttonText }}
        >
          {event.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
