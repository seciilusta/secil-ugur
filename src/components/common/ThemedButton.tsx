"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type ThemedButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ThemeVariant;
  style?: "primary" | "secondary";
  className?: string;
  rounded?: boolean;
};

export function ThemedButton({
  href,
  children,
  variant = "landing",
  style = "primary",
  className = "",
  rounded = true,
}: ThemedButtonProps) {
  const theme = getTheme(variant);

  return (
    <Link
      href={href}
      className={`${sans.className} inline-flex h-12 items-center justify-center px-8 text-[10px] uppercase tracking-[0.28em] transition-colors duration-200 ${rounded ? "rounded-full" : "rounded-sm"} ${className}`}
      style={
        style === "primary"
          ? { backgroundColor: theme.buttonBg, color: theme.buttonText }
          : {
              border: `1.5px solid ${theme.buttonSecondaryBorder}`,
              color: theme.text,
              backgroundColor: "transparent",
            }
      }
      onMouseEnter={(e) => {
        if (style === "primary") {
          e.currentTarget.style.backgroundColor = theme.buttonHover;
        }
      }}
      onMouseLeave={(e) => {
        if (style === "primary") {
          e.currentTarget.style.backgroundColor = theme.buttonBg;
        }
      }}
    >
      {children}
    </Link>
  );
}
