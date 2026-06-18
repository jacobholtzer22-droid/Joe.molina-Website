# Photos — J. Molina Landscaping

Every image on the site is mapped to a **role** in `site.config.ts`. The non-gallery
roles live under `images`; the project-gallery photos live under `work.projects`.
Each has real, specific `alt` text. To swap a photo, drop the file in `/public/images`
and point its `src` at it — **no component edits, ever.**

Raw originals from Joe live in `/Joe Website Photos/` (HEIC, git-ignored). The web
versions below were converted to optimized, correctly-oriented JPEGs.

## Roles currently filled

| Role | File | Source (HEIC) | What it shows |
|---|---|---|---|
| `images.hero` | `hero.jpg` | IMG_3001 | Brick home, curved paver walkway, fountain, shaped beds — the thesis shot |
| `images.crew` | `crew-at-work.jpg` | IMG_2400 | Crew member working a property by the truck (About) |
| Services feature | `service-hardscape.jpg` | IMG_3009 | Close-up of the curved paver walkway + beds (Hardscaping) |
| `work.projects[0]` | `work-side-walkway.jpg` | IMG_3105 | Side-yard stone walkway between brick wall + fence |
| `work.projects[1]` | `work-deck-railing.jpg` | IMG_0122 | Composite deck & black railing |
| `work.projects[2]` | `work-fence-border.jpg` | IMG_3104 | Privacy fence & gravel border |
| `work.projects[3]` | `work-striped-lawn.jpg` | IMG_2251 | Freshly cut, striped lawn |
| `work.projects[4]` | `work-lawn-beds.jpg` | IMG_2386 | Clean edges & trimmed beds |
| `work.projects[5]` | `work-fall-cleanup.jpg` | IMG_2515 | Fall yard cleanup |

## The before/after slider (signature, currently OFF)

`components/BeforeAfterSlider.tsx` is built and wired in `app/page.tsx`, but
`site.beforeAfter.enabled` is `false` — Joe's current photos are single finished
shots, not matched before/after pairs, and we never fake a transformation.

**To turn it on** when Joe sends a real pair (same angle, before + after):
1. Drop both files in `/public/images` (e.g. `ba1-before.jpg`, `ba1-after.jpg`).
2. In `site.config.ts → beforeAfter`, add a pair to `pairs` with both `src`/`alt`,
   and set `enabled: true`.

## How to swap any photo in

1. Save the photo into `/public/images/` (e.g. `hero.jpg`).
2. Open `site.config.ts`, find the role, set `src: "/images/hero.jpg"`.
3. Confirm the `alt` text still describes the actual photo.

## Converting more of Joe's HEICs

The originals are HEIC (browsers can't render HEIC) and rotated by EXIF. Convert with
orientation baked in, long edge ~1600px, e.g.:

```bash
sips -s format jpeg -Z 1600 "Joe Website Photos/IMG_XXXX.HEIC" --out /tmp/x.jpg
# then bake EXIF rotation + compress (Pillow): ImageOps.exif_transpose, quality 82
```

## Tips

- Hero + service feature read best as **portrait** (Joe shoots vertical) — the layout
  is built for it. Gallery tiles are portrait 4:5.
- Keep files reasonably sized (long edge ~1600px, JPG). `next/image` handles the rest.
- Excluded from the build: the 6 snow/plow shots (off-brand — craftsmanship, not snow)
  and the bare commercial-lot / generic-tree frames.
