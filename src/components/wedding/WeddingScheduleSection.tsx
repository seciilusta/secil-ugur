import { SectionHeading } from "@/components/common/SectionHeading";
import { weddingSchedule } from "@/data";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function WeddingScheduleSection() {
  const theme = getTheme("wedding");

  return (
    <section id="program" style={{ backgroundColor: theme.bgAccent }}>
      <div className="mx-auto max-w-3xl px-6 py-12 lg:py-14">
        <SectionHeading
          eyebrow={weddingSchedule.eyebrow}
          title={weddingSchedule.title}
          variant="wedding"
          className="mb-10"
        />
        <ol className="space-y-0">
          {weddingSchedule.items.map((item, i) => (
            <li
              key={item.time}
              className="grid grid-cols-[5rem_1fr] gap-4 border-t py-6 sm:grid-cols-[6rem_1fr] sm:gap-8"
              style={{ borderColor: theme.border }}
            >
              <p
                className={`${serif.className} text-lg tracking-wide sm:text-xl`}
                style={{ color: theme.gold }}
              >
                {item.time}
              </p>
              <div>
                <p
                  className={`${serif.className} mb-1 text-lg font-normal sm:text-xl`}
                  style={{ color: theme.text }}
                >
                  {item.title}
                </p>
                {item.note && (
                  <p className={`${sans.className} text-sm opacity-70`}>{item.note}</p>
                )}
              </div>
              {i < weddingSchedule.items.length - 1 && (
                <span className="sr-only">Sonraki</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
