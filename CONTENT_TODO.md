# Content still to confirm

Everything on the site and the CV is based on your CV, your confirmations,
your AIO commit history and the existing screenshots. Anything I couldn't verify
is a `todo('…')` placeholder. Placeholders show as dashed **TODO** markers in `npm run dev`
and are stripped entirely from production builds and the PDF.

Search the code for `todo(` to find each one.

## Placeholders (`src/content/projects.ts`)

| Where | What's needed |
| --- | --- |
| TradeRate · `period` | Start and end dates |
| TradeRate · `links.live` | Public URL, if there is one |
| TradeRate · `results` | A verifiable outcome: launch date, status, or scope you owned. Don't use the landing-page stats (92% / 50K+ / $2M+). |
| K-Hive paper-trading · `results` | Is this the same product as TradeRate or a separate one? Any shareable outcome? |
| AIO · `links.live` | An optional public example of a restaurant site built with AIO |
| AIO · `results` | A result you're allowed to share publicly |
| Yoto.ai · `links.live` | Public URL |
| EnduraGrowth, FuncSuite, Pharmacy system, Hipnode | `role`, `period`, and `context` (client work, own product, or employer?) |

## Please double-check

- **AIO start date.** Your CV says Apr 2026, but your first AIO commits are from 29 Dec 2025. If you started earlier (e.g. part-time or in a different role), update `src/content/experience.ts`.
- **TradeRate timing.** I placed it under your Senior MERN role (Sep 2025 – Apr 2026). Move it if that's wrong.
- **QLU.ai metrics** (30% performance, 20% search accuracy, 30,000 profiles). These come from your CV. Keep them only if you can explain how they were measured.
- **Skills added from your AIO work:** NestJS, Nx, GitHub Actions, Route 53, GA4 and Search Console, plus SonarQube in the AIO bullets. Remove any you wouldn’t want to be interviewed on.
- **University name.** Your CV had "National University of Computing and Emerging Science". I used the official name, "National University of Computer and Emerging Sciences (FAST-NUCES)".
- **Yoto.ai project dates.** Your CV said "May 2023 – Present". I aligned them with your QLU.ai employment (May 2024 – Jun 2025).
- **Brillian Pro** was left off the new CV because its dates overlap your Interns Pakistan role. Add it back to `resumeProjects` in `src/content/resume.ts` if you want it.
- **TimberCraft and Carvilla** aren't shown. Their only images were promo graphics with numbers you can't back up. The screenshots are still in `public/images`.
- **Phone number** appears on the CV only, not on the website.

## Testimonials

`testimonials` in `src/content/services.ts` is empty, so the section is hidden.
Add real quotes (for example from LinkedIn recommendations or Upwork reviews)
and the section appears automatically.
