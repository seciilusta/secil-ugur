"use client";

import Link from "next/link";
import { Monogram } from "@/components/common/decorations/Monogram";
import { sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type NavbarProps = {
  variant?: ThemeVariant;
};

export function Navbar({ variant = "landing" }: NavbarProps) {
  const theme = getTheme(variant);

  return (
    <header
      className="sticky top-0 z-50 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4"
      style={{
        backgroundColor: `${theme.bg}f0`,
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href={variant === "wedding" ? "/wedding" : variant === "engagement" ? "/engagement" : "/"}
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Monogram color={theme.text} accentColor={theme.accent} size="sm" />
          <span
            className={`${sans.className} hidden text-[10px] uppercase tracking-[0.25em] sm:block`}
            style={{ color: theme.accent }}
          >
            Nişan Daveti
          </span>
        </Link>
      </nav>
    </header>
  );
}
