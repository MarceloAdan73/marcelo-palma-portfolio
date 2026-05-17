import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import client from '@/lib/sanity.client';

export const dynamic = 'force-dynamic';

export interface SanityProject {
  _id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  techStack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
}

async function getProjects(): Promise<SanityProject[]> {
  const query = `*[_type == "project"] | order(featured desc, _createdAt desc) {
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    techStack,
    liveUrl,
    githubUrl,
    featured
  }`;
  try {
    return await client.fetch(query);
  } catch {
    return [];
  }
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}