import { Cormorant_Garamond, Lato } from "next/font/google";

export const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
});

export const sans = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-sans",
});

export const fontVariables = `${serif.variable} ${sans.variable}`;
