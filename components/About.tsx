"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaDocker, FaRocket, FaCode, 
  FaChartLine, FaMedal, FaAward,
  FaCrown
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiJest, SiPostgresql, SiPrisma, SiExpress, 
  SiTailwindcss, SiPython, SiAngular, SiVuedotjs, SiDjango, SiFastapi,
  SiElectron, SiJsonwebtokens
} from 'react-icons/si';
import { MdTask } from 'react-icons/md';
import { VscVerified } from 'react-icons/vsc';
import { useApp } from '@/context/AppContext';

interface Milestone {
  year: string;
  title: string;
  description: string;
  descriptionEn: string;
  icon: React.ReactNode;
  color: string;
  technologies: string[];
  achievements?: string[];
  metrics?: {
    projects?: number;
    tests?: number;
    satisfaction?: number;
  };
}

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);
  const { t, theme, language } = useApp();

  // Efecto spotlight que sigue al mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const milestones: Milestone[] = [
    {
      year: '2026',
      title: 'Task Manager Pro',
      description: 'Desarrollo de aplicación full-stack con arquitectura limpia, 86 tests automatizados, Docker y JWT.',
      descriptionEn: 'Full-stack application development with clean architecture, 86 automated tests, Docker and JWT.',
      icon: <MdTask className="text-2xl" />,
      color: 'from-blue-600 to-purple-600',
      technologies: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Jest', 'Docker'],
      achievements: [
        language === 'es' ? '86 tests automatizados' : '86 automated tests',
        language === 'es' ? 'Dockerización completa' : 'Full Dockerization',
        language === 'es' ? 'Autenticación JWT' : 'JWT Authentication'
      ],
      metrics: {
        projects: 1,
        tests: 86,
        satisfaction: 100
      }
    },
    {
      year: '2025',
      title: language === 'es' ? 'Exploración de stacks' : 'Stack exploration',
      description: language === 'es' 
        ? 'Desarrollo de proyectos con Angular, Vue, Electron, FastAPI y Django para ampliar horizontes.'
        : 'Project development with Angular, Vue, Electron, FastAPI and Django to expand horizons.',
      descriptionEn: 'Project development with Angular, Vue, Electron, FastAPI and Django to expand horizons.',
      icon: <FaReact className="text-2xl" />,
      color: 'from-green-500 to-teal-500',
      technologies: ['Angular', 'Vue.js', 'Electron', 'FastAPI', 'Django', 'Python'],
      achievements: language === 'es' 
        ? ['5 stacks diferentes', 'Apps desktop con Electron', 'APIs con FastAPI']
        : ['5 different stacks', 'Desktop apps with Electron', 'APIs with FastAPI'],
      metrics: {
        projects: 5,
        tests: 45,
        satisfaction: 95
      }
    },
    {
      year: '2024',
      title: language === 'es' ? 'Fundamentos sólidos' : 'Solid fundamentals',
      description: language === 'es'
        ? 'Dominio de HTML, CSS, JavaScript, React y Node.js. Creación de proyectos base.'
        : 'Mastery of HTML, CSS, JavaScript, React and Node.js. Creation of base projects.',
      descriptionEn: 'Mastery of HTML, CSS, JavaScript, React and Node.js. Creation of base projects.',
      icon: <FaRocket className="text-2xl" />,
      color: 'from-orange-500 to-red-500',
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'Git'],
      achievements: language === 'es'
        ? ['6 proyectos frontend', 'Bases de backend', 'Control de versiones']
        : ['6 frontend projects', 'Backend basics', 'Version control'],
      metrics: {
        projects: 6,
        tests: 30,
        satisfaction: 90
      }
    }
  ];

  const techCategories = [
    {
      name: 'Frontend',
      nameEn: 'Frontend',
      icon: <FaReact className="text-lg" />,
      color: 'from-blue-500 to-cyan-500',
      techs: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Angular', 'Vue.js'],
      level: 90
    },
    {
      name: 'Backend',
      nameEn: 'Backend',
      icon: <FaNodeJs className="text-lg" />,
      color: 'from-green-500 to-emerald-500',
      techs: ['Node.js', 'Express', 'Python', 'FastAPI', 'Django', 'PostgreSQL'],
      level: 85
    },
    {
      name: language === 'es' ? 'Herramientas' : 'Tools',
      nameEn: 'Tools',
      icon: <FaDocker className="text-lg" />,
      color: 'from-purple-500 to-pink-500',
      techs: ['Docker', 'Jest', 'Prisma', 'JWT', 'Git', 'Electron'],
      level: 80
    }
  ];

  // Componente de barra de progreso circular
  const CircularProgress = ({ value, color }: { value: number; color: string }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const progress = circumference - (value / 100) * circumference;
    
    return (
      <div className="relative w-20 h-20">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className={theme === 'dark' ? 'text-gray-700' : 'text-gray-200'}
          />
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            stroke={`url(#gradient-${color})`}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: progress } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold">{value}%</span>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 relative overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      {/* Efecto spotlight que sigue al mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${
            theme === 'dark' ? 'rgba(59,130,246,0.15)' : 'rgba(59,130,246,0.1)'
          } 0%, transparent 50%)`
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      {/* Elementos decorativos de fondo animados */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className={`
            absolute top-20 right-20 w-96 h-96 rounded-full 
            ${theme === 'dark' ? 'bg-blue-600/10' : 'bg-blue-200/30'} 
            blur-3xl
          `}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
          className={`
            absolute bottom-20 left-20 w-80 h-80 rounded-full 
            ${theme === 'dark' ? 'bg-purple-600/10' : 'bg-purple-200/30'} 
            blur-3xl
          `}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header con animación */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('about.title')}
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            />
            <motion.p 
              className={`mt-4 text-base max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('about.subtitle')}
            </motion.p>
          </motion.div>

          {/* Grid principal */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Columna izquierda: Stats y stack actual */}
            <motion.div 
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Tarjeta de estadísticas con efecto glassmorphism */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`
                  rounded-2xl p-6 backdrop-blur-lg
                  ${theme === 'dark' 
                    ? 'bg-gray-900/50 border border-gray-700/50' 
                    : 'bg-white/50 border border-gray-200/50'}
                  shadow-xl hover:shadow-2xl transition-all
                `}
              >
                <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <FaChartLine className="text-blue-500" aria-label="Gráfico de estadísticas" />
                  </motion.div>
                  <span>Stats</span>
                </h3>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {language === 'es' ? 'Proyectos completados' : 'Completed projects'}
                    </span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
                      className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                      8
                    </motion.span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {language === 'es' ? 'Tests escritos' : 'Tests written'}
                    </span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
                      className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                      86+
                    </motion.span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {language === 'es' ? 'Tecnologías' : 'Technologies'}
                    </span>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ type: "spring", stiffness: 300, delay: 0.7 }}
                      className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                      15+
                    </motion.span>
                  </motion.div>
                </div>

                {/* Badge de disponibilidad mejorado */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`
                    mt-6 p-4 rounded-xl flex items-center gap-3 relative overflow-hidden
                    ${theme === 'dark' 
                      ? 'bg-green-500/10 border border-green-500/20' 
                      : 'bg-green-50 border border-green-200'}
                  `}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-green-500/10"
                  />
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-green-400' : 'text-green-700'
                    }`}>
                      {language === 'es' ? 'Disponible para proyectos' : 'Available for projects'}
                    </p>
                    <p className={`text-xs ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {language === 'es' ? 'Freelance / Tiempo completo' : 'Freelance / Full-time'}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Stack actual con barras circulares */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`
                  rounded-2xl p-6 backdrop-blur-lg
                  ${theme === 'dark' 
                    ? 'bg-gray-900/50 border border-gray-700/50' 
                    : 'bg-white/50 border border-gray-200/50'}
                  shadow-xl hover:shadow-2xl transition-all
                `}
              >
                <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <FaCode className="text-blue-500" aria-label="Código" />
                  </motion.div>
                  <span>{t('about.mainStack')}</span>
                </h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {techCategories.map((cat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-center"
                    >
                      <div className="relative mx-auto mb-2">
                        <CircularProgress value={cat.level} color={cat.color} />
                      </div>
                      <p className={`text-xs font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {language === 'es' ? cat.name : cat.nameEn}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Columna derecha: Timeline de hitos */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Línea de tiempo vertical con partículas */}
                <div className="absolute left-6 top-0 bottom-0">
                  <motion.div
                    className={`
                      w-0.5 h-full
                      ${theme === 'dark' 
                        ? 'bg-gradient-to-b from-blue-600/30 via-purple-600/30 to-transparent' 
                        : 'bg-gradient-to-b from-blue-400/50 via-purple-400/50 to-transparent'}
                    `}
                  />
                  
                  {/* Partículas que fluyen por la línea */}
                  <motion.div
                    animate={{
                      y: ['0%', '100%'],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-blue-500 to-purple-500 blur-sm"
                  />
                </div>

                {/* Hitos */}
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      className="relative pl-16"
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                      onHoverStart={() => setActiveMilestone(index)}
                      onHoverEnd={() => setActiveMilestone(null)}
                    >
                      {/* Año con ícono animado */}
                      <div className="absolute left-0 top-0 flex flex-col items-center">
                        <motion.div
                          animate={activeMilestone === index ? {
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0]
                          } : {}}
                          transition={{ duration: 0.5 }}
                          className={`
                            w-14 h-14 rounded-xl bg-gradient-to-r ${milestone.color}
                            flex items-center justify-center text-white shadow-xl
                            relative overflow-hidden
                          `}
                        >
                          {/* Efecto de brillo */}
                          <motion.div
                            animate={{
                              x: ['-100%', '100%']
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                              repeatDelay: 1
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                          {milestone.icon}
                        </motion.div>
                        
                        {index < milestones.length - 1 && (
                          <motion.div
                            animate={{
                              height: activeMilestone === index ? [16, 24, 16] : 16
                            }}
                            transition={{ duration: 0.3 }}
                            className={`
                              w-0.5 h-16 mt-2
                              ${theme === 'dark' 
                                ? 'bg-gradient-to-b from-gray-700 to-transparent' 
                                : 'bg-gradient-to-b from-gray-300 to-transparent'}
                            `}
                          />
                        )}
                      </div>

                      {/* Contenido de la tarjeta */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`
                          p-6 rounded-2xl backdrop-blur-lg cursor-pointer
                          ${theme === 'dark' 
                            ? 'bg-gray-900/50 border border-gray-700/50' 
                            : 'bg-white/50 border border-gray-200/50'}
                          shadow-xl hover:shadow-2xl transition-all
                          relative overflow-hidden
                        `}
                      >
                        {/* Efecto de borde brillante en hover */}
                        <motion.div
                          animate={activeMilestone === index ? {
                            opacity: [0, 0.5, 0]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
                        />

                        <div className="flex items-center gap-3 mb-3">
                          <motion.span
                            animate={activeMilestone === index ? {
                              scale: [1, 1.1, 1]
                            } : {}}
                            className={`
                              px-4 py-1.5 rounded-full text-sm font-bold
                              bg-gradient-to-r ${milestone.color} text-white
                            `}
                          >
                            {milestone.year}
                          </motion.span>
                          
                          {index === 0 && (
                            <motion.span
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-600 text-xs rounded-full"
                            >
                              <FaCrown className="text-sm" aria-label="Destacado" />
                              {language === 'es' ? 'Más reciente' : 'Latest'}
                            </motion.span>
                          )}
                        </div>

                        <h3 className={`text-xl font-bold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {milestone.title}
                        </h3>

                        <p className={`text-sm mb-4 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {language === 'es' ? milestone.description : milestone.descriptionEn}
                        </p>

                        {/* Métricas del hito */}
                        {milestone.metrics && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={activeMilestone === index ? { opacity: 1, height: 'auto' } : {}}
                            className="mb-4 overflow-hidden"
                          >
                            <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-black/5 dark:bg-white/5">
                              <div className="text-center">
                                <div className="text-lg font-bold text-blue-500">{milestone.metrics.projects}</div>
                                <div className="text-[10px] opacity-70">Proyectos</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-purple-500">{milestone.metrics.tests}</div>
                                <div className="text-[10px] opacity-70">Tests</div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg font-bold text-green-500">{milestone.metrics.satisfaction}%</div>
                                <div className="text-[10px] opacity-70">Éxito</div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Logros */}
                        {milestone.achievements && (
                          <div className="mb-4">
                            <p className={`text-xs font-semibold mb-2 flex items-center gap-1 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {language === 'es' ? 'Logros:' : 'Achievements:'}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {milestone.achievements.map((achievement, i) => (
                                <motion.span
                                  key={i}
                                  whileHover={{ scale: 1.05, x: 2 }}
                                  className={`
                                    inline-flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg
                                    ${theme === 'dark'
                                      ? 'bg-gray-800 text-gray-300'
                                      : 'bg-gray-100 text-gray-700'
                                    }
                                  `}
                                >
                                  <VscVerified className="text-green-500" aria-label="Verificado" />
                                  {achievement}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tecnologías */}
                        <div>
                          <p className={`text-xs font-semibold mb-2 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {language === 'es' ? 'Stack:' : 'Stack:'}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {milestone.technologies.map((tech, i) => (
                              <motion.span
                                key={i}
                                whileHover={{ y: -2 }}
                                className={`
                                  px-3 py-1.5 text-xs rounded-lg
                                  ${theme === 'dark'
                                    ? 'bg-gray-800 text-gray-300'
                                    : 'bg-gray-100 text-gray-700'
                                  }
                                `}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Badge de aprendizaje continuo */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`
                inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-lg
                ${theme === 'dark'
                  ? 'bg-gray-900/50 border border-gray-700/50'
                  : 'bg-white/50 border border-gray-200/50'
                }
              `}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FaAward className="text-yellow-500 text-xl" aria-label="Premio" />
              </motion.div>
              <span className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {language === 'es' 
                  ? '🚀 3 años de aprendizaje continuo basado en proyectos'
                  : '🚀 3 years of continuous project-based learning'}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;