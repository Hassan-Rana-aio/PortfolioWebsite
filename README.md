# Muhammad Hassan Rana — Portfolio

Personal site and CV: https://muhammadhassanrana.vercel.app

Next.js 15 (App Router), React 19, TypeScript, SCSS modules, Motion, and React Three Fiber for the hero scene.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build && npm start
```

The contact form sends mail through Gmail. Set these in `.env.local` (and in Vercel):

```
EMAIL_USER=you@gmail.com
EMAIL_PASS=<gmail app password>
```

## Editing content

All copy lives in `src/content/`. The website **and** the CV both render from it:

| File | Contents |
| --- | --- |
| `profile.ts` | Name, positioning, links, about copy, education |
| `experience.ts` | Roles and bullets (the website timeline and the CV) |
| `projects.ts` | Case studies (`caseStudy`) and the "More work" grid |
| `skills.ts` | Skills, each with where it was used |
| `services.ts` | Hire section, engagement steps, testimonials |
| `resume.ts` | CV summary, skill lines and project selection |

Unconfirmed facts use `todo('…')` from `src/lib/todo.ts`. They show as dashed
markers in dev and are removed from production builds. See `CONTENT_TODO.md`.

## Regenerating the CV PDF

The PDF in `public/` is printed from `/resume` with headless Chrome:

```bash
npm run build && npm run cv
```

Commit the updated `public/Muhammad-Hassan-Rana-CV.pdf`. Stop `npm run dev` first,
because the build and the dev server share the `.next` folder. Set `CHROME_PATH`
if Chrome isn't installed as `google-chrome`.

## Structure

```
src/
  app/
    (site)/          home page and /work/[slug] case studies (share nav + footer)
    resume/          print-ready CV page
    api/contact/     contact form endpoint (validation, honeypot, rate limit)
    sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg
  components/
    hero/            hero, WebGL scene, SVG fallback
    sections/        home page sections
    mockups/         code-drawn illustrations used instead of private screenshots
    resume/          ATS-friendly CV document
    ui/              buttons, tags, reveal animation, placeholder text
  content/           all copy (see above)
  lib/               placeholders, SEO data, hero graph geometry
  styles/            tokens, global styles, Sass mixins
```

## Performance notes

- The 3D hero is loaded with a dynamic import after the browser is idle, and only on
  desktops (≥1024px) with WebGL. It's skipped for reduced-motion users, Save-Data
  connections and low-memory devices. It pauses when scrolled off screen.
  Everyone else gets a static SVG of the same graph.
- Screenshots go through `next/image` (AVIF/WebP, responsive sizes, blur placeholders).
- Page content is server-rendered. Only the nav, skills tabs, gallery dialog,
  contact form and hero scene ship client-side JavaScript.
