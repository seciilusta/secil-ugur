import type { ThemeVariant } from "@/types";

export const themes = {
  landing: {
    bg: "#F7F3EC",
    bgAccent: "#EDE6DA",
    text: "#1A1008",
    accent: "#6E5840",
    accentLight: "#9A8268",
    muted: "#6E584080",
    border: "#6E584033",
    cardBorder: "#6E58404D",
    cardBg: "#FDFBF7",
    decorative: "#6E5840",
  },
  wedding: {
    bg: "#F5F1E8",
    bgAccent: "#E8E2D6",
    text: "#1A1008",
    accent: "#5C4A36",
    accentLight: "#8A7358",
    muted: "#5C4A3680",
    border: "#5C4A3633",
    cardBorder: "#5C4A364D",
    cardBg: "#FBF9F4",
    decorative: "#1A1008",
  },
  engagement: {
    bg: "#FAF0E8",
    bgAccent: "#F2E0D4",
    text: "#3D2A22",
    accent: "#A67B6D",
    accentLight: "#C9A08F",
    muted: "#A67B6D80",
    border: "#C9A08F44",
    cardBorder: "#C9A08F55",
    cardBg: "#FDF6F1",
    decorative: "#B8897A",
  },
} as const;

export type Theme = (typeof themes)[keyof typeof themes];

export function getTheme(variant: ThemeVariant): Theme {
  return themes[variant === "landing" ? "landing" : variant];
}
