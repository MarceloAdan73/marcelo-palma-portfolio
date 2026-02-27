"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp, FaCompass } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';
import { useApp } from '@/context/AppContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t, theme, language } = useApp();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const halfPage = document.documentElement.scrollHeight / 2;
      setShowScrollTop(window.scrollY > halfPage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Durante SSR, renderizar versión base
  if (!mounted) {
    return (
      <footer className="relative w-full py-8 bg-gray-50 text-gray-600 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center text-xs">
            © {currentYear} Marcelo Palma.
          </div>
        </div>
      </footer>
    );
  }

  return (
    <>
      <footer className={`
        relative w-full py-8 transition-colors duration-300
        ${theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 border-t border-gray-800' 
          : 'bg-gradient-to-b from-gray-50 to-white text-gray-600 border-t border-gray-200'
        }
      `}>
        {/* Línea superior decorativa */}
        <div className={`
          absolute top-0 left-0 right-0 h-0.5
          ${theme === 'dark'
            ? 'bg-gradient-to-r from-transparent via-blue-600/50 to-transparent'
            : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'
          }
        `}></div>

        <div className="container mx-auto px-6 md:px-10 lg:px-14 max-w-7xl">
          
          {/* Grid principal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            
            {/* Info personal */}
            <div className="text-center md:text-left space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className={`
                  w-7 h-7 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600
                  flex items-center justify-center text-white shadow-md
                `}>
                  <MdWork className="text-xs" />
                </div>
                <p className={`
                  text-base font-semibold
                  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                `}>
                  Marcelo Palma
                </p>
              </div>
              
              <p className={`
                text-xs leading-relaxed max-w-xs mx-auto md:mx-0
                ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
              `}>
                {t('footer.role')} {language === 'es' 
                  ? 'especializado en aplicaciones full-stack con React, Next.js y TypeScript.' 
                  : 'specialized in full-stack applications with React, Next.js and TypeScript.'}
              </p>
              
              {/* Badge de ubicación */}
              <div className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono
                ${theme === 'dark'
                  ? 'bg-gray-800/80 text-gray-300 border border-gray-700'
                  : 'bg-gray-200/80 text-gray-700 border border-gray-300'
                }
              `}>
                <HiOutlineLocationMarker className="text-xs text-blue-500" />
                <span>{t('footer.location')}</span>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse ml-1"></span>
              </div>
            </div>

            {/* Links rápidos */}
            <div className="flex flex-col items-center md:items-center space-y-3">
              <div className="flex items-center gap-1.5">
                <FaCompass className={`
                  text-xs
                  ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}
                `} />
                <p className={`
                  text-xs font-semibold uppercase tracking-wider
                  ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
                `}>
                  {t('footer.explore')}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-1.5 text-center">
                <Link 
                  href="#hero" 
                  className={`
                    px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all duration-300
                    ${theme === 'dark' 
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 border border-gray-700'
                      : 'bg-gray-200/50 text-gray-700 hover:bg-gray-300 hover:text-gray-900 hover:scale-105 border border-gray-300'
                    }
                  `}
                >
                  {t('nav.home')}
                </Link>
                <Link 
                  href="#about" 
                  className={`
                    px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all duration-300
                    ${theme === 'dark' 
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 border border-gray-700'
                      : 'bg-gray-200/50 text-gray-700 hover:bg-gray-300 hover:text-gray-900 hover:scale-105 border border-gray-300'
                    }
                  `}
                >
                  {t('nav.about')}
                </Link>
                <Link 
                  href="#skills" 
                  className={`
                    px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all duration-300
                    ${theme === 'dark' 
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 border border-gray-700'
                      : 'bg-gray-200/50 text-gray-700 hover:bg-gray-300 hover:text-gray-900 hover:scale-105 border border-gray-300'
                    }
                  `}
                >
                  {t('nav.skills')}
                </Link>
                <Link 
                  href="#projects" 
                  className={`
                    px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all duration-300
                    ${theme === 'dark' 
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105 border border-gray-700'
                      : 'bg-gray-200/50 text-gray-700 hover:bg-gray-300 hover:text-gray-900 hover:scale-105 border border-gray-300'
                    }
                  `}
                >
                  {t('nav.projects')}
                </Link>
              </div>

              <p className={`
                text-[8px] font-mono
                ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}
              `}>
                · {t('footer.mainSections')} ·
              </p>
            </div>

            {/* Redes sociales */}
            <div className="flex flex-col items-center md:items-end space-y-3">
              <p className={`
                text-xs font-semibold uppercase tracking-wider
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
              `}>
                {t('footer.connect')}
              </p>
              
              <div className="flex gap-2">
                <a
                  href="https://github.com/MarceloAdan73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 rounded-lg transition-all duration-300 hover:scale-110
                    ${theme === 'dark'
                      ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white border border-gray-700'
                      : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white border border-gray-300'
                    }
                  `}
                  aria-label="GitHub"
                >
                  <FaGithub className="text-sm" />
                </a>
                <a
                  href="https://linkedin.com/in/marcelo-palma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 rounded-lg transition-all duration-300 hover:scale-110
                    ${theme === 'dark'
                      ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white border border-gray-700'
                      : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white border border-gray-300'
                    }
                  `}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-sm" />
                </a>
                <a
                  href="mailto:marcelo-palma@live.com"
                  className={`
                    p-2 rounded-lg transition-all duration-300 hover:scale-110
                    ${theme === 'dark'
                      ? 'bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white border border-gray-700'
                      : 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white border border-gray-300'
                    }
                  `}
                  aria-label="Email"
                >
                  <FaEnvelope className="text-sm" />
                </a>
              </div>

              {/* Badge de disponibilidad */}
              <div className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[8px] font-mono
                ${theme === 'dark'
                  ? 'bg-green-900/30 text-green-400 border border-green-800'
                  : 'bg-green-100 text-green-700 border border-green-300'
                }
              `}>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                {t('footer.available')}
              </div>
            </div>
          </div>

          {/* Separador principal */}
          <div className={`
            relative my-6 h-px
            ${theme === 'dark'
              ? 'bg-gradient-to-r from-transparent via-gray-700 to-transparent'
              : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
            }
          `}></div>

          {/* Copyright y tecnologías - CORREGIDO: Añadidos aria-label */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[8px]">
            <p className={`
              px-3 py-1.5 rounded-full
              ${theme === 'dark' ? 'text-gray-500 bg-gray-800/30' : 'text-gray-500 bg-gray-200/30'}
            `}>
              © {currentYear} Marcelo Palma. {t('footer.rights')}
            </p>
            
            <div className="flex items-center gap-3">
              <p className={`
                flex items-center gap-1 px-3 py-1.5 rounded-full
                ${theme === 'dark'
                  ? 'bg-gray-800/50 text-gray-400 border border-gray-700'
                  : 'bg-gray-200/50 text-gray-600 border border-gray-300'
                }
              `}>
                {t('footer.madeWith')} <FaHeart className="text-red-400 text-[8px]" /> {t('footer.in')}
              </p>
              
              <div className="flex items-center gap-1.5">
                <div className={`
                  w-5 h-5 rounded-lg flex items-center justify-center
                  ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}
                `}>
                  <SiNextdotjs 
                    className={`
                      text-[10px]
                      ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                    `}
                    aria-label="Next.js"  // ← AÑADIDO
                  />
                </div>
                <div className={`
                  w-5 h-5 rounded-lg flex items-center justify-center
                  ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}
                `}>
                  <SiTailwindcss 
                    className={`
                      text-[10px]
                      ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}
                    `}
                    aria-label="Tailwind CSS"  // ← AÑADIDO
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Espaciado inferior para móvil */}
          <div className="h-14 lg:h-0"></div>
        </div>
      </footer>

      {/* Botón scroll to top flotante */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40 lg:bottom-24 lg:right-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className="absolute -inset-2 border border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin-slow opacity-50"></div>
            <div className="absolute -inset-3 border border-transparent border-b-blue-500 border-l-purple-500 rounded-full animate-spin-slower opacity-30"></div>
            
            <button
              onClick={scrollToTop}
              className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-6 active:scale-95"
              aria-label={t('footer.backToTop')}
            >
              <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-150"></div>
            </button>
            
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[8px] px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-gray-700">
              {t('footer.backToTop')}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;