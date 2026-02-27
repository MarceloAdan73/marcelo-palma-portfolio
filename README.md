# ✨ MARCELO PALMA · INGENIERÍA DE SOFTWARE ✨

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/ESTADO-EN%20DIRECTO-00c9b7?style=for-the-badge&labelColor=1e293b"/></a>
  <a href="#"><img src="https://img.shields.io/badge/VERSIÓN-3.0.0-3b82f6?style=for-the-badge&labelColor=1e293b"/></a>
  <a href="#"><img src="https://img.shields.io/badge/ENTORNO-PROFESIONAL-f97316?style=for-the-badge&labelColor=1e293b"/></a>
</p>

<div align="center">
  <img src="./public/me.jpg" alt="Marcelo Palma" width="180" style="border-radius: 50%;" />
  <h2>Arquitecto de Experiencias Digitales</h2>
  <p>Especialista en <strong>React, Next.js y TypeScript</strong>. Construyendo puentes entre el diseño y la lógica, pixel por pixel.</p>
  
  [🌐 EXPLORAR DEMO](https://marcelo-palma.vercel.app) •
  [⚡ INICIO RÁPIDO](#-guía-de-arranque-ultrarrápida) •
  [🧪 TESTS](#-test-driven-portfolio)
</div>

---

## 📡 Visión General del Sistema

Este no es un simple portfolio; es mi vitrina técnica, un laboratorio de UI/UX y una declaración de intenciones. Cada componente está construido con un enfoque obsesivo en el rendimiento, la mantenibilidad y la experiencia de usuario.

> *"El detalle no es el detalle. El detalle es el diseño."* — Charles Eames

| Característica | Tecnología | Propósito |
|:---|:---|:---|
| ⚛️ **Arquitectura** | Next.js 16 (App Router) | Server Components + Rendering híbrido |
| 🧠 **Lenguaje** | TypeScript 5.x | Tipado fuerte y autocompletado divino |
| 🎨 **Estilado** | TailwindCSS 4.x | Utility-first + Dark mode con clase |
| 🎭 **Interacción** | Framer Motion | Animaciones fluidas y naturales |
| ♿ **Accesibilidad** | WCAG AA + jest-axe | Inclusivo por diseño, no por accidente |
| 🧪 **Calidad** | Jest + RTL | 7 tests de integración y 100% cobertura en lógica core |

---

## 🧬 Arquitectura del Proyecto

La estructura está pensada para la **escalabilidad y la claridad**. El `App Router` de Next.js organiza las rutas, mientras que los componentes y la lógica de estado viven en capas bien definidas.

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

Creo firmemente en el código que no falla. Por eso, este portfolio no es solo una cara bonita, sino una máquina bien engrasada y verificada.

### Suite de Pruebas

| Tipo de Test | Descripción | Resultado |
|:---|:---|:---|
| 🧩 **Contexto Global** | `AppContext.test.tsx` | ✓ 5/5 tests (100% cobertura) |
| ♿ **Accesibilidad** | `Accessibility.test.tsx` | ✓ WCAG AA (Sin violaciones) |
| 📦 **Integración** | `Header.test.tsx`, `Footer.test.tsx` | ✓ 2/2 tests |

### Detalle de Cobertura (`AppContext`)
```
---------------------------|---------|----------|---------|---------|-------------------
File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------------|---------|----------|---------|---------|-------------------
AppContext.tsx             |     100 |       86 |     100 |     100 | 26-28
---------------------------|---------|----------|---------|---------|-------------------
```

> **86% de cobertura en ramas lógicas**, asegurando que el cambio de tema/idioma y la persistencia son robustos.

### Comandos de Calidad

```bash

# Modo vigilante (desarrollo)
npm run test:watch

# Informe de cobertura completo
npm run test:coverage

# Auditoría de accesibilidad rápida
npm test -- -t "accessibility"
```

🚀 Guía de Arranque Ultrarrápida
Pon el proyecto en marcha en menos de 60 segundos.

Clonar el universo

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

🛠️ La Caja de Herramientas (Tech Stack)
Aquí está el arsenal utilizado para construir esta experiencia.

<p align="center"> <img src="https://img.shields.io/badge/Next.js-16.0.3-000000?style=flat-square&logo=next.js" /> <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react" /> <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript" /> <img src="https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?style=flat-square&logo=tailwind-css" /> <img src="https://img.shields.io/badge/Framer%20Motion-12.34.3-0055FF?style=flat-square&logo=framer" /> <img src="https://img.shields.io/badge/Jest-30.x-C21325?style=flat-square&logo=jest" /> <img src="https://img.shields.io/badge/React%20Icons-5.5.0-E34F26?style=flat-square&logo=react" /> </p>

## ♿ Accesibilidad como Pilar Fundamental

La belleza sin inclusión no es belleza. Este portfolio ha sido auditado y construido pensando en **todas** las personas.

✅ **Navegación por teclado:** Toda interacción es posible sin un ratón.

✅ **Semántica HTML5:** Uso correcto de `<header>`, `<main>`, `<nav>`, `<section>`.

✅ **ARIA Labels:** Todos los botones e iconos tienen texto descriptivo para lectores de pantalla.

✅ **Contraste de color:** Verificado en modo claro y oscuro para cumplir WCAG AA.

📬 Conectar con el Creador
¿Interesado en colaborar? ¿Tienes un proyecto en mente? ¿O simplemente quieres decir hola?

<p align="center"> <a href="mailto:marcelo-palma@live.com"><img src="https://img.shields.io/badge/Email-marcelo--palma@live.com-00c9b7?style=for-the-badge&logo=gmail&logoColor=white"/></a> <a href="https://www.linkedin.com/in/marcelo-palma-083b69352/"><img src="https://img.shields.io/badge/LinkedIn-MarceloPalma-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a> <a href="https://github.com/MarceloAdan73"><img src="https://img.shields.io/badge/GitHub-@MarceloAdan73-181717?style=for-the-badge&logo=github&logoColor=white"/></a> </p><p align="center"> <i>📍 Bahía Blanca, Argentina · Disponible para oportunidades freelance o tiempo completo.</i> </p>
<div align="center"> <p>━━━━━━ ⚡ Hecho con <a href="https://nextjs.org/">Next.js</a>, <a href="https://www.typescriptlang.org/">TypeScript</a> y mucho ☕ por <strong>Marcelo Palma</strong> ⚡ ━━━━━━</p> <p> <a href="https://github.com/MarceloAdan73/marcelo-palma-portfolio">📁 Repositorio</a> • <a href="https://marcelo-palma.vercel.app">🚀 Demo</a> • <a href="#-marcelo-palma--ingeniería-de-software-">⬆️ Volver arriba</a> </p>

[![Stars](https://img.shields.io/github/stars/MarceloAdan73/marcelo-palma-portfolio?style=social)](https://github.com/MarceloAdan73/marcelo-palma-portfolio/stargazers)

</div>
