"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaCode, FaReact, FaNodeJs, FaPython, FaAngular, FaServer, FaDatabase,
  FaCrown, FaRobot, FaWhatsapp, FaTerminal, FaDocker, FaLock,
  FaExternalLinkAlt, FaGithub, FaArrowLeft, FaExclamationTriangle,
  FaCogs, FaRocket, FaLightbulb,
} from 'react-icons/fa';
import { TbTestPipe } from 'react-icons/tb';
import { useApp } from '@/context/AppContext';
import type { SanityProject } from '@/app/page';

const iconMap: Record<string, React.ReactNode> = {
  FaCode: <FaCode className="text-3xl" aria-hidden="true" />,
  FaReact: <FaReact className="text-3xl" aria-hidden="true" />,
  FaNodeJs: <FaNodeJs className="text-3xl" aria-hidden="true" />,
  FaPython: <FaPython className="text-3xl" aria-hidden="true" />,
  FaAngular: <FaAngular className="text-3xl" aria-hidden="true" />,
  FaServer: <FaServer className="text-3xl" aria-hidden="true" />,
  FaDatabase: <FaDatabase className="text-3xl" aria-hidden="true" />,
  FaCrown: <FaCrown className="text-3xl" aria-hidden="true" />,
  FaRobot: <FaRobot className="text-3xl" aria-hidden="true" />,
  FaWhatsapp: <FaWhatsapp className="text-3xl" aria-hidden="true" />,
  FaTerminal: <FaTerminal className="text-3xl" aria-hidden="true" />,
};

const sectionTitle = (theme: string) =>
  `text-lg font-bold mb-3 flex items-center gap-2 ${
    theme === 'dark' ? 'text-white' : 'text-gray-900'
  }`;

const card = (theme: string) =>
  `rounded-2xl p-6 ${
    theme === 'dark'
      ? 'bg-gray-800 border border-gray-700'
      : 'bg-white border border-gray-200'
  } shadow-lg`;

const bodyText = (theme: string) =>
  `text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`;

const ProjectDetail = ({ project }: { project: SanityProject }) => {
  const { t, theme, language } = useApp();

  const text = useMemo(
    () => ({
      description: language === 'es' ? project.description : project.descriptionEn || project.description,
      problem: language === 'es' ? project.problem : project.problemEn || project.problem,
      solution: language === 'es' ? project.solution : project.solutionEn || project.solution,
      result: language === 'es' ? project.result : project.resultEn || project.result,
    }),
    [language, project],
  );

  const metrics = project.metrics;
  const hasMetrics = Boolean(metrics && (metrics.tests || metrics.docker || metrics.jwt));
  const icon = project.icon && iconMap[project.icon] ? iconMap[project.icon] : iconMap.FaCode;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-5xl flex-1">
      {/* Volver a proyectos */}
      <Link
        href="/#projects"
        className={`inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors ${
          theme === 'dark'
            ? 'text-gray-400 hover:text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <FaArrowLeft className="text-xs" aria-hidden="true" />
        {t('project.back')}
      </Link>

      {/* Header del case study */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            {t('projects.caseStudy')}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 bg-yellow-500 text-yellow-950 text-[11px] font-semibold rounded-full">
              <FaCrown className="text-xs" aria-hidden="true" />
              {t('projects.featured')}
            </span>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className={`text-3xl md:text-4xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {project.title}
          </h1>
          {icon && (
            <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-r ${project.iconColor || 'from-blue-600 to-purple-600'} flex items-center justify-center text-white shadow-xl`}>
              {icon}
            </div>
          )}
        </div>

        {/* Métricas */}
        {hasMetrics && (
          <div className="flex flex-wrap gap-2 mt-5">
            {metrics!.tests && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow">
                <TbTestPipe className="text-sm" aria-hidden="true" />
                {metrics!.tests} {t('projects.tests')}
              </span>
            )}
            {metrics!.docker && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow">
                <FaDocker className="text-sm" aria-hidden="true" />
                Docker
              </span>
            )}
            {metrics!.jwt && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow">
                <FaLock className="text-sm" aria-hidden="true" />
                JWT
              </span>
            )}
          </div>
        )}
      </motion.div>

      {/* Imagen principal */}
      {project.imageUrl && (
        <div className="relative h-56 md:h-80 rounded-2xl overflow-hidden mb-10 shadow-2xl">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 64rem"
            priority
            className="object-cover"
          />
        </div>
      )}

      {/* Resumen */}
      {text.description && (
        <motion.section
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={sectionTitle(theme)}>
            <span className="w-1.5 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" aria-hidden="true" />
            {t('project.overview')}
          </h2>
          <p className={`${bodyText(theme)} text-base`}>{text.description}</p>
        </motion.section>
      )}

      {/* Problema + Solución */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={card(theme)}>
          <h2 className={sectionTitle(theme)}>
            <FaExclamationTriangle className="text-xl text-amber-500" aria-hidden="true" />
            {t('project.problem')}
          </h2>
          <p className={bodyText(theme)}>{text.problem}</p>
        </div>
        <div className={card(theme)}>
          <h2 className={sectionTitle(theme)}>
            <FaCogs className="text-xl text-blue-500" aria-hidden="true" />
            {t('project.solution')}
          </h2>
          <p className={bodyText(theme)}>{text.solution}</p>
        </div>
      </motion.div>

      {/* Resultado + Decisiones técnicas */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={`md:col-span-3 ${card(theme)}`}>
          <h2 className={sectionTitle(theme)}>
            <FaRocket className="text-xl text-emerald-500" aria-hidden="true" />
            {t('project.result')}
          </h2>
          <p className={bodyText(theme)}>{text.result}</p>
        </div>
        {project.highlights && project.highlights.length > 0 && (
          <div className={`md:col-span-2 ${card(theme)}`}>
            <h2 className={sectionTitle(theme)}>
              <FaLightbulb className="text-xl text-yellow-500" aria-hidden="true" />
              {t('project.highlights')}
            </h2>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className={`text-sm leading-relaxed flex items-start gap-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span className={`mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500`} aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      {/* Arquitectura */}
      {project.architectureImageUrl && (
        <motion.section
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`${sectionTitle(theme)} mb-4`}>
            <span className="w-1.5 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" aria-hidden="true" />
            {t('project.architecture')}
          </h2>
          <div className="relative h-56 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.architectureImageUrl}
              alt={`${project.title} architecture`}
              fill
              sizes="(max-width: 1024px) 100vw, 64rem"
              loading="lazy"
              className="object-contain bg-white"
            />
          </div>
        </motion.section>
      )}

      {/* Stack + CTA */}
      <motion.div
        className={`rounded-2xl p-6 ${
          theme === 'dark'
            ? 'bg-gray-800 border border-gray-700'
            : 'bg-white border border-gray-200'
        } shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className={`mb-3 text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t('project.techStack')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs rounded-lg ${
                  theme === 'dark'
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:justify-end shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              <FaExternalLinkAlt className="text-xs" aria-label={t('project.demo')} />
              {t('project.demo')}
            </a>
          )}
          <a
            href={project.githubUrl ?? project.liveUrl ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 text-sm font-medium rounded-xl flex items-center justify-center gap-2 border-2 transition-all ${
              theme === 'dark'
                ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <FaGithub className="text-sm" aria-label={t('project.code')} />
            {t('project.code')}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;