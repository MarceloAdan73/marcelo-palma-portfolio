import type { MetadataRoute } from 'next';
import client from '@/lib/sanity.client';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let slugs: { slug: string }[] = [];
  try {
    slugs = await client.fetch<{ slug: string }[]>(
      '*[_type == "project" && defined(slug)] { slug }'
    );
  } catch {
    slugs = [];
  }

  const baseUrl = 'https://marcelo-palma-portfolio.vercel.app';

  const projectRoutes: MetadataRoute.Sitemap = slugs.map(({ slug }) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectRoutes,
  ];
}