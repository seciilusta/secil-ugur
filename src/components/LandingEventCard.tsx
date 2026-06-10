import Link from "next/link";
import { FloralAccent } from "@/components/decorations/FloralAccent";
import { LineArtAccent } from "@/components/decorations/LineArtAccent";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { Event } from "@/types";

type LandingEventCardProps = {
  event: Event;
};

export function LandingEventCard({ event }: LandingEventCardProps) {
  const eventTheme = getTheme(event.slug === "engagement" ? "engagement" : "wedding");
  const isEngagement = event.slug === "engagement";

  return (
    <Link
      href={event.href}
      className={`group relative flex flex-col overflow-hidden rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        event.featured ? "lg:-mt-6 lg:mb-6" : ""
      }`}
      style={{
        backgroundColor: eventTheme.cardBg,
        border: `1px solid ${eventTheme.cardBorder}`,
      }}
    >
      <div
        className="relative flex h-44 items-center justify-center overflow-hidden sm:h-52"
        style={{ backgroundColor: eventTheme.bgAccent }}
      >
        {isEngagement ? (
          <FloralAccent
            color={eventTheme.decorative}
            accentColor={eventTheme.accentLight}
            className="h-24 w-36 opacity-60 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-44"
          />
        ) : (
          <LineArtAccent
            color={eventTheme.text}
            accentColor={eventTheme.accent}
            className="h-28 w-40 opacity-50 transition-transform duration-300 group-hover:scale-105 sm:h-32 sm:w-48"
          />
        )}
        <span
          className={`${sans.className} absolute left-4 top-4 text-[10px] uppercase tracking-[0.35em]`}
          style={{ color: eventTheme.accent }}
        >
          {event.step}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p
          className={`${sans.className} mb-2 text-[10px] uppercase tracking-[0.35em]`}
          style={{ color: eventTheme.accent }}
        >
          {event.label}
        </p>
        <h3
          className={`${serif.className} mb-3 text-3xl font-normal tracking-wide sm:text-4xl`}
          style={{ color: eventTheme.text }}
        >
          {event.title}
        </h3>
        <p
          className={`${serif.className} mb-1 text-lg tracking-[0.08em]`}
          style={{ color: eventTheme.accent }}
        >
          {event.shortDate}
        </p>
        <p
          className={`${sans.className} mb-4 text-sm opacity-70`}
          style={{ color: eventTheme.text }}
        >
          {event.venue} · {event.location}
        </p>
        <p
          className={`${sans.className} mb-6 flex-1 text-sm leading-relaxed opacity-75`}
        >
          {event.cardSummary}
        </p>
        <span
          className={`${sans.className} inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] transition-all group-hover:gap-3`}
          style={{ color: eventTheme.text }}
        >
          {event.ctaLabel}
          <span
            className="inline-block transition-transform group-hover:translate-x-1"
            aria-hidden
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
