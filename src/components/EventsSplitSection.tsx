import { LandingEventCard } from "@/components/LandingEventCard";
import { SectionHeading } from "@/components/SectionHeading";
import { events, eventsSection } from "@/data/content";
import { sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function EventsSplitSection() {
  const theme = getTheme("landing");

  return (
    <section id="events" style={{ backgroundColor: theme.bg }}>
      <div className="mx-auto max-w-6xl px-6 py-14 lg:py-16">
        <SectionHeading
          eyebrow={eventsSection.eyebrow}
          title={eventsSection.title}
          variant="landing"
          className="mb-4"
        />
        {eventsSection.description && (
          <p
            className={`${sans.className} mx-auto mb-10 max-w-xl text-center text-sm leading-relaxed opacity-70`}
          >
            {eventsSection.description}
          </p>
        )}

        <div className="relative grid gap-6 lg:grid-cols-2 lg:gap-8 lg:pt-4">
          {events.map((event) => (
            <LandingEventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
