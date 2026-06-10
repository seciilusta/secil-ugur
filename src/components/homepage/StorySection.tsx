import Link from "next/link";
import { SectionHeading } from "@/components/common/SectionHeading";
import { storySection } from "@/data";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function StorySection() {
  const theme = getTheme("landing");

  return (
    <section
      id="hikayemiz"
      className="relative overflow-hidden"
      style={{ backgroundColor: theme.cardBg }}
    >
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2 lg:gap-0">
        {/* Left panel — typographic pull-quote with accent border */}
        <div
          className="relative flex min-h-[240px] items-center justify-center px-8 py-12 lg:min-h-[380px] lg:py-16"
          style={{ backgroundColor: theme.bgAccent }}
        >
          <div
            className="relative z-10 max-w-xs text-left"
            style={{ borderLeft: `2px solid ${theme.accent}` }}
          >
            <p
              className={`${serif.className} pl-6 text-3xl font-normal italic leading-snug sm:text-4xl`}
              style={{ color: theme.text }}
            >
              {storySection.tagline}
            </p>
          </div>
        </div>

        {/* Right panel — heading + body */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <SectionHeading
            eyebrow={storySection.eyebrow}
            title={storySection.title}
            variant="landing"
            align="left"
            className="mb-6"
          />
          <p
            className={`${serif.className} mb-6 text-lg leading-relaxed sm:text-xl`}
            style={{ color: theme.text, opacity: 0.9 }}
          >
            {storySection.body}
          </p>
          <Link
            href={storySection.linkHref}
            className={`${sans.className} inline-flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.28em] transition-opacity hover:opacity-70`}
            style={{ color: theme.accent }}
          >
            {storySection.linkText}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
