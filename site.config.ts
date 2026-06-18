/* =============================================================================
 * site.config.ts — SINGLE SOURCE OF TRUTH
 * -----------------------------------------------------------------------------
 * This is the ONLY file with business-specific content. Every component reads
 * from here — no business detail is hardcoded anywhere else. To spin up a
 * different client site on this exact codebase:
 *   1. Replace the values in this file.
 *   2. Drop new photos in /public/images and update `images` + `work` below.
 *   3. Swap the brand colors in tailwind.config.ts + the fonts in app/layout.tsx.
 * That's it — zero component edits.
 * ========================================================================== */

import type { LucideIcon } from "lucide-react";
import { Hammer, Sprout, Leaf, Mountain, TreePine } from "lucide-react";

/* ---- Types ----------------------------------------------------------------- */

export type SiteImage = {
  /** Path under /public. Leave "" to render the role placeholder until the real photo lands. */
  src: string;
  /** Real, specific alt text — required for every image. */
  alt: string;
  /** Shown inside the placeholder box so it's obvious which photo goes here. */
  placeholderLabel: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** A service WITH an image renders as the large feature block; the rest are icon cards. */
  image?: SiteImage;
};

export type Project = {
  image: SiteImage;
  title: string;
  category: string;
};

export type Review = {
  /** Leave quote empty ("") to render a clearly-marked placeholder slot — never invent. */
  quote: string;
  author: string;
  /** e.g. "Google review" — shown under the author. */
  context?: string;
};

export type Stat = { value: string; label: string };

export type DayHours = {
  /** 24h "HH:MM", or null when closed. */
  open: string | null;
  close: string | null;
  closed: boolean;
};

export type NavItem = { label: string; href: string };

/** A before/after pair for the (config-gated) comparison slider. */
export type BeforeAfterPair = {
  before: SiteImage;
  after: SiteImage;
  title: string;
};

/* ---- Config ---------------------------------------------------------------- */

