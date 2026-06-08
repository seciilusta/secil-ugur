import type { Metadata } from "next";
import { CountdownSection } from "@/components/CountdownSection";
import { EventDetails } from "@/components/EventDetails";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import {
  couple,
  engagementCTAs,
  engagementEvent,
  engagementFaq,
  engagementWelcomeMessage,
} from "@/data/mock";
import { getTheme } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Nişan — Seçil & Uğur",
  description: "Seçil ve Uğur'un nişan kutlamasına davetlisiniz.",
};

export default function EngagementPage() {
  const theme = getTheme("engagement");

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg, color: theme.text }}>
      <Navbar variant="engagement" />

      <HeroSection
        eyebrow="Nişan"
        title={couple.name}
        subtitle="Sevdiklerimizle paylaştığımız sıcak ve samimi bir akşam"
        ctas={engagementCTAs}
        variant="engagement"
        compact
      />

      <CountdownSection
        targets={[{ label: "Nişan", date: engagementEvent.date }]}
        variant="engagement"
        eyebrow="Kutlamaya Kalan"
        title="Geri Sayım"
      />

      <EventDetails
        event={engagementEvent}
        variant="engagement"
        faqs={engagementFaq}
      />

      <WelcomeMessage message={engagementWelcomeMessage} variant="engagement" />

      <Footer variant="engagement" />
    </div>
  );
}
