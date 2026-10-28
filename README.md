# Studio Kestrel — Starter Pack

The starting point for the Studio Kestrel coding tutorial. It's a fully laid-out, fully styled Next.js site with **no motion yet**: the pages, copy, images, fonts and Tailwind theme are all in place, and the animation work is what you'll build during the tutorial.

## Requirements

- Node.js 18.18 or newer (Node 20+ recommended)
- npm

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build       # production build
npm run lint        # eslint
npx tsc --noEmit    # typecheck
```

## Editor tips (VS Code)

The `.vscode/` folder silences the false "Unknown at rule @tailwind" warning and recommends the Tailwind IntelliSense and ESLint extensions. If you still see a stale red line, run **TypeScript: Restart TS Server** from the command palette.

## What's already here

- Next.js App Router, TypeScript (strict), Tailwind CSS
- Tailwind theme (colors, fonts) in `tailwind.config.ts`
- Self-hosted fonts via `@fontsource` (imported in `src/app/layout.tsx`)
- All five routes: `/`, `/about`, `/work`, `/project`, `/contact`
- All copy, data and local placeholder images
- Shared components with their final props and Tailwind typography
- A working menu open/close (plain React state + CSS transition)

## What you'll build in the tutorial

- Line-by-line text reveals (`AnimatedH1`, `AnimatedCopy`) with SplitType + GSAP
- Scroll-triggered reveals with ScrollTrigger
- Lenis smooth scrolling and the parallax image effect (`ParallaxImage`)
- The menu open/close timeline in `Nav`
- The page-transition wipe with `next-view-transitions`
- The home page preloader
- The pinned "What we do best" header on `/about`
- The footer wordmark character reveal

## Structure

```text
src/app/
├── layout.tsx            fonts, metadata, Nav
├── globals.css           Tailwind directives + base rules
├── page.tsx              home
├── about/page.tsx
├── work/page.tsx
├── project/page.tsx
├── contact/page.tsx
└── components/
    ├── Nav/
    ├── Footer/
    ├── AnimatedH1/       static for now
    ├── AnimatedCopy/     static for now
    └── ParallaxImage/    static for now
public/                   local images (placeholders)
```

## Dependencies already installed for the tutorial

`gsap`, `@gsap/react`, `lenis`, `@studio-freight/react-lenis`, `split-type`, `next-view-transitions`

## Credit

Built by Script Valley.
