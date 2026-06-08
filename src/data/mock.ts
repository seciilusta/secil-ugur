import type { CTA, Event, FaqItem, NavLink } from "@/types";

export const couple = {
  name: "Seçil & Uğur",
  firstNames: { bride: "Seçil", groom: "Uğur" },
};

export const navLinks: NavLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Nişan", href: "/engagement" },
  { label: "Düğün", href: "/wedding" },
  { label: "LCV", href: "/rsvp" },
];

export const welcomeMessage =
  "Hayatımızın en güzel günlerini sizinle kutlamak istiyoruz. Nişanımızda ve düğünümüzde yanımızda olursanız çok mutlu oluruz. Detayları tarihe yaklaştıkça buradan paylaşmaya devam edeceğiz.";

export const engagementWelcomeMessage =
  "Nişanımızı sevdiklerimizle, sade ve içten bir akşamda kutlamak istiyoruz. Bu özel günde yanımızda olmanız bizi çok mutlu eder.";

export const weddingWelcomeMessage =
  "Düğünümüzü birlikte kutlamak, bizim için en güzel hediye. Sizi aramızda görmekten büyük mutluluk duyarız.";

export const engagementEvent: Event = {
  slug: "engagement",
  label: "Nişan",
  title: "Nişan",
  date: "2026-07-04T16:00:00",
  dateDisplay: "4 Temmuz 2026",
  weekday: "Cumartesi",
  time: "16.00",
  venue: "Mekân bilgisi yakında paylaşılacak",
  location: "İstanbul",
  description:
    "Ailemiz ve yakın dostlarımızla birlikte, sıcak ve samimi bir akşam geçireceğiz. Sizi de aramızda görmek isteriz.",
  dressCode: "Şık ve rahat — detaylar yakında",
  href: "/engagement",
  ctaLabel: "Nişan Detayları",
};

export const weddingEvent: Event = {
  slug: "wedding",
  label: "Düğün",
  title: "Düğün",
  date: "2026-10-04T16:00:00",
  dateDisplay: "4 Ekim 2026",
  weekday: "Pazar",
  time: "16.00",
  venue: "Aden Çamlık Köşk",
  location: "İstanbul",
  description:
    "Zamansız ve zarif bir günde, sevdiklerimizle bir araya gelip yeni hayatımıza birlikte başlıyoruz.",
  dressCode: "Şık kıyafet — detaylar yakında",
  href: "/wedding",
  ctaLabel: "Düğün Detayları",
};

export const events = [engagementEvent, weddingEvent];

export const landingCTAs: CTA[] = [
  { label: "Davetler", href: "#events", style: "primary" },
  { label: "LCV", href: "/rsvp", style: "secondary" },
];

export const engagementCTAs: CTA[] = [
  { label: "LCV", href: "/rsvp", style: "primary" },
  { label: "Düğün Detayları", href: "/wedding", style: "secondary" },
];

export const weddingCTAs: CTA[] = [
  { label: "LCV", href: "/rsvp", style: "primary" },
  { label: "Nişan Detayları", href: "/engagement", style: "secondary" },
];

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

export const detailLabels = {
  date: "Tarih",
  time: "Saat",
  venue: "Mekân",
  location: "Şehir",
  dressCode: "Kıyafet",
};
