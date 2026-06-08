import type { Metadata } from "next";
import { CountdownSection } from "@/components/CountdownSection";
import { EventDetails } from "@/components/EventDetails";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import {
  couple,
  weddingCTAs,
  weddingEvent,
  weddingFaq,
  weddingWelcomeMessage,
} from "@/data/mock";
import { getTheme } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Düğün — Seçil & Uğur",
  description: "Seçil ve Uğur'un düğün kutlamasına davetlisiniz.",
};

export default function WeddingPage() {
  const theme = getTheme("wedding");

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg, color: theme.text }}>
      <Navbar variant="wedding" />

      <HeroSection
        eyebrow="Düğün"
        title={couple.name}
        subtitle="Zamansız ve zarif bir günde, birlikte"
        ctas={weddingCTAs}
        variant="wedding"
        compact
      />

      <CountdownSection
        targets={[{ label: "Düğün", date: weddingEvent.date }]}
        variant="wedding"
        eyebrow="Tarihi Not Edin"
        title="Düğüne Kalan"
      />

      <EventDetails event={weddingEvent} variant="wedding" faqs={weddingFaq} />

      <WelcomeMessage message={weddingWelcomeMessage} variant="wedding" />

      <Footer variant="wedding" />
    </div>
  );
}
