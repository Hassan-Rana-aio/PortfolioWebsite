import { projects } from './projects';
import { skillGroups } from './skills';

/**
 * CV-specific content. Experience, education and contact details come from
 * the same files the website uses, so the two can't drift apart.
 */
export const resumeSummary =
  'Product Engineer and Full-Stack Engineer with 3+ years of experience building production web applications and SaaS products. Currently a Senior Full Stack Engineer at AIO, working on a restaurant website builder: editor features, publishing, custom domains, SEO and analytics. Previously built TradeRate, a social trading-signals platform, from scratch at K-Hive, and worked on AI-powered recruiting search at QLU.ai. Also designed and built two products end to end: Menu Board, a digital menu board SaaS, and PharmaFlow, a pharmacy ERP and POS, both using the Claude API. Works across React, Next.js and TypeScript on the frontend and Node.js, NestJS, PostgreSQL and MongoDB on the backend, and takes products from requirements to production, both with engineering teams and directly with founders.';

const skillsFrom = (id: string) =>
  skillGroups.find((g) => g.id === id)?.skills.map((s) => s.name) ?? [];

export const resumeSkills: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS', 'C/C++'],
  },
  {
    label: 'Frontend',
    items: skillsFrom('frontend').filter(
      (s) => !['JavaScript', 'HTML & CSS'].includes(s)
    ),
  },
  { label: 'Backend', items: skillsFrom('backend') },
  { label: 'Databases', items: skillsFrom('data') },
  { label: 'Payments & Integrations', items: skillsFrom('integrations') },
  {
    label: 'Cloud & DevOps',
    items: [...skillsFrom('devops').filter((s) => s !== 'Vercel'), 'Caching'],
  },
  { label: 'AI', items: skillsFrom('ai') },
];

/**
 * Projects shown on the CV, in order. Work projects (AIO, TradeRate, Yoto.ai)
 * are already covered under Experience, so only own products are listed.
 */
export const resumeProjects = ['menu-board', 'pharmaflow']
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));
