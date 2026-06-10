import { CountdownSection } from "@/components/common/CountdownSection";
import { EventsSplitSection } from "@/components/homepage/EventsSplitSection";
import { Footer } from "@/components/common/Footer";
import { LandingHero } from "@/components/homepage/LandingHero";
import { Navbar } from "@/components/common/Navbar";
import { RsvpCtaSection } from "@/components/common/RsvpCtaSection";
import { StorySection } from "@/components/homepage/StorySection";
import { WelcomeMessage } from "@/components/common/WelcomeMessage";
import { countdownSection, countdownTargets, welcomeMessage } from "@/data";
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

      {/* Countdown directly below hero — compact padding, no separator */}
      <CountdownSection
        targets={countdownTargets}
        variant="landing"
        eyebrow={countdownSection.eyebrow}
        title={countdownSection.title}
        compact
      />

      <StorySection />

      <EventsSplitSection />

      <WelcomeMessage message={welcomeMessage} variant="landing" />

      <RsvpCtaSection />

      <Footer variant="landing" />
    </div>
  );
}
