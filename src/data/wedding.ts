import type { CTA, FaqItem } from "@/types";
import { engagementEvent } from "@/data/common";

export const weddingWelcomeMessage =
  "Düğünümüzü birlikte kutlamak, bizim için en güzel hediye. Sizi aramızda görmekten büyük mutluluk duyarız.";

export const weddingStory = {
  eyebrow: "Hikayemiz",
  title: "Madrid'den İstanbul'a",
  tagline: "Birlikte yazdığımız yolculuk",
  body: "Madrid'de başlayan hikâyemizi, İstanbul'un zamansız zarafetiyle taçlandırıyoruz. Aden Boğazköy Tesisleri'nde, bu yolculuğun en güzel sayfasını birlikte yazıyoruz.",
};

export const weddingSchedule = {
  eyebrow: "Program",
  title: "Günün Akışı",
  items: [
    { time: "19.00", title: "Kapı Açılışı & Karşılama", note: "Aden Boğazköy Tesisleri" },
    { time: "19.30", title: "Nikah Töreni", note: "" },
    { time: "20.15", title: "Kokteyl", note: "" },
    { time: "21.00", title: "Akşam Yemeği & Kutlama", note: "" },
    { time: "23.00", title: "İlk Dans & Eğlence", note: "" },
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

export const weddingCTAs: CTA[] = [
  { label: "LCV", href: "/rsvp", style: "primary" },
  { label: engagementEvent.ctaLabel, href: engagementEvent.href, style: "secondary" },
];

export const weddingFaq: FaqItem[] = [
  {
    question: "Mekâna nasıl ulaşabilirim?",
    answer:
      "Aden Boğazköy Tesisleri, İstanbul. Tarihe yaklaştıkça detaylı yol tarifini ve konum pinini buradan paylaşacağız.",
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
