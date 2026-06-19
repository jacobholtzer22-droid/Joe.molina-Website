/* =============================================================================
 * site.config.ts, SINGLE SOURCE OF TRUTH
 * -----------------------------------------------------------------------------
 * This is the ONLY file with business-specific content. Every component/page
 * reads from here, no business detail is hardcoded anywhere else. To spin up a
 * different client site on this exact codebase:
 *   1. Replace the values in this file.
 *   2. Drop new photos in /public/images and update `images` + `work` below.
 *   3. Swap the brand colors in tailwind.config.ts + the fonts in app/layout.tsx.
 * That's it, zero component edits.
 *
 * Multi-page: real routes (/, /services, /services/<slug>, /gallery, /about,
 * /contact, /privacy-policy, /terms). Per-page SEO lives in `seo.pages`.
 * ========================================================================== */

import type { LucideIcon } from "lucide-react";
import { Hammer, Sprout, Leaf, Mountain, TreePine } from "lucide-react";

/* ---- Types ----------------------------------------------------------------- */

export type SiteImage = {
  /** Path under /public. Leave "" to render the role placeholder until the real photo lands. */
  src: string;
  /** Real, specific alt text, required for every image. */
  alt: string;
  /** Shown inside the placeholder box so it's obvious which photo goes here. */
  placeholderLabel: string;
};

export type Service = {
  title: string;
  /** URL segment for the sub-page: /services/<slug> */
  slug: string;
  /** Short card description (home + services index). */
  description: string;
  icon: LucideIcon;
  /** Hardscaping leads, rendered as the large feature block on /services. */
  featured?: boolean;
  /** Photo for the feature block + the service sub-page hero. */
  image: SiteImage;
  /** Sub-page lead paragraph. */
  intro: string;
  /** Sub-page "what's included" bullets. */
  bullets: string[];
};

export type Project = {
  image: SiteImage;
  title: string;
  category: string;
};

export type Review = {
  /** Leave quote empty ("") to render a clearly-marked placeholder slot, never invent. */
  quote: string;
  author: string;
  context?: string;
};

export type Stat = { value: string; label: string };

export type DayHours = {
  open: string | null;
  close: string | null;
  closed: boolean;
};

