# MARCELO PALMA · Software Development

<p align="center">
  <a href="https://marcelo-palma-portfolio.vercel.app"><img src="https://img.shields.io/badge/STATUS-LIVE-00c9b7?style=for-the-badge&labelColor=1e293b"/></a>
  <a href="#"><img src="https://img.shields.io/badge/VERSION-3.0.0-3b82f6?style=for-the-badge&labelColor=1e293b"/></a>
  <a href="#"><img src="https://img.shields.io/badge/ENVIRONMENT-PROFESSIONAL-f97316?style=for-the-badge&labelColor=1e293b"/></a>
</p>

<div align="center">
  <h2>Full Stack Developer of Digital Experiences</h2>
  <p>Specialized in <strong>React, Next.js, and TypeScript</strong>. Building bridges between design and logic, pixel by pixel.</p>
  
  <a href="https://marcelo-palma-portfolio.vercel.app">
    <img src="https://img.shields.io/badge/🌐_VIEW_LIVE_PORTFOLIO-00c9b7?style=for-the-badge&labelColor=1e293b&color=00c9b7" alt="View Live Portfolio"/>
  </a>
  
  <br/><br/>
  
  [⚡ QUICK START](#-quick-start-guide) •
  [🧪 TESTS](#-test-driven-portfolio)
</div>

---

## 📡 System Overview

This is not just a simple portfolio; it's my technical showcase, a UI/UX laboratory, and a statement of intent. Every component is built with an obsessive focus on performance, maintainability, and user experience.

> *"The details are not the details. They make the design."* — Charles Eames

| Feature | Technology | Purpose |
|:---|:---|:---|
| ⚛️ **Architecture** | Next.js 16 (App Router) | Server Components + Hybrid Rendering |
| 🧠 **Language** | TypeScript 5.x | Strong typing & divine autocomplete |
| 🎨 **Styling** | TailwindCSS 4.x | Utility-first + Class-based Dark Mode |
| 🎭 **Interaction** | Framer Motion | Fluid, natural animations |
| ♿ **Accessibility** | WCAG AA + jest-axe | Inclusive by design, not by accident |
| 🧪 **Quality** | Jest + RTL | 7 integration tests & 100% core coverage |

---

## 🧬 Project Architecture

The structure is designed for **scalability and clarity**. Next.js's `App Router` organizes routes, while components and state logic live in well-defined layers.

```
📦 mpa-dev
├─ 📂 app                    # Núcleo de la aplicación (App Router)
│  ├─ 📄 layout.tsx          # Layout raíz + Providers globales
│  ├─ 📄 page.tsx            # Página de inicio (Server Component)
│  └─ 📄 globals.css         # Estilos base y variables CSS
├─ 📂 components             # Biblioteca de componentes UI
│  ├─ 📄 Hero.tsx            # Sección de aterrizaje con partículas
│  ├─ 📄 Skills.tsx          # Dashboard de habilidades con RadarChart
│  ├─ 📄 Projects.tsx        # Grid de proyectos con filtros dinámicos
│  ├─ 📄 FloatingControls.tsx # Control flotante para tema/idioma
│  └─ 📂 __tests__           # Tests unitarios y de accesibilidad
├─ 📂 context                # Estado global (tema, idioma)
│  ├─ 📄 AppContext.tsx      # Contexto con persistencia en localStorage
│  └─ 📂 __tests__           # Tests de integración del contexto
├─ 📂 public                 # Assets estáticos (imágenes, iconos)
└─ ⚙️ Config files           # Jest, Next.js, TypeScript, etc.
```

---

## 🧪 Test-Driven Portfolio

I firmly believe in code that doesn't fail. That's why this portfolio is not just a pretty face, but a well-oiled and verified machine.

### Test Suite

| Test Type | Description | Result |
|:---|:---|:---|
| 🧩 **Global Context** | `AppContext.test.tsx` | ✓ 5/5 tests (100% coverage) |
| ♿ **Accessibility** | `Accessibility.test.tsx` | ✓ WCAG AA (No violations) |
| 📦 **Integration** | `Header.test.tsx`, `Footer.test.tsx` | ✓ 2/2 tests |

### Coverage Details (`AppContext`)
```
---------------------------|---------|----------|---------|---------|-------------------
File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------------|---------|----------|---------|---------|-------------------
AppContext.tsx             |     100 |       86 |     100 |     100 | 26-28
---------------------------|---------|----------|---------|---------|-------------------
```

> **86% branch coverage**, ensuring that theme/language switching and persistence are robust.

### Quality Commands

```bash

# Modo vigilante (desarrollo)
npm run test:watch

# Informe de cobertura completo
npm run test:coverage

# Auditoría de accesibilidad rápida
npm test -- -t "accessibility"
```
## 🚀 Quick Start Guide

Get the project up and running in less than 60 seconds.

### Clone the universe

```
git clone https://github.com/MarceloAdan73/marcelo-palma-portfolio.git
cd marcelo-palma-portfolio
Sembrar dependencias

bash
npm install
# o si eres audaz:
yarn
Ignición

bash
npm run dev
Visitar órbita

Abre http://localhost:3000 en tu navegador.
```
## 🛠️ The Toolbox (Tech Stack)

Here's the arsenal used to build this experience.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.0.3-000000?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?style=flat-square&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Framer%20Motion-12.34.3-0055FF?style=flat-square&logo=framer" />
  <img src="https://img.shields.io/badge/Jest-30.x-C21325?style=flat-square&logo=jest" />
  <img src="https://img.shields.io/badge/React%20Icons-5.5.0-E34F26?style=flat-square&logo=react" />
</p>

## ♿ Accessibility as a Fundamental Pillar

Beauty without inclusion is not beauty. This portfolio has been audited and built with **all** people in mind.

✅ **Keyboard navigation:** Every interaction is possible without a mouse.

✅ **HTML5 semantics:** Correct use of `<header>`, `<main>`, `<nav>`, `<section>`.

✅ **ARIA Labels:** All buttons and icons have descriptive text for screen readers.

✅ **Color contrast:** Verified in light and dark mode to comply with WCAG AA.

## 📬 Connect with the Creator

Interested in collaborating? Have a project in mind? Or just want to say hello?

<p align="center">
  <a href="mailto:marcelo-palma@live.com"><img src="https://img.shields.io/badge/Email-marcelo--palma@live.com-00c9b7?style=for-the-badge&logo=gmail&logoColor=white"/></a>
  <a href="https://www.linkedin.com/in/marcelo-palma-083b69352/"><img src="https://img.shields.io/badge/LinkedIn-MarceloPalma-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
  <a href="https://github.com/MarceloAdan73"><img src="https://img.shields.io/badge/GitHub-@MarceloAdan73-181717?style=for-the-badge&logo=github&logoColor=white"/></a>
</p>

<p align="center">
  <i>📍 Bahía Blanca, Argentina · Available for freelance or full-time opportunities.</i>
</p>

<div align="center">
  <p>━━━━━━ ⚡ Built with <a href="https://nextjs.org/">Next.js</a>, <a href="https://www.typescriptlang.org/">TypeScript</a> and lots of ☕ by <strong>Marcelo Palma</strong> ⚡ ━━━━━━</p>
  <p>
    <a href="https://github.com/MarceloAdan73/marcelo-palma-portfolio">📁 Repository</a> •
    <a href="https://marcelo-palma.vercel.app">🚀 Demo</a> •
    <a href="#-marcelo-palma--software-development-">⬆️ Back to top</a>
  </p>

  [![Stars](https://img.shields.io/github/stars/MarceloAdan73/marcelo-palma-portfolio?style=social)](https://github.com/MarceloAdan73/marcelo-palma-portfolio/stargazers)
</div>
</div>
