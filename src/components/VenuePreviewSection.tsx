import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { events, venueSection } from "@/data/content";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function VenuePreviewSection() {
  const theme = getTheme("landing");

  return (
    <section style={{ backgroundColor: theme.bgAccent }}>
      <div className="mx-auto max-w-6xl px-6 py-14 lg:py-16">
        <SectionHeading
          eyebrow={venueSection.eyebrow}
          title={venueSection.title}
          variant="landing"
          className="mb-10"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {events.map((event) => {
            const eventTheme = getTheme(event.slug);
            return (
              <Link
                key={event.slug}
                href={event.href}
                className="group grid gap-0 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 sm:grid-cols-[1fr_1.2fr]"
                style={{
                  backgroundColor: theme.cardBg,
                  border: `1px solid ${theme.cardBorder}`,
                }}
              >
                <div
                  className="flex flex-col justify-center px-6 py-8 sm:px-8"
                  style={{ backgroundColor: eventTheme.bgAccent }}
                >
                  <p
                    className={`${sans.className} mb-2 text-[10px] uppercase tracking-[0.3em]`}
                    style={{ color: eventTheme.accent }}
                  >
                    {event.label}
                  </p>
                  <p
                    className={`${serif.className} text-4xl font-normal`}
                    style={{ color: eventTheme.text }}
                  >
                    {event.shortDate}
                  </p>
                </div>
                <div className="flex flex-col justify-center px-6 py-8 sm:px-8">
                  <p
                    className={`${serif.className} mb-2 text-xl font-normal`}
                    style={{ color: theme.text }}
                  >
                    {event.venue}
                  </p>
                  <p className={`${sans.className} mb-4 text-sm opacity-70`}>
                    {event.location} · {event.time}
                  </p>
                  <span
                    className={`${sans.className} text-[10px] uppercase tracking-[0.25em] opacity-60 transition-opacity group-hover:opacity-100`}
                    style={{ color: theme.accent }}
                  >
                    {venueSection.ctaLabel}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
