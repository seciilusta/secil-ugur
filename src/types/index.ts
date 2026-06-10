export type ThemeVariant = "landing" | "wedding" | "engagement";

export type NavLink = {
  label: string;
  href: string;
};

export type CTA = {
  label: string;
  href: string;
  style: "primary" | "secondary";
};

export type Event = {
  slug: "engagement" | "wedding";
  label: string;
  title: string;
  date: string;
  dateDisplay: string;
  shortDate: string;
  weekday: string;
  time: string;
  venue: string;
  location: string;
  description: string;
  cardSummary: string;
  dressCode?: string;
  href: string;
  ctaLabel: string;
  step: string;
  featured?: boolean;
  mapsUrl?: string;
  mapsEmbedUrl?: string;
};

export type CountdownTarget = {
  label: string;
  date: string;
  shortDate: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SectionContent = {
  eyebrow: string;
  title: string;
  description?: string;
};
