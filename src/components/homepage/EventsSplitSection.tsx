import { LandingEventCard } from "@/components/homepage/LandingEventCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { events, eventsSection } from "@/data";
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

        {/* items-stretch forces equal card height; each card uses h-full internally */}
        <div className="grid items-stretch gap-6 sm:grid-cols-2 sm:gap-5">
          {events.map((event) => (
            <LandingEventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
