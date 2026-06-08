"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { CountdownTarget, ThemeVariant } from "@/types";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownSectionProps = {
  targets: CountdownTarget[];
  variant?: ThemeVariant;
  eyebrow?: string;
  title?: string;
  id?: string;
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
    <div className="flex flex-col items-center gap-1">
      <span
        className={`${serif.className} text-3xl font-light tracking-wider sm:text-4xl`}
        style={{ color: theme.text }}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span
        className={`${sans.className} text-[10px] uppercase tracking-[0.25em]`}
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
}: {
  label: string;
  date: Date;
  variant: ThemeVariant;
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
    <div className="flex flex-1 flex-col items-center gap-6 px-4 py-8 sm:px-8">
      <div className="text-center">
        <p
          className={`${sans.className} mb-2 text-[11px] uppercase tracking-[0.3em]`}
          style={{ color: theme.accent }}
        >
          {label}
        </p>
        <p
          className={`${serif.className} text-lg font-light italic sm:text-xl`}
          style={{ color: theme.text }}
        >
          {formatted}
        </p>
      </div>

      {mounted && timeLeft ? (
        <div className="grid grid-cols-4 gap-4 sm:gap-8">
          <CountdownUnit value={timeLeft.days} label="Gün" variant={variant} />
          <CountdownUnit value={timeLeft.hours} label="Saat" variant={variant} />
          <CountdownUnit value={timeLeft.minutes} label="Dk" variant={variant} />
          <CountdownUnit value={timeLeft.seconds} label="Sn" variant={variant} />
        </div>
      ) : mounted ? (
        <p
          className={`${serif.className} text-xl font-light italic`}
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
  targets,
  variant = "landing",
  eyebrow = "Takviminize Not Edin",
  title = "Geri Sayım",
  id = "countdown",
}: CountdownSectionProps) {
  const theme = getTheme(variant);

  return (
    <section id={id} className="px-6 py-16 sm:py-24">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        variant={variant}
        className="mb-12"
      />

      <div
        className={`mx-auto flex max-w-3xl ${
          targets.length > 1
            ? "flex-col divide-y sm:flex-row sm:divide-x sm:divide-y-0"
            : "flex-col"
        }`}
        style={{
          borderColor: theme.cardBorder,
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        {targets.map((target) => (
          <CountdownBlock
            key={target.label}
            label={target.label}
            date={new Date(target.date)}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
}
