# Portfolio (Next.js + Tailwind CSS + TypeScript)

This is the migrated version of your static portfolio, rebuilt with Next.js (App Router), Tailwind CSS, and TypeScript.

## Tech
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS (v4 syntax via `@import "tailwindcss"`)
- AOS (scroll animations)
- particles.js (background particles)

## Structure
- `app/` pages: `/`, `/works`, `/resume`, `/journey`, `/contact`
- `components/`: `Navbar`, `Footer`, `ClientInit`
- `public/images`: all images from the original project
- Global theme and helpers live in `app/globals.css`

## Notes
- Font Awesome is loaded via CDN in `app/layout.tsx`.
- The contact form posts to Formspree (same endpoint).
- To enable the resume download button, place your PDF at `public/mahenul-resume.pdf`.

## Run locally
```bash
npm run dev
```
Then open http://localhost:3000

## Build and start
```bash
npm run build
npm run start
```
