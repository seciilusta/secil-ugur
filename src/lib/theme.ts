import type { ThemeVariant } from "@/types";

export const themes = {
  landing: {
    bg: "#F8F5F1",
    bgAccent: "#EFE8E0",
    bgLayer: "#F2EFEA",
    text: "#3F3833",
    accent: "#8A7566",
    accentLight: "#B69B84",
    gold: "#C9B28E",
    muted: "#8A756680",
    border: "#8A756633",
    cardBorder: "#B69B8444",
    cardBg: "#FDFBF8",
    decorative: "#8A7566",
    buttonBg: "#4E4036",
    buttonText: "#F8F5F1",
    buttonHover: "#8A7566",
    buttonSecondaryBorder: "#4E4036",
  },
  engagement: {
    bg: "#F8F5F1",
    bgAccent: "#EFE8E0",
    bgLayer: "#F5F0EA",
    text: "#4E4036",
    accent: "#B69B84",
    accentLight: "#8A7566",
    gold: "#C9B28E",
    muted: "#8A756680",
    border: "#B69B8433",
    cardBorder: "#B69B844D",
    cardBg: "#FDFBF8",
    decorative: "#8A7566",
    buttonBg: "#B69B84",
    buttonText: "#FFFFFF",
    buttonHover: "#8A7566",
    buttonSecondaryBorder: "#4E4036",
  },
  wedding: {
    bg: "#F7F5F1",
    bgAccent: "#F2EFEA",
    bgLayer: "#E7E0D7",
    text: "#3F3833",
    accent: "#9B8E83",
    accentLight: "#C6B08E",
    gold: "#C6B08E",
    muted: "#9B8E8380",
    border: "#9B8E8333",
    cardBorder: "#9B8E834D",
    cardBg: "#FDFCFA",
    decorative: "#3F3833",
    buttonBg: "#3F3833",
    buttonText: "#F7F5F1",
    buttonHover: "#9B8E83",
    buttonSecondaryBorder: "#3F3833",
  },
} as const;

export type Theme = (typeof themes)[keyof typeof themes];

export function getTheme(variant: ThemeVariant): Theme {
  return themes[variant === "landing" ? "landing" : variant];
}
