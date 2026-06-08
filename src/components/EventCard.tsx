import Link from "next/link";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { Event, ThemeVariant } from "@/types";

type EventCardProps = {
  event: Event;
  variant?: ThemeVariant;
  showLink?: boolean;
};

export function EventCard({
  event,
  variant = "landing",
  showLink = true,
}: EventCardProps) {
  const theme = getTheme(variant);

  const content = (
    <>
      <p
        className={`${sans.className} mb-4 text-[11px] uppercase tracking-[0.3em]`}
        style={{ color: theme.accent }}
      >
        {event.label}
      </p>
      <h3
        className={`${serif.className} mb-3 text-2xl font-light sm:text-3xl`}
        style={{ color: theme.text }}
      >
        {event.title}
      </h3>
      <div
        className="mb-6 h-px w-10"
        style={{ backgroundColor: theme.accent }}
      />
      <p
        className={`${serif.className} mb-1 text-lg font-light italic`}
        style={{ color: theme.text }}
      >
        {event.weekday}, {event.dateDisplay}
      </p>
      <p className={`${sans.className} mb-4 text-sm font-light opacity-70`}>
        {event.description}
      </p>
      {showLink && (
        <span
          className={`${sans.className} text-[11px] uppercase tracking-[0.25em] transition-opacity group-hover:opacity-70`}
          style={{ color: theme.accent }}
        >
          {event.ctaLabel} →
        </span>
      )}
    </>
  );

  const className =
    "group flex flex-col items-center px-6 py-10 text-center transition-opacity hover:opacity-90 sm:px-10 sm:py-14";

  const style = { border: `1px solid ${theme.cardBorder}` };

  if (showLink) {
    return (
      <Link href={event.href} className={className} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <article className={className} style={style}>
      {content}
    </article>
  );
}
