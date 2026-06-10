import type { CTA, FaqItem } from "@/types";
import { weddingEvent } from "@/data/common";

export const engagementHeroInvite =
  "Sıcak ve samimi bir akşamda sizi aramızda görmekten mutluluk duyarız.";

export const engagementWelcomeMessage =
  "Nişanımızı sevdiklerimizle, sade ve içten bir akşamda kutlamak istiyoruz. Bu özel günde yanımızda olmanız bizi çok mutlu eder.";

export const engagementCTAs: CTA[] = [
  { label: "LCV", href: "/rsvp", style: "primary" },
  { label: weddingEvent.ctaLabel, href: weddingEvent.href, style: "secondary" },
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
