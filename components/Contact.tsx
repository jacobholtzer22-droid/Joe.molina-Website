import { Phone, CalendarClock, ShieldCheck } from "lucide-react";
import Section from "./Section";
import ContactForm from "./ContactForm";
import { site } from "@/site.config";

const INFO_ICONS = [CalendarClock, ShieldCheck] as const;

export default function Contact() {
  const { contact, business } = site;

  return (
    <Section id="contact" tone="stone" className="ashlar-wash">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-4">{contact.eyebrow}</p>
          <h2 className="h-display text-3xl text-evergreen sm:text-5xl">
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
            {contact.sub}
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-4 rounded-xl border border-evergreen/10 bg-bone px-5 py-4 transition-colors hover:border-cedar"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-evergreen text-cedar-light">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-ink/50">
                  {contact.callOrTextLabel}
                </span>
                <span className="font-display text-lg font-bold text-evergreen">
                  {business.phoneDisplay}
                </span>
              </span>
            </a>

            {contact.infoLines.map((line, i) => {
              const Icon = INFO_ICONS[i] ?? CalendarClock;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 px-1 text-sm text-ink/70"
                >
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-cedar-dark"
                    aria-hidden="true"
                  />
                  <span>{line}</span>
                </div>
              );
            })}
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
