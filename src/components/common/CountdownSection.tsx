"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionSeparator } from "@/components/common/decorations/SectionSeparator";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownSectionProps = {
  variant?: ThemeVariant;
  id?: string;
  compact?: boolean;
};

function getTimeLeft(target: Date): TimeLeft | null {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({
  value,
  label,
  variant,
}: {
  value: number;
  label: string;
  variant: ThemeVariant;
}) {
  const theme = getTheme(variant);

  return (
    <div className="flex flex-col items-center gap-2 px-1.5 py-2.5 sm:px-2 sm:py-3">
      <span
        className={`${serif.className} text-[26px] font-normal tracking-wider sm:text-[40px]`}
        style={{ color: theme.text }}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span
        className={`${sans.className} text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.24em]`}
        style={{ color: theme.accent }}
      >
        {label}
      </span>
    </div>
  );
}

function CountdownBlock({
  label,
  date,
  variant,
  shortDate,
}: {
  label: string;
  date: Date;
  variant: ThemeVariant;
  shortDate?: string;
}) {
  const theme = getTheme(variant);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => setTimeLeft(getTimeLeft(date));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [date]);

  const formatted = date.toLocaleDateString("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="flex flex-1 flex-col items-center gap-5 px-3 py-8 sm:gap-6 sm:px-8 sm:py-10"
      style={{ backgroundColor: theme.bg }}
    >
      <div className="text-center">
      <p
      className={`${sans.className} mb-3 text-xs font-medium uppercase tracking-[0.26em] sm:text-sm sm:tracking-[0.32em]`}
      style={{ color: theme.accent }}
      >
      {label}
      </p>
        {shortDate && (
          <p
            className={`${serif.className} mb-2 text-xl tracking-[0.12em] sm:text-2xl`}
            style={{ color: theme.text }}
          >
            {shortDate}
          </p>
        )}
        <p
          className={`${serif.className} text-sm font-normal italic opacity-80 sm:text-lg`}
          style={{ color: theme.text }}
        >
          {formatted}
        </p>
      </div>

      {mounted && timeLeft ? (
        <div
          className="grid grid-cols-4 overflow-hidden"
          style={{ border: `1px solid ${theme.cardBorder}` }}
        >
          {(
            [
              { value: timeLeft.days, label: "Gün" },
              { value: timeLeft.hours, label: "Saat" },
              { value: timeLeft.minutes, label: "Dk" },
              { value: timeLeft.seconds, label: "Sn" },
            ] as const
          ).map((unit, i) => (
            <div
              key={unit.label}
              style={i > 0 ? { borderLeft: `1px solid ${theme.border}` } : undefined}
            >
              <CountdownUnit value={unit.value} label={unit.label} variant={variant} />
            </div>
          ))}
        </div>
      ) : mounted ? (
        <p
          className={`${serif.className} text-xl font-normal italic`}
          style={{ color: theme.accent }}
        >
          Gün geldi
        </p>
      ) : (
        <div className="h-16" />
      )}
    </div>
  );
}

export function CountdownSection({
  variant = "landing",
  id = "countdown",
  compact = false,
}: CountdownSectionProps) {
  const theme = getTheme(variant);

  return (
    <section
      id={id}
      className={
        compact
          ? "px-4 py-8 sm:px-6 sm:py-12 lg:py-14"
          : "px-4 py-10 sm:px-6 sm:py-16 lg:py-24"
      }
    >
      <SectionSeparator variant={variant} />
      {variant === "engagement" ? (
        <SectionHeading
          eyebrow="Kutlamaya Kalan"
          title="Geri Sayım"
          variant={variant}
          className={compact ? "mb-6 mt-2 sm:mb-8" : "mb-8 mt-6 sm:mb-12 sm:mt-8"}
        />
      ) : variant === "wedding" ? (
        <SectionHeading
          eyebrow="Tarihi Not Edin"
          title="Düğüne Kalan"
          variant={variant}
          className={compact ? "mb-6 mt-2 sm:mb-8" : "mb-8 mt-6 sm:mb-12 sm:mt-8"}
        />
      ) : (
        <SectionHeading
          eyebrow="Takviminize Not Edin"
          title="Geri Sayım"
          variant={variant}
          className={compact ? "mb-6 mt-2 sm:mb-8" : "mb-8 mt-6 sm:mb-12 sm:mt-8"}
        />
      )}

      {variant === "engagement" ? (
        <div
          className="mx-auto flex max-w-3xl flex-col"
          style={{
            borderColor: theme.cardBorder,
            borderWidth: 1,
            borderStyle: "solid",
            boxShadow: `inset 0 0 0 1px ${theme.border}`,
          }}
        >
          <CountdownBlock
            label="Nişan"
            date={new Date("2026-07-04T15:00:00+03:00")}
            variant={variant}
            shortDate="04.07.2026"
          />
        </div>
      ) : variant === "wedding" ? (
        <div
          className="mx-auto flex max-w-3xl flex-col"
          style={{
            borderColor: theme.cardBorder,
            borderWidth: 1,
            borderStyle: "solid",
            boxShadow: `inset 0 0 0 1px ${theme.border}`,
          }}
        >
          <CountdownBlock
            label="Düğün"
            date={new Date("2026-10-04T19:00:00+03:00")}
            variant={variant}
            shortDate="04.10.2026"
          />
        </div>
      ) : (
        <div
          className="mx-auto flex max-w-3xl flex-col divide-y sm:flex-row sm:divide-x sm:divide-y-0"
          style={{
            borderColor: theme.cardBorder,
            borderWidth: 1,
            borderStyle: "solid",
            boxShadow: `inset 0 0 0 1px ${theme.border}`,
          }}
        >
          <CountdownBlock
            label="Nişan"
            date={new Date("2026-07-04T15:00:00")}
            variant={variant}
            shortDate="04.07.2026"
          />
          <CountdownBlock
            label="Düğün"
            date={new Date("2026-10-04T19:00:00")}
            variant={variant}
            shortDate="04.10.2026"
          />
        </div>
      )}
    </section>
  );
}
