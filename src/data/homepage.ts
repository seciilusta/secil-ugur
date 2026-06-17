import type { CTA, SectionContent } from "@/types";
import { couple } from "@/data/common";

export const ourStory =
  "Madrid'de başlayan hikâyemizi, ailemiz ve sevdiklerimizle İstanbul'da kutlamaya hazırlanıyoruz.";

export const invitationMessage =
  "Hayatımızın en güzel günlerini sizinle kutlamak istiyoruz. Nişanımızda ve düğünümüzde yanımızda olursanız çok mutlu oluruz. Detayları tarihe yaklaştıkça buradan paylaşmaya devam edeceğiz.";

export const landingHero = {
  eyebrow: couple.name,
  subtitle: "Birlikte kutlayacağımız iki özel gün",
};

export const storySection: SectionContent & {
  tagline: string;
  body: string;
  linkText: string;
  linkHref: string;
} = {
  eyebrow: "Bizim Hikayemiz",
  title: "İki şehir, bir yolculuk",
  tagline: "Madrid'den İstanbul'a",
  body: ourStory,
  linkText: "Kutlamaları keşfet",
  linkHref: "#events",
};

export const eventsSection: SectionContent = {
  eyebrow: "Kutlamalarımız",
  title: "Nişan & Düğün",
  description:
    "İki ayrı kutlama, tek bir davet. Detayları tarihe yaklaştıkça buradan güncelleyeceğiz.",
};

export const venueSection: SectionContent & { ctaLabel: string } = {
  eyebrow: "Mekân & Detaylar",
  title: "Nerede Buluşuyoruz?",
  ctaLabel: "Tüm detaylar →",
};

export const countdownSection: SectionContent = {
  eyebrow: "Takviminize Not Edin",
  title: "Geri Sayım",
};

export const landingCTAs: CTA[] = [
  { label: "Davetler", href: "#events", style: "primary" },
  { label: "LCV", href: "/rsvp", style: "secondary" },
];
