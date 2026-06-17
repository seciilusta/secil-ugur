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

// --- Engagement: ivory, eucalyptus & soft gold
const engagementIvory = "#F8F5F1";
const engagementWarmBeige = "#EFE8E0";
const engagementPaper = "#FFFDF9";

const engagementEspresso = "#3F352B";
const engagementTaupeText = "#7C6C5D";
const engagementSoftGold = "#C9B28E";
const engagementEucalyptus = "#A8B2A1";
const engagementEucalyptusDark = "#6F7B68";
const engagementEucalyptusMuted = "#87927F";

const engagementBorder = "#DED4C9";

const engagement = {
  // Surfaces
  bg: engagementIvory,
  bgAccent: engagementWarmBeige,
  bgLayer: engagementPaper,
  cardBg: engagementPaper,

  // Text
  text: engagementEspresso,
  muted: engagementTaupeText,

  // Accents
  accent: engagementEucalyptusDark,
  accentLight: engagementSoftGold,
  gold: engagementSoftGold,
  decorative: engagementEucalyptus,

  // Lines
  border: engagementBorder,
  cardBorder: engagementBorder,

  // Buttons
  buttonBg: engagementEucalyptusDark,
  buttonText: engagementPaper,
  buttonHover: engagementEucalyptusMuted,
  buttonSecondaryBorder: engagementEucalyptusDark,
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
