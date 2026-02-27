// porfolio-next/app/page.tsx

// Importaciones de los componentes ya creados y adaptados
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import About from '@/components/About';     
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact'; 

export default function Home() {
  return (
    <>
      <Header />
      
      {/* El contenido principal de tu portafolio */}
      <main className="flex min-h-screen flex-col"> 
        
        {/* 1. Sección Principal (Hero) */}
        <Hero />
        
        {/* 2. Sección Sobre Mí (About) */}
        <About />
        
        {/* 3. Sección Habilidades (Skills) */}
        <Skills /> 
        
        {/* 4. Sección Proyectos (Projects) */}
        <Projects /> 
        
        {/* --- Placeholders restantes para scroll y estructura --- */}

        {/* ÚLTIMO PLACEHOLDER: Contacto */}
        <Contact />
        
      </main>
      
      <Footer />
    </>
  );
}