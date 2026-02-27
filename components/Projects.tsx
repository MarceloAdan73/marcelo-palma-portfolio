"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaAngular, FaVuejs,
  FaCode, FaServer, FaLayerGroup, FaCrown, FaDocker, FaLock
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiExpress, SiPostgresql, SiPrisma, SiJest, 
  SiTailwindcss, SiElectron, SiFastapi, SiDjango, SiJsonwebtokens
} from 'react-icons/si';
import { TbTestPipe } from 'react-icons/tb';
import { useApp } from '@/context/AppContext';

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack';

interface Project {
  id: number;
  title: string;
  description: string;
  descriptionEn: string;
  image: string;
  icon: React.ReactNode;
  iconColor: string;
  category: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
  featured: boolean;
  metrics?: {
    tests?: number;
    docker?: boolean;
    jwt?: boolean;
  };
}

interface Category {
  id: ProjectCategory;
  name: string;
  icon: React.ReactNode;
  count: number;
}

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const { t, theme, language } = useApp();

  const projects: Project[] = [
    {
      id: 1,
      title: 'Task Manager Pro',
      description: 'Gestión de tareas full-stack con autenticación JWT, PostgreSQL y 86 tests automatizados.',
      descriptionEn: 'Full-stack task management with JWT authentication, PostgreSQL and 86 automated tests.',
      image: '/taskScreenshot.png',
      icon: <SiNextdotjs className="text-3xl" aria-label="Next.js" />,
      iconColor: 'from-blue-600 to-purple-600',
      category: 'fullstack',
      technologies: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Docker', 'Jest'],
      demoLink: 'https://task-manager-pro-psi.vercel.app/',
      codeLink: 'https://github.com/MarceloAdan73/task-manager-pro',
      featured: true,
      metrics: { tests: 86, docker: true, jwt: true }
    },
    {
      id: 2,
      title: 'Angular Music Player',
      description: 'Reproductor de música con Angular, RxJS y SCSS.',
      descriptionEn: 'Music player with Angular, RxJS and SCSS.',
      image: '/angularScreen.png',
      icon: <FaAngular className="text-3xl" aria-label="Angular" />,
      iconColor: 'from-red-600 to-red-400',
      category: 'frontend',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
      demoLink: 'https://music-player-roan-eight.vercel.app/',
      codeLink: 'https://github.com/MarceloAdan73/Angular-Music-Player',
      featured: true,
    },
    {
      id: 3,
      title: 'Markdown Converter',
      description: 'Conversor de Markdown a PDF/HTML. PWA y Electron.',
      descriptionEn: 'Markdown to PDF/HTML converter. PWA and Electron.',
      image: '/markdownScreen.png',
      icon: <SiElectron className="text-3xl" aria-label="Electron" />,
      iconColor: 'from-cyan-600 to-blue-600',
      category: 'frontend',
      technologies: ['React', 'Electron', 'PWA', 'TypeScript'],
      demoLink: 'https://markdown-converter-six.vercel.app/',
      codeLink: 'https://github.com/MarceloAdan73/markdown-converter',
      featured: true,
    },
    {
      id: 4,
      title: 'DevNotes',
      description: 'Aplicación de notas PWA con Next.js y sincronización offline.',
      descriptionEn: 'PWA notes app with Next.js and offline sync.',
      image: '/devnotScreen.png',
      icon: <SiNextdotjs className="text-3xl" aria-label="Next.js" />,
      iconColor: 'from-gray-700 to-gray-900',
      category: 'frontend',
      technologies: ['Next.js', 'PWA', 'Tailwind'],
      demoLink: 'https://dev-notes-ruby.vercel.app/',
      codeLink: 'https://github.com/MarceloAdan73/DevNotes-Next.js',
      featured: false,
    },
    {
      id: 5,
      title: 'Modern Blog',
      description: 'Blog con Vue.js + FastAPI. JWT y PostgreSQL.',
      descriptionEn: 'Blog with Vue.js + FastAPI. JWT and PostgreSQL.',
      image: '/modernScreen.png',
      icon: <FaVuejs className="text-3xl" aria-label="Vue.js" />,
      iconColor: 'from-green-600 to-emerald-600',
      category: 'fullstack',
      technologies: ['Vue.js', 'FastAPI', 'Python', 'PostgreSQL', 'JWT'],
      demoLink: 'https://modern-blog-tkzl.onrender.com/',
      codeLink: 'https://github.com/MarceloAdan73/Modern-Blog',
      featured: false,
    },
    {
      id: 6,
      title: 'Django Library',
      description: 'Gestión de bibliotecas con Django y Tailwind.',
      descriptionEn: 'Library management with Django and Tailwind.',
      image: '/librosScreen.png',
      icon: <SiDjango className="text-3xl" aria-label="Django" />,
      iconColor: 'from-green-800 to-green-600',
      category: 'backend',
      technologies: ['Django', 'Python', 'Tailwind'],
      demoLink: 'https://biblioteca-django-5dbk.onrender.com/',
      codeLink: 'https://github.com/MarceloAdan73/Django-Library',
      featured: false,
    },
    {
      id: 7,
      title: 'Weather App',
      description: 'App del clima con Vue.js + FastAPI.',
      descriptionEn: 'Weather app with Vue.js + FastAPI.',
      image: '/climaScreen.png',
      icon: <FaPython className="text-3xl" aria-label="Python" />,
      iconColor: 'from-yellow-600 to-blue-600',
      category: 'fullstack',
      technologies: ['Vue.js', 'FastAPI', 'Python'],
      demoLink: 'https://app-clima-python.onrender.com/',
      codeLink: 'https://github.com/MarceloAdan73/Weather-App-Python',
      featured: false,
    },
    {
      id: 8,
      title: 'Frontend Mini Projects',
      description: 'Colección de 6 proyectos pequeños de frontend.',
      descriptionEn: 'Collection of 6 small frontend projects.',
      image: '/frontScreen.png',
      icon: <FaCode className="text-3xl" aria-label="Código" />,
      iconColor: 'from-orange-600 to-red-600',
      category: 'frontend',
      technologies: ['HTML/CSS', 'JavaScript', 'React'],
      demoLink: 'https://marceloadan73.github.io/mini-frontend-proyects/',
      codeLink: 'https://github.com/MarceloAdan73/frontend-proyects',
      featured: false,
    },
  ];

  const categories: Category[] = [
    { id: 'all', name: t('projects.all'), icon: <FaLayerGroup />, count: projects.length },
    { id: 'frontend', name: t('projects.frontend'), icon: <FaReact />, count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: t('projects.backend'), icon: <FaServer />, count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: t('projects.fullstack'), icon: <FaCode />, count: projects.filter(p => p.category === 'fullstack').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section 
      id="projects" 
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t('projects.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className={`mt-4 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {filteredProjects.length} {t('projects.subtitle')}
            </p>
          </motion.div>

          {/* Filtros */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all
                  flex items-center gap-2
                  ${filter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }
                `}
              >
                <span className="text-base">{category.icon}</span>
                <span>{category.name}</span>
                <span className={`
                  text-xs px-2 py-0.5 rounded-full
                  ${filter === category.id
                    ? 'bg-white/20'
                    : theme === 'dark'
                      ? 'bg-gray-700'
                      : 'bg-gray-200'
                  }
                `}>
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={`
                  relative h-full rounded-2xl overflow-hidden
                  ${theme === 'dark' 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'}
                  shadow-lg hover:shadow-2xl transition-all duration-300
                `}>
                  
                  {/* Imagen */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge de featured */}
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="flex items-center gap-1 px-3 py-1 bg-yellow-500 text-yellow-950 text-xs font-bold rounded-full shadow-lg">
                          <FaCrown className="text-sm" />
                          {t('projects.featured')}
                        </span>
                      </div>
                    )}

                    {/* Métricas */}
                    {project.metrics && (
                      <div className="absolute top-3 right-3 flex gap-2">
                        {project.metrics.tests && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                            <TbTestPipe className="text-sm" aria-label="Tests" />
                            {project.metrics.tests}
                          </span>
                        )}
                        {project.metrics.docker && (
                          <span className="w-8 h-8 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center text-blue-400 border border-blue-500/30">
                            <FaDocker aria-label="Docker" />
                          </span>
                        )}
                        {project.metrics.jwt && (
                          <span className="w-8 h-8 rounded-full bg-purple-500/20 backdrop-blur-sm flex items-center justify-center text-purple-400 border border-purple-500/30">
                            <FaLock aria-label="JWT" />
                          </span>
                        )}
                      </div>
                    )}

                    {/* Icono de categoría */}
                    <div className={`
                      absolute bottom-3 right-3 w-12 h-12 rounded-xl 
                      bg-gradient-to-r ${project.iconColor}
                      flex items-center justify-center text-white
                      shadow-xl transform group-hover:rotate-12 transition-transform duration-300
                    `}>
                      {project.icon}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-sm mb-4 line-clamp-2 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {language === 'es' ? project.description : project.descriptionEn}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className={`
                            px-2 py-1 text-xs rounded-lg
                            ${theme === 'dark'
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-700'
                            }
                          `}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className={`
                          px-2 py-1 text-xs rounded-lg
                          ${theme === 'dark'
                            ? 'bg-gray-700 text-gray-400'
                            : 'bg-gray-100 text-gray-500'
                          }
                        `}>
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Botones */}
                    <div className="flex gap-3">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                      >
                        <FaExternalLinkAlt className="text-xs" aria-label="Enlace externo" />
                        {t('projects.demo')}
                      </a>
                      
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          flex-1 px-3 py-2 text-sm font-medium rounded-xl 
                          flex items-center justify-center gap-2 border-2
                          ${theme === 'dark'
                            ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                          } transition-all
                        `}
                      >
                        <FaGithub className="text-sm" />
                        {t('projects.code')}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;