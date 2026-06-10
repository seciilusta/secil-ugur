import type { Metadata } from "next";
import { CountdownSection } from "@/components/common/CountdownSection";
import { BotanicalSideRails } from "@/components/engagement/decorations/BotanicalSideRails";
import { EngagementHero } from "@/components/engagement/EngagementHero";
import { EventDetails } from "@/components/common/EventDetails";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { RsvpCtaSection } from "@/components/common/RsvpCtaSection";
import { WelcomeMessage } from "@/components/common/WelcomeMessage";
import {
  engagementEvent,
  engagementFaq,
  engagementWelcomeMessage,
  pageMeta,
} from "@/data";
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
      className="texture-engagement relative min-h-screen overflow-x-clip"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <BotanicalSideRails />

      <div className="relative z-10 lg:px-[260px]">
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
    </div>
  );
}