export const site = {
  /* --- Identity --- */
  business: {
    name: "J. Molina Landscaping",
    shortName: "J. Molina",
    owner: "Joe Molina",
    tagline: "Hardscaping & landscaping in the Blue Water Area",
    // TODO (Friday): confirm Joe's real business line. Placeholder per brief.
    phoneDisplay: "(810) 294-9417",
    phoneHref: "tel:+18102949417",
    region: "the Blue Water Area",
    email: "", // optional — add a public contact email if Joe wants one shown
  },

  /* --- Shared microcopy (buttons used in more than one place) --- */
  cta: {
    label: "Free in-home consultation", // header / sections
    short: "Free consultation", // mobile cta bar
    callShort: "Call", // mobile header button
  },

  /* --- Hero (split layout: copy + a tall finished-project photo) --- */
  hero: {
    eyebrow: "Family-owned · Blue Water Area · 10+ years",
    // "\n" controls the line breaks in the display headline.
    headline: "Landscapes built\nto last a lifetime.",
    sub: "For over a decade, the Molina family has designed and built the patios, walls, walkways, and grounds that make Blue Water Area homes the ones people slow down to look at. Real craftsmanship — work you can stand on.",
    primaryCta: "Get a free in-home consultation",
    secondaryCtaLabel: "Call Joe",
    imageKey: "hero" as const,
    imageBadge: "10+ years of finished work",
  },

  /* --- Trust strip (under the hero) ---
   * rating = null hides any star number (honest until Joe's real Google rating
   * is confirmed). Set a number to show stars + "X.X on Google".
   */
  trust: {
    rating: null as number | null, // TODO: set Joe's real Google rating, or leave null
    ratingSource: "Google",
    points: [
      "Family-owned & operated",
      "10+ years in the Blue Water Area",
      "Hardscaping & stonework specialists",
      "Free, no-pressure consultations",
    ],
  },

  /* --- Services intro + cards ---
   * The first service carries an `image` and renders as the large feature block —
   * hardscaping leads, because it's what they're known for.
   */
  servicesIntro: {
    eyebrow: "What we do",
    heading: "From the ground up — and the stone down.",
    sub: "Whether it's a full hardscape build or keeping an established property sharp, the same family crew handles it start to finish.",
  },
  services: [
    {
      title: "Hardscaping & Stonework",
      description:
        "Our craft. Retaining walls, paver patios, walkways, steps, and natural stonework — engineered to drain right, sit level, and hold their lines for decades. This is the work the Molina name is built on.",
      icon: Hammer,
      image: {
        src: "/images/service-hardscape.jpg",
        alt: "Curved interlocking-paver walkway leading to a home's entrance, bordered by fresh mulch beds and a stone fountain, built by J. Molina Landscaping",
        placeholderLabel: "Hardscaping feature — finished paver walkway & beds",
      },
    },
    {
      title: "Lawn Maintenance",
      description:
        "Weekly mowing, clean edges, and trimming that keeps an established property looking cared for — because it is. Sharp lines every visit.",
      icon: Sprout,
    },
    {
      title: "Spring & Fall Cleanups",
      description:
        "Leaves, beds, and winter mess cleared out so the property starts each season healthy and looks ready instead of buried.",
      icon: Leaf,
    },
    {
      title: "Mulch & Stone Install",
      description:
        "Fresh mulch, decorative stone, and crisp bed borders that lock in moisture, hold back weeds, and frame the whole yard.",
      icon: Mountain,
    },
    {
      title: "General Landscaping",
      description:
        "Bed design, plantings, grading, and the finishing touches that turn a plain lot into grounds that fit the home.",
      icon: TreePine,
    },
  ] satisfies Service[],

  /* --- The Work (signature: finished-project gallery) ---
   * The first project renders large/featured; the rest fill the grid. Hardscaping
   * is portfolio-driven — finished installs are the proof people want to see.
   */
  work: {
    eyebrow: "The work",
    heading: "See what we've built.",
    sub: "A look at recent installs and maintained properties across the Blue Water Area. The finished work speaks for itself.",
    cta: "Start your project",
    projects: [
      {
        image: {
          src: "/images/work-side-walkway.jpg",
          alt: "Paver stone walkway running along a brick wall and wood privacy fence down the side of a house",
          placeholderLabel: "Project — side-yard walkway",
        },
        title: "Side-Yard Stone Walkway",
        category: "Walkways",
      },
      {
        image: {
          src: "/images/work-deck-railing.jpg",
          alt: "Composite deck with black aluminum railing built onto the side of a sided home",
          placeholderLabel: "Project — composite deck",
        },
        title: "Composite Deck & Railing",
        category: "Decks & Structures",
      },
      {
        image: {
          src: "/images/work-fence-border.jpg",
          alt: "Backyard corner with a wood privacy fence, tidy lawn, and a clean gravel border strip",
          placeholderLabel: "Project — fence & gravel border",
        },
        title: "Privacy Fence & Gravel Border",
        category: "Hardscaping",
      },
      {
        image: {
          src: "/images/work-striped-lawn.jpg",
          alt: "Two-story home with a freshly mowed, striped green lawn maintained by J. Molina Landscaping",
          placeholderLabel: "Project — striped lawn",
        },
        title: "Freshly Cut, Striped Lawn",
        category: "Lawn Maintenance",
      },
      {
        image: {
          src: "/images/work-lawn-beds.jpg",
          alt: "Mowed front lawn with crisp edges and trimmed foundation beds beside a suburban home",
          placeholderLabel: "Project — clean edges & beds",
        },
        title: "Clean Edges & Trimmed Beds",
        category: "Lawn & Beds",
      },
      {
        image: {
          src: "/images/work-fall-cleanup.jpg",
          alt: "Backyard with autumn leaves cleared from the lawn beside a detached shed during a fall cleanup",
          placeholderLabel: "Project — fall cleanup",
        },
        title: "Fall Yard Cleanup",
        category: "Seasonal Cleanups",
      },
    ] satisfies Project[],
  },

  /* --- Before/after slider (SIGNATURE, but config-gated) ---
   * The component renders ONLY when enabled === true AND there is at least one pair
   * with both images. Off by default: Joe's current photos are single finished shots,
   * not matched before/after pairs — never fake a transformation. When he sends true
   * pairs (same angle, before + after), drop them in /public/images, add a pair here,
   * and flip enabled to true. The slider is already built and wired in page.tsx.
   */
  beforeAfter: {
    enabled: false,
    eyebrow: "Before & after",
    heading: "The transformation.",
    sub: "Drag to see a property before and after the Molina crew got to work.",
    beforeLabel: "Before",
    afterLabel: "After",
    pairs: [] as BeforeAfterPair[],
  },

  /* --- Why us / about --- */
  whyUs: {
    eyebrow: "Why J. Molina",
    heading: "A family name on every job.",
    body: "Joe Molina started this company to do landscaping the way it should be done — by people who show up, take pride in the details, and stand behind the work. More than ten years later it's still family-owned and owner-run, which means the person quoting your project is the same one making sure the last stone sits right.",
    bullets: [
      "Owner-run — Joe is on the job, not just the quote",
      "10+ years of installs across the Blue Water Area",
      "Hardscaping built to drain, sit level, and last",
      "Honest, upfront pricing — no surprises",
    ],
    imageKey: "crew" as const,
    stats: [
      { value: "10+ yrs", label: "Serving the Blue Water Area" },
      { value: "Family", label: "Owned & operated by the Molinas" },
      { value: "Insured", label: "Fully licensed & insured" },
    ] satisfies Stat[],
  },

  /* --- Service area --- */
  serviceArea: {
    eyebrow: "Service area",
    heading: "Proudly serving the\nBlue Water Area.",
    note: "Based in St. Clair County and serving the surrounding communities. Don't see your town? Ask — if you're near the water, we likely cover you.",
    cta: "See if we cover you",
    towns: [
      "Port Huron",
      "Marysville",
      "Fort Gratiot",
      "St. Clair",
      "Blue Water Area",
      "St. Clair County, MI",
    ],
  },

  /* --- Reviews / social proof ---
   * Quotes are intentionally EMPTY placeholders — do not invent. Paste 2 real
   * review quotes + author first names when Joe provides them. rating = null
   * keeps the section honest (no star number) until a real rating is confirmed.
   */
  reviews: {
    rating: null as number | null, // TODO: set Joe's real Google rating, or leave null
    source: "Google",
    eyebrow: "Reviews",
    heading: "Trusted by Blue Water Area homeowners.",
    sub: "We let the finished work — and our customers — do the talking.",
    placeholderLabel: "Review coming soon",
    placeholderHint: "Paste a real Google review in site.config.ts",
    quotes: [
      { quote: "", author: "", context: "Google review" },
      { quote: "", author: "", context: "Google review" },
    ] satisfies Review[],
  },

  /* --- Hours ---
   * TODO (Friday): confirm Joe's real hours. Seeded with typical landscaping hours.
   */
  hours: {
    monday: { open: "08:00", close: "17:00", closed: false },
    tuesday: { open: "08:00", close: "17:00", closed: false },
    wednesday: { open: "08:00", close: "17:00", closed: false },
    thursday: { open: "08:00", close: "17:00", closed: false },
    friday: { open: "08:00", close: "17:00", closed: false },
    saturday: { open: "08:00", close: "13:00", closed: false },
    sunday: { open: null, close: null, closed: true },
  } as Record<string, DayHours>,

  /* --- Photo manifest ---
   * Maps each non-gallery photo to a role. Set `src` once the real file is in
   * /public/images. While `src` is "", the site shows a labeled placeholder — no
   * component edits needed. Gallery photos live under `work.projects`. See PHOTOS.md.
   */
  images: {
    hero: {
      src: "/images/hero.jpg",
      alt: "Brick ranch home in the Blue Water Area with a curved paver walkway, stone fountain, and shaped evergreen beds installed by J. Molina Landscaping",
      placeholderLabel: "Hero — strongest finished hardscape / landscape",
    },
    crew: {
      src: "/images/crew-at-work.jpg",
      alt: "J. Molina Landscaping crew member working on a residential property beside the work truck",
      placeholderLabel: "About — the crew at work",
    },
  } satisfies Record<string, SiteImage>,

  /* --- CRM wiring (do not improvise — see ContactForm.tsx) ---
   * Values come from env so a different deploy = different tenant, no code change.
   */
  crm: {
    url:
      process.env.NEXT_PUBLIC_CRM_URL ||
      "https://www.alignandacquire.com/api/contact",
    businessSlug: process.env.NEXT_PUBLIC_BUSINESS_SLUG || "REPLACE_ME_FRIDAY",
  },

  /* --- Contact section + form copy --- */
  contact: {
    eyebrow: "Free consultation",
    heading: "Book your free in-home consultation.",
    sub: "Tell us about your property and what you're picturing — patio, wall, full landscape, or just keeping it sharp. Joe will come out, walk it with you, and put together an honest quote. No pressure, no obligation.",
    callOrTextLabel: "Call or text",
    infoLines: [
      "We'll reach out to schedule a time that works for you.",
      "Hardscape projects book out in advance — the sooner you reach out, the sooner you're on the calendar.",
    ],
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      phoneLabel: "Phone",
      phonePlaceholder: "(810) 000-0000",
      emailLabel: "Email",
      emailOptionalLabel: "(optional)",
      emailPlaceholder: "you@email.com",
      messageLabel: "What can we help with?",
      messagePlaceholder:
        "Your address and what you're looking for — a paver patio, retaining wall, full landscape, weekly maintenance, or something else.",
      submitLabel: "Request my free consultation",
      submittingLabel: "Sending…",
    },
    consentLabel:
      "I agree to receive text messages from J. Molina Landscaping about my request. Message and data rates may apply. Reply STOP to opt out.",
    successHeading: "Thanks — we've got it.",
    successBody:
      "Joe will reach out shortly to set up your free in-home consultation. Need it sooner? Call or text us directly.",
    errorLead: "Something went wrong sending that. Please call or text us at",
  },

  /* --- Nav (anchor links on a single page) --- */
  nav: [
    { label: "Services", href: "#services" },
    { label: "The Work", href: "#work" },
    { label: "Why Us", href: "#why-us" },
    { label: "Service Area", href: "#service-area" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],

  /* --- SEO --- */
  seo: {
    title:
      "J. Molina Landscaping — Hardscaping & Landscaping in the Blue Water Area",
    description:
      "Family-owned hardscaping and landscaping in Port Huron, Marysville, Fort Gratiot, St. Clair and the Blue Water Area. Paver patios, retaining walls, stonework, lawn care, and cleanups — 10+ years of craftsmanship. Free in-home consultations.",
    url: "https://jmolinalandscaping.com", // TODO: confirm final domain
  },

  /* --- Footer --- */
  footer: {
    credit: "Site by Align and Acquire",
    exploreLabel: "Explore",
    hoursLabel: "Hours",
    rightsText: "All rights reserved.",
    blurb:
      "Family-owned hardscaping and landscaping, built on craftsmanship and a name we stand behind.",
  },
} as const;

export type Site = typeof site;
