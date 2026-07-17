# Basil Rari — Research Portfolio

Graduate researcher in AI & robotics. Monochrome single-page portfolio focused on drones, LLMs, and world models.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS 4**
- **Three.js / React Three Fiber / Drei** — interactive 3D wireframe drone hero
- **Framer Motion** — scroll reveals and micro-interactions

## Features

- **3D wireframe drone** — procedurally built with R3F; responds to pointer movement, falls back to an SVG wireframe when WebGL is unavailable or the user prefers reduced motion.
- **Dark / light theme** — respects system preference, persists choice to `localStorage`.
- **Project filters** — filter by expertise area (Drones, LLM, World Models) via URL search params.
- **Expertise cards** — three research pillars with direct anchor links to filtered project views.
- **Scroll reveal animations** — sections fade in on intersection.
- **Contact & openTo** — availability status and email at the bottom of the page.
- **Download Resume CTA** — links to `/resume.pdf`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Resume PDF

The "Download Resume" button links to `public/resume.pdf`. Place your resume file there:

```
public/resume.pdf
```

Without this file the CTA will 404.

## Project Structure

```
src/
├── app/              # Next.js App Router (layout + page)
├── components/
│   ├── home/         # HeroSection, ExpertiseCards, ProjectsSection, AboutSection, BottomSection
│   ├── Layout/       # AppLayout, Sidebar
│   └── visuals/      # DroneScene (R3F), WireframeVisuals (SVG fallback)
├── contexts/         # ThemeContext (dark/light toggle)
└── data/             # site.ts — all content lives here
```

## Deployment

Static export compatible. Deploy to Vercel, Netlify, or any static host:

```bash
npm run build
```

## License

Private.
