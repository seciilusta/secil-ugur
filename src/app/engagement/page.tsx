import { CountdownSection } from "@/components/common/CountdownSection";
import { BotanicalSideRails } from "@/components/engagement/decorations/BotanicalSideRails";
import { EngagementHero } from "@/components/engagement/EngagementHero";
import { EngagementEventDetailsSection } from "@/components/engagement/EngagementEventDetailsSection";
import { InvitationMessage } from "@/components/common/InvitationMessage";
import { getTheme } from "@/lib/theme";
import { BotanicalCorners } from "@/components/engagement/decorations/BotanicalCorner";


export default function EngagementPage() {
  const theme = getTheme("engagement");

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <BotanicalCorners />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 sm:px-8 lg:px-10">
        <EngagementHero />
        {/* <InvitationMessage variant="engagement" /> */}
        <EngagementEventDetailsSection />
        <CountdownSection variant="engagement" compact />

      </div>
    </div>
  );
}
