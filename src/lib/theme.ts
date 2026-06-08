import type { ThemeVariant } from "@/types";

export const themes = {
  landing: {
    bg: "#FAF7F2",
    text: "#2C1810",
    accent: "#8B7355",
    muted: "#8B735599",
    border: "#8B735540",
    cardBorder: "#8B735550",
  },
  wedding: {
    bg: "#FAF7F2",
    text: "#2C1810",
    accent: "#8B7355",
    muted: "#8B735599",
    border: "#8B735540",
    cardBorder: "#8B735550",
  },
  engagement: {
    bg: "#FBF5F0",
    text: "#4A3228",
    accent: "#B8897A",
    muted: "#B8897A99",
    border: "#D4A5A540",
    cardBorder: "#D4A5A550",
  },
} as const;

export function getTheme(variant: ThemeVariant) {
  return themes[variant === "landing" ? "landing" : variant];
}
