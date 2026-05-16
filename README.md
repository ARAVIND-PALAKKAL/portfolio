# Aravind Palakkal — Portfolio

Dark, editorial portfolio with particle background and blur-on-scroll sections.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Pure CSS (no Tailwind)
- Canvas API for particle animation
- Intersection Observer for scroll effects

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at vercel.com — it auto-detects Next.js.

## Customise

| What | Where |
|------|-------|
| Your links (GitHub, LinkedIn, email) | `components/ContactSection.tsx` + `components/SideNav.tsx` |
| Project details | `components/ProjectsSection.tsx` |
| Skills | `components/SkillsSection.tsx` |
| Colors | `app/globals.css` — edit the `:root` variables |
| Particle density/color | `components/ParticleCanvas.tsx` — edit `COUNT` and `rgba` values |
| Blur intensity on scroll | `app/page.tsx` — edit the `blur(12px)` and threshold values |

## Adding your resume PDF

Drop `resume.pdf` into the `/public` folder. The side nav resume link already points to `/resume.pdf`.

## Color variables

```css
--red: #cc2a2a        /* primary accent */
--silver: #c8c8c8     /* secondary accent */
--black: #080808      /* background */
```
