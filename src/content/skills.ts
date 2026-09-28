import type { SkillGroup } from './types';

/**
 * Every skill lists where it was used, so the section doubles as evidence.
 * Only add a skill here if you can point to real work that used it.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    blurb: 'Interfaces that stay fast and readable as the product grows.',
    skills: [
      { name: 'React', usedAt: ['AIO', 'K-Hive', 'QLU.ai'] },
      { name: 'Next.js', usedAt: ['AIO', 'QLU.ai', 'PreMed.pk'] },
      { name: 'TypeScript', usedAt: ['AIO', 'K-Hive', 'QLU.ai'] },
      { name: 'JavaScript', usedAt: ['Every role since 2023'] },
      { name: 'HTML & CSS', usedAt: ['Interns Pakistan', 'Every role since'] },
      { name: 'SCSS', usedAt: ['Yoto.ai', 'Hipnode', 'This site'] },
      { name: 'Tailwind CSS', usedAt: ['PreMed.pk'] },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    blurb: 'APIs and business logic that the frontend can rely on.',
    skills: [
      { name: 'Node.js', usedAt: ['AIO', 'K-Hive', 'QLU.ai', 'PreMed.pk'] },
      { name: 'Express.js', usedAt: ['K-Hive', 'QLU.ai', 'PreMed.pk'] },
      { name: 'NestJS', usedAt: ['AIO'] },
      { name: 'REST APIs', usedAt: ['AIO', 'K-Hive', 'QLU.ai'] },
      { name: 'WebSockets', usedAt: ['K-Hive'] },
      { name: 'Microservices', usedAt: ['K-Hive'] },
    ],
  },
  {
    id: 'data',
    label: 'Databases',
    blurb:
      'Relational and document data, modelled around how the product uses it.',
    skills: [
      { name: 'PostgreSQL', usedAt: ['AIO', 'QLU.ai'] },
      { name: 'MongoDB', usedAt: ['K-Hive'] },
      { name: 'SQLite', usedAt: ['Pharmacy system'] },
    ],
  },
  {
    id: 'integrations',
    label: 'Payments & Integrations',
    blurb: 'Third-party services wired in properly, webhooks included.',
    skills: [
      { name: 'Stripe', usedAt: ['QLU.ai'] },
      { name: 'Binance APIs', usedAt: ['K-Hive'] },
      { name: 'Google Search Console', usedAt: ['AIO'] },
      { name: 'Google Analytics 4', usedAt: ['AIO'] },
      { name: 'Chrome Extensions', usedAt: ['QLU.ai'] },
      { name: 'Office.js', usedAt: ['FuncSuite'] },
    ],
  },
  {
    id: 'devops',
    label: 'Cloud & DevOps',
    blurb: 'Getting code from a branch to production, repeatably.',
    skills: [
      { name: 'Git & GitHub', usedAt: ['Every role'] },
      { name: 'Docker', usedAt: ['AIO'] },
      { name: 'AWS Route 53', usedAt: ['AIO'] },
      { name: 'CI/CD (GitHub Actions)', usedAt: ['AIO'] },
      { name: 'Nx monorepos', usedAt: ['AIO'] },
      { name: 'Vercel', usedAt: ['This site'] },
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    blurb:
      'Using language models where they make the product better, not as a gimmick.',
    skills: [
      { name: 'OpenAI API', usedAt: ['Yoto.ai', 'EnduraGrowth'] },
      { name: 'Prompt-to-structured-data', usedAt: ['Yoto.ai'] },
      {
        name: 'AI-powered product features',
        usedAt: ['Yoto.ai', 'EnduraGrowth'],
      },
    ],
  },
];
