import type { Service, Testimonial } from './types';

export const services: Service[] = [
  {
    title: 'MVP development',
    body: 'A focused first version you can put in front of users and investors.',
  },
  {
    title: 'SaaS applications',
    body: 'Accounts, dashboards, roles and billing: the parts every SaaS needs, built to last.',
  },
  {
    title: 'AI-powered features',
    body: 'LLM features that do a real job in your product, wired into your data.',
  },
  {
    title: 'Full-stack web apps',
    body: 'React/Next.js frontends with Node.js APIs and a database designed for your product.',
  },
  {
    title: 'Backend & APIs',
    body: 'REST APIs, integrations, webhooks and payments that your frontend can depend on.',
  },
  {
    title: 'Improving what you have',
    body: 'New features, bug fixing, performance work and scaling an existing codebase.',
  },
];

export const engagementSteps: Service[] = [
  {
    title: 'Understand',
    body: 'A call to understand the product, the users and what “done” looks like.',
  },
  {
    title: 'Plan',
    body: 'A written scope, a sensible stack and milestones you can hold me to.',
  },
  {
    title: 'Build',
    body: 'Working software every week, on a staging link you can click through.',
  },
  {
    title: 'Launch & support',
    body: 'Deployment, monitoring and fixes after real users arrive.',
  },
];

/**
 * Add real testimonials only (e.g. from LinkedIn recommendations or Upwork
 * reviews). The section stays hidden while this list is empty.
 */
export const testimonials: Testimonial[] = [];