export type NavItem = { label: string; href: string };

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
    // Confirmed real (HomeAdvisor/Yelp/their site): J. Molina Landscaping, Port Huron.
    phoneDisplay: "(810) 294-9417",
    phoneHref: "tel:+18102949417",
    region: "the Blue Water Area",
    email: "", // optional, add a public contact email if Joe wants one shown
  },

  /* --- Shared CTA (one place; used in header, mobile bar, bands) --- */
  cta: {
    label: "Free quote", // header button / sections
    short: "Free quote", // mobile cta bar
    callShort: "Call", // mobile header button
    href: "/contact", // the quote form lives on /contact
  },

  /* --- Hero (home, split layout: copy + a tall finished-project photo) --- */
  hero: {
    eyebrow: "Family-owned · Blue Water Area · 10+ years",
    headline: "Landscapes built\nto last a lifetime.",
    sub: "For over a decade, the Molina family has designed and built the patios, walls, walkways, and grounds that make Blue Water Area homes the ones people slow down to look at. Real craftsmanship, work you can stand on.",
    primaryCta: "Get a free quote",
    secondaryCtaLabel: "Call Joe",
    imageKey: "hero" as const,
    imageBadge: "10+ years of finished work",
  },

  /* --- Trust strip (under the hero) --- */
  trust: {
    rating: null as number | null, // TODO: set Joe's real Google rating, or leave null
    ratingSource: "Google",
    points: [
      "Family-owned & operated",
      "10+ years in the Blue Water Area",
      "Hardscaping & stonework specialists",
      "Free, no-pressure quotes",
    ],
  },

  /* --- Services intro + cards ---
   * The service with `featured: true` renders as the large feature block on /services.
   * Each service is also its own page at /services/<slug>.
   */
  servicesIntro: {
    eyebrow: "What we do",
    heading: "From the ground up, and the stone down.",
    sub: "Whether it's a full hardscape build or keeping an established property sharp, the same family crew handles it start to finish.",
    allLabel: "All services",
  },
  services: [
    {
      title: "Hardscaping & Stonework",
      slug: "hardscaping",
      description:
        "Retaining walls, paver patios, walkways, and natural stonework, engineered to last. The work the Molina name is built on.",
      icon: Hammer,
      featured: true,
      image: {
        src: "/images/service-hardscape.jpg",
        alt: "Curved interlocking-paver walkway leading to a home's entrance, bordered by fresh mulch beds and a stone fountain, built by J. Molina Landscaping",
        placeholderLabel: "Hardscaping, finished paver walkway & beds",
      },
      intro:
        "Hardscaping is our craft. We design and build the hard surfaces that give a property its structure and stand up to Michigan winters, patios you'll actually use, walls that hold their line, and walkways that sit dead level for decades.",
      bullets: [
        "Paver & natural-stone patios",
        "Retaining & garden walls",
        "Walkways, steps & entries",
        "Proper base prep, drainage & grading",
        "Decorative stone & edging",
      ],
    },
    {
      title: "Lawn Maintenance",
      slug: "lawn-maintenance",
      description:
        "Weekly mowing, clean edges, and trimming that keeps an established property looking cared for, sharp lines every visit.",
      icon: Sprout,
      image: {
        src: "/images/work-striped-lawn.jpg",
        alt: "Two-story home with a freshly mowed, striped green lawn maintained by J. Molina Landscaping",
        placeholderLabel: "Lawn maintenance, striped lawn",
      },
      intro:
        "A well-kept lawn is the easiest way to make a property look cared for. We mow on a schedule that fits your yard, handle the clippings, and leave crisp edges every single visit.",
      bullets: [
        "Weekly & biweekly mowing",
        "Edging along walks, drives & beds",
        "String-trimming around fences & trees",
        "Clippings cleaned up, never left behind",
      ],
    },
    {
      title: "Spring & Fall Cleanups",
      slug: "spring-fall-cleanups",
      description:
        "Leaves, beds, and winter mess cleared out so the property starts each season healthy and looks ready instead of buried.",
      icon: Leaf,
      image: {
        src: "/images/work-fall-cleanup.jpg",
        alt: "Backyard with autumn leaves cleared from the lawn beside a detached shed during a fall cleanup",
        placeholderLabel: "Seasonal cleanups, fall yard cleanup",
      },
      intro:
        "The change of seasons is when a property either gets ahead or falls behind. We clear out the leaves, sticks, and winter debris so your lawn starts healthy and your beds look ready, not buried.",
      bullets: [
        "Leaf & debris removal",
        "Bed cleanouts & cutbacks",
        "Gutter-line & hardscape clearing",
        "Hauled away, left clean",
      ],
    },
    {
      title: "Mulch & Stone Install",
      slug: "mulch-stone-install",
      description:
        "Fresh mulch, decorative stone, and crisp bed borders that lock in moisture, hold back weeds, and frame the whole yard.",
      icon: Mountain,
      image: {
        src: "/images/work-fence-border.jpg",
        alt: "Backyard corner with a wood privacy fence, tidy lawn, and a clean gravel and stone border strip",
        placeholderLabel: "Mulch & stone, clean stone border",
      },
      intro:
        "Fresh mulch and decorative stone do more than look good, they lock in moisture, hold back weeds, and frame the whole property. We install it clean, with borders that hold their shape.",
      bullets: [
        "Hardwood & dyed mulch",
        "Decorative & drainage stone",
        "Crisp bed edging & borders",
        "Weed barrier where it makes sense",
      ],
    },
    {
      title: "General Landscaping",
      slug: "general-landscaping",
      description:
        "Bed design, plantings, grading, and the finishing touches that turn a plain lot into grounds that fit the home.",
      icon: TreePine,
      image: {
        src: "/images/hero.jpg",
        alt: "Brick ranch home with a curved paver walkway, stone fountain, and shaped evergreen beds installed by J. Molina Landscaping",
        placeholderLabel: "General landscaping, designed front grounds",
      },
      intro:
        "When you want the whole property to come together, we handle the design and the dirt, bed layout, plantings, grading, and the finishing touches that make grounds feel like they belong with the home.",
      bullets: [
        "Bed design & shaping",
        "Shrub & perennial plantings",
        "Grading & soil work",
        "Full-property finishing touches",
      ],
    },
  ] satisfies Service[],

  /* --- The Work (finished-project gallery) --- */
  work: {
    eyebrow: "The work",
    heading: "See what we've built.",
    sub: "A look at recent installs and maintained properties across the Blue Water Area. The finished work speaks for itself.",
    teaserCta: "View the full gallery",
    footerNote:
      "Every project starts with a free, no-pressure quote, let's talk about what you're picturing.",
    cta: "Get a free quote",
    projects: [
      {
        image: {
          src: "/images/work-side-walkway.jpg",
          alt: "Paver stone walkway running along a brick wall and wood privacy fence down the side of a house",
          placeholderLabel: "Project, side-yard walkway",
        },
        title: "Side-Yard Stone Walkway",
        category: "Walkways",
      },
      {
        image: {
          src: "/images/work-deck-railing.jpg",
          alt: "Composite deck with black aluminum railing built onto the side of a sided home",
          placeholderLabel: "Project, composite deck",
        },
        title: "Composite Deck & Railing",
        category: "Decks & Structures",
      },
      {
        image: {
          src: "/images/work-fence-border.jpg",
          alt: "Backyard corner with a wood privacy fence, tidy lawn, and a clean gravel border strip",
          placeholderLabel: "Project, fence & gravel border",
        },
        title: "Privacy Fence & Gravel Border",
        category: "Hardscaping",
      },
      {
        image: {
          src: "/images/work-striped-lawn.jpg",
          alt: "Two-story home with a freshly mowed, striped green lawn maintained by J. Molina Landscaping",
          placeholderLabel: "Project, striped lawn",
        },
        title: "Freshly Cut, Striped Lawn",
        category: "Lawn Maintenance",
      },
      {
        image: {
          src: "/images/work-lawn-beds.jpg",
          alt: "Mowed front lawn with crisp edges and trimmed foundation beds beside a suburban home",
          placeholderLabel: "Project, clean edges & beds",
        },
        title: "Clean Edges & Trimmed Beds",
        category: "Lawn & Beds",
      },
      {
        image: {
          src: "/images/work-fall-cleanup.jpg",
          alt: "Backyard with autumn leaves cleared from the lawn beside a detached shed during a fall cleanup",
          placeholderLabel: "Project, fall cleanup",
        },
        title: "Fall Yard Cleanup",
        category: "Seasonal Cleanups",
      },
      {
        image: {
          src: "/images/work-deck-beds.jpg",
          alt: "Composite deck with a fresh mulched bed and paver-stone edging along the walkway",
          placeholderLabel: "Project, deck beds & paver edging",
        },
        title: "Deck Beds & Paver Edging",
        category: "Hardscaping",
      },
      {
        image: {
          src: "/images/work-open-lawn.jpg",
          alt: "Wide, freshly mowed green lawn under a blue sky beside a Blue Water Area home",
          placeholderLabel: "Project, open mowed lawn",
        },
        title: "Open Lawn & Maintenance",
        category: "Lawn Maintenance",
      },
    ] satisfies Project[],
  },

  /* --- Before/after slider (real pair from Joe's photos) --- */
  beforeAfter: {
    enabled: true,
    eyebrow: "Before & after",
    heading: "See the transformation.",
    sub: "Drag the slider to see a Blue Water Area property before and after the Molina crew got to work.",
    beforeLabel: "Before",
    afterLabel: "After",
    pairs: [
      {
        before: {
          src: "/images/ba-bed-before.jpg",
          alt: "A bare dirt garden bed running along a backyard deck before the work",
          placeholderLabel: "Before, bare dirt bed",
        },
        after: {
          src: "/images/ba-bed-after.jpg",
          alt: "The same backyard bed finished with fresh mulch, new plantings, and clean edging",
          placeholderLabel: "After, finished mulched bed",
        },
        title: "Garden bed refresh",
      },
    ] as BeforeAfterPair[],
  },

  /* --- Why us / about --- */
  whyUs: {
    eyebrow: "Why J. Molina",
    heading: "A family name on every job.",
    body: "Joe Molina started this company to do landscaping the way it should be done, by people who show up, take pride in the details, and stand behind the work. More than ten years later it's still family-owned and owner-run, which means the person quoting your project is the same one making sure the last stone sits right.",
    bullets: [
      "Owner-run, Joe is on the job, not just the quote",
      "10+ years of installs across the Blue Water Area",
      "Hardscaping built to drain, sit level, and last",
      "Honest, upfront pricing, no surprises",
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
    note: "Based in St. Clair County and serving the surrounding communities. Don't see your town? Ask, if you're near the water, we likely cover you.",
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

  /* --- Reviews ---
   * Real reviews imported from Joe's public HomeAdvisor / Yelp listings. Google,
   * Yelp, and HomeAdvisor all block scraping, so these are rendered faithfully from
   * the public review text WITHOUT reviewer names (we don't invent names). Swap in
   * exact Google review quotes + first names anytime, just edit `quotes` below.
   * 5.0 is verified on HomeAdvisor/Yelp; confirm the exact Google star count.
   */
  reviews: {
    rating: 5.0 as number | null,
    eyebrow: "Reviews",
    heading: "Trusted by Blue Water Area homeowners.",
    sub: "We let the finished work, and our customers, do the talking.",
    // Google review links for Joe's exact listing (CID 0x88259d9f3408553b:0xb54996329c180fe2).
    // `googleReviewUrl` = the one-tap "write a review" deep link; `googleProfileUrl` opens
    // the listing in Maps (reviews shown). cid (decimal) = 13063137338276188130.
    googleReviewUrl:
      "https://www.google.com/search?q=J.+Molina+Landscaping+Port+Huron+MI+48060#lrd=0x88259d9f3408553b:0xb54996329c180fe2,3,,,,",
    googleProfileUrl: "https://www.google.com/maps?cid=13063137338276188130",
    reviewCtaLabel: "Leave us a Google review",
    readReviewsLabel: "Read our reviews",
    placeholderLabel: "Review coming soon",
    placeholderHint: "Paste a real Google review in site.config.ts",
    // Verbatim from Joe's public listings. No invented names (the platforms don't expose
    // reviewer names to scraping); attributed to the source instead.
    quotes: [
      {
        quote:
          "Joe is friendly, professional and knowledgeable. My lawn looks fantastic! I'm so happy I found this service. I highly recommend J Molina.",
        author: "",
        context: "HomeAdvisor review",
      },
      {
        quote:
          "Joe and his crew always do a fantastic job on our lawn. We've had them for three years now, and they're quick to answer any questions.",
        author: "",
        context: "Yelp review",
      },
      {
        quote:
          "Joe and crew were great to work with! I called them to have some flower beds and shrubs removed. They arrived when promised and finished the work in one day. Prompt, courteous, and professional all the way!",
        author: "",
        context: "HomeAdvisor review",
      },
      {
        quote:
          "Super friendly and extremely hard working! Mr. Molina removed a large shrub that was encroaching on the neighbor's gate, and left the area very clean and ready to be reworked. Definitely hiring him again!",
        author: "",
        context: "HomeAdvisor review",
      },
    ] satisfies Review[],
  },

  /* --- Hours --- (verified: Mon to Sat 8 to 6, Sun closed) */
  hours: {
    monday: { open: "08:00", close: "18:00", closed: false },
    tuesday: { open: "08:00", close: "18:00", closed: false },
    wednesday: { open: "08:00", close: "18:00", closed: false },
    thursday: { open: "08:00", close: "18:00", closed: false },
    friday: { open: "08:00", close: "18:00", closed: false },
    saturday: { open: "08:00", close: "18:00", closed: false },
    sunday: { open: null, close: null, closed: true },
  } as Record<string, DayHours>,

  /* --- Photo manifest (non-gallery roles) --- */
  images: {
    hero: {
      src: "/images/hero.jpg",
      alt: "Brick ranch home in the Blue Water Area with a curved paver walkway, stone fountain, and shaped evergreen beds installed by J. Molina Landscaping",
      placeholderLabel: "Hero, strongest finished hardscape / landscape",
    },
    crew: {
      src: "/images/crew-at-work.jpg",
      alt: "J. Molina Landscaping crew member working on a residential property beside the work truck",
      placeholderLabel: "About, the crew at work",
    },
  } satisfies Record<string, SiteImage>,

  /* --- CRM wiring (do not improvise, see ContactForm.tsx) --- */
  crm: {
    url:
      process.env.NEXT_PUBLIC_CRM_URL ||
      "https://www.alignandacquire.com/api/contact",
    businessSlug: process.env.NEXT_PUBLIC_BUSINESS_SLUG || "REPLACE_ME_FRIDAY",
  },

  /* --- Contact / quote copy --- */
  contact: {
    eyebrow: "Free quote",
    heading: "Get your free quote.",
    sub: "Tell us about your property and what you're picturing, a patio, wall, full landscape, or just keeping it sharp. Joe will take a look and put together an honest, no-pressure quote.",
    callOrTextLabel: "Call or text",
    infoLines: [
      "We'll reach out to schedule a time to see the property and price it out.",
      "Hardscape projects book out in advance, the sooner you reach out, the sooner you're on the calendar.",
    ],
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      phoneLabel: "Phone",
      phonePlaceholder: "(810) 000-0000",
      emailLabel: "Email",
      emailOptionalLabel: "(optional)",
      emailPlaceholder: "you@email.com",
      addressLabel: "Property address",
      addressPlaceholder: "Street, city",
      messageLabel: "What can we help with?",
      messagePlaceholder:
        "Tell us what you're looking for: a paver patio, retaining wall, full landscape, weekly maintenance, or something else.",
      submitLabel: "Request my free quote",
      submittingLabel: "Sending…",
    },
    consentLabel:
      "I agree to receive text messages from J. Molina Landscaping about my request. Message and data rates may apply. Reply STOP to opt out.",
    successHeading: "Thanks, we've got it.",
    successBody:
      "Joe will reach out shortly about your free quote. Need it sooner? Call or text us directly.",
    errorLead: "Something went wrong sending that. Please call or text us at",
  },

  /* --- Closing CTA band (bottom of most pages) --- */
  ctaBand: {
    heading: "Ready to build something that lasts?",
    sub: "Tell us about your property and we'll put together a free, no-pressure quote.",
  },

  /* --- Top-level nav (real routes). Services renders as a dropdown built from
   * `services` in the Header. --- */
  nav: [
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  /* --- Footer --- */
  footer: {
    credit: "Site by Align and Acquire",
    exploreLabel: "Explore",
    hoursLabel: "Hours",
    rightsText: "All rights reserved.",
    blurb:
      "Family-owned hardscaping and landscaping, built on craftsmanship and a name we stand behind.",
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ] satisfies NavItem[],
  },

  /* --- SEO --- *
   * `url` is the production origin (metadataBase). Per-page metadata in `pages`. */
  seo: {
    url: "https://jmolinalandscaping.com", // TODO: confirm final domain
    siteName: "J. Molina Landscaping",
    pages: {
      home: {
        path: "/",
        title:
          "J. Molina Landscaping, Hardscaping & Landscaping in the Blue Water Area",
        description:
          "Family-owned hardscaping and landscaping in Port Huron, Marysville, Fort Gratiot, St. Clair and the Blue Water Area. Paver patios, retaining walls, stonework, lawn care, and cleanups, 10+ years of craftsmanship. Free quotes.",
      },
      services: {
        path: "/services",
        title: "Services, Hardscaping, Lawn Care & Landscaping | J. Molina Landscaping",
        description:
          "Hardscaping and stonework, lawn maintenance, seasonal cleanups, mulch & stone install, and full landscaping across the Blue Water Area. Free quotes from a family-owned crew.",
      },
      gallery: {
        path: "/gallery",
        title: "Project Gallery, Finished Hardscaping & Landscaping | J. Molina Landscaping",
        description:
          "See recent paver walkways, stonework, decks, and maintained properties built by J. Molina Landscaping across the Blue Water Area, Michigan.",
      },
      about: {
        path: "/about",
        title: "About, Family-Owned for 10+ Years | J. Molina Landscaping",
        description:
          "J. Molina Landscaping is a family-owned, owner-run hardscaping and landscaping company serving the Blue Water Area for over a decade. Meet the crew behind the work.",
      },
      contact: {
        path: "/contact",
        title: "Get a Free Quote | J. Molina Landscaping",
        description:
          "Request a free, no-pressure quote from J. Molina Landscaping. Hardscaping, lawn care, and landscaping in Port Huron and the Blue Water Area, Michigan.",
      },
      privacy: {
        path: "/privacy-policy",
        title: "Privacy Policy | J. Molina Landscaping",
        description:
          "How J. Molina Landscaping handles the information you share through this website.",
      },
      terms: {
        path: "/terms",
        title: "Terms of Service | J. Molina Landscaping",
        description: "The terms for using the J. Molina Landscaping website.",
      },
    },
  },
} as const;

export type Site = typeof site;
