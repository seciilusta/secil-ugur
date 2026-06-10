import Link from "next/link";
import { DecorativeDivider } from "@/components/common/decorations/DecorativeDivider";
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
  const eventVariant = event.slug === "engagement" ? "engagement" : "wedding";
  const cardTheme = variant === "landing" ? getTheme(eventVariant) : theme;
  const dividerVariant = event.slug === "engagement" ? "floral" : "ornate";

  const content = (
    <>
      <span
        className={`${sans.className} mb-4 text-[10px] uppercase tracking-[0.35em]`}
        style={{ color: cardTheme.accentLight }}
      >
        {event.step}
      </span>
      <p
        className={`${sans.className} mb-3 text-[10px] uppercase tracking-[0.35em]`}
        style={{ color: cardTheme.accent }}
      >
        {event.label}
      </p>
      <h3
        className={`${serif.className} mb-4 text-3xl font-normal tracking-wide sm:text-4xl`}
        style={{ color: cardTheme.text }}
      >
        {event.title}
      </h3>
      <DecorativeDivider
        color={cardTheme.text}
        accentColor={cardTheme.accent}
        variant={dividerVariant}
        className="mb-5"
      />
      <p
        className={`${serif.className} mb-1 text-xl tracking-[0.12em]`}
        style={{ color: cardTheme.accent }}
      >
        {event.shortDate}
      </p>
      <p
        className={`${serif.className} mb-4 text-base font-normal italic opacity-80`}
        style={{ color: cardTheme.text }}
      >
        {event.weekday}, {event.dateDisplay}
      </p>
      <p className={`${sans.className} mb-6 text-sm font-light leading-relaxed opacity-70`}>
        {event.description}
      </p>
      {showLink && (
        <span
          className={`${sans.className} text-[10px] uppercase tracking-[0.3em] transition-opacity group-hover:opacity-70`}
          style={{ color: cardTheme.accent }}
        >
          {event.ctaLabel} →
        </span>
      )}
    </>
  );

  const className =
    "group relative flex flex-col items-center px-6 py-12 text-center transition-all hover:opacity-95 sm:px-10 sm:py-14";

  const style = {
    border: `1px solid ${cardTheme.cardBorder}`,
    backgroundColor: cardTheme.cardBg,
    boxShadow: `inset 0 0 0 1px ${cardTheme.border}`,
  };

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
