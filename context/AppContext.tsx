"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

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
    'hero.description': 'incluyendo Task Manager Pro con tests automatizados, Docker y JWT.',
    'hero.viewProjects': 'Ver proyectos',
    'hero.contact': 'Contactar',
    'hero.available': 'Disponible para trabajar',
    'about.title': 'Trayectoria',
    'about.subtitle': 'Aprendizaje continuo basado en proyectos',
    'about.featured': 'Proyecto insignia',
    'about.mainStack': 'Stack principal',
    'about.appliedIn': 'aplicados en proyectos reales',
    
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
    'projects.subtitle': 'proyectos · Cada uno con stack diferente',
    'projects.all': 'Todos',
    'projects.frontend': 'Frontend',
    'projects.backend': 'Backend',
    'projects.fullstack': 'Full Stack',
    'projects.featured': 'Destacado',
    'projects.main': 'Principal',
    'projects.tests': 'tests',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    'projects.noProjects': 'No hay proyectos en esta categoría aún.',
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
    'hero.description': 'including Task Manager Pro with automated tests, Docker and JWT.',
    'hero.viewProjects': 'View projects',
    'hero.contact': 'Contact me',
    'hero.available': 'Available for work',
    'about.title': 'About',
    'about.subtitle': 'Continuous project-based learning',
    'about.featured': 'Featured project',
    'about.mainStack': 'Main stack',
    'about.appliedIn': 'applied in real projects',
    
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
    'projects.subtitle': 'projects · Each with different stack',
    'projects.all': 'All',
    'projects.frontend': 'Frontend',
    'projects.backend': 'Backend',
    'projects.fullstack': 'Full Stack',
    'projects.featured': 'Featured',
    'projects.main': 'Main',
    'projects.tests': 'tests',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    'projects.noProjects': 'No projects in this category yet.',
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
      {children}
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