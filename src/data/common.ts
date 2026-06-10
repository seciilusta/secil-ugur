import type { CountdownTarget, Event, NavLink } from "@/types";

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

export const engagementEvent: Event = {
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
  dressCode: "Şık ve rahat — detaylar yakında",
  href: "/engagement",
  ctaLabel: "Nişan Detayları",
  step: "I",
  mapsUrl: "https://maps.app.goo.gl/7LqxhNYMFKaZsswPA",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw&q=Du+Urla+Manisa&zoom=14",
};

export const weddingEvent: Event = {
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
  dressCode: "Şık kıyafet — detaylar yakında",
  href: "/wedding",
  ctaLabel: "Düğün Detayları",
  step: "II",
  featured: true,
  mapsUrl: "https://maps.app.goo.gl/tSoixBNrg2bWDXpQ6",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw&q=Aden+Bo%C4%9Fazk%C3%B6y+Tesisleri+Istanbul&zoom=15",
};

export const events: Event[] = [engagementEvent, weddingEvent];

export const countdownTargets: CountdownTarget[] = events.map((event) => ({
  label: event.label,
  date: event.date,
  shortDate: event.shortDate,
}));

export const detailLabels = {
  date: "Tarih",
  time: "Saat",
  venue: "Mekân",
  location: "Şehir",
  dressCode: "Kıyafet",
};

export const rsvpCta = {
  eyebrow: "Katılımınızı Bekliyoruz",
  title: "LCV formunu doldurun",
  buttonLabel: "LCV Gönder",
  href: "/rsvp",
};

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
