# Ayush Yadav — Portfolio

A complete editorial portfolio for a software engineer working across AI and full-stack development. Warm ivory, charcoal, sage, and burnt orange pair with oversized typography, a mathematical orbital illustration, and custom project interface studies.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Node.js 20.9+ is required by Next.js.

```bash
npm run build       # Production build
npm start           # Serve the production build
npm run lint        # ESLint
npm run typecheck   # TypeScript
```

## Content and design

- `app/page.tsx`: page composition and introductory, experience, about, and contact copy.
- `app/globals.css`: responsive design, typography, previews, and animation.
- `data/site.ts`: identity, contact details, social links, resume path, and canonical domain.
- `data/portfolio.ts`: selected project descriptions, actual source/demo URLs, expandable engineering stories, and toolkit categories.
- `data/experience.ts` and `data/achievements.ts`: resume-aligned experience and coding records.
- `components/portfolio/`: orbital artwork, project previews, email-copy interaction, and brand icons.
- `components/navigation/Navbar.tsx`: active-section navigation and responsive mobile menu.
- `app/layout.tsx`, `app/icon.tsx`, and `lib/og.tsx`: fonts, metadata, structured data, favicon, and social previews.

The displayed projects are CodeSense, Sentinel, and the Real-Time Chat Application. Content and links are based on the supplied `ayushv24 (1).pdf`; the same PDF is available at `public/Ayush-Yadav-Resume.pdf`. Coding achievements reflect the resume rather than live platform data. Other project components and data from the earlier portfolio remain in the workspace for reuse but are not mounted on the redesigned page.

The project previews are custom illustrations, not screenshots or live AI services. CodeSense offers switchable sample review/evaluation views; each project has a native expandable “Behind the build” section. The hero uses a generated SVG wireframe with a pause control. Contact provides email, clipboard copy with success/error feedback, social links, and resume downloads.

## Accessibility

Semantic sections and headings, a skip link, visible keyboard focus, keyboard-accessible controls and disclosures, Escape-to-close mobile navigation, active navigation states, reduced-motion support, and static server-rendered content. Contact does not depend on a backend or an unconfigured form.

## Deployment

The portfolio uses Next.js 16.3 with the App Router, React 19, TypeScript, Tailwind CSS 4, and Lucide icons. Fonts are optimized and self-hosted with `next/font`.

Set `site.url` in `data/site.ts` to the actual deployment domain before publishing. The existing `https://ayushyadav.dev` value is used for the canonical URL, sitemap, and social metadata; domain ownership has not been verified. Project links come directly from the resume and can be edited independently in `data/portfolio.ts`.
