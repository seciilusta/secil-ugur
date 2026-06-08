import { CountdownSection } from "@/components/CountdownSection";
import { EventCard } from "@/components/EventCard";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionSeparator } from "@/components/decorations/SectionSeparator";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import {
  couple,
  engagementEvent,
  events,
  landingCTAs,
  weddingEvent,
  welcomeMessage,
} from "@/data/mock";
import { getTheme } from "@/lib/theme";

export default function HomePage() {
  const theme = getTheme("landing");

  return (
    <div
      className="texture-paper min-h-screen"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <Navbar variant="landing" />

      <HeroSection
        eyebrow="Davet"
        title={
          <>
            {couple.firstNames.bride}{" "}
            <span style={{ color: theme.accent }}>&</span> {couple.firstNames.groom}
          </>
        }
        subtitle="Birlikte kutlayacağımız iki güzel gün"
        ctas={landingCTAs}
        variant="landing"
      />

      <CountdownSection
        targets={[
          { label: "Nişan", date: engagementEvent.date },
          { label: "Düğün", date: weddingEvent.date },
        ]}
        variant="landing"
      />

      <SectionSeparator variant="landing" />

      <section id="events" className="px-6 py-16 sm:py-24">
        <SectionHeading
          eyebrow="Kutlamalarımız"
          title="Nişan & Düğün"
          variant="landing"
          className="mb-4"
        />
        <p className="mx-auto mb-12 max-w-lg text-center text-sm font-light leading-relaxed opacity-70">
          Mekân, saat ve yol tarifi gibi detayları tarihe yaklaştıkça buradan
          güncelleyeceğiz.
        </p>
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
          {events.map((event, i) => (
            <EventCard
              key={event.slug}
              event={event}
              variant="landing"
              step={i === 0 ? "I" : "II"}
            />
          ))}
        </div>
      </section>

      <WelcomeMessage message={welcomeMessage} variant="landing" />

      <Footer variant="landing" />
    </div>
  );
}
