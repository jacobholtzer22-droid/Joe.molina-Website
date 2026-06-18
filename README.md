# J. Molina Landscaping — marketing site

A high-conversion, single-page marketing site for an established, family-owned
**hardscaping & landscaping** company in the Blue Water Area (Port Huron, MI).
Built **config-driven**: every business-specific string, service, photo, and brand
value lives in one place. Swap that, swap the images, swap the brand tokens, and you
get a completely different-looking site with **zero component edits**.

Design: **"Stone & Cedar"** — deep evergreen structure on a honed-limestone base, with
a single warm cedar accent. Premium and grounded — the opposite of a bright, seasonal
turf-green look. Type: **Fraunces** (display, set heavy + tight for a crafted, heritage
feel) × **Libre Franklin** (body). Signature element: a **finished-project gallery**
("The Work") that lets the hardscaping do the selling, plus a config-gated before/after
reveal slider ready for when real pairs arrive.

## Stack

- Next.js 14 (App Router) · TypeScript · Tailwind CSS · lucide-react
- No database. Leads POST straight to the Align & Acquire CRM (see below).
- Deploy target: Vercel.

## The one file that matters

`site.config.ts` is the single source of truth. It holds:

- `business` — name, owner, phone (click-to-call), region
- `hero`, `trust`, `servicesIntro`, `services`, `work`, `beforeAfter`, `whyUs`,
  `serviceArea`, `reviews`, `hours`
- `images` — the non-gallery photo manifest (role → src/alt/placeholder). See `PHOTOS.md`.
- `crm` — where leads go (from env)
- `contact` — all contact + form copy, incl. TCPA consent text
- `nav`, `seo`, `footer`

Brand colors live in `tailwind.config.ts` (semantic tokens), fonts in `app/layout.tsx`.

## CRM wiring (do not improvise)

The contact form POSTs **directly** (client-side `fetch`) to the CRM endpoint with a
body of **exactly**:

```json
{ "name": "", "phone": "", "email": "", "message": "", "smsConsent": false, "businessSlug": "" }
```

Configured via two public env vars (see `.env.local.example`):

```
NEXT_PUBLIC_CRM_URL=https://www.alignandacquire.com/api/contact
NEXT_PUBLIC_BUSINESS_SLUG=REPLACE_ME_FRIDAY   # ← paste the real Neon Business.slug
```

`smsConsent` is a real, default-unchecked checkbox with TCPA-compliant language.
On success the form is replaced with a confirmation; on failure the user keeps their
typed input and is told to call the number. There is **no external quote link** — all
leads go through this form.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Open TODOs before launch

- [ ] `NEXT_PUBLIC_BUSINESS_SLUG` — paste the real Neon `Business.slug` (Friday).
- [ ] Confirm Joe's real business phone (placeholder `(810) 294-9417` for now).
- [ ] Confirm business hours (typical landscaping hours seeded).
- [ ] Add 2 real Google reviews + set `reviews.rating` / `trust.rating` (left `null` — no invented numbers).
- [ ] Confirm final domain in `seo.url`.
- [ ] (Optional) Turn on the before/after slider once Joe sends matched pairs — see `PHOTOS.md`.

## Cloning to another business

1. Replace the values in `site.config.ts`.
2. Replace `/public/images` + update the `images` / `work` manifests.
3. Swap the palette in `tailwind.config.ts` and the fonts in `app/layout.tsx`.

No component edits. That's the whole point.

---

Site by Align and Acquire.
