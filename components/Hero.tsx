"use client";

import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaDocker, FaArrowDown } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { useApp } from '@/context/AppContext';

const Hero: React.FC = () => {
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

  // Contador animado para stats
  const Counter = ({ value, label }: { value: number; label: string }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!mounted) return;
      
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
    }, [value, mounted]);
    
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

  if (!mounted) return null;

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
        
        {/* Círculos de luz que siguen al mouse */}
        <motion.div
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: "spring", damping: 50 }}
          className={`
            absolute -top-40 -right-40 w-96 h-96 rounded-full 
            ${theme === 'dark' 
              ? 'bg-purple-600/20' 
              : 'bg-purple-300/30'}
            blur-3xl
          `}
        />
        <motion.div
          animate={{
            x: mousePosition.x * -50,
            y: mousePosition.y * -50,
          }}
          transition={{ type: "spring", damping: 50 }}
          className={`
            absolute -bottom-40 -left-40 w-96 h-96 rounded-full 
            ${theme === 'dark' 
              ? 'bg-blue-600/20' 
              : 'bg-blue-300/30'}
            blur-3xl
          `}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
                text-4xl md:text-6xl font-bold mb-4
                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
              `}>
                Marcelo{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Palma
                </span>
              </h1>
              
              <p className={`
                text-lg md:text-xl mb-6
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
              `}>
                {t('hero.role')} · 7 {t('hero.projects')}
              </p>

              <p className={`
                text-sm md:text-base mb-8 leading-relaxed max-w-md mx-auto md:mx-0
                ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
              `}>
                {t('hero.description')}
              </p>

              {/* Botones CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 sm:flex-none"
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
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 sm:flex-none"
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
              </div>

              {/* Stats rápidas */}
              <div className="flex gap-6 justify-center md:justify-start">
                <Counter value={86} label="Tests" />
                <Counter value={8} label="Proyectos" />
                <Counter value={4} label="Stacks" />
              </div>
            </motion.div>

            {/* Columna derecha - Foto y tecnologías flotantes */}
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              {/* Foto con marco animado */}
              <div className="relative w-72 h-72 mx-auto">
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
                className="flex justify-center gap-4 mt-8"
              >
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://github.com/MarceloAdan73"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  href="https://linkedin.com/in/marcelo-palma"
                  target="_blank"
                  rel="noopener noreferrer"
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
              </motion.div>
            </motion.div>
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