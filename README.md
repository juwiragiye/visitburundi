# VisitBurundi — Phase 1 preview

A stakeholder preview of a national tourism discovery and trip-planning platform. Editorial content, illustrative artwork, and local-only interactions; no backend, database, authentication, or booking. The vision is draft copy, not a government endorsement.

## Setup

Node.js 22 LTS or newer, npm. Run `npm ci`, then `npm run dev` and open http://localhost:3000. Run `npm run lint`, `npm run build`, and `npm run format:check` before delivery. `npm start` serves the production build. Fonts are downloaded by next/font at build time; network access is required. No secrets or environment variables are needed. `.env.example` documents this.

## Structure

- `app/`: App Router pages, route metadata, sitemap, robots, loading and error states.
- `components/ui/`: typed accessible UI primitives.
- `components/`: layout, discovery, forms, and itinerary interactions.
- `data/`: typed destinations, experiences, sample itineraries and practical guidance.
- `lib/images.ts`: centralized image paths; replace assets in `public/images/`.
- `lib/`: local persistence and preview URL helpers.
- `public/`: original SVG illustration placeholders and brand assets.

## Deploy to Vercel

1. Import the GitHub repository into Vercel.
2. Next.js is auto-detected. Leave the root directory at the repository root and keep default npm/build settings.
3. Deploy. No manual environment configuration is required. Vercel preview URLs are used for metadata when available. Local metadata falls back to localhost.

Preview indexing is disabled with robots metadata and `robots.ts`. At launch remove both noindex rules, allow crawling, and set the canonical public origin in `lib/site.ts`. Until then, the SEO Lighthouse score may reflect the intentional noindex policy.

## Placeholder content to replace

- [ ] All landscape illustrations: original SVG artwork, not destination photography or a depiction of exact terrain. No third-party image license or attribution is required. Replace through `lib/images.ts` with licensed, location-verified photography and record photographer/license here.
- [ ] Illustrative map and approximate pin locations (not to scale, not navigation).
- [ ] Draft About/vision copy and roadmap: obtain stakeholder approval.
- [ ] Sample itineraries: editorial examples, not bookable offers or confirmed routes.
- [ ] Contact and newsletter forms validate locally and never send or retain submissions. Connect the submit handlers in `components/forms.tsx` to a server action/email service in Phase 2.
- [ ] Social channels: disabled, labeled placeholder controls until real profiles are approved.
- [ ] Privacy, Terms, Cookie copy: placeholders requiring legal review.
- [ ] French and Kirundi: display-only language choices; English copy is grouped for later extraction.

## Facts to verify

- [ ] Access, permits, opening arrangements, guiding requirements, and seasonal suitability for every destination.
- [ ] All travel advisories and regional restrictions before using a sample itinerary, especially parks and border areas.
- [ ] Entry rules for each travel document, health requirements, transport options, connectivity, and payment availability with official providers.
- [ ] Cultural interpretation, spelling, museum access, and performance permissions with local custodians.
- [ ] Administrative names after boundary changes: preview uses broad geographic regions, not formal provinces.
- [ ] Quick facts and all source links again before public launch. No numeric visitor claims, prices, phone numbers, testimonials, endorsements, or partner logos are included.

## Sources and editorial assumptions

Sources checked during implementation (9 November 2026):
- [East African Community — Burundi](https://www.eac.int/eac-partner-states/burundi): currency, languages, capital. Languages are described as spoken, not all as official.
- [EAC Burundi brief](https://www.eac.int/documents?Itemid=297&controller=download&file=7398b68f-1315-40bc-8ff2-b457acdffc75&name=Burundi.pdf.pdf&task=download.file): political and economic capitals.
- [Burundi tourism — parks](https://tourisme.gov.bi/en/parks-and-reserves/): park landscapes.
- [Burundi embassy — tourist sites](https://ambabukigali.mae.gov.bi/sites-touristiques/): lake, forest and heritage context.
- [UNESCO Burundi tentative list](https://whc.unesco.org/en/statesparties/bi): Gishora, Karera, Nyakazu, Rutovu, parks and northern lakes. Tentative listing is not World Heritage inscription; no UNESCO status badges are displayed.
- [Burundi foreign affairs — geography](https://www.mae.gov.bi/geographie/): Lake Rwihinda and geographic context.
- [Government of Canada travel advice](https://travel.gc.ca/destinations/burundi): current advisories must be checked before travel. The preview is inspiration, not a safety assurance.

Season filters are broad planning suggestions, not live conditions or guarantees. Trip dates are an optional planning cue, not an availability search. Day assignments are editable, and no driving times or route feasibility are implied. No real photography was supplied; all imagery is visibly marked illustrative. Cookie choice is a local demo preference: no tracking or analytics runs. Trip data is stored only in this browser, with graceful storage failure handling.

## Phase 2 suggestions

- CMS with reviewed, attributed destination content and multilingual editorial workflow.
- Verified partner listings and booking integration.
- Database-backed itineraries and optional accounts with privacy controls.
- Real map/geocoding and route feasibility checks.
- French and Kirundi translations reviewed by native speakers.
- Real contact/newsletter delivery with consent, abuse prevention and retention policy.

## Validation

Build, lint, formatting and browser QA results will be recorded after the quality pass. Lighthouse 90+ is a target, not a claimed measurement.
