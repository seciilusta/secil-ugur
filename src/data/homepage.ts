import type { CTA, Event, SectionContent } from "@/types";

const couple = {
  name: "Seçil & Uğur",
  firstNames: { bride: "Seçil", groom: "Uğur" },
};

const engagementEvent: Event = {
  slug: "engagement",
  label: "Nişan",
  title: "Nişan",
  date: "2026-07-04T15:00:00",
  dateDisplay: "4 Temmuz 2026",
  shortDate: "04.07.2026",
  weekday: "Cumartesi",
  time: "15.00",
  venue: "Du Urla",
  location: "Manisa",
  description:
    "Ailemiz ve yakın dostlarımızla birlikte, sıcak ve samimi bir akşam geçireceğiz. Sizi de aramızda görmek isteriz.",
  cardSummary:
    "Ailemiz ve yakın dostlarımızla birlikte, sıcak ve samimi bir akşam geçireceğiz.",
  href: "/engagement",
  ctaLabel: "Nişan Detayları",
  step: "I",
  address: "Du Urla, Urla, Manisa",
};

const weddingEvent: Event = {
  slug: "wedding",
  label: "Düğün",
  title: "Düğün",
  date: "2026-10-04T19:00:00",
  dateDisplay: "4 Ekim 2026",
  shortDate: "04.10.2026",
  weekday: "Pazar",
  time: "19.00",
  venue: "Aden Boğazköy Tesisleri",
  location: "İstanbul",
  description:
    "Zamansız ve zarif bir günde, sevdiklerimizle bir araya gelip yeni hayatımıza birlikte başlıyoruz.",
  cardSummary:
    "Zamansız ve zarif bir günde, sevdiklerimizle bir araya gelip yeni hayatımıza birlikte başlıyoruz.",
  href: "/wedding",
  ctaLabel: "Düğün Detayları",
  step: "II",
  featured: true,
};

export const events: Event[] = [engagementEvent, weddingEvent];

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

export const landingCouple = couple;
export const landingEngagementEvent = engagementEvent;
export const landingWeddingEvent = weddingEvent;
