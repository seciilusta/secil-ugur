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
  weekday: string;
  time: string;
  venue: string;
  location: string;
  description: string;
  dressCode?: string;
  href: string;
  ctaLabel: string;
};

export type CountdownTarget = {
  label: string;
  date: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
