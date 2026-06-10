import type { Metadata } from "next";
import { CountdownSection } from "@/components/CountdownSection";
import { EventDetails } from "@/components/EventDetails";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RsvpCtaSection } from "@/components/RsvpCtaSection";
import { WeddingContactSection } from "@/components/WeddingContactSection";
import { WeddingGallerySection } from "@/components/WeddingGallerySection";
import { WeddingHero } from "@/components/WeddingHero";
import { WeddingScheduleSection } from "@/components/WeddingScheduleSection";
import { WeddingStorySection } from "@/components/WeddingStorySection";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import {
  pageMeta,
  weddingEvent,
  weddingFaq,
  weddingWelcomeMessage,
} from "@/data/content";
import { getTheme } from "@/lib/theme";

export const metadata: Metadata = {
  title: pageMeta.wedding.title,
  description: pageMeta.wedding.description,
};

export default function WeddingPage() {
  const theme = getTheme("wedding");
  const meta = pageMeta.wedding;

  return (
    <div
      className="texture-wedding min-h-screen"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <Navbar variant="wedding" />

      <WeddingHero />

      <WelcomeMessage message={weddingWelcomeMessage} variant="wedding" />

      <WeddingStorySection />

      <CountdownSection
        targets={[
          {
            label: weddingEvent.label,
            date: weddingEvent.date,
            shortDate: weddingEvent.shortDate,
          },
        ]}
        variant="wedding"
        eyebrow={meta.countdownEyebrow}
        title={meta.countdownTitle}
        compact
      />

      <EventDetails event={weddingEvent} variant="wedding" faqs={weddingFaq} />

      <WeddingScheduleSection />

      <WeddingGallerySection />

      <RsvpCtaSection variant="wedding" />

      <WeddingContactSection />

      <Footer variant="wedding" />
    </div>
  );
}
