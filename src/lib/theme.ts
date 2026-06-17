import type { ThemeVariant } from "@/types";

/**
 * Every theme is built from a small named base palette. Each semantic token
 * is derived from one of those base colors, so shades that used to be
 * duplicated (or nearly identical) now share a single source of truth.
 */

// --- Landing: warm taupe & cream ---
const landingInk = "#2F2925";
const landingTaupe = "#8A7566";
const landingTaupeLight = "#B69B84";
const landingGold = "#C9B28E";
const landingEspresso = "#4E4036";
const landingIvory = "#F8F5F1";

const landing = {
  // Surfaces
  bg: "#FAF9F7",
  bgAccent: "#EFE8E0",
  bgLayer: "#F2EFEA",
  cardBg: "#FDFBF8",
  // Text
  text: landingInk,
  muted: `${landingTaupe}80`,
  // Accents
  accent: landingTaupe,
  accentLight: landingTaupeLight,
  gold: landingGold,
  decorative: landingTaupe,
  // Lines
  border: `${landingTaupe}33`,
  cardBorder: `${landingTaupeLight}44`,
  // Buttons
  buttonBg: landingEspresso,
  buttonText: landingIvory,
  buttonHover: landingTaupe,
  buttonSecondaryBorder: landingEspresso,
};

// --- Engagement: soft sage ---
const engagementSage = "#96A084";
const engagementSageDark = "#7F8A6C";
const engagementSageLight = "#C5CCBA";
const engagementGold = "#CDBA96";
const engagementInk = "#5A544D";
const engagementMuted = "#9E988F";
const engagementLine = "#DDD6CB";
const engagementDecorative = "#D8D1C5";
const engagementWhite = "#FFFFFF";

const engagement = {
  // Surfaces
  bg: "#FBFAF7",
  bgAccent: "#F2EEE7",
  bgLayer: engagementWhite,
  cardBg: engagementWhite,
  // Text
  text: engagementInk,
  muted: engagementMuted,
  // Accents
  accent: engagementSage,
  accentLight: engagementSageLight,
  gold: engagementGold,
  decorative: engagementDecorative,
  // Lines
  border: engagementLine,
  cardBorder: engagementLine,
  // Buttons
  buttonBg: engagementSage,
  buttonText: engagementWhite,
  buttonHover: engagementSageDark,
  buttonSecondaryBorder: engagementMuted,
};

// --- Wedding: warm stone & gold ---
const weddingEspresso = "#3F3833";
const weddingStone = "#9B8E83";
const weddingGold = "#C6B08E";
const weddingIvory = "#F7F5F1";

const wedding = {
  // Surfaces
  bg: weddingIvory,
  bgAccent: "#F2EFEA",
  bgLayer: "#E7E0D7",
  cardBg: "#FDFCFA",
  // Text
  text: weddingEspresso,
  muted: `${weddingStone}80`,
  // Accents
  accent: weddingStone,
  accentLight: weddingGold,
  gold: weddingGold,
  decorative: weddingEspresso,
  // Lines
  border: `${weddingStone}33`,
  cardBorder: `${weddingStone}4D`,
  // Buttons
  buttonBg: weddingEspresso,
  buttonText: weddingIvory,
  buttonHover: weddingStone,
  buttonSecondaryBorder: weddingEspresso,
};

export const themes = { landing, engagement, wedding } as const;

export type Theme = (typeof themes)[keyof typeof themes];

export function getTheme(variant: ThemeVariant): Theme {
  return themes[variant === "landing" ? "landing" : variant];
}
