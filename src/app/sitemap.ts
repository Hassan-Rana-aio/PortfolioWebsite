import type { MetadataRoute } from 'next';
import { profile } from '@/content/profile';
import { caseStudies } from '@/content/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/resume`, changeFrequency: 'monthly', priority: 0.8 },
    ...caseStudies.map((p) => ({
      url: `${base}/work/${p.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
