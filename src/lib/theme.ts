import type { ThemeVariant } from "@/types";

export const themes = {
  landing: {
    bg: "#FAF9F7",
    bgAccent: "#EFE8E0",
    bgLayer: "#F2EFEA",
    text: "#2F2925",
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
    bg: "#FBFAF7",         // genel sayfa
    bgAccent: "#F2EEE7",  // section arkaplanları
    bgLayer: "#FFFFFF",   // kartlar
  
    text: "#5A544D",
  
    accent: "#96A084",
    accentLight: "#C5CCBA",
  
    gold: "#CDBA96",
  
    muted: "#9E988F",
  
    border: "#E1DBD2",
    cardBorder: "#DDD6CB",
    cardBg: "#FFFFFF",
  
    decorative: "#D8D1C5",
  
    buttonBg: "#96A084",
    buttonText: "#FFFFFF",
    buttonHover: "#7F8A6C",
  
    buttonSecondaryBorder: "#A79F91",
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
