import type { Metadata } from "next";
import { CountdownSection } from "@/components/CountdownSection";
import { EngagementHero } from "@/components/EngagementHero";
import { EventDetails } from "@/components/EventDetails";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RsvpCtaSection } from "@/components/RsvpCtaSection";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import {
  engagementEvent,
  engagementFaq,
  engagementWelcomeMessage,
  pageMeta,
} from "@/data/content";
import { getTheme } from "@/lib/theme";

export const metadata: Metadata = {
  title: pageMeta.engagement.title,
  description: pageMeta.engagement.description,
};

export default function EngagementPage() {
  const theme = getTheme("engagement");
  const meta = pageMeta.engagement;

  return (
    <div
      className="texture-engagement min-h-screen"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <Navbar variant="engagement" />

      <EngagementHero />

      <WelcomeMessage message={engagementWelcomeMessage} variant="engagement" />

      <CountdownSection
        targets={[
          {
            label: engagementEvent.label,
            date: engagementEvent.date,
            shortDate: engagementEvent.shortDate,
          },
        ]}
        variant="engagement"
        eyebrow={meta.countdownEyebrow}
        title="Geri Sayım"
        compact
      />

      <EventDetails event={engagementEvent} variant="engagement" faqs={engagementFaq} />

      <RsvpCtaSection variant="engagement" />

      <Footer variant="engagement" />
    </div>
  );
}
