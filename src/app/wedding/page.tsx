import type { Metadata } from "next";
import { CountdownSection } from "@/components/common/CountdownSection";
import { EventDetails } from "@/components/common/EventDetails";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { RsvpCtaSection } from "@/components/common/RsvpCtaSection";
import { WeddingContactSection } from "@/components/wedding/WeddingContactSection";
import { WeddingGallerySection } from "@/components/wedding/WeddingGallerySection";
import { WeddingHero } from "@/components/wedding/WeddingHero";
import { WeddingScheduleSection } from "@/components/wedding/WeddingScheduleSection";
import { WeddingStorySection } from "@/components/wedding/WeddingStorySection";
import { InvitationMessage } from "@/components/common/InvitationMessage";
import { getTheme } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Düğün — Seçil & Uğur",
  description: "Seçil ve Uğur'un düğün kutlamasına davetlisiniz.",
};

export default function WeddingPage() {
  const theme = getTheme("wedding");

  return (
    <div
      className="texture-wedding min-h-screen"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <Navbar variant="wedding" />
      <WeddingHero />
      <InvitationMessage variant="wedding" />
      <WeddingStorySection />
      <CountdownSection variant="wedding" compact />
      <EventDetails variant="wedding" />
      <WeddingScheduleSection />
      <WeddingGallerySection />
      <RsvpCtaSection variant="wedding" />
      <WeddingContactSection />
      <Footer variant="wedding" />
    </div>
  );
}
