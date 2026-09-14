import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import client from '@/lib/sanity.client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectDetail from '@/components/ProjectDetail';
import type { SanityProject } from '@/app/page';

export const revalidate = 3600;

const projectQuery = `*[_type == "project" && slug == $slug][0] {
  _id,
  title,
  slug,
  description,
  descriptionEn,
  "imageUrl": image.asset->url,
  "architectureImageUrl": architectureImage.asset->url,
  icon,
  iconColor,
  techStack,
  liveUrl,
  githubUrl,
  featured,
  showcase,
  category,
  problem,
  problemEn,
  solution,
  solutionEn,
  result,
  resultEn,
  highlights,
  metrics
}`;

async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  try {
    return (await client.fetch<SanityProject | null>(projectQuery, { slug })) ?? null;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<{ slug: string }[]>(
      '*[_type == "project" && defined(slug)] { slug }'
    );
    return slugs.map(({ slug }) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return { title: 'Proyecto no encontrado' };
  }
  return {
    title: project.title,
    description: project.problem || project.description || undefined,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      title: project.title,
      description: project.problem || project.description || undefined,
      images: project.imageUrl ? [{ url: project.imageUrl }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-20 flex min-h-screen flex-col">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}