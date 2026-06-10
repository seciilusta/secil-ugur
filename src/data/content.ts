import type { CTA, CountdownTarget, Event, FaqItem, NavLink, SectionContent } from "@/types";

// ─── Site ───────────────────────────────────────────────────────────────────

export const couple = {
  name: "Seçil & Uğur",
  firstNames: { bride: "Seçil", groom: "Uğur" },
};

export const site = {
  title: "Seçil & Uğur — Nişan & Düğün",
  description:
    "Seçil ve Uğur'un nişan ve düğün davetine hoş geldiniz. Kutlamalarımızın detayları burada.",
  navTagline: "Nişan · Düğün",
  journeyBadge: "Nişan → Düğün",
};

export const navLinks: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Nişan", href: "/engagement" },
  { label: "Düğün", href: "/wedding" },
  { label: "LCV", href: "/rsvp" },
];

// ─── Copy ───────────────────────────────────────────────────────────────────

export const ourStory =
  "Madrid'de başlayan hikâyemizi, ailemiz ve sevdiklerimizle İstanbul'da kutlamaya hazırlanıyoruz.";

export const welcomeMessage =
  "Hayatımızın en güzel günlerini sizinle kutlamak istiyoruz. Nişanımızda ve düğünümüzde yanımızda olursanız çok mutlu oluruz. Detayları tarihe yaklaştıkça buradan paylaşmaya devam edeceğiz.";

export const engagementHeroInvite =
  "Sıcak ve samimi bir akşamda sizi aramızda görmekten mutluluk duyarız.";

export const engagementWelcomeMessage =
  "Nişanımızı sevdiklerimizle, sade ve içten bir akşamda kutlamak istiyoruz. Bu özel günde yanımızda olmanız bizi çok mutlu eder.";

export const weddingWelcomeMessage =
  "Düğünümüzü birlikte kutlamak, bizim için en güzel hediye. Sizi aramızda görmekten büyük mutluluk duyarız.";

export const weddingStory = {
  eyebrow: "Hikayemiz",
  title: "Madrid'den İstanbul'a",
  tagline: "Birlikte yazdığımız yolculuk",
  body: "Madrid'de başlayan hikâyemizi, İstanbul'un zamansız zarafetiyle taçlandırıyoruz. Düğünümüz, bu yolculuğun en güzel sayfası olacak.",
};

export const weddingSchedule = {
  eyebrow: "Program",
  title: "Günün Akışı",
  items: [
    { time: "16.00", title: "Misafir Karşılama", note: "Aden Çamlık Köşk" },
    { time: "16.30", title: "Nikah Töreni", note: "Detaylar yakında" },
    { time: "17.30", title: "Kokteyl", note: "" },
    { time: "19.00", title: "Akşam Yemeği", note: "" },
    { time: "21.00", title: "İlk Dans & Kutlama", note: "" },
  ],
};

export const weddingGallery = {
  eyebrow: "Anılar",
  title: "Galeri",
  note: "Düğün fotoğrafları burada paylaşılacak.",
  placeholders: ["I", "II", "III", "IV", "V", "VI"],
};

export const weddingContact = {
  eyebrow: "İletişim",
  title: "Sorularınız mı var?",
  note: "Davet, ulaşım veya konaklama hakkında sorularınız için bize yazabilirsiniz.",
  email: "iletisim@secilugur.com",
};

// ─── Events ─────────────────────────────────────────────────────────────────

export const engagementEvent: Event = {
  slug: "engagement",
  label: "Nişan",
  title: "Nişan",
  date: "2026-07-04T16:00:00",
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
  dressCode: "Şık ve rahat — detaylar yakında",
  href: "/engagement",
  ctaLabel: "Nişan Detayları",
  step: "I",
};

export const weddingEvent: Event = {
  slug: "wedding",
  label: "Düğün",
  title: "Düğün",
  date: "2026-10-04T16:00:00",
  dateDisplay: "4 Ekim 2026",
  shortDate: "04.10.2026",
  weekday: "Pazar",
  time: "16.00",
  venue: "Aden Çamlık Köşk",
  location: "İstanbul",
  description:
    "Zamansız ve zarif bir günde, sevdiklerimizle bir araya gelip yeni hayatımıza birlikte başlıyoruz.",
  cardSummary:
    "Zamansız ve zarif bir günde, sevdiklerimizle bir araya gelip yeni hayatımıza birlikte başlıyoruz.",
  dressCode: "Şık kıyafet — detaylar yakında",
  href: "/wedding",
  ctaLabel: "Düğün Detayları",
  step: "II",
  featured: true,
};

export const events: Event[] = [engagementEvent, weddingEvent];

export const countdownTargets: CountdownTarget[] = events.map((event) => ({
  label: event.label,
  date: event.date,
  shortDate: event.shortDate,
}));

// ─── Landing sections ───────────────────────────────────────────────────────

