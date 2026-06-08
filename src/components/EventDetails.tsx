import { SectionHeading } from "@/components/SectionHeading";
import { detailLabels } from "@/data/mock";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";
import type { Event, FaqItem, ThemeVariant } from "@/types";

type EventDetailsProps = {
  event: Event;
  variant: ThemeVariant;
  faqs?: FaqItem[];
};

export function EventDetails({ event, variant, faqs }: EventDetailsProps) {
  const theme = getTheme(variant);

  const details = [
    { label: detailLabels.date, value: `${event.weekday}, ${event.dateDisplay}` },
    { label: detailLabels.time, value: event.time },
    { label: detailLabels.venue, value: event.venue },
    { label: detailLabels.location, value: event.location },
    ...(event.dressCode
      ? [{ label: detailLabels.dressCode, value: event.dressCode }]
      : []),
  ];

  return (
    <section className="px-6 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Bilgiler"
        title="Bilmeniz Gerekenler"
        variant={variant}
        className="mb-12"
      />

      <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
        {details.map((detail) => (
          <div key={detail.label} className="text-center sm:text-left">
            <p
              className={`${sans.className} mb-2 text-[11px] uppercase tracking-[0.25em]`}
              style={{ color: theme.accent }}
            >
              {detail.label}
            </p>
            <p
              className={`${serif.className} text-lg font-light`}
              style={{ color: theme.text }}
            >
              {detail.value}
            </p>
          </div>
        ))}
      </div>

      <p
        className={`${serif.className} mx-auto mt-12 max-w-2xl text-center text-lg font-light leading-relaxed sm:text-xl`}
        style={{ color: theme.text }}
      >
        {event.description}
      </p>

      {faqs && faqs.length > 0 && (
        <div className="mx-auto mt-20 max-w-2xl">
          <SectionHeading
            eyebrow="Sorular"
            title="Sık Sorulanlar"
            variant={variant}
            className="mb-10"
          />
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-t pt-8"
                style={{ borderColor: theme.border }}
              >
                <dt
                  className={`${serif.className} mb-3 text-lg font-light`}
                  style={{ color: theme.text }}
                >
                  {faq.question}
                </dt>
                <dd
                  className={`${sans.className} text-sm font-light leading-relaxed opacity-80`}
                  style={{ color: theme.text }}
                >
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  );
}
