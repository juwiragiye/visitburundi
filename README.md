# VisitBurundi

A national tourism platform for Burundi. Phase 1 is a polished, shareable stakeholder preview built with typed mock data. This setup contains only the coming-soon page.

## Local setup

Use Node.js 22 LTS or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Before finishing any task, run:

```sh
npm run lint
npm run build
```

Use `npm start` to serve the production build. The initial build needs internet access to download the Geist font through `next/font`.

## Structure

- `app/` — App Router pages, root layout, metadata, and global styles.
- `app/globals.css` — Tailwind palette tokens: forest, warm-red, lake, earth, sand, and ivory.
- `data/` — Future typed mock data; no backend or database in Phase 1.
- `public/` — Future static assets; use `next/image` when adding imagery.
- `AGENTS.md` — Design, accessibility, quality, and workflow rules.

Stack: Next.js, TypeScript, Tailwind CSS, ESLint, lucide-react, and `next/font`. Keep reusable components typed and server-rendered by default.

## Vercel deployment

Import this GitHub repository into Vercel, choose the Next.js framework preset, and leave the root directory at the repository root. Use `npm run build` and the default output settings. No environment variables are required for this phase. Vercel can generate preview deployments for pull requests once connected; merging to the configured production branch deploys production.

## Assumptions and content

- Task 0 is setup only: no tourism features, imagery, backend, or database.
- English is the initial language. Keep UI copy grouped for later extraction into French and Kirundi translations; no localization framework is installed yet.
- The palette is a design interpretation of Burundi's landscapes and flag, not an official brand standard.
- This scaffold makes no destination claims. Future mock content must be identified, and historical, travel, pricing, and destination claims flagged for fact-checking before publication.
