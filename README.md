# Aravind Palakkal — Portfolio

## About 
I build robots that move with purpose.

My path into robotics started in my second year of B.Tech, when I designed 
and built Valyrion — a wedge-based combat robot. That project taught me more 
about mechanical design and real-world constraints than any classroom did.

After graduating, I saw factory automation up close at NBC Bearings in Jaipur, 
then spent time as an operations engineer at a logistics firm — which gave me 
a different kind of education: how goods actually move through warehouses, 
where the bottlenecks are, and where robots could make a real difference.

That experience is what led me to pursue an M.Sc. in Elektromobilität-ACES 
at FAU Erlangen-Nürnberg, and to build projects like my warehouse AMR — 
a ROS2 robot that autonomously navigates a simulated logistics environment 
using SLAM and Nav2.

I'm now looking for robotics internships and research opportunities in 
autonomous systems, factory automation, and humanoid robotics — areas where 
I can contribute both as an engineer and as someone who has seen these 
problems from the operations side.

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
