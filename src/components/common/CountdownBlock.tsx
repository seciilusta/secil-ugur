"use client";

import { useEffect, useState } from "react";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { ThemeVariant } from "@/types";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownBlockProps = {
  label: string;
  date: Date;
  variant: ThemeVariant;
  shortDate?: string;
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

export function CountdownBlock({
  label,
  date,
  variant,
  shortDate,
}: CountdownBlockProps) {
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
    timeZone: "Europe/Istanbul",
  });

  const units = [
    { value: timeLeft?.days ?? 0, label: "Gün" },
    { value: timeLeft?.hours ?? 0, label: "Saat" },
    { value: timeLeft?.minutes ?? 0, label: "Dk" },
    { value: timeLeft?.seconds ?? 0, label: "Sn" },
  ];

  return (
    <div
      className="flex flex-1 flex-col items-center gap-5 px-5 py-8 text-center sm:gap-6 sm:px-8 sm:py-10"
    >
      
      <div className="text-center">
      {label && (
        <p
          className={`${sans.className} mb-3 text-xs font-medium uppercase tracking-[0.26em] sm:text-sm sm:tracking-[0.32em]`}
          style={{ color: theme.accent }}
        >
          {label}
        </p>
)}
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
          className="grid grid-cols-4 overflow-hidden rounded-2xl"
          style={{
            border: `1px solid ${theme.cardBorder}`,
            boxShadow: `inset 0 0 0 1px ${theme.border}66`,
          }}
        >
          {units.map((unit, i) => (
            <div
              key={unit.label}
              className="flex flex-col items-center gap-2 px-1.5 py-2.5 sm:px-2 sm:py-3"
              style={
                i > 0
                  ? { borderLeft: `1px solid ${theme.border}` }
                  : undefined
              }
            >
              <span
                className={`${serif.className} text-[26px] font-normal tracking-wider sm:text-[40px]`}
                style={{ color: theme.text }}
              >
                {String(unit.value).padStart(2, "0")}
              </span>

              <span
                className={`${sans.className} text-[10px] font-medium uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.24em]`}
                style={{ color: theme.accent }}
              >
                {unit.label}
              </span>
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