import { Bodoni_Moda, Jost } from "next/font/google";

export const serif = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const sans = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const fontVariables = `${serif.variable} ${sans.variable}`;
