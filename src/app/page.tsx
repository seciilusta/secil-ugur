import { CountdownSection } from "@/components/CountdownSection";
import { EventsSplitSection } from "@/components/EventsSplitSection";
import { Footer } from "@/components/Footer";
import { LandingHero } from "@/components/LandingHero";
import { Navbar } from "@/components/Navbar";
import { RsvpCtaSection } from "@/components/RsvpCtaSection";
import { StorySection } from "@/components/StorySection";
import { VenuePreviewSection } from "@/components/VenuePreviewSection";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { countdownSection, countdownTargets, welcomeMessage } from "@/data/content";
import { getTheme } from "@/lib/theme";

export default function HomePage() {
  const theme = getTheme("landing");

  return (
    <div
      className="texture-paper min-h-screen"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <Navbar variant="landing" />

      <LandingHero />

      <StorySection />

      <EventsSplitSection />

      <CountdownSection
        targets={countdownTargets}
        variant="landing"
        eyebrow={countdownSection.eyebrow}
        title={countdownSection.title}
        compact
      />

      <VenuePreviewSection />

      <WelcomeMessage message={welcomeMessage} variant="landing" />

      <RsvpCtaSection />

      <Footer variant="landing" />
    </div>
  );
}
