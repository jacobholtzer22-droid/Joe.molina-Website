import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { site } from "@/site.config";

/**
 * The signature section: a finished-project gallery. Dark evergreen ground so the
 * work pops (Portfolio-Grid pattern — let the photos do the selling). Captions are
 * always legible at the bottom of each tile; hover/focus adds a subtle lift + zoom
 * (reduced-motion disables the motion via globals.css). All content is config-driven.
 */
export default function Work() {
  const { work } = site;

  return (
    <section id="work" className="bg-evergreen py-20 text-bone sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-cedar-light">{work.eyebrow}</p>
          <h2 className="h-display text-3xl text-bone sm:text-[2.6rem]">
            {work.heading}
          </h2>
          <p className="mt-4 text-lg text-bone/70">{work.sub}</p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {work.projects.map((project) => (
            <li key={project.title}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-bone/10 bg-evergreen-dark">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                {/* Always-on bottom scrim so the caption is readable over any photo. */}
                <div className="photo-scrim absolute inset-0" aria-hidden="true" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-block rounded-full bg-cedar px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-bone">
                    {project.category}
                  </span>
                  <p className="mt-2.5 font-display text-lg font-semibold leading-tight text-bone">
                    {project.title}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-11 flex flex-col items-start gap-4 border-t border-bone/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-base text-bone/70">
            Every project starts with a free in-home consultation — let's talk
            about what you're picturing.
          </p>
          <a
            href="#contact"
            className="btn-primary shrink-0 px-7 py-4 text-base"
          >
            {work.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
