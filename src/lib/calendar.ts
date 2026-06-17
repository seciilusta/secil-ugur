import { couple } from "@/data";
import type { Event } from "@/types";

function formatGoogleCalendarDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

export function buildGoogleCalendarUrl(event: Event): string {
  const start = new Date(`${event.date}+03:00`);
  const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);
  const location = event.address ?? `${event.venue}, ${event.location}`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${couple.name} — ${event.label}`,
    dates: `${formatGoogleCalendarDate(start)}/${formatGoogleCalendarDate(end)}`,
    location,
    details: event.description,
    ctz: "Europe/Istanbul",
  });

  return `https://www.google.com/calendar/render?${params.toString()}`;
}
