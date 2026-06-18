import { ArrowRight } from "lucide-react";
import Section from "./Section";
import ImagePlaceholder from "./ImagePlaceholder";
import { site } from "@/site.config";

export default function Services() {
  const { servicesIntro, services, cta } = site;
  const featured = services.find((s) => s.image);
  const rest = services.filter((s) => !s.image);

  return (
    <Section id="services" tone="stone" className="ashlar-wash">
      <div className="max-w-2xl">
        <p className="eyebrow mb-4">{servicesIntro.eyebrow}</p>
        <h2 className="h-display text-3xl text-evergreen sm:text-[2.6rem]">
          {servicesIntro.heading}
        </h2>
        <p className="mt-4 text-lg text-ink/70">{servicesIntro.sub}</p>
      </div>

      {/* Featured service — hardscaping leads */}
      {featured && (
        <div className="mt-12 grid items-stretch gap-8 overflow-hidden rounded-2xl border border-evergreen/10 bg-bone lg:grid-cols-2">
          <div className="relative min-h-[20rem] lg:min-h-[26rem]">
            <ImagePlaceholder
              image={featured.image!}
              sizes="(min-width: 1024px) 600px, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-cedar/12 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cedar-dark">
              <featured.icon className="h-4 w-4" aria-hidden="true" />
              Our craft
            </span>
            <h3 className="h-display mt-5 text-2xl text-evergreen sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              {featured.description}
            </p>
            <a
              href="#work"
              className="group mt-7 inline-flex w-fit items-center gap-2 font-semibold text-cedar-dark hover:text-cedar"
            >
              See finished projects
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      )}

      {/* The rest — icon cards */}
      <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-evergreen/10 bg-evergreen/10 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((service) => {
          const Icon = service.icon;
          return (
            <li
              key={service.title}
              className="flex flex-col gap-4 bg-bone p-7 transition-colors hover:bg-limestone-deep"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-evergreen text-bone">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-semibold tracking-tight text-evergreen">
                {service.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink/65">
                {service.description}
              </p>
            </li>
          );
        })}
      </ul>

      <div className="mt-10">
        <a href="#contact" className="btn-dark px-7 py-4 text-base">
          {cta.label}
        </a>
      </div>
    </Section>
  );
}
