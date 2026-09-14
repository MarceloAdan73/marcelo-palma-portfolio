"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';

type Language = 'es' | 'en';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Traducciones completas
const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Trayectoria',
    'nav.skills': 'Stack',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.role': 'Desarrollador Full-Stack',
    'hero.projects': 'proyectos completados',
    'hero.description': 'Construyo soluciones completas: de la idea al despliegue, con arquitectura, testing y calidad real.',
    'hero.viewProjects': 'Ver proyectos',
    'hero.contact': 'Contactar',
    'hero.available': 'Disponible para trabajar',
    'hero.stats.projects': 'Proyectos',
    'hero.stats.tests': 'Tests',
    'hero.stats.stacks': 'Stacks',
    'about.title': 'Trayectoria',
    'about.subtitle': 'Aprendizaje continuo basado en proyectos',
    'about.featured': 'Proyecto insignia',
    'about.mainStack': 'Stack principal',
    'about.appliedIn': 'aplicados en proyectos reales',
    'about.method.title': 'Cómo trabajo',
    'about.method.1.title': 'Análisis',
    'about.method.1.desc': 'Entiendo el problema real antes de escribir una sola línea de código.',
    'about.method.2.title': 'Arquitectura',
    'about.method.2.desc': 'Defino la estructura: frontend, API, base de datos y despliegue.',
    'about.method.3.title': 'Implementación',
    'about.method.3.desc': 'Código limpio y tipado con TypeScript, Node.js y APIs seguras (JWT).',
    'about.method.4.title': 'Calidad',
    'about.method.4.desc': 'Testing continuo, Docker y revisión. Resultado verificado hasta producción.',
    
    // Engineering section (NUEVAS - Sesión 5)
    'about.engineering.title': 'Ingeniería',
    'about.engineering.subtitle': 'Stack real de trabajo diario',
    'about.engineering.frontend': 'Frontend',
    'about.engineering.frontend.desc': 'Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion',
    'about.engineering.backend': 'Backend',
    'about.engineering.backend.desc': 'Node.js, Express, Prisma ORM, PostgreSQL, REST APIs',
    'about.engineering.quality': 'Calidad & DevOps',
    'about.engineering.quality.desc': 'Jest + RTL, Docker, JWT Auth, CI/CD, ESLint, Prettier',
    
    // Evolution section (NUEVAS - Sesión 5)
    'about.evolution.title': 'Evolución',
    'about.evolution.subtitle': 'Cómo crecen los proyectos: Task Manager Pro',
    'about.evolution.v1.title': 'v1 — Fundamentos',
    'about.evolution.v1.desc': 'CRUD básico, autenticación simple, SQLite, 0 tests',
    'about.evolution.v2.title': 'v2 — Arquitectura',
    'about.evolution.v2.desc': 'Clean Architecture, Prisma + PostgreSQL, JWT, 86 tests, Docker',
    'about.evolution.v3.title': 'v3 — Escalabilidad',
    'about.evolution.v3.desc': 'React Query, Redis cache, WebSockets, CI/CD, 270+ tests, despliegue prod',
    
    // Skills - Descripciones (NUEVAS)
    'skills.desc.frontend': 'Construyendo interfaces modernas y reactivas',
    'skills.desc.backend': 'APIs robustas y escalables',
    'skills.desc.databases': 'Modelado y optimización de datos',
    'skills.desc.devops': 'Despliegue y contenedores',
    'skills.desc.tools': 'Mi setup de desarrollo',
    'skills.desc.testing': 'Calidad y código confiable',
    
    'skills.title': 'Stack técnico',
    'skills.subtitle': 'Porcentaje estimado de dominio en proyectos reales',
    'projects.title': 'Proyectos',
    'projects.subtitle': '· Cada uno con stack diferente',
    'projects.all': 'Todos',
    'projects.frontend': 'Frontend',
    'projects.backend': 'Backend',
    'projects.fullstack': 'Full Stack',
    'projects.featured': 'Destacado',
    'projects.caseStudy': 'Caso de estudio',
    'projects.main': 'Principal',
    'projects.tests': 'tests',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    'projects.viewProject': 'Ver Proyecto',
    'projects.noProjects': 'No hay proyectos en esta categoría aún.',
    'project.back': 'Volver a proyectos',
    'project.overview': 'Resumen',
    'project.problem': 'Problema',
    'project.solution': 'Solución',
    'project.highlights': 'Decisiones técnicas',
    'project.architecture': 'Arquitectura',
    'project.result': 'Resultado',
    'project.metrics': 'Métricas',
    'project.techStack': 'Stack',
    'project.notFoundTitle': 'Proyecto no encontrado',
    'project.notFoundDesc': 'El proyecto que buscas no existe o todavía no tiene página de detalle.',
    'project.demo': 'Demo',
    'project.code': 'Código',
    'contact.title': 'Contacto',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'footer.role': 'Desarrollador Full-Stack',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con',
    'footer.in': 'en',
    'footer.backToTop': 'Volver arriba',
    'footer.explore': 'Explorar',
    'footer.mainSections': 'secciones principales',
    'footer.connect': 'Conecta',
    'footer.available': 'DISPONIBLE',
    'footer.location': 'Bahía Blanca, Argentina',
    'footer.specialized': 'especializado en aplicaciones full-stack con React, Next.js y TypeScript.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.role': 'Full-Stack Developer',
    'hero.projects': 'completed projects',
    'hero.description': 'I build complete solutions: from idea to deploy, with architecture, real testing and quality.',
    'hero.viewProjects': 'View projects',
    'hero.contact': 'Contact me',
    'hero.available': 'Available for work',
    'hero.stats.projects': 'Projects',
    'hero.stats.tests': 'Tests',
    'hero.stats.stacks': 'Stacks',
    'about.title': 'About',
    'about.subtitle': 'Continuous project-based learning',
    'about.featured': 'Featured project',
    'about.mainStack': 'Main stack',
    'about.appliedIn': 'applied in real projects',
    'about.method.title': 'How I work',
    'about.method.1.title': 'Analysis',
    'about.method.1.desc': 'I understand the real problem before writing a single line of code.',
    'about.method.2.title': 'Architecture',
    'about.method.2.desc': 'I define the structure: frontend, API, database and deployment.',
    'about.method.3.title': 'Implementation',
    'about.method.3.desc': 'Clean, typed code with TypeScript, Node.js and secure APIs (JWT).',
    'about.method.4.title': 'Quality',
    'about.method.4.desc': 'Continuous testing, Docker and review. Verified results all the way to production.',
    
    // Engineering section (NEW - Session 5)
    'about.engineering.title': 'Engineering',
    'about.engineering.subtitle': 'Real daily work stack',
    'about.engineering.frontend': 'Frontend',
    'about.engineering.frontend.desc': 'Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion',
    'about.engineering.backend': 'Backend',
    'about.engineering.backend.desc': 'Node.js, Express, Prisma ORM, PostgreSQL, REST APIs',
    'about.engineering.quality': 'Quality & DevOps',
    'about.engineering.quality.desc': 'Jest + RTL, Docker, JWT Auth, CI/CD, ESLint, Prettier',
    
    // Evolution section (NEW - Session 5)
    'about.evolution.title': 'Evolution',
    'about.evolution.subtitle': 'How projects grow: Task Manager Pro',
    'about.evolution.v1.title': 'v1 — Foundations',
    'about.evolution.v1.desc': 'Basic CRUD, simple auth, SQLite, 0 tests',
    'about.evolution.v2.title': 'v2 — Architecture',
    'about.evolution.v2.desc': 'Clean Architecture, Prisma + PostgreSQL, JWT, 86 tests, Docker',
    'about.evolution.v3.title': 'v3 — Scalability',
    'about.evolution.v3.desc': 'React Query, Redis cache, WebSockets, CI/CD, 270+ tests, prod deploy',
    
    // Skills - Descripciones (NUEVAS)
    'skills.desc.frontend': 'Building modern and reactive interfaces',
    'skills.desc.backend': 'Robust and scalable APIs',
    'skills.desc.databases': 'Data modeling and optimization',
    'skills.desc.devops': 'Deployment and containers',
    'skills.desc.tools': 'My development setup',
    'skills.desc.testing': 'Quality and reliable code',
    
    'skills.title': 'Tech Stack',
    'skills.subtitle': 'Estimated proficiency in real projects',
    'projects.title': 'Projects',
    'projects.subtitle': '· Each with different stack',
    'projects.all': 'All',
    'projects.frontend': 'Frontend',
    'projects.backend': 'Backend',
    'projects.fullstack': 'Full Stack',
    'projects.featured': 'Featured',
    'projects.caseStudy': 'Case study',
    'projects.main': 'Main',
    'projects.tests': 'tests',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    'projects.viewProject': 'View Project',
    'projects.noProjects': 'No projects in this category yet.',
    'project.back': 'Back to projects',
    'project.overview': 'Overview',
    'project.problem': 'Problem',
    'project.solution': 'Solution',
    'project.highlights': 'Technical decisions',
    'project.architecture': 'Architecture',
    'project.result': 'Result',
    'project.metrics': 'Metrics',
    'project.techStack': 'Stack',
    'project.notFoundTitle': 'Project not found',
    'project.notFoundDesc': 'The project you are looking for does not exist or does not have a detail page yet.',
    'project.demo': 'Live demo',
    'project.code': 'Source code',
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'footer.role': 'Full-Stack Developer',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.in': 'in',
    'footer.backToTop': 'Back to top',
    'footer.explore': 'Explore',
    'footer.mainSections': 'main sections',
    'footer.connect': 'Connect',
    'footer.available': 'AVAILABLE',
    'footer.location': 'Bahía Blanca, Argentina',
    'footer.specialized': 'specialized in full-stack applications with React, Next.js and TypeScript.',
  }
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  // Siempre empezar con valores por defecto (light/es)
  const [language, setLanguage] = useState<Language>('es');
  const [theme, setTheme] = useState<Theme>('light');
  const [isClient, setIsClient] = useState(false);

  // Este efecto SOLO se ejecuta en el cliente
  useEffect(() => {
    setIsClient(true);
    
    // Leer de localStorage después de montar
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
    
    if (savedLanguage === 'es' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
    }
  }, []);

  // Aplicar clase dark al HTML cuando cambia el tema
  useEffect(() => {
    if (!isClient) return;
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, isClient]);

  // Guardar idioma cuando cambia
  useEffect(() => {
    if (!isClient) return;
    localStorage.setItem('language', language);
  }, [language, isClient]);

  // Sincronizar el atributo lang del <html> con el idioma (SEO bilingüe)
  useEffect(() => {
    if (!isClient) return;
    document.documentElement.lang = language;
  }, [language, isClient]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <AppContext.Provider value={{
      language,
      theme,
      toggleLanguage,
      toggleTheme,
      setTheme,
      t
    }}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}