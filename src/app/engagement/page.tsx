import type { Metadata } from "next";
import { CountdownSection } from "@/components/common/CountdownSection";
import { BotanicalSideRails } from "@/components/engagement/decorations/BotanicalSideRails";
import { EngagementHero } from "@/components/engagement/EngagementHero";
import { EngagementEventDetailsSection } from "@/components/engagement/EngagementEventDetailsSection";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { WelcomeMessage } from "@/components/common/WelcomeMessage";
import {
  engagementEvent,
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
    //className="texture-engagement relative isolate min-h-screen overflow-x-hidden"

    <div
      className="texture-engagement relative min-h-screen overflow-x-clip"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <BotanicalSideRails />

      <div className="relative z-10 mx-auto max-w-[1180px] px-[12vw] sm:px-[11vw] md:px-[120px] lg:px-[200px] xl:px-[260px]">

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

        <EngagementEventDetailsSection event={engagementEvent} />
      </div>
    </div>
  );
}
