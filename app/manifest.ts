import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Marcelo Palma | Desarrollador Full-Stack',
    short_name: 'Marcelo Palma',
    description:
      'Portfolio de Marcelo Palma - Full-Stack Developer (Next.js, TypeScript, Node.js, Docker, testing).',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#111827',
    icons: [
      { src: '/icon', sizes: 'any', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}