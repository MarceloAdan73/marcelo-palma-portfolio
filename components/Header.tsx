"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaCode, FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { MdTranslate } from 'react-icons/md';
import { useApp } from '@/context/AppContext';


interface NavItem {
  name: string;
  href: string;
  key: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { t, language, theme, toggleLanguage } = useApp();
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  
  // Para la barra de progreso de lectura
  const { scrollYProgress } = useScroll();
  const [readingProgress, setReadingProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setReadingProgress(latest * 100);
  });

  // Cerrar menú al hacer clic fuera - MEJORADO
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Si el menú está abierto y el clic NO fue en el botón ni en el menú
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target as Node) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Prevenir scroll cuando el menú está abierto
    const handleBodyScroll = () => {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    handleBodyScroll(); // Aplicar inmediatamente
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset'; // Limpiar al desmontar
    };
  }, [isMenuOpen]);

  // Efecto para cerrar menú al hacer scroll (solo si está abierto)
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false); // Cerrar menú al hacer scroll
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: t('nav.home'), href: '#hero', key: 'home' },
    { name: t('nav.about'), href: '#about', key: 'about' },
    { name: t('nav.skills'), href: '#skills', key: 'skills' },
    { name: t('nav.projects'), href: '#projects', key: 'projects' },
    { name: t('nav.contact'), href: '#contact', key: 'contact' },
  ];

  // Variantes de animación para el menú móvil
const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
      // Sin ease - usa el valor por defecto
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
      // Sin ease - usa el valor por defecto
    }
  }
};

  // Función segura para cerrar menú
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <motion.header
      ref={headerRef}
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${scrolled 
          ? theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-xl shadow-2xl py-2 border-b border-gray-800/50' 
            : 'bg-white/80 backdrop-blur-xl shadow-2xl py-2 border-b border-gray-200/50'
          : theme === 'dark'
            ? 'bg-transparent py-4'
            : 'bg-transparent py-4'
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Barra de progreso de lectura */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        style={{ width: `${readingProgress}%` }}
        initial={{ width: 0 }}
      />

      {/* Efecto de borde brillante cuando está scrolleado */}
      {scrolled && (
        <motion.div
          className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo con animación 3D */}
          <Link href="#hero" className="relative group" onClick={closeMenu}>
            <motion.div
              className="flex items-center gap-2"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="relative"
                variants={{
                  rest: { rotate: 0 },
                  hover: { rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                  <SiNextdotjs className="text-lg" aria-label="Next.js logo" />
                </div>
              </motion.div>
              
              <motion.span
                className={`font-bold text-lg hidden sm:block tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
                variants={{
                  rest: { x: 0 },
                  hover: { x: 5, transition: { duration: 0.2 } }
                }}
              >
                Marcelo<span className="text-blue-500 dark:text-blue-400 ml-1">Palma</span>
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.div
                key={item.key}
                className="relative"
                onHoverStart={() => setHoveredItem(item.key)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium transition-colors relative z-10
                    ${activeSection === item.href.substring(1)
                      ? theme === 'dark'
                        ? 'text-white'
                        : 'text-gray-900'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
                
                {/* Indicador de sección activa (underline animado) */}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Efecto de hover para el fondo */}
                {hoveredItem === item.key && activeSection !== item.href.substring(1) && (
                  <motion.div
                    className={`
                      absolute inset-0 rounded-lg -z-0
                      ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100'}
                    `}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </motion.div>
            ))}
            
            {/* Separador vertical */}
            <div className={`
              w-px h-6 mx-2
              ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}
            `} />
            
            {/* Botón de idioma mejorado */}
            <motion.button
              onClick={toggleLanguage}
              className={`
                relative group px-3 py-2 rounded-lg text-sm font-medium
                flex items-center gap-2 transition-all
                ${theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdTranslate className="text-lg" aria-label={language === 'es' ? 'Cambiar idioma' : 'Change language'} />
              <span className="hidden lg:inline">{language === 'es' ? 'ES' : 'EN'}</span>
              
              {/* Efecto de brillo en hover */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>

            {/* Botón de GitHub con órbita */}
            <motion.div
              className="relative ml-1"
              whileHover="hover"
              initial="rest"
            >
              {/* Partículas orbitales */}
              <motion.div
                className="absolute inset-0 rounded-full"
                variants={{
                  rest: { rotate: 0 },
                  hover: { rotate: 360, transition: { duration: 2, repeat: Infinity, ease: "linear" } }
                }}
              >
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-500 rounded-full" />
              </motion.div>
              
              <motion.a
                href="https://github.com/MarceloAdan73"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  relative block p-2.5 rounded-lg transition-all z-10
                  ${theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white'
                  }
                `}
                aria-label="GitHub"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1, rotate: 5, transition: { duration: 0.2 } }
                }}
              >
                <FaGithub className="text-lg" aria-label="GitHub" />
              </motion.a>
            </motion.div>
          </div>

          {/* Mobile button con animación - AHORA CON REF */}
          <motion.button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all relative
              ${theme === 'dark'
                ? 'bg-gray-800/80 text-white hover:bg-gray-700 backdrop-blur-sm'
                : 'bg-white/80 text-gray-600 hover:bg-gray-100 backdrop-blur-sm border border-gray-200'
            }`}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile menu con animaciones mejoradas - SOLO RENDERIZAR SI ESTÁ ABIERTO */}
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={`
              md:hidden mt-3 rounded-xl overflow-hidden
              ${theme === 'dark'
                ? 'bg-gray-800/95 backdrop-blur-xl border border-gray-700'
                : 'bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl'
              }
            `}
          >
            <div className="p-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`
                      block px-4 py-3 text-base rounded-lg transition-all
                      ${activeSection === item.href.substring(1)
                        ? theme === 'dark'
                          ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-l-4 border-blue-500'
                          : 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 border-l-4 border-blue-500'
                        : theme === 'dark'
                          ? 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className={`
                my-2 border-t
                ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}
              `} />
              
              {/* Controles móviles mejorados */}
              <div className="grid grid-cols-2 gap-2 p-2">
                <motion.button
                  onClick={() => {
                    toggleLanguage();
                    closeMenu();
                  }}
                  className={`
                    flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm
                    ${theme === 'dark'
                      ? 'bg-gray-700/50 text-gray-300 hover:bg-blue-600/20 hover:text-blue-400'
                      : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MdTranslate />
                  <span>{language === 'es' ? 'ES' : 'EN'}</span>
                </motion.button>

                <motion.a
                  href="https://github.com/MarceloAdan73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm
                    ${theme === 'dark'
                      ? 'bg-gray-700/50 text-gray-300 hover:bg-blue-600 hover:text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closeMenu}
                >
                  <FaGithub />
                  <span>GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;