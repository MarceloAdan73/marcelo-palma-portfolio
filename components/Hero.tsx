"use client";

import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaDocker, FaArrowDown, FaGlobe } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { useApp } from '@/context/AppContext';

// Contador animado (definido a nivel de módulo para no re-montarse en cada re-render)
const Counter: React.FC<{ value: number; label: string; start: boolean }> = ({ value, label, start }) => {
  const { theme } = useApp();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, start]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {count}+
      </div>
      <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
        {label}
      </div>
    </motion.div>
  );
};

// Rol rotativo (typing/rotación)
const RotatingRole: React.FC = () => {
  const { language } = useApp();
  const roles =
    language === 'es'
      ? ['Desarrollador Full-Stack', 'Backend Developer', 'Ingeniería con tests', 'Automatización con IA']
      : ['Full-Stack Developer', 'Backend Developer', 'Test-Driven Engineering', 'AI Automation'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 3000);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="inline-flex overflow-hidden h-8 items-center align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// Botón magnético
const Magnetic: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 15 });
  const sy = useSpring(y, { stiffness: 180, damping: 15 });
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
          y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
        }
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="flex-1 sm:flex-none"
    >
      {children}
    </motion.div>
  );
};

// Terminal mockup (franja inferior integrada al tema)
const TerminalCard: React.FC = () => {
  const { language, theme } = useApp();
  const dark = theme === 'dark';

  return (
    <div className={`w-full flex items-center gap-3 md:gap-4 px-4 md:px-5 py-2.5 font-mono text-[11px] md:text-xs rounded-xl border overflow-hidden shadow-lg backdrop-blur-sm ${
      dark ? 'bg-gray-950/70 border-gray-700/70' : 'bg-white/80 border-gray-200'
    }`}>
      <span className="hidden sm:flex items-center gap-1.5 shrink-0">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        <span className="w-2 h-2 rounded-full bg-yellow-500" />
        <span className="w-2 h-2 rounded-full bg-green-500" />
      </span>
      <span className={`shrink-0 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>marcelo@dev:~$</span>
      <span className="text-green-600">
        <span className={dark ? 'text-green-400' : 'text-green-600'}>whoami</span>
        <span className={`ml-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>→</span>
      </span>
      <span className={`hidden lg:inline ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
        {language === 'es' ? 'full-stack · productos con IA' : 'full-stack · AI-powered products'}
      </span>
      <span className={`hidden sm:block mx-2 h-4 w-px shrink-0 ${dark ? 'bg-gray-700' : 'bg-gray-200'}`} />
      <span className={`hidden sm:flex items-center gap-3 ml-auto ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
        <span className="hidden lg:inline">npm run test</span>
        <span className="text-emerald-500">✔ 270</span>
      </span>
      <span className={`hidden sm:flex items-center gap-3 shrink-0 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
        <span className="hidden lg:inline">deploy</span>
        <span className="text-emerald-500">✔ live</span>
      </span>
      <span className="inline-block w-2 h-3.5 bg-gray-400 animate-pulse shrink-0" />
    </div>
  );
};

const Hero: React.FC<{ projectCount?: number }> = ({ projectCount = 15 }) => {
  const { t, theme, language } = useApp();
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress simplificado (sin target para evitar errores de hidratación)
  const { scrollYProgress } = useScroll();
  
  // Efectos de parallax usando scrollYProgress
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.3]);

  // Mouse position para efectos interactivos
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animaciones
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (!mounted) return null;

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16"
    >
      {/* Fondo con gradiente dinámico y partículas */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          style={{ y, opacity }}
          className={`
            absolute inset-0 bg-gradient-to-br
            ${theme === 'dark' 
              ? 'from-gray-950 via-purple-950/30 to-blue-950/30' 
              : 'from-blue-50 via-white to-purple-50'}
          `} 
        />
        
        {/* Grid lines con parallax */}
        <motion.div 
          style={{ y }}
          className={`
            absolute inset-0 opacity-20
            ${theme === 'dark' ? 'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]' 
              : 'bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)]'}
            bg-[size:4rem_4rem]
          `}
        />
        
        {/* Aurora animada que sigue al mouse */}
        <motion.div
          animate={{
            x: mousePosition.x * 60,
            y: mousePosition.y * 60,
          }}
          transition={{ type: "spring", damping: 40 }}
          className="absolute -top-40 -right-40"
        >
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className={`w-96 h-96 rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-purple-600/25' : 'bg-purple-300/40'
            }`}
          />
        </motion.div>
        <motion.div
          animate={{
            x: mousePosition.x * -60,
            y: mousePosition.y * -60,
          }}
          transition={{ type: "spring", damping: 40 }}
          className="absolute -bottom-40 -left-40"
        >
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className={`w-96 h-96 rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-blue-600/25' : 'bg-blue-300/40'
            }`}
          />
        </motion.div>
        <motion.div
          animate={{
            x: mousePosition.x * 30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", damping: 40 }}
          className="absolute top-1/3 left-1/3"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
            className={`w-72 h-72 rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-cyan-600/20' : 'bg-cyan-300/30'
            }`}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-6 pb-16 lg:pt-8 lg:pb-20">
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Badge superior */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center mb-6"
          >
            <span className={`
              inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono
              ${theme === 'dark'
                ? 'bg-gray-800/80 text-gray-300 border border-gray-700'
                : 'bg-white/80 text-gray-700 border border-gray-200'
              }
              backdrop-blur-sm
            `}>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {language === 'es' ? 'Disponible para trabajar' : 'Available for work'}
            </span>
          </motion.div>

          {/* Contenido principal */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Columna izquierda - Texto */}
            <motion.div 
              variants={fadeInUp}
              className="text-center md:text-left"
            >
              <h1 className={`
                text-4xl md:text-5xl lg:text-6xl font-bold mb-3
                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
              `}>
                Marcelo{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Palma
                </span>
              </h1>
              
              <p className={`
                text-lg md:text-xl mb-5 flex flex-wrap items-center justify-center md:justify-start gap-x-2
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
              `}>
                <RotatingRole />
                <span>· {projectCount} {t('hero.projects')}</span>
              </p>

              <p className={`
                text-sm md:text-base mb-6 leading-relaxed max-w-md mx-auto md:mx-0
                ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
              `}>
                {t('hero.description')}
              </p>

              {/* Botones CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
                <Magnetic>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="#projects"
                      className="relative group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium overflow-hidden"
                    >
                      <span className="relative z-10">{t('hero.viewProjects')}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                        initial={{ x: '100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                </Magnetic>

                <Magnetic>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="#contact"
                      className={`
                        inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 rounded-lg font-medium transition-all
                        ${theme === 'dark'
                          ? 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10'
                          : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'}
                      `}
                    >
                      {t('hero.contact')}
                    </Link>
                  </motion.div>
                </Magnetic>
              </div>

              {/* Stats rápidas */}
              <div className="flex gap-5 justify-center md:justify-start">
                <Counter value={270} label={t('hero.stats.tests')} start={mounted} />
                <Counter value={projectCount} label={t('hero.stats.projects')} start={mounted} />
                <Counter value={7} label={t('hero.stats.stacks')} start={mounted} />
              </div>
            </motion.div>

            {/* Columna derecha - Foto y tecnologías flotantes */}
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              {/* Foto con marco animado */}
              <div className="relative w-72 h-72 mx-auto">
                {/* Spotlight que sigue al mouse sobre la foto */}
                <motion.div
                  animate={{
                    x: mousePosition.x * 24,
                    y: mousePosition.y * 24,
                  }}
                  transition={{ type: "spring", damping: 30 }}
                  className="absolute -inset-6 rounded-full pointer-events-none z-10"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(168,85,247,0.25), transparent 65%)',
                    mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
                  }}
                />
                {/* Anillos rotatorios */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
                />
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border-2 border-dashed border-purple-500/30"
                />
                
                {/* Foto */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/me.jpg"
                    alt="Marcelo Palma"
                    fill
                    sizes="288px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Tecnologías flotantes - Reposicionadas para evitar superposición */}
                {/* Next.js - Arriba derecha */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-xl z-20"
                >
                  <SiNextdotjs className="text-2xl" aria-label="Next.js" />
                </motion.div>

                {/* Node.js - Abajo izquierda */}
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-xl z-20"
                >
                  <FaNodeJs className="text-2xl" aria-label="Node.js" />
                </motion.div>

                {/* TypeScript - Derecha centro */}
                <motion.div
                  animate={{ 
                    x: [0, 15, 0],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white shadow-xl z-20"
                >
                  <SiTypescript className="text-xl" aria-label="TypeScript" />
                </motion.div>

                {/* Docker - Izquierda centro */}
                <motion.div
                  animate={{ 
                    x: [0, -15, 0],
                    rotate: [0, -15, 15, 0]
                  }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute top-1/3 -left-8 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white shadow-xl z-20"
                >
                  <FaDocker className="text-xl" aria-label="Docker" />
                </motion.div>

                {/* Tailwind - Abajo derecha (nuevo) */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-4 right-8 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-xl z-20"
                >
                  <SiTailwindcss className="text-lg" aria-label="Tailwind CSS" />
                </motion.div>

                {/* React - Arriba izquierda (nuevo) */}
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    x: [0, 8, 0]
                  }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  className="absolute -top-4 left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-xl z-20"
                >
                  <FaReact className="text-lg" aria-label="React" />
                </motion.div>
              </div>

              {/* Redes sociales - MISMO COLOR HOVER para ambos */}
              <motion.div 
                variants={fadeInUp}
                className="flex justify-center gap-4 mt-6"
              >
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://github.com/MarceloAdan73"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub (nueva pestaña)"
                  title="GitHub"
                  className={`
                    p-3 rounded-lg transition-all relative group overflow-hidden
                    ${theme === 'dark'
                      ? 'bg-gray-800 text-gray-300'
                      : 'bg-gray-100 text-gray-600'}
                  `}
                >
                  {/* Fondo gradiente en hover - MISMO PARA AMBOS */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <FaGithub className="text-xl relative z-10 group-hover:text-white transition-colors duration-300" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  href="https://linkedin.com/in/marcelo-adan-palma"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn (nueva pestaña)"
                  title="LinkedIn"
                  className={`
                    p-3 rounded-lg transition-all relative group overflow-hidden
                    ${theme === 'dark'
                      ? 'bg-gray-800 text-gray-300'
                      : 'bg-gray-100 text-gray-600'}
                  `}
                >
                  {/* Fondo gradiente en hover - MISMO PARA AMBOS */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <FaLinkedin className="text-xl relative z-10 group-hover:text-white transition-colors duration-300" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://nodoweb.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nodoweb Digital (nueva pestaña)"
                  title="Nodoweb Digital"
                  className={`
                    p-3 rounded-lg transition-all relative group overflow-hidden
                    ${theme === 'dark'
                      ? 'bg-gray-800 text-gray-300'
                      : 'bg-gray-100 text-gray-600'}
                  `}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <FaGlobe className="text-xl relative z-10 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Terminal mockup — franja de una línea a lo ancho */}
          <div className="mt-6 lg:mt-8">
            <TerminalCard />
          </div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Link
              href="#about"
              className="flex flex-col items-center gap-2 group"
            >
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`text-xs uppercase tracking-wider ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                } group-hover:text-blue-500 transition-colors`}
              >
                Scroll
              </motion.span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaArrowDown className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                } group-hover:text-blue-500 transition-colors`} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;