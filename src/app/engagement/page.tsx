import type { Metadata } from "next";
import { CountdownSection } from "@/components/common/CountdownSection";
import { BotanicalSideRails } from "@/components/engagement/decorations/BotanicalSideRails";
import { EngagementHero } from "@/components/engagement/EngagementHero";
import { EngagementEventDetailsSection } from "@/components/engagement/EngagementEventDetailsSection";
import { InvitationMessage } from "@/components/common/InvitationMessage";
import { getTheme } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Nişan — Seçil & Uğur",
  description: "Seçil ve Uğur'un nişan kutlamasına davetlisiniz.",
};

export default function EngagementPage() {
  const theme = getTheme("engagement");

  return (
    <div
      className="texture-engagement relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <BotanicalSideRails />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 sm:px-8 lg:px-10">
        <EngagementHero />
        <InvitationMessage variant="engagement" />
        <CountdownSection variant="engagement" compact />
        <EngagementEventDetailsSection />
      </div>
    </div>
  );
}
