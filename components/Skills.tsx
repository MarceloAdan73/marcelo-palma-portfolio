"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiJsonwebtokens,
  SiPrisma,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiJest,
  SiTestinglibrary,
  SiLinux,
  SiAngular,
  SiVuedotjs,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiCypress,
  SiEslint,
  SiPrettier,
  SiFigma,
} from "react-icons/si";
import { VscTerminalCmd, VscVscode, VscCloud } from "react-icons/vsc";
import {
  TbApi,
  TbTestPipe,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandDocker,
  TbBrandGit,
  TbBrandTypescript,
  TbBrandPython,
  TbRadar,
  TbChartBar,
} from "react-icons/tb";
import {
  FaPlay,
  FaDatabase,
  FaCloud,
  FaCode,
  FaServer,
  FaRocket,
  FaCrown,
  FaGraduationCap,
  FaChartPie,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";
import { useApp } from "@/context/AppContext";

interface SkillItem {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
  projects?: string[];
  years?: number;
}

interface SkillsData {
  frontend: SkillItem[];
  backend: SkillItem[];
  tools: SkillItem[];
  testing: SkillItem[];
  databases: SkillItem[];
  devops: SkillItem[];
}

interface Category {
  id: keyof SkillsData;
  name: string;
  nameEn: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

// Componente RadarChart definido FUERA del componente principal
interface Averages {
  frontend: number;
  backend: number;
  databases: number;
  devops: number;
  tools: number;
  testing: number;
}

// Componente RadarChart definido FUERA del componente principal
const RadarChart = ({
  averages,
  theme,
  isInView,
}: {
  averages: {
    frontend: number;
    backend: number;
    databases: number;
    devops: number;
    tools: number;
    testing: number;
  };
  theme: string;
  isInView: boolean;
}) => {
  const size = 400; // Aumentado de 300 a 400 para dar más espacio
  const center = size / 2;
  const radius = 140; // Aumentado de 120 a 140
  const categories_radar = [
    "Frontend",
    "Backend",
    "DB",
    "DevOps",
    "Tools",
    "Testing",
  ];
  const values = [
    averages.frontend / 100,
    averages.backend / 100,
    averages.databases / 100,
    averages.devops / 100,
    averages.tools / 100,
    averages.testing / 100,
  ];

  const points = values
    .map((value, i) => {
      const angle = (i * 60 - 90) * (Math.PI / 180);
      const x = center + radius * value * Math.cos(angle);
      const y = center + radius * value * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1 }}
      className="mx-auto w-full max-w-[400px] h-auto" // Ajuste responsive
    >
      {/* Grid circular */}
      {[0.25, 0.5, 0.75, 1].map((level, i) => (
        <circle
          key={i}
          cx={center}
          cy={center}
          r={radius * level}
          fill="none"
          stroke={theme === "dark" ? "#374151" : "#E5E7EB"}
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      ))}

      {/* Líneas de los ejes */}
      {categories_radar.map((_, i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={x}
            y2={y}
            stroke={theme === "dark" ? "#374151" : "#E5E7EB"}
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        );
      })}

      {/* Área de habilidades */}
      <motion.polygon
        points={points}
        fill="url(#radarGradient)"
        stroke="url(#radarStrokeGradient)"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.8 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Puntos en las habilidades */}
      {values.map((value, i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        const x = center + radius * value * Math.cos(angle);
        const y = center + radius * value * Math.sin(angle);
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="6"
            fill={theme === "dark" ? "#3B82F6" : "#2563EB"}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
          />
        );
      })}

      {/* Etiquetas - AHORA CON MÁS ESPACIO */}
      {categories_radar.map((cat, i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        // Aumentado de 30 a 50 píxeles de distancia para que no se corten
        const x = center + (radius + 50) * Math.cos(angle);
        const y = center + (radius + 50) * Math.sin(angle);

        // Ajustes específicos por posición para mejor legibilidad
        let textAnchor: "middle" | "start" | "end" = "middle";
        if (Math.abs(angle) < 0.1 || Math.abs(angle - Math.PI) < 0.1) {
          textAnchor = "middle";
        } else if (angle > 0 && angle < Math.PI) {
          textAnchor = "start";
        } else {
          textAnchor = "end";
        }

        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor={textAnchor}
            dominantBaseline="middle"
            className="text-xs sm:text-sm font-medium fill-current"
            fill={theme === "dark" ? "#9CA3AF" : "#4B5563"}
          >
            {cat}
          </text>
        );
      })}

      <defs>
        <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient
          id="radarStrokeGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof SkillsData>("frontend");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "radar">("grid");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, theme, language } = useApp();

  const skillsData: SkillsData = {
    frontend: [
      {
        name: "Next.js",
        level: 92,
        icon: <SiNextdotjs />,
        color: "from-gray-700 to-gray-900",
        years: 2,
        projects: ["Task Manager", "DevNotes", "Portfolio"],
      },
      {
        name: "TypeScript",
        level: 90,
        icon: <SiTypescript />,
        color: "from-blue-600 to-blue-800",
        years: 2,
        projects: ["Task Manager", "Angular Music", "Portfolio"],
      },
      {
        name: "React",
        level: 95,
        icon: <SiReact />,
        color: "from-blue-500 to-cyan-500",
        years: 3,
        projects: ["Markdown Converter", "Weather App", "Mini Projects"],
      },
      {
        name: "React Query",
        level: 85,
        icon: <SiReactquery />,
        color: "from-red-500 to-pink-500",
        years: 1,
        projects: ["Task Manager"],
      },
      {
        name: "Tailwind",
        level: 95,
        icon: <SiTailwindcss />,
        color: "from-teal-400 to-cyan-500",
        years: 2,
        projects: ["All Projects"],
      },
      {
        name: "Framer Motion",
        level: 80,
        icon: <SiFramer />,
        color: "from-purple-500 to-pink-500",
        years: 1,
        projects: ["Portfolio"],
      },
      {
        name: "Angular",
        level: 75,
        icon: <SiAngular />,
        color: "from-red-600 to-red-800",
        years: 1,
        projects: ["Music Player"],
      },
      {
        name: "Vue.js",
        level: 70,
        icon: <SiVuedotjs />,
        color: "from-green-500 to-emerald-500",
        years: 1,
        projects: ["Modern Blog"],
      },
      {
        name: "Redux",
        level: 85,
        icon: <SiRedux />,
        color: "from-purple-600 to-pink-600",
        years: 2,
        projects: ["Task Manager"],
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 88,
        icon: <SiNodedotjs />,
        color: "from-green-500 to-green-700",
        years: 2,
        projects: ["Task Manager", "Weather API"],
      },
      {
        name: "Express",
        level: 87,
        icon: <SiExpress />,
        color: "from-gray-600 to-gray-800",
        years: 2,
        projects: ["Task Manager"],
      },
      {
        name: "Python",
        level: 75,
        icon: <SiPython />,
        color: "from-yellow-500 to-blue-500",
        years: 1.5,
        projects: ["Weather App", "Django Library"],
      },
      {
        name: "FastAPI",
        level: 70,
        icon: <SiFastapi />,
        color: "from-green-600 to-teal-600",
        years: 1,
        projects: ["Modern Blog", "Weather App"],
      },
      {
        name: "JWT",
        level: 92,
        icon: <SiJsonwebtokens />,
        color: "from-red-500 to-orange-500",
        years: 2,
        projects: ["Task Manager", "Modern Blog"],
      },
      {
        name: "Prisma",
        level: 88,
        icon: <SiPrisma />,
        color: "from-blue-600 to-purple-600",
        years: 1.5,
        projects: ["Task Manager"],
      },
      {
        name: "REST APIs",
        level: 95,
        icon: <TbApi />,
        color: "from-blue-500 to-indigo-500",
        years: 3,
        projects: ["All Projects"],
      },
    ],
    databases: [
      {
        name: "PostgreSQL",
        level: 85,
        icon: <SiPostgresql />,
        color: "from-blue-700 to-blue-900",
        years: 2,
        projects: ["Task Manager", "Modern Blog"],
      },
      {
        name: "MongoDB",
        level: 70,
        icon: <SiMongodb />,
        color: "from-green-600 to-green-800",
        years: 1,
        projects: [],
      },
      {
        name: "MySQL",
        level: 75,
        icon: <SiMysql />,
        color: "from-blue-600 to-orange-600",
        years: 1.5,
        projects: ["Django Library"],
      },
      {
        name: "Prisma",
        level: 88,
        icon: <SiPrisma />,
        color: "from-blue-600 to-purple-600",
        years: 1.5,
        projects: ["Task Manager"],
      },
    ],
    devops: [
      {
        name: "Docker",
        level: 78,
        icon: <SiDocker />,
        color: "from-blue-500 to-cyan-500",
        years: 1,
        projects: ["Task Manager"],
      },
      {
        name: "Git/GitHub",
        level: 95,
        icon: <SiGit />,
        color: "from-orange-500 to-purple-600",
        years: 3,
        projects: ["All Projects"],
      },
      {
        name: "Linux/WSL",
        level: 88,
        icon: <SiLinux />,
        color: "from-orange-500 to-red-500",
        years: 2,
        projects: ["All Projects"],
      },
      {
        name: "CI/CD",
        level: 70,
        icon: <VscCloud />,
        color: "from-blue-500 to-purple-500",
        years: 1,
        projects: ["Task Manager"],
      },
      {
        name: "Vercel",
        level: 95,
        icon: <FaCloud />,
        color: "from-gray-700 to-gray-900",
        years: 2,
        projects: ["All Projects"],
      },
    ],
    tools: [
      {
        name: "VS Code",
        level: 98,
        icon: <VscVscode />,
        color: "from-blue-600 to-purple-600",
        years: 3,
        projects: ["All Projects"],
      },
      {
        name: "Terminal",
        level: 90,
        icon: <VscTerminalCmd />,
        color: "from-gray-600 to-gray-800",
        years: 3,
        projects: ["All Projects"],
      },
      {
        name: "ESLint",
        level: 90,
        icon: <SiEslint />,
        color: "from-purple-600 to-blue-600",
        years: 2,
        projects: ["All Projects"],
      },
      {
        name: "Prettier",
        level: 95,
        icon: <SiPrettier />,
        color: "from-pink-500 to-orange-500",
        years: 2,
        projects: ["All Projects"],
      },
      {
        name: "Figma",
        level: 75,
        icon: <SiFigma />,
        color: "from-purple-500 to-pink-500",
        years: 1,
        projects: ["Portfolio"],
      },
    ],
    testing: [
      {
        name: "Jest",
        level: 88,
        icon: <SiJest />,
        color: "from-red-500 to-orange-500",
        years: 1.5,
        projects: ["Task Manager"],
      },
      {
        name: "RTL",
        level: 85,
        icon: <SiTestinglibrary />,
        color: "from-pink-500 to-purple-500",
        years: 1.5,
        projects: ["Task Manager"],
      },
      {
        name: "Supertest",
        level: 82,
        icon: <TbApi />,
        color: "from-green-500 to-teal-500",
        years: 1,
        projects: ["Task Manager"],
      },
      {
        name: "Playwright",
        level: 65,
        icon: <FaPlay />,
        color: "from-green-600 to-emerald-600",
        years: 0.5,
        projects: [],
      },
      {
        name: "Cypress",
        level: 65,
        icon: <SiCypress />,
        color: "from-green-500 to-teal-500",
        years: 0.5,
        projects: [],
      },
    ],
  };

  const categories: Category[] = [
  { 
    id: 'frontend', 
    name: 'Frontend', 
    nameEn: 'Frontend', 
    icon: <TbBrandReact className="text-lg" aria-label="Frontend" />, 
    description: t('skills.desc.frontend'), 
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    id: 'backend', 
    name: 'Backend', 
    nameEn: 'Backend', 
    icon: <TbBrandNodejs className="text-lg" aria-label="Backend" />, 
    description: t('skills.desc.backend'), // ← AHORA USA TRADUCCIÓN
    color: 'from-green-500 to-emerald-500'
  },
  { 
    id: 'databases', 
    name: 'Bases de Datos', 
    nameEn: 'Databases', 
    icon: <FaDatabase className="text-lg" aria-label="Bases de datos" />, 
    description: t('skills.desc.databases'), // ← AHORA USA TRADUCCIÓN
    color: 'from-blue-700 to-purple-700'
  },
  { 
    id: 'devops', 
    name: 'DevOps', 
    nameEn: 'DevOps', 
    icon: <FaCloud className="text-lg" aria-label="DevOps" />, 
    description: t('skills.desc.devops'), // ← AHORA USA TRADUCCIÓN
    color: 'from-orange-500 to-red-500'
  },
  { 
    id: 'tools', 
    name: 'Herramientas', 
    nameEn: 'Tools', 
    icon: <VscTerminalCmd className="text-lg" aria-label="Herramientas" />, 
    description: t('skills.desc.tools'), // ← AHORA USA TRADUCCIÓN
    color: 'from-purple-500 to-pink-500'
  },
  { 
    id: 'testing', 
    name: 'Testing', 
    nameEn: 'Testing', 
    icon: <SiJest className="text-lg" />, 
    description: t('skills.desc.testing'), // ← AHORA USA TRADUCCIÓN
    color: 'from-red-500 to-yellow-500'
  },
];

  // Calcular totales para el radar
  const calculateAverages = () => {
    return {
      frontend:
        skillsData.frontend.reduce((acc, s) => acc + s.level, 0) /
        skillsData.frontend.length,
      backend:
        skillsData.backend.reduce((acc, s) => acc + s.level, 0) /
        skillsData.backend.length,
      databases:
        skillsData.databases.reduce((acc, s) => acc + s.level, 0) /
        skillsData.databases.length,
      devops:
        skillsData.devops.reduce((acc, s) => acc + s.level, 0) /
        skillsData.devops.length,
      tools:
        skillsData.tools.reduce((acc, s) => acc + s.level, 0) /
        skillsData.tools.length,
      testing:
        skillsData.testing.reduce((acc, s) => acc + s.level, 0) /
        skillsData.testing.length,
    };
  };

  const averages = calculateAverages();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 relative overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Fondo tecnológico */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`
          absolute inset-0 opacity-5
          ${
            theme === "dark"
              ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMjBhMjAgMjAgMCAwIDEgMjAgMjAgMjAgMjAgMCAwIDEtNDAgMCAyMCAyMCAwIDAgMSAyMC0yMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNmYjlmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjIiLz48L3N2Zz4=')"
              : "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMjBhMjAgMjAgMCAwIDEgMjAgMjAgMjAgMjAgMCAwIDEtNDAgMCAyMCAyMCAwIDAgMSAyMC0yMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')"
          }
          bg-repeat
        `}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("skills.title")}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p
              className={`mt-4 text-base ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t("skills.subtitle")}
            </p>
          </motion.div>

          {/* Control de vista */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-8"
          >
            <button
              onClick={() => setViewMode("grid")}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all
                flex items-center gap-2
                ${
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : theme === "dark"
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }
              `}
            >
              <TbChartBar />
              Grid View
            </button>
            <button
              onClick={() => setViewMode("radar")}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all
                flex items-center gap-2
                ${
                  viewMode === "radar"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : theme === "dark"
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }
              `}
            >
              <TbRadar />
              Radar View
            </button>
          </motion.div>

          {viewMode === "radar" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-12 overflow-visible" // Añadido overflow-visible
            >
              <div
                className={`
      p-8 rounded-2xl backdrop-blur-lg overflow-visible // Añadido overflow-visible
      ${
        theme === "dark"
          ? "bg-gray-800/50 border border-gray-700/50"
          : "bg-white/50 border border-gray-200/50"
      }
    `}
              >
                {/* RadarChart ahora está definido FUERA del componente */}
                <div className="overflow-visible">
                  {" "}
                  {/* Contenedor adicional para asegurar */}
                  <RadarChart
                    averages={averages}
                    theme={theme}
                    isInView={isInView}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
                  {Object.entries(averages).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {Math.round(value)}%
                      </div>
                      <div
                        className={`text-xs capitalize ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Categorías (solo visible en grid view) */}
          {viewMode === "grid" && (
            <>
              <motion.div
                className="flex flex-wrap justify-center gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                      relative group px-5 py-3 rounded-xl text-sm font-medium transition-all
                      overflow-hidden
                      ${
                        activeCategory === category.id
                          ? theme === "dark"
                            ? "text-white"
                            : "text-white"
                          : theme === "dark"
                            ? "text-gray-400 hover:text-white bg-gray-800/50"
                            : "text-gray-600 hover:text-gray-900 bg-gray-100"
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Fondo gradiente para el activo */}
                    {activeCategory === category.id && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${category.color}`}
                        layoutId="activeCategory"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-base">{category.icon}</span>
                      <span>
                        {language === "es" ? category.name : category.nameEn}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </motion.div>

              {/* Descripción de categoría */}
              <motion.p
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center text-sm mb-8 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {categories.find((c) => c.id === activeCategory)?.description}
              </motion.p>
            </>
          )}

          {/* Skills grid (solo visible en grid view) */}
          {viewMode === "grid" && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {skillsData[activeCategory].map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    className={`
                      relative p-6 rounded-xl backdrop-blur-lg overflow-hidden cursor-pointer
                      ${
                        theme === "dark"
                          ? "bg-gray-800/50 border border-gray-700/50 hover:border-gray-600"
                          : "bg-white/50 border border-gray-200/50 hover:border-gray-300"
                      }
                      transition-all shadow-lg hover:shadow-2xl
                    `}
                  >
                    {/* Efecto de brillo en hover */}
                    <motion.div
                      animate={
                        hoveredSkill === skill.name
                          ? {
                              opacity: [0, 0.5, 0],
                              scale: [1, 1.5, 1],
                            }
                          : {}
                      }
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />

                    {/* Icono y nombre */}
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`
                          w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color}
                          flex items-center justify-center text-white text-2xl
                          shadow-lg
                        `}
                      >
                        {skill.icon}
                      </motion.div>
                      <div>
                        <h3
                          className={`font-bold text-lg ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {skill.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`text-xs ${
                              theme === "dark"
                                ? "text-gray-500"
                                : "text-gray-400"
                            }`}
                          >
                            {skill.years} {skill.years === 1 ? "año" : "años"}
                          </span>
                          {skill.level >= 90 && (
                            <span className="flex items-center gap-1 text-xs text-yellow-500">
                              <FaCrown /> Expert
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Barra de progreso líquida */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span
                          className={
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }
                        >
                          Dominio
                        </span>
                        <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`
                        w-full h-3 rounded-full overflow-hidden
                        ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}
                      `}
                      >
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        />
                      </div>
                    </div>

                    {/* Proyectos relacionados (aparecen en hover) */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={
                        hoveredSkill === skill.name
                          ? { opacity: 1, height: "auto" }
                          : {}
                      }
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p
                          className={`text-xs mb-2 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Proyectos destacados:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {skill.projects?.map((project, i) => (
                            <span
                              key={i}
                              className={`
                                px-2 py-1 text-[10px] rounded-full
                                ${
                                  theme === "dark"
                                    ? "bg-gray-700 text-gray-300"
                                    : "bg-gray-100 text-gray-700"
                                }
                              `}
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Badge de nivel */}
                    <div
                      className={`
                      absolute top-3 right-3 text-[10px] font-medium px-2 py-1 rounded-full
                      ${
                        theme === "dark"
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                    >
                      {skill.level >= 90
                        ? "⚡ Experto"
                        : skill.level >= 75
                          ? "📈 Avanzado"
                          : "🌱 Intermedio"}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Stats rápidas */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              {
                value: "20+",
                label: language === "es" ? "Tecnologías" : "Technologies",
                icon: <FaCode />,
              },
              {
                value: "6",
                label: language === "es" ? "Categorías" : "Categories",
                icon: <FaChartPie />,
              },
              {
                value: "86+",
                label: language === "es" ? "Tests" : "Tests",
                icon: <SiJest />,
              },
              {
                value: "3",
                label: language === "es" ? "Años" : "Years",
                icon: <FaGraduationCap />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`
                  p-5 rounded-xl text-center backdrop-blur-lg
                  ${
                    theme === "dark"
                      ? "bg-gray-800/50 border border-gray-700/50"
                      : "bg-gray-50/50 border border-gray-200/50"
                  }
                `}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="text-2xl text-blue-500 mb-2"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div
                  className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
