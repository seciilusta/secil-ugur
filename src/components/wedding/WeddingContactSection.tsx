import { InvitationFrame } from "@/components/common/decorations/InvitationFrame";
import { SectionHeading } from "@/components/common/SectionHeading";
import { weddingContact } from "@/data";
import { serif, sans } from "@/lib/fonts";
import { getTheme } from "@/lib/theme";

export function WeddingContactSection() {
  const theme = getTheme("wedding");

  return (
    <section id="iletisim" style={{ backgroundColor: theme.bgAccent }}>
      <div className="mx-auto max-w-2xl px-6 py-12 lg:py-14">
        <SectionHeading
          eyebrow={weddingContact.eyebrow}
          title={weddingContact.title}
          variant="wedding"
          className="mb-8"
        />
        <InvitationFrame
          innerColor={`${theme.accent}44`}
          outerColor={`${theme.gold}28`}
          bg={theme.cardBg}
          className="px-8 py-10 text-center sm:px-12"
        >
          <p
            className={`${serif.className} mb-4 text-lg leading-relaxed sm:text-xl`}
            style={{ color: theme.text }}
          >
            {weddingContact.note}
          </p>
          <p
            className={`${sans.className} text-sm tracking-wide`}
            style={{ color: theme.accent }}
          >
            {weddingContact.email}
          </p>
        </InvitationFrame>
      </div>
    </section>
  );
}
