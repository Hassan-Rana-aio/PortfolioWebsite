import type { StaticImageData } from 'next/image';

export interface Shot {
  src: StaticImageData;
  alt: string;
}

export interface Role {
  title: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  /** One line explaining what the company or product is. */
  context: string;
  roles: Role[];
  stack: string[];
  /** Slug of the related case study, if any. */
  caseStudy?: string;
}

export interface Feature {
  title: string;
  body: string;
}

/** Illustrations drawn in code, used where real screenshots can't be shown. */
export type Mockup = 'builder' | 'trading-architecture';

export interface CaseStudy {
  problem: string;
  approach: string[];
  solution: string[];
  features: Feature[];
  results: string[];
  /** Architecture illustration shown alongside the solution. */
  diagram?: Mockup;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  period: string;
  /** Company or client context, e.g. "Built at K-Hive". */
  context: string;
  stack: string[];
  cover: Shot | Mockup;
  gallery: Shot[];
  links: { live?: string; github?: string };
  /** Highlighted in the main project grid with a full case study page. */
  caseStudy?: CaseStudy;
  /** Hidden projects stay in the data but aren't rendered. */
  hidden?: boolean;
}

export interface SkillGroup {
  id: string;
  label: string;
  blurb: string;
  skills: { name: string; usedAt: string[] }[];
}

export interface Service {
  title: string;
  body: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  source?: string;
}
