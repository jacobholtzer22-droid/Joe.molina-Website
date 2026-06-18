"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { site } from "@/site.config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // At the top the header sits over the light split-hero → dark text.
  // Once scrolled it becomes a solid evergreen bar → light text.
  const onDark = scrolled;
  const wordmark = onDark ? "text-bone" : "text-evergreen";
  const navLink = onDark
    ? "text-bone/75 hover:text-bone"
    : "text-ink/70 hover:text-ink";
  const phoneLink = onDark
    ? "text-bone hover:text-cedar-light"
    : "text-ink hover:text-cedar-dark";
  const menuBtn = onDark
    ? "border-bone/20 text-bone"
    : "border-ink/15 text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-bone/10 bg-evergreen/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Wordmark */}
        <a
          href="#top"
          className={`h-display text-xl sm:text-2xl ${wordmark}`}
          aria-label={`${site.business.name} — back to top`}
        >
          {site.business.shortName}
          <span className="text-cedar">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${navLink}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.business.phoneHref}
            className={`hidden items-center gap-2 text-sm font-semibold transition-colors sm:inline-flex ${phoneLink}`}
          >
            <Phone className="h-4 w-4 text-cedar" aria-hidden="true" />
            {site.business.phoneDisplay}
          </a>
          <a href="#contact" className="btn-primary hidden sm:inline-flex">
            {site.cta.label}
          </a>

          {/* Mobile: call + menu */}
          <a
            href={site.business.phoneHref}
            className="btn-primary min-h-[44px] px-4 py-3 sm:hidden"
            aria-label={`Call ${site.business.name}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.cta.callShort}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border lg:hidden ${menuBtn}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel — always solid evergreen so it's legible over any hero. */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-bone/10 bg-evergreen backdrop-blur lg:hidden"
        >
          <div className="container-page flex flex-col py-3">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-bone/5 py-3 text-base font-medium text-bone/80 transition-colors hover:text-bone"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4"
            >
              {site.cta.label}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
