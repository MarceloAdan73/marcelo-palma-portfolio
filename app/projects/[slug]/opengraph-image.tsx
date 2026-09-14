import { ImageResponse } from 'next/og';
import client from '@/lib/sanity.client';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const revalidate = 3600;

const projectQuery = `*[_type == "project" && slug == $slug][0] {
  title,
  techStack,
  description
}`;

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let project: { title?: string; techStack?: string[]; description?: string } | null = null;
  try {
    project = await client.fetch(projectQuery, { slug });
  } catch {
    project = null;
  }

  const title = project?.title ?? 'Proyecto';
  const techStack = project?.techStack?.slice(0, 6).join(' · ') ?? '';
  const description = project?.description?.slice(0, 140) ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '72px',
          background: 'linear-gradient(135deg, #111827, #4c1d95)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 30, color: '#34d399', marginBottom: 20 }}>
          M A R C E L O &nbsp; P A L M A
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>
          {title}
        </div>
        {description && (
          <div style={{ fontSize: 32, color: '#e5e7eb', marginTop: 24, maxWidth: 900 }}>
            {description}
          </div>
        )}
        {techStack && (
          <div style={{ fontSize: 28, color: '#a78bfa', marginTop: 32 }}>
            {techStack}
          </div>
        )}
      </div>
    ),
    size
  );
}