"use client";

import { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { 
  FaSun, 
  FaMoon, 
  FaCog,
  FaTimes
} from 'react-icons/fa';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss,
  SiTypescript,
  SiDocker
} from 'react-icons/si';
import { MdTranslate } from 'react-icons/md';
import { BsLightningCharge } from 'react-icons/bs';
import { HiOutlineChip } from 'react-icons/hi';

export default function FloatingControls() {
  const { language, toggleLanguage, theme, toggleTheme } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Solución para hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // Durante SSR, renderizar un placeholder vacío
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Versión Desktop - Lateral izquierdo */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] hidden lg:block">
        <div className="relative group">
          
          {/* Efectos decorativos igual que scroll to top */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          <div className="absolute -inset-2 border border-transparent border-t-blue-500 border-r-purple-500 rounded-2xl animate-spin-slow opacity-50"></div>
          <div className="absolute -inset-3 border border-transparent border-b-blue-500 border-l-purple-500 rounded-2xl animate-spin-slower opacity-30"></div>
          
          {/* Panel principal */}
          <div 
            className={`relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 ${
              isOpen ? 'w-56 p-3' : 'w-12 p-2'
            }`}
          >
            {/* Cabecera con indicadores */}
            <div className="flex items-center justify-between mb-2 px-1">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                {isOpen && (
                  <span className="text-[8px] font-mono text-gray-600 dark:text-gray-400">
                    online
                  </span>
                )}
              </div>
              
              {/* Chip tecnológico */}
              <div className="flex items-center gap-1">
                {isOpen ? (
                  <>
                    <SiReact className="text-[8px] text-blue-400" aria-label="React" />
                    <SiNextdotjs className="text-[8px] text-gray-600 dark:text-gray-400" aria-label="Next.js" />
                    <SiTailwindcss className="text-[8px] text-cyan-400" aria-label="Tailwind CSS" />
                  </>
                ) : (
                  <HiOutlineChip className="text-xs text-gray-400" />
                )}
              </div>
            </div>

            {/* Botón toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full mb-2 group relative overflow-hidden rounded-xl transition-all duration-300 p-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="flex items-center gap-2">
                <div className={`relative flex items-center justify-center transition-all duration-500 ${
                  isOpen ? 'w-5 h-5' : 'w-6 h-6 mx-auto'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-xs">
                    <FaCog className={`${isOpen ? 'text-xs' : 'text-xs'} group-hover:rotate-180 transition-transform duration-500`} />
                  </div>
                </div>
                {isOpen && (
                  <span className="text-[10px] font-medium text-gray-700 dark:text-gray-200">
                    Controles
                  </span>
                )}
              </div>
            </button>

            {/* Controles (solo visibles cuando está abierto) */}
            {isOpen && (
              <div className="space-y-1.5 mt-2 pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
                
                {/* Botón de idioma */}
                <button
                  onClick={toggleLanguage}
                  className="relative w-full group overflow-hidden rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300 p-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <MdTranslate className="text-xs" />
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-[10px] font-medium text-gray-700 dark:text-gray-200">
                        {language === 'es' ? 'Español' : 'English'}
                      </p>
                    </div>
                    <div className="text-[8px] font-mono bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-300">
                      {language === 'es' ? 'ES' : 'EN'}
                    </div>
                  </div>
                </button>

                {/* Botón de tema */}
                <button
                  onClick={toggleTheme}
                  className="relative w-full group overflow-hidden rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300 p-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${
                        theme === 'light' 
                          ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white' 
                          : 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
                      }`}>
                        {theme === 'light' ? <FaMoon className="text-xs" aria-label="Modo oscuro" /> : <FaSun className="text-xs" aria-label="Modo claro" />}
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-[10px] font-medium text-gray-700 dark:text-gray-200">
                        {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
                      </p>
                    </div>
                    <div className={`text-[8px] font-mono px-1.5 py-0.5 rounded ${
                      theme === 'light'
                        ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                        : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                      {theme === 'light' ? '🌙' : '☀️'}
                    </div>
                  </div>
                </button>

                {/* Footer tecnológico */}
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center gap-1">
                    <BsLightningCharge className="text-[8px] text-yellow-500" />
                    <span className="text-[6px] font-mono text-gray-500 dark:text-gray-400">
                      v2.0
                    </span>
                  </div>
                  <span className="text-[6px] font-mono text-gray-500 dark:text-gray-400">
                    AI_READY
                  </span>
                </div>
              </div>
            )}

            {/* Versión colapsada */}
            {!isOpen && (
              <div className="flex flex-col items-center gap-1.5 mt-1">
                <div className="relative group">
                  <div 
                    className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                    onClick={toggleLanguage}
                  >
                    <MdTranslate className="text-xs" />
                  </div>
                  <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[70]">
                    {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                  </span>
                </div>

                <div className="relative group">
                  <div 
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform ${
                      theme === 'light' 
                        ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white' 
                        : 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
                    }`}
                    onClick={toggleTheme}
                  >
                    {theme === 'light' ? <FaMoon className="text-xs" aria-label="Modo oscuro" /> : <FaSun className="text-xs" aria-label="Modo claro" />}
                  </div>
                  <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[70]">
                    {theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Versión Móvil - Botón flotante */}
      <div className="fixed bottom-24 right-6 z-[70] lg:hidden">
        <div className="relative group">
          {/* Efectos decorativos igual que scroll to top */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          <div className="absolute -inset-2 border-2 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin-slow opacity-50"></div>
          <div className="absolute -inset-3 border-2 border-transparent border-b-blue-500 border-l-purple-500 rounded-full animate-spin-slower opacity-30"></div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-12 active:scale-95"
            aria-label="Controles"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <HiOutlineChip className="text-xl" aria-label="Controles" />
            )}
            
            {/* Puntos decorativos */}
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-150"></div>
          </button>
        </div>
      </div>

      {/* Menú móvil expandido */}
      {isMobileMenuOpen && (
        <div className="fixed bottom-40 right-6 z-[80] lg:hidden">
          <div className="relative">
            {/* Efectos decorativos */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur-xl animate-pulse-slow"></div>
            <div className="absolute -inset-3 border border-transparent border-t-blue-500 border-r-purple-500 rounded-2xl animate-spin-slow opacity-30"></div>
            
            <div className="relative w-56 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-3">
              
              {/* Cabecera */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-[10px] font-mono bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                    CONTROLS
                  </span>
                </div>
                
                <div className="flex items-center gap-1">
                  <SiReact className="text-xs text-blue-400" />
                  <SiNextdotjs className="text-xs text-gray-600 dark:text-gray-400" />
                  <SiTypescript className="text-xs text-blue-600" aria-label="TypeScript" />
                  <SiDocker className="text-xs text-blue-500" aria-label="Docker" />
                </div>
              </div>

              <div className="relative h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-3"></div>

              {/* Controles móviles */}
              <div className="space-y-2">
                {/* Botón de idioma */}
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative w-full group overflow-hidden rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 p-2 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <MdTranslate className="text-sm" aria-label="Cambiar idioma" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
                        {language === 'es' ? 'Español' : 'English'}
                      </p>
                    </div>
                    <div className="text-xs font-mono bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300">
                      {language === 'es' ? 'ES' : 'EN'}
                    </div>
                  </div>
                </button>

                {/* Botón de tema */}
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative w-full group overflow-hidden rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-all duration-300 p-2 border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${
                        theme === 'light' 
                          ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white' 
                          : 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
                      }`}>
                        {theme === 'light' ? <FaMoon className="text-sm" /> : <FaSun className="text-sm" />}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gradient-to-r from-amber-400 to-purple-500 rounded-full blur-sm animate-pulse"></div>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs font-medium text-gray-800 dark:text-gray-200">
                        {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
                      </p>
                    </div>
                    <div className={`text-xs font-mono px-2 py-1 rounded ${
                      theme === 'light'
                        ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                        : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                      {theme === 'light' ? '🌙' : '☀️'}
                    </div>
                  </div>
                </button>
              </div>

              {/* Footer */}
              <div className="mt-3 pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BsLightningCharge className="text-yellow-500 text-xs" aria-label="Versión" />
                    <span className="text-[8px] font-mono text-gray-500 dark:text-gray-400">
                      v2.0.1
                    </span>
                  </div>
                  <span className="text-[8px] font-mono text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <SiReact className="text-[8px] text-blue-400" aria-label="React" />
                    AI_READY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}