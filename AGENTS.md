# VisitBurundi project rules

- **Project:** VisitBurundi is a national tourism platform for Burundi. Phase 1 is a polished, shareable stakeholder preview with mock data, built to be extended.
- **Stack:** Next.js App Router, TypeScript, Tailwind CSS, lucide-react, next/font, and next/image. No backend or database in Phase 1; keep typed mock data in `/data`. Deploy on Vercel.
- **Design:** Design is the top priority: a premium, editorial, modern tourism feel, not a generic template. Use Burundi's landscapes and flag as the palette: deep green, warm red accents, lake blue, and earthy neutrals, defined as Tailwind tokens. Favor large imagery, generous whitespace, strong type hierarchy, and a mobile-first layout. Subtle motion must respect `prefers-reduced-motion`.
- **Quality:** Use semantic HTML, keyboard-accessible interactions, WCAG AA contrast, and alt text on all images. Prefer server components by default and typed reusable components. Do not use `any`. `npm run build` and `npm run lint` must pass before finishing any task.
- **Workflow:** Make small logical commits. Do not add features beyond the task. Note assumptions in the README, flag content needing fact-checking, and keep UI strings easy to extract for French and Kirundi later.
