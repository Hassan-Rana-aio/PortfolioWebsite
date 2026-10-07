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

/** A recorded product walkthrough. Files live in public/videos. */
export interface ProjectVideo {
  /** Full narrated walkthrough, loaded only when played. */
  src: string;
  /** Short silent clip that loops on the project card. */
  preview: string;
  /** First frame of the preview, shown before playback and for reduced motion. */
  poster: string;
  captions?: string;
  /** Human-readable length, e.g. "1:26". */
  duration: string;
  width: number;
  height: number;
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
  video?: ProjectVideo;
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