export const landingHero = {
  eyebrow: couple.name,
  subtitle: "Birlikte kutlayacağımız iki güzel gün",
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

export const rsvpCta = {
  eyebrow: "Katılımınızı Bekliyoruz",
  title: "LCV formunu doldurun",
  buttonLabel: "LCV Gönder",
  href: "/rsvp",
};

// ─── CTAs ───────────────────────────────────────────────────────────────────

export const landingCTAs: CTA[] = [
  { label: "Davetler", href: "#events", style: "primary" },
  { label: "LCV", href: "/rsvp", style: "secondary" },
];

export const engagementCTAs: CTA[] = [
  { label: "LCV", href: "/rsvp", style: "primary" },
  { label: weddingEvent.ctaLabel, href: weddingEvent.href, style: "secondary" },
];

export const weddingCTAs: CTA[] = [
  { label: "LCV", href: "/rsvp", style: "primary" },
  { label: engagementEvent.ctaLabel, href: engagementEvent.href, style: "secondary" },
];

// ─── Page metadata ──────────────────────────────────────────────────────────

export const pageMeta = {
  engagement: {
    title: `Nişan — ${couple.name}`,
    description: "Seçil ve Uğur'un nişan kutlamasına davetlisiniz.",
    heroEyebrow: engagementEvent.label,
    heroSubtitle: "Sevdiklerimizle paylaştığımız sıcak ve samimi bir akşam",
    countdownEyebrow: "Kutlamaya Kalan",
  },
  wedding: {
    title: `Düğün — ${couple.name}`,
    description: "Seçil ve Uğur'un düğün kutlamasına davetlisiniz.",
    heroEyebrow: weddingEvent.label,
    heroSubtitle: "Zamansız ve zarif bir günde, birlikte",
    countdownEyebrow: "Tarihi Not Edin",
    countdownTitle: "Düğüne Kalan",
  },
  rsvp: {
    title: `LCV — ${couple.name}`,
    description: "Seçil ve Uğur'un nişan ve düğün davetine katılımınızı bildirin.",
    eyebrow: "Katılımınızı Bildirin",
    heading: "LCV",
    subtitle: "Sizi aramızda görmek isteriz",
    submitLabel: "Gönder",
    previewNote: "Form gönderimi yakında aktif olacak — şimdilik önizleme.",
  },
};

// ─── FAQ ────────────────────────────────────────────────────────────────────

export const engagementFaq: FaqItem[] = [
  {
    question: "Mekâna nasıl ulaşabilirim?",
    answer:
      "Nişan mekânı netleştiğinde yol tarifini ve konum bilgisini buradan paylaşacağız.",
  },
  {
    question: "Otopark var mı?",
    answer:
      "Mekâna göre otopark bilgisini yakında güncelleyeceğiz. Sorularınız için bize yazabilirsiniz.",
  },
  {
    question: "Dress code var mı?",
    answer:
      "Rahat ve şık olmanız yeterli. Net bir kıyafet önerimiz varsa buradan duyuracağız.",
  },
  {
    question: "Fotoğrafları nasıl paylaşabiliriz?",
    answer:
      "Etkinlik günü size özel bir paylaşım linki göndereceğiz; anılarınızı oradan ekleyebilirsiniz.",
  },
];

export const weddingFaq: FaqItem[] = [
  {
    question: "Mekâna nasıl ulaşabilirim?",
    answer:
      "Aden Çamlık Köşk, İstanbul. Tarihe yaklaştıkça detaylı yol tarifini ve konum pinini buradan paylaşacağız.",
  },
  {
    question: "Otopark var mı?",
    answer:
      "Mekânda misafirlerimiz için otopark bulunuyor. Giriş ve yönlendirme bilgilerini yakında ekleyeceğiz.",
  },
  {
    question: "Dress code var mı?",
    answer:
      "Şık ve zarif bir davetiye estetiğine uygun, rahat hissettirecek kıyafetler ideal. Kesin öneriyi yakında paylaşacağız.",
  },
  {
    question: "Fotoğrafları nasıl paylaşabiliriz?",
    answer:
      "Düğün günü size bir fotoğraf paylaşım linki ileteceğiz; çektiğiniz kareleri oradan yükleyebilirsiniz.",
  },
];

// ─── Labels ─────────────────────────────────────────────────────────────────

export const detailLabels = {
  date: "Tarih",
  time: "Saat",
  venue: "Mekân",
  location: "Şehir",
  dressCode: "Kıyafet",
};

export const rsvpForm = {
  nameLabel: "Ad Soyad",
  namePlaceholder: "Adınız ve soyadınız",
  phoneLabel: "Telefon",
  phonePlaceholder: "05xx xxx xx xx",
  emailLabel: "E-posta",
  emailPlaceholder: "ornek@email.com",
  attendanceLegend: "Hangi davete katılıyorsunuz?",
  guestsLabel: "Kaç kişi katılacaksınız?",
  guestsSuffix: "kişi",
  noteLabel: "Notunuz",
  notePlaceholder: "Beslenme tercihiniz, mesajınız veya sorularınız...",
  attendanceOptions: [
    { value: "engagement", label: engagementEvent.label },
    { value: "wedding", label: weddingEvent.label },
    { value: "both", label: "İkisi de" },
  ],
};
