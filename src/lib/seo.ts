import { profile } from '@/content/profile';
import { skillGroups } from '@/content/skills';

export const siteTitle = `${profile.name} | Product Engineer & Full-Stack Engineer`;

export const siteDescription =
  'Muhammad Hassan Rana is a Product Engineer and Full-Stack Engineer building AI-powered SaaS and scalable web products with React, Next.js, TypeScript, Node.js and PostgreSQL. Open to full-time, remote and freelance work.';

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  image: `${profile.siteUrl}/opengraph-image`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  worksFor: { '@type': 'Organization', name: profile.current.company },
  alumniOf: { '@type': 'CollegeOrUniversity', name: profile.education.school },
  sameAs: [profile.links.github, profile.links.linkedin],
  knowsAbout: skillGroups
    .flatMap((g) => g.skills.map((s) => s.name))
    .slice(0, 20),
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: profile.name,
  url: profile.siteUrl,
};
