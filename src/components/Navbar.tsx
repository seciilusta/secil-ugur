"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Monogram } from "@/components/decorations/Monogram";
import { navLinks, site } from "@/data/content";
import { sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type NavbarProps = {
  variant?: ThemeVariant;
};

export function Navbar({ variant = "landing" }: NavbarProps) {
  const theme = getTheme(variant);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 px-6 py-4 backdrop-blur-md"
      style={{
        backgroundColor: `${theme.bg}f0`,
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <Monogram color={theme.text} accentColor={theme.accent} size="sm" />
          <span
            className={`${sans.className} hidden text-[10px] uppercase tracking-[0.25em] sm:block`}
            style={{ color: theme.accent }}
          >
            {site.navTagline}
          </span>
        </Link>

        <button
          type="button"
          className="flex flex-col gap-1.5 sm:hidden"
          aria-label="Menüyü aç"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className="block h-px w-6 transition-transform"
            style={{
              backgroundColor: theme.text,
              transform: open ? "translateY(5px) rotate(45deg)" : undefined,
            }}
          />
          <span
            className="block h-px w-6 transition-opacity"
            style={{
              backgroundColor: theme.text,
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-6 transition-transform"
            style={{
              backgroundColor: theme.text,
              transform: open ? "translateY(-5px) rotate(-45deg)" : undefined,
            }}
          />
        </button>

        <ul className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${sans.className} text-[10px] uppercase tracking-[0.25em] transition-opacity hover:opacity-70 ${
                  pathname === link.href ? "opacity-100" : "opacity-50"
                }`}
                style={{ color: theme.text }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul
          className="mx-auto mt-5 flex max-w-6xl flex-col gap-4 border-t pt-5 sm:hidden"
          style={{ borderColor: theme.border }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${sans.className} block text-[10px] uppercase tracking-[0.25em] ${
                  pathname === link.href ? "opacity-100" : "opacity-50"
                }`}
                style={{ color: theme.text }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
