# 👨‍💻 Marcelo Palma - Portfolio Profesional

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-30.x-C21325?style=for-the-badge&logo=jest)](https://jestjs.io/)
[![Tests](https://img.shields.io/badge/tests-7%2F7-brightgreen?style=for-the-badge)](https://github.com/MarceloAdan73/marcelo-palma-portfolio/actions)
[![Accesibilidad](https://img.shields.io/badge/accesibilidad-WCAG%20AA-success?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

<div align="center">
  <img src="./public/me.jpg" alt="Marcelo Palma" width="200" style="border-radius: 50%; border: 4px solid #3b82f6;" />
  <h3>Desarrollador Full-Stack | Especialista en React, Next.js y TypeScript</h3>
  <p>⚡ 86+ tests automatizados · 8 proyectos completados · 15+ tecnologías dominadas</p>
</div>

## 📋 **Tabla de Contenidos**
- [🚀 Demo en Vivo](#-demo-en-vivo)
- [✨ Características](#-características)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🧪 Testing](#-testing)
- [♿ Accesibilidad](#-accesibilidad)
- [🚦 Instalación y Uso](#-instalación-y-uso)
- [📦 Scripts Disponibles](#-scripts-disponibles)
- [🌐 Internacionalización](#-internacionalización)
- [🎨 Diseño y UX](#-diseño-y-ux)
- [📊 Métricas y Logros](#-métricas-y-logros)
- [🤝 Contacto](#-contacto)
- [📄 Licencia](#-licencia)

---

## 🚀 **Demo en Vivo**

🔗 **[https://marcelo-palma.vercel.app](https://marcelo-palma.vercel.app)** (pendiente de despliegue)

---

## ✨ **Características**

### 🎯 **Core**
- ✅ **Next.js 16** con App Router y Server Components
- ✅ **TypeScript** - Tipado estático en toda la aplicación
- ✅ **TailwindCSS** - Estilizado moderno con modo oscuro
- ✅ **Framer Motion** - Animaciones fluidas y micro-interacciones

### 🌍 **Internacionalización**
- ✅ **Español/Inglés** - Cambio dinámico de idioma
- ✅ **Persistencia** - Preferencias guardadas en `localStorage`
- ✅ **Cobertura 100%** - Todo el contenido traducido

### 🎨 **Diseño**
- ✅ **Mobile First** - Breakpoints optimizados (sm, md, lg, xl)
- ✅ **Glassmorphism** - Efectos de blur en tarjetas y modales
- ✅ **Modo Oscuro/Claro** - Transiciones suaves entre temas
- ✅ **Tipografía** - Oswald (títulos) / Poppins (cuerpo)

### 🧪 **Testing**
- ✅ **Jest + React Testing Library** - Suite completa de tests
- ✅ **100% cobertura** en lógica de contexto global
- ✅ **Tests de accesibilidad** con `jest-axe`
- ✅ **7 tests** que validan funcionalidad crítica

---

## 🛠️ **Stack Tecnológico**

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 16.0.3 | Framework React con App Router y SSR |
| **React** | 19.2.0 | Biblioteca UI con Server Components |
| **TypeScript** | 5.x | Tipado estático y type safety |
| **TailwindCSS** | 4.x | Utility-first styling + modo oscuro |
| **Framer Motion** | 12.34.3 | Animaciones declarativas |
| **React Icons** | 5.5.0 | Iconografía vectorial |
| **Jest** | 30.x | Framework de testing |
| **React Testing Library** | 16.x | Testing de componentes |
| **jest-axe** | 10.x | Auditoría de accesibilidad |

---

## 📁 **Estructura del Proyecto**
📦 porfolio-next
├── 📂 app                    # App Router de Next.js
│   ├── 📄 layout.tsx         # Layout principal + providers
│   ├── 📄 page.tsx           # Página principal
│   └── 📄 globals.css        # Estilos globales
├── 📂 components             # Componentes reutilizables
│   ├── 📄 Header.tsx         # Navegación + barra de progreso
│   ├── 📄 Hero.tsx           # Landing + contadores animados
│   ├── 📄 About.tsx          # Timeline 3D + métricas
│   ├── 📄 Skills.tsx         # Dashboard técnico + RadarChart
│   ├── 📄 Projects.tsx       # Grid con filtros
│   ├── 📄 Contact.tsx        # Formulario de contacto
│   ├── 📄 Footer.tsx         # Enlaces + scroll to top
│   ├── 📄 FloatingControls.tsx # Toggle idioma/tema
│   └── 📂 __tests__          # Tests de componentes
├── 📂 context                # Estado global
│   ├── 📄 AppContext.tsx     # Tema/idioma con localStorage
│   └── 📂 __tests__          # Tests de contexto
├── 📂 public                 # Assets estáticos
│   ├── 📄 me.jpg             # Foto de perfil
│   └── 📸 capturas/          # Screenshots de proyectos
├── 📂 types                  # Definiciones de tipos
└── 📄 configuración          # Jest, Next, TS, etc.


---

## 🧪 **Testing**

### **Tests Implementados**

#### ✅ **AppContext.test.tsx** - 100% cobertura
```typescript
✓ debe proporcionar valores por defecto (es, light)
✓ debe cambiar el idioma al llamar toggleLanguage
✓ debe cambiar el tema al llamar toggleTheme
✓ debe cargar valores guardados en localStorage
✓ debe lanzar error si useApp se usa fuera de AppProvider

✅ Accessibility.test.tsx - Auditoría WCAG
✓ Header - sin violaciones de accesibilidad
✓ Footer - sin violaciones de accesibilidad

Métricas de Cobertura
Archivo	Statements	Branches	Functions	Lines
AppContext.tsx	100%	86%	100%	100%

Ejecutar Tests
# Todos los tests
npm test

# Modo watch (desarrollo)
npm run test:watch

# Con cobertura
npm run test:coverage

♿ Accesibilidad
Este portfolio ha sido auditado con jest-axe y cumple con las pautas WCAG 2.1 AA:

✅ SVGs con texto alternativo - Todos los iconos tienen aria-label
✅ Contraste de colores - Verificado en modo claro y oscuro
✅ Navegación por teclado - Estructura semántica correcta
✅ ARIA labels - Botones y elementos interactivos etiquetados
✅ Landmarks - Uso apropiado de <header>, <main>, <footer>

🚦 Instalación y Uso
# Clonar repositorio
git clone https://github.com/MarceloAdan73/marcelo-palma-portfolio.git

# Entrar al directorio
cd marcelo-palma-portfolio

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en navegador
http://localhost:3000

📦 Scripts Disponibles
Comando	Descripción
npm run dev	Desarrollo con hot reload
npm run build	Build para producción
npm start	Servir build local
npm run lint	Ejecutar ESLint
npm test	Ejecutar tests
npm run test:watch	Tests en modo watch
npm run test:coverage	Tests con reporte de cobertura

🌐 Internacionalización
El portfolio soporta español e inglés con persistencia:
// Estructura de traducciones
translations = {
  es: { ... },  // 40+ claves traducidas
  en: { ... }   // 40+ claves traducidas
}
Cambio automático basado en preferencia guardada en localStorage.

🎨 Diseño y UX
Principios Aplicados
Mobile First - Diseñado desde móvil hacia desktop

Glassmorphism - Tarjetas con blur y transparencias

Micro-interacciones - Hover, escala, rotación

Jerarquía visual - Tipografía contrastada

Componentes Destacados
Componente	Características
Hero	Partículas interactivas, contadores animados
Skills	Vista dual Grid/Radar, gráfico SVG
About	Timeline 3D con efecto spotlight
Projects	Filtrado por categoría, badges técnicos

📊 Métricas y Logros
const metrics = {
  proyectos: 8,
  tests: 86,
  tecnologias: '15+',
  stacks: 4,
  añosExperiencia: 3
}

🤝 Contacto
📧 Email: marcelo-palma@live.com
📱 Teléfono: 0291-4657839
📍 Ubicación: Bahía Blanca, Argentina

Redes Sociales:

https://img.shields.io/badge/GitHub-MarceloAdan73-181717?style=flat-square&logo=github

https://img.shields.io/badge/LinkedIn-MarceloPalma-0A66C2?style=flat-square&logo=linkedin


📄 Licencia
Este proyecto está bajo la licencia MIT. Ver el archivo LICENSE para más detalles.

<div align="center"> <p>Desarrollado con ❤️ y ☕ por <strong>Marcelo Palma</strong></p> <p> <a href="https://github.com/MarceloAdan73/marcelo-palma-portfolio">📁 Repositorio</a> • <a href="https://marcelo-palma.vercel.app">🚀 Demo</a> • <a href="#-contacto">📧 Contacto</a> </p> <p>⭐ ¡No olvides dejar una estrella si te gusta el proyecto! ⭐</p> </div> ```
