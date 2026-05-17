"use client";

import { useMemo, useState } from "react";
import { motion } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaAngular, FaVuejs,
  FaCode, FaServer, FaLayerGroup, FaCrown, FaDocker, FaLock, FaRobot, FaWhatsapp
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiExpress, SiPostgresql, SiPrisma, SiJest, 
  SiTailwindcss, SiElectron, SiFastapi, SiDjango, SiJsonwebtokens, SiGooglegemini,
  SiPython, SiStreamlit
} from 'react-icons/si';
import { FaUniversity } from 'react-icons/fa';
import { TbTestPipe } from 'react-icons/tb';
import { useApp } from '@/context/AppContext';
import type { SanityProject } from '@/app/page';

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack';

interface Project {
  id: string;
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

const iconColors = [
  'from-blue-600 to-purple-600',
  'from-purple-600 to-blue-600',
  'from-red-600 to-red-400',
  'from-cyan-600 to-blue-600',
  'from-gray-700 to-gray-900',
  'from-green-600 to-emerald-600',
  'from-green-800 to-green-600',
  'from-yellow-600 to-blue-600',
  'from-orange-600 to-red-600',
  'from-green-500 to-green-700',
  'from-blue-500 to-purple-600',
  'from-emerald-600 to-teal-600',
  'from-indigo-600 to-cyan-600',
  'from-amber-600 to-yellow-600',
];

const defaultIcon = <FaCode className="text-3xl" aria-label="Project" />;

function mapSanityToProject(sanity: SanityProject, index: number): Project {
  return {
    id: sanity._id,
    title: sanity.title,
    description: sanity.description,
    descriptionEn: sanity.description,
    image: sanity.imageUrl || '/placeholder.png',
    icon: defaultIcon,
    iconColor: iconColors[index % iconColors.length],
    category: 'fullstack',
    technologies: sanity.techStack || [],
    demoLink: sanity.liveUrl || '',
    codeLink: sanity.githubUrl || '',
    featured: sanity.featured,
  };
}

interface Category {
  id: ProjectCategory;
  name: string;
  icon: React.ReactNode;
  count: number;
}

const Projects = ({ projects: rawProjects }: { projects: SanityProject[] }) => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const { t, theme, language } = useApp();

  const projects = useMemo(
    () => rawProjects.map(mapSanityToProject),
    [rawProjects],
  );

  const categories: Category[] = [
    { id: 'all', name: t('projects.all'), icon: <FaLayerGroup />, count: projects.length },
    { id: 'frontend', name: t('projects.frontend'), icon: <FaReact />, count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: t('projects.backend'), icon: <FaServer />, count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: t('projects.fullstack'), icon: <FaCode />, count: projects.filter(p => p.category === 'fullstack').length },
  ];

  const filteredProjects = filter === 'all' 
    ? [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
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
            {filteredProjects.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-16">
                <FaCode className={`text-6xl mb-4 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-300'}`} />
                <p className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {t('projects.noProjects')}
                </p>
              </div>
            ) : (
              filteredProjects.map((project, index) => (
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
                      {project.demoLink ? (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                        >
                          <FaExternalLinkAlt className="text-xs" aria-label="Enlace externo" />
                          {t('projects.demo')}
                        </a>
                      ) : (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                        >
                          <FaRobot className="text-xs" aria-label="Bot" />
                          {language === 'es' ? 'Ver Bot' : 'View Bot'}
                        </a>
                      )}
                      
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
            ))
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;