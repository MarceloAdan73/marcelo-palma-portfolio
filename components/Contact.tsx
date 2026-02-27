"use client";

import { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useApp } from '@/context/AppContext';

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { t, theme, language } = useApp();

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t('contact.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className={`mt-4 text-base ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {language === 'es' ? '¿Hablamos?' : "Let's talk?"}
            </p>
          </div>

          {/* Métodos de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <motion.a
              href="mailto:marcelo-palma@live.com"
              className={`
                flex items-center gap-4 p-4 rounded-xl border transition-all group
                ${theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-600'
                  : 'bg-gray-50 border-gray-200 hover:border-blue-400'
                }
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center text-lg
                ${theme === 'dark'
                  ? 'bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
                  : 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                } transition-all
              `}>
                <FaEnvelope aria-label="Email" />
              </div>
              <div>
                <p className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {t('contact.email')}
                </p>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  marcelo-palma@live.com
                </p>
              </div>
            </motion.a>

            <motion.a
              href="tel:0291-4657839"
              className={`
                flex items-center gap-4 p-4 rounded-xl border transition-all group
                ${theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 hover:border-green-600'
                  : 'bg-gray-50 border-gray-200 hover:border-green-400'
                }
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center text-lg
                ${theme === 'dark'
                  ? 'bg-green-600/20 text-green-400 group-hover:bg-green-600 group-hover:text-white'
                  : 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white'
                } transition-all
              `}>
                <FaPhone aria-label="Teléfono" />
              </div>
              <div>
                <p className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {t('contact.phone')}
                </p>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  0291-4657839
                </p>
              </div>
            </motion.a>

            <motion.div
              className={`
                flex items-center gap-4 p-4 rounded-xl border
                ${theme === 'dark'
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-50 border-gray-200'
                }
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center text-lg
                ${theme === 'dark'
                  ? 'bg-purple-600/20 text-purple-400'
                  : 'bg-purple-100 text-purple-600'
                }
              `}>
                <FaMapMarkerAlt aria-label="Ubicación" />
              </div>
              <div>
                <p className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {t('contact.location')}
                </p>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  Bahía Blanca, Argentina
                </p>
              </div>
            </motion.div>
          </div>

          {/* Redes sociales + CTA */}
          <motion.div 
            className={`
              p-6 rounded-xl border flex flex-wrap items-center justify-between gap-4
              ${theme === 'dark'
                ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-600/20'
                : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
              }
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <span className={`text-sm ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {language === 'es' ? 'Redes:' : 'Social:'}
              </span>
              <a
                href="https://github.com/MarceloAdan73"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-2 rounded-lg transition-all
                  ${theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-600 hover:text-white'
                  }
                `}
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" aria-label="GitHub" />
              </a>
              <a
                href="https://linkedin.com/in/marcelo-palma"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-2 rounded-lg transition-all
                  ${theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-600 hover:text-white'
                  }
                `}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" aria-label="LinkedIn" />
              </a>
            </div>
            
            <a
              href="mailto:marcelo-palma@live.com"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              {language === 'es' ? 'Escríbeme' : 'Write me'}
            </a>
          </motion.div>

          {/* Footer */}
          <motion.p 
            className={`text-xs text-center mt-8 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
            }`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Next.js · TypeScript · Tailwind · 2026
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;