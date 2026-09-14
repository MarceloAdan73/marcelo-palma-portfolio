# PLAN PORTFOLIO - marcelo-palma-portfolio (FUENTE DE VERDAD ÚNICA del proyecto)

> Repo: MarceloAdan73/marcelo-palma-portfolio | Next.js + Sanity CMS
> Creado: 2026-08-11 | Unificado en la raíz: 2026-09-13 (antes había un espejo en .opencode/)
>
> **Regla para el agente opencode:** leer este archivo al iniciar CADA conversación.
> Retomar: abrir opencode acá y decir "que sigue". Este archivo está en la raíz y es
> versionado (viaja con el repo). `.opencode/` guarda SOLO la config del agente.

---

## ESTRATEGIA ACTUAL (nueva mirada 2026-09)

- **NOTA 1 (prioridad alta, bajo costo, PRIMERA):** mejorar la narrativa principal.
  Convertir proyectos en mini casos de estudio: **problema → solución → tecnologías →
  resultado**. Destacar proyectos clave que evidencien distintas competencias.
  Reforzar "Sobre mí" mostrando CÓMO trabajas y QUÉ problemas te interesa resolver.
  Agregar demos cortas (30s: problema, aplicación, resultado). **Sin sumar tecnologías
  nuevas** (aprovechar Next.js + Sanity). Objetivo: pasar de "conozco muchas
  tecnologías" a "construyo soluciones completas y reales".
- **NOTA 2 (prioridad alta, DESPUÉS de Nota 1):** demostrar técnicamente el nivel.
  Páginas de detalle para proyectos clave (decisiones técnicas + pequeños diagramas de
  arquitectura). Sección corta de "ingeniería" con método de trabajo y tecnologías
  reales. Mejorar exploración (filtros ya existen) y navegación. Sección de evolución
  que muestre cómo crecen los proyectos.
- **META FINAL:** al terminar Nota 1 y 2, DEJAR el portfolio quieto un momento y pasar
  a otro repositorio (no convertirlo en proyecto gigante, solo mejorar lo que ya está
  fuerte).
- **ENCaje con el plan mayor:** el archivo maestro
  `C:\Users\marce\Documents\4-Git Hub progreso\areas-de-mejora-potencial.txt`
  manda en estrategia (Sección E: insignia ai-agent-toolkit, no crear proyectos nuevos,
  escalar lo existente). SECCIÓN G: portfolio es #5.

---

## ARQUITECTURA DEL PORTFOLIO (relevado 2026-08-11)

- Next.js + TypeScript (app/, components/, context/, lib/)
- SANITY CMS: projectId x8oaorjf, dataset production, apiVersion 2024-01-01
- lib/sanity.client.ts: cliente Sanity (useCdn en producción)
- app/page.tsx: obtiene SanityProject[] y los pasa a la UI
- components/Projects.tsx: mapSanityToProject() mapea datos de Sanity a la UI
- sanity/: estudio (sanity.config.ts, sanity.cli.ts, schemas/project.ts)
- migrate-to-sanity.mjs / sync-portfolio.mjs: scripts de migración/sync (token en .env.local)
- Schema "project": title, description (ES), descriptionEn (EN), image, icon, iconColor,
  category, techStack[], liveUrl, githubUrl, featured, metrics {tests, docker, jwt}
- Tests: jest (jest.config.js). CI en GitHub. Rama actual de mejoras: `test-cambios`.

---

## MANUAL DE SANITY (CÓMO GESTIONAR PROYECTOS DEL PORTFOLIO)

Los proyectos se administran en SANITY (no en código). El repo solo define el schema y
el fetch. Para cambiar qué proyectos se muestran:

1. ABRIR EL ESTUDIO: desde la raíz del repo → `npx sanity dev`. Cuenta de Marcelo
   (projectId x8oaorjf).
2. AGREGAR PROYECTO: botón "New Project" → completar campos del schema:
   - title (obligatorio)
   - description (español) / descriptionEn (inglés) — OBLIGATORIOS ambos para el
     bilingüe (fallback: si falta EN usa ES)
   - image (subir imagen, hotspot para recorte)
   - icon (elegir de la lista: FaCode, FaReact, FaNodeJs, ...)
   - iconColor
   - category (fullstack, frontend, backend, ai, ...)
   - techStack (lista de tecnologías)
   - liveUrl (demo) / githubUrl (repo) — verificar que NO estén rotos
   - featured (destacado en la grilla principal)
   - metrics: tests, docker, jwt (badges del proyecto)
3. EDITAR: click en el proyecto → modificar campos → Publish.
4. ELIMINAR: click → botón delete → confirmar.
5. PUBLICAR: los cambios quedan DRAFT hasta Publish. El portfolio en producción toma
   los cambios con useCdn (puede haber pequeña caché).

REGLAS DEL MANUAL (aprendidas 2026-08-11):
- NUNCA mostrar proyectos sin repo real en GitHub (links muertos restan).
- Verificar githubUrl y liveUrl antes de publicar (no dejar 404s).
- ai-agent-toolkit es el INSIGNIA del perfil: debe estar SIEMPRE presente y como featured.
- No incluir forks (llm_bridge, agenta) ni repos privados (nodoweb).
- Mantener ~8-10 proyectos de calidad > 15 con fantasmas.

---

## ESTADO DE SINCRONIZACIÓN portfolio vs GITHUB (auditoría 2026-08-11, ejecutada el 12)

PROYECTOS EN SANITY ANTES (15) — ESTADO REAL:
- [x] Task Manager Pro (featured) — repo OK: task-manager-pro
- [x] Angular Music Player (featured) — repo OK: Angular-Music-Player
- [x] Django Library (featured) — repo OK: Django-Library
- [x] ShopBot AI (featured) — repo OK: botShop-AI
- [x] PyStreamflow AI (featured) — repo OK: pystreamflow-AI
- [x] CodeMp-AI (featured) — repo OK: CodeMp-AI
- [x] Modern Blog — repo OK: Modern-Blog
- [x] BotWsp Store — repo OK: wsp-bot
- [x] BlackBox Monitor — repo OK: blackbox-monitor
- [ ] Markdown Converter — FANTASMA: repo ELIMINADO (decisión 31/07) → ELIMINADO de Sanity
- [ ] Weather App — FANTASMA: repo NO EXISTE → ELIMINADO de Sanity
- [ ] Programming Study Apps — FANTASMA: repo ELIMINADO → ELIMINADO de Sanity
- [ ] DevNotes — FANTASMA: repo NO EXISTE → ELIMINADO de Sanity
- [ ] Web Vault (featured) — FANTASMA: repo NO EXISTE → ELIMINADO de Sanity
- [ ] Frontend Mini Projects — FANTASMA: repo NO EXISTE → ELIMINADO de Sanity

RESULTADO 2026-08-12: 10 proyectos en Sanity, 7 featured. Creado ai-agent-toolkit
(featured) con datos reales (descripción ES/EN, 9 techs, 50 tests, icon FaTerminal).
Hero con projectCount dinámico. placeholder.png creado. Build OK. Merge a main
(commit 67be538). PENDIENTE: verificar producción (Vercel) sin 404s.

REPOS PÚBLICOS EN GITHUB (2026-08-11, gh api): task-manager-pro, marcelo-palma-portfolio,
wsp-bot, botShop-AI, ai-agent-toolkit (2 stars, INSIGNIA), pystreamflow-AI, Modern-Blog,
CodeMp-AI, blackbox-monitor, Angular-Music-Player, Django-Library.
Forks (NO van): llm_bridge (SantanderAI), agenta (Agenta-AI). Privado (NO va): nodoweb.

---

## MEJORAS POR SESIONES (ejecutar en orden, una por encuentro)

### Sesión 1 — Modelo de datos: ampliar schema de Sanity
- [x] **Objetivo:** equipar cada proyecto con narrativa de caso de estudio. (2026-09-13)
- [x] **Pasos:**
      1. `sanity/schemas/project.ts`: agregar campos `slug` (único),
         `problem`/`problemEn`, `solution`/`solutionEn`, `result`/`resultEn`,
         `highlights[]`, `showcase` (bool, "proyectos clave").
      2. `app/page.tsx`: extender interfaz `SanityProject` + query GROQ con los campos nuevos.
      3. `types/index.ts`: reflejar los campos.
      4. Completar contenido en 4-6 proyectos clave (ai-agent-toolkit, Task Manager Pro,
         ShopBot AI, PyStreamflow AI, CodeMp-AI y uno más).
      > Ampliado con `architectureImage` (diagrama, se usa en Sesión 4). Además se instaló el
      > estudio local reproducible (ver bitácora 2026-09-13b): `sanity`, `@sanity/vision`,
      > `styled-components`, `allowBuilds` (esbuild/sharp/unrs-resolver). Script
      > `backfill-case-studies.mjs` para rellenar/re-aplicar narrativa.
- [x] **Criterio de aceptación:** studio muestra campos nuevos; narrativa completa ES/EN
      en los proyectos clave; build OK; probado en local. (2026-09-13 — aprobado por Marcelo)

### Sesión 2 — Narrativa en la grilla: tarjetas como mini case study
- [x] **Objetivo:** que la home deje de listar techs y muestre problema → solución → resultado. (2026-09-13)
- [x] **Pasos:**
      1. `Projects.tsx`: la tarjeta muestra `problem` como tagline (line-clamp), un badge del
         resultado (métrica destacada) y menos chips de techs.
      2. `mapSanityToProject()` con los campos nuevos.
      3. Mantener filtros existentes; destacar los `showcase`.
      4. Textos ES/EN con el patrón actual (language/t).
      > Badge "Caso de estudio" (ES/EN) + ring violeta en los showcase. Métrica destacada:
      > tests → Docker → JWT (badge gradiente). Chips recortados a 3 (+N).
      > Completadas métricas reales de los 3 que faltaban (verificado en los repos):
      > ShopBot AI 88 tests, Django Library 42 tests, CodeMp-AI 21 tests.
- [x] **Criterio:** al abrir la home, se entiende "qué problema resuelve" cada proyecto en 5 segundos. (2026-09-13 — aprobado por Marcelo en localhost:3000)

### Sesión 3 — Sobre mí + Hero: "cómo trabajo" (+ pulido frontend de valor)
- [x] **Objetivo:** el About muestre método de trabajo y tipo de problemas que resuelve Marcelo. (2026-09-13)
- [x] **Pasos:**
      1. `About.tsx`: complementar/reemplazar la timeline de stacks por una sección de método:
         análisis → arquitectura → implementación → calidad (Docker, JWT, 270+ tests).
      2. `Hero.tsx`: cambiar mensaje de "muchas tecnologías" a "construyo soluciones completas".
      3. Mantener stats (proyectos, tests, repos) ligadas a resultados.
      4. SEO: corregir `metadataBase` en `app/layout.tsx` (hoy usa porfolio-next.vercel.app;
         el dominio real es marcelo-palma-portfolio.vercel.app), agregar imagen OpenGraph y
         JSON-LD (schema Person).
      5. Dark mode sin flash: `<script>` inline en el `<head>` que lea localStorage y aplique
         el tema antes de hidratar (hoy AppContext lo aplica post-mount).
      6. Accesibilidad: respetar `prefers-reduced-motion` en las animaciones de framer-motion
         (Hero, About, Skills).
      7. `<html lang>` dinámico según idioma del contexto + hreflang ES/EN (SEO bilingüe;
         hoy está fijo en "es").
- [x] **Criterio:** un visitante lee About y sabe cómo encara y resuelve problemas reales;
      SEO/share de links correctos; sin flash de tema; animaciones respetan el sistema.
      (2026-09-13 — aprobado por Marcelo en localhost:3000; favicon y líneas de stack encadenadas
      con el método dentro del mismo commit)

### Sesión 4 — Páginas de detalle de proyectos (case studies completos)
- [x] **Objetivo:** evidencia técnica profunda para proyectos clave. (2026-09-13)
- [x] **Pasos:**
       1. Nueva ruta `app/projects/[slug]/page.tsx` (server component, fetch por slug, `generateStaticParams`, `generateMetadata`, `notFound`).
       2. Layout case study: resumen, problema, solución, decisiones técnicas, diagrama de arquitectura (`architectureImage`), resultado + métricas, links (demo/código).
       3. Component `ProjectDetail.tsx` (client): layout bilingüe ES/EN con navegación interna.
       4. Tarjetas `showcase` de la home linkean al detalle (`Projects.tsx`); migración a `next/image` (fill, sizes, lazy) + `next.config.ts` con `cdn.sanity.io`.
       5. Navegación consistente: Header (logo → `/`, nav → `/#sección`) y Footer (`/#sección`) funcionan desde cualquier ruta.
       6. SEO: `generateMetadata` dinámico por slug.
- [x] **Criterio:** proyectos clave tienen página propia con decisiones técnicas; navegación OK; build SSG OK. (2026-09-13 — aprobado por Marcelo en localhost:3000)
- [x] **Commit:** `d53fe8f` en `test-cambios`.

### Sesión 5 — Sección de ingeniería + evolución
- [x] **Objetivo:** sección corta de método + cómo crecen los proyectos. (2026-09-13)
- [x] **Pasos:**
      1. Nueva sección (o bloque en About): "Ingeniería" = método + stack real de trabajo
         (Next.js, TypeScript, Node, Prisma/Postgres, Jest, Docker, JWT).
      2. Bloque "Evolución": v1 → v2 → v3 de un proyecto representativo (ej. Task Manager Pro).
      3. Navegación intuitiva: anclas y filtros pulidos (ya funcionaban en Header/Footer).
- [x] **Criterio:** la sección presenta método + evidencia de crecimiento sin inflar el sitio.
  (2026-09-13 — completado: tests 18/18, build OK, lint solo errores preexistentes)

### Sesión 6 — Pulido final (QA) y cierre
- [x] **Objetivo:** calidad y cierre del ciclo. (2026-09-13)
- [ ] **Pasos:**
      1. `pnpm lint`, `pnpm test`, `pnpm build`, Lighthouse, a11y.
         (lint/test/build/a11y completados 2026-09-13: ver bitácora 2026-09-13g.
         Lighthouse real en browser y demo 30s: quedan como pasos manuales para Marcelo.)
      2. (Opcional) demo 30s (gif) para proyectos clave.
      3. Merge de `test-cambios` a main con aprobación de Marcelo.
      4. Verificar producción (Vercel) sin 404s.
      5. Actualizar README y este plan; pasar a otro repositorio (meta final).
- [ ] **Criterio:** todo verde + aprobación visual en local + producción OK.

### Sesión 7 — SEO completo (escalado post-Sesión 6, decisión de Marcelo 2026-09-13)
- [x] **Objetivo:** visibilidad en buscadores y redes sin tocar la UI. (2026-09-13)
- [x] **Pasos:**
      1. `app/sitemap.ts`: sitemap con `/` + todos los proyectos de Sanity (revalidate 1h).
      2. `app/robots.ts`: permite todo; apunta al sitemap.
      3. `app/manifest.ts`: PWA webmanifest (name, theme_color, icons).
      4. `app/icon.tsx` + `app/apple-icon.tsx`: favicon PNG generado con `next/og` (gradiente + "MP").
      5. `app/opengraph-image.tsx`: OG image default 1200x630 (nombre + stack).
      6. `app/projects/[slug]/opengraph-image.tsx`: OG dinámica por proyecto (título, tech stack,
         descripción desde Sanity).
      7. Verificación: lint sin nuevos errores, tests 21/21, build OK (nuevas rutas:
         /sitemap.xml, /robots.txt, /manifest.webmanifest, /icon, /apple-icon, /opengraph-image).
- [x] **Criterio:** rutas SEO presentes en build. (2026-09-13 — falta validar en producción Vercel)

---

## REGLAS DE TRABAJO

1. UNA sola rama de prueba permanente: `test-cambios` (decisión de Marcelo
   2026-09-13). Se trabaja SIEMPRE sobre esa rama; NUNCA main directo sin que
   Marcelo pruebe en local y aprueba.
2. Cambios de CONTENIDO → Sanity Studio (web). Cambios de CÓDIGO → repo (rama → local → merge).
3. Repo público: nunca commitear secretos (.env.local tiene el token de Sanity, gitignoreado,
   NUNCA pushearlo). `.opencode/` gitignoreado.
4. Mantener el portfolio bilingüe (ES + EN en cada proyecto).
5. Al completar una tarea: marcar [x] + fecha acá. SIEMPRE documentar la sesión en la bitácora.
6. **Liviano para compartir:** cuando otro agente necesita contexto rápido del proyecto,
   se puede solicitar una "copia liviana" (`<documento>_LIGHT.md`) que reduzca el archivo a
   ~5% del original con solo lo esencial (estado, comandos, roadmap). El agente debe crear
   la copia en la raíz con ese nombre y mencionar en la primera línea que es versión liviana
   y dónde está el detalle completo. El original queda intacto.

---

## BITÁCORA DE SESIONES (las entradas nuevas van al PRINCIPIO)

### SESIÓN 2026-09-13i (UPGRADE DE DISEÑO — Hero + frontend general, con Marcelo)
1. `components/Hero.tsx`:
   - **Rol animado (rotación)**: reemplaza `t('hero.role')` estático por `RotatingRole`
     (rota Desarrollador Full-Stack / Backend / Ingeniería con tests / Automatización con IA, bilingüe).
   - **Terminal mockup** (`TerminalCard`) debajo del CTA: `marcelo@dev:~$ whoami`, `ls stack/`,
     `npm run test` ✔ 270, `npm run deploy` ✔ (bilingüe).
   - **Aurora animada**: 3 blobs gradient (purple/blue/cyan) con breathing keyframes + mouse.
   - **Spotlight** radial sobre la foto que sigue al mouse.
   - **Botones magnéticos** (`Magnetic` con useMotionValue/useSpring) en ambos CTAs.
   - **Fix latente**: `Counter` se movió a nivel de módulo (antes se re-montaba en cada
     mousemove y reiniciaba la cuenta). Ahora recibe prop `start`.
   - **a11y**: `aria-label` + `title` en links sociales (GitHub/LinkedIn/Nodoweb).
2. `app/globals.css`: `scroll-margin-top: 5rem` en secciones con id (anclas no se esconden
   bajo el header fijo), `:focus-visible` ring indigo y `::selection` con color de marca.
3. Impacto en lint: 12 → 9 errores (el aviso de `setState` en efecto es preexistente, no se tocó).
   Tests 21/21, build OK.
4. **Rediseño final de layout (aprobado por Marcelo)**: la terminal deja de vivir dentro de las
   columnas y pasa a FRANJA inferior centrada (`max-w-3xl`), integrada al tema (clara u oscura,
   backdrop-blur, sin negro forzado), en grilla `1/2/4` columnas. Columnas rebalanceadas
   (texto | foto+redes), H1 `md:text-5xl lg:text-6xl`, márgenes compactados y contenedor con
   `pt/pb` para que nada choque con header fijo ni con el indicador de scroll.
5. **Terminal como barra de UNA línea** a lo ancho (feedback de Marcelo): `marcelo@dev:~$ whoami →
   full-stack · IA`, derecha con `test ✔ 270 · deploy ✔ live` y cursor parpadeante; en mobile se
   compacta a `whoami → full-stack · IA` + `✔ live` (sin truncados).
6. **Sección hero con margen superior** `pt-20 lg:pt-24` para despegarla del header fijo.
7. **Fix responsive mobile** (feedback de Marcelo): barra-terminal ya no queda cortada; Evolución
   (About) pasa de timeline horizontal forzado a VERTICAL en mobile (línea `left-1/2`, dots
   centrados) y mantiene la horizontal en `md+`.

### SESIÓN 2026-09-13h (SEO completo — SESIÓN 7 COMPLETADA en código)
1. Nuevas rutas de metadatos en `app/`:
   - `sitemap.ts`: genera `/sitemap.xml` (revalidate 1h) con la home + todos los slugs de Sanity.
   - `robots.ts`: `/robots.txt` que permite todo y referencia el sitemap.
   - `manifest.ts`: `/manifest.webmanifest` (PWA standalone, theme_color #111827).
   - `icon.tsx` y `apple-icon.tsx`: favicon generado con `next/og` (ImageResponse, gradiente MP).
   - `opengraph-image.tsx`: OG default 1200x630 (stack real, sin red).
   - `app/projects/[slug]/opengraph-image.tsx`: OG dinámica por proyecto con Sanity
     (título, descripción, tech stack) — se sirve on-demand (ƒ).
2. Verificación: lint sin errores nuevos (12 preexistentes), tests 21/21, build OK
   con las 6 rutas nuevas (+ sitemap 1h).
3. PENDIENTE: validar en producción (Vercel) que /sitemap.xml, /robots.txt y las OG
   funcionen sin 404, y chequear en Open Graph debugger / Search Console cuando mergee.
4. Recordar: `metadataBase` y canonical ya estaban en layout.tsx; la OG default anterior
   usaba `/me.jpg` (se mantiene en metadata, la nueva /opengraph-image es complementaria).

### SESIÓN 2026-09-13g (QA — SESIÓN 6 PARCIALMENTE COMPLETADA: lint/test/build/a11y/README)
1. README.md actualizado: badges (Projects 10 Live, Case Studies 6 Detail Pages), features
   (case studies, engineering/evolution, performance), estructura de carpetas
   (`app/projects/[slug]`, `ProjectDetail.tsx`, `next.config.ts`), tabla de schema ampliada
   (slug, showcase, problem/solution/result, highlights, architectureImage, metrics) y
   versiones reales (Next 16.x, TS 5.x, Tailwind 4.x, Framer 12.x, Sanity 6.x, Jest 30.x, ESLint 9.x, pnpm 9+).
2. QA a11y real con jest-axe: nuevo `context/__tests__/Accessibility.test.tsx` valida
   About (método + ingeniería + evolución), Header y Projects → 0 violaciones axe.
3. Fix de infraestructura de tests en `jest.setup.js`: se eliminaron los mocks duplicados
   (había dos `jest.mock` para react-icons/si|md|tb; el segundo devolvía strings y rompía
   react-icons → iconos `undefined`). Ahora react-icons usa un Proxy (`mockIcons`) que
   resuelve CUALQUIER ícono a `<svg aria-hidden>` (mismo comportamiento que react-icons real),
   y framer-motion usa un Proxy (`motion`) que crea cualquier tag (`motion.div`, `motion.circle`,
   `motion.h2`, ...). Esto también redujo errores de lint de 23 → 12.
4. Verificación final: tests 21/21 OK (18 existentes + 3 a11y nuevos), build OK
   (9 rutas SSG con revalidate 1h), lint sin regresiones (12 errores preexistentes
   en estáticos/`.setup`/README-docs + 52 warnings; los 23 errores del baseline bajaron a 12).
5. Pendientes para Marcelo (manuales): Lighthouse en browser, demo 30s opcional,
   aprobación visual local, merge `test-cambios` → main, verificar Vercel sin 404s.

### SESIÓN 2026-09-13f (con Marcelo — SESIÓN 5 COMPLETADA: Ingeniería + Evolución)
1. `context/AppContext.tsx`: traducciones nuevas para sección "Ingeniería" (stack real: Frontend/Backend/Calidad) y "Evolución" (v1→v2→v3 de Task Manager Pro) en ES/EN.
2. `components/About.tsx`: 
   - Nueva sección "Ingeniería" con 3 tarjetas: Frontend (Next.js 15, React 19, TS, Tailwind, Framer), Backend (Node, Express, Prisma, PostgreSQL, REST), Calidad & DevOps (Jest+RTL, Docker, JWT, CI/CD, ESLint/Prettier).
   - Nuevo bloque "Evolución" con timeline horizontal: v1 (fundamentos, 0 tests), v2 (arquitectura limpia, 86 tests, Docker, JWT), v3 (escalabilidad, 270+ tests, Redis, WebSockets, CI/CD, prod).
   - Animaciones framer-motion coherentes con el resto (hover, stagger, reduced-motion respetado).
3. Navegación: anclas existentes en Header/Footer ya funcionaban correctamente (/#hero, /#about, /#skills, /#projects, /#contact).
4. Verificado: tests 18/18, build OK (9 rutas SSG), lint solo con los 23 errores preexistentes ya documentados.

### SESIÓN 2026-09-13e (con Marcelo — SESIÓN 4 EN CURSO: páginas de detalle + next/image)
1. `next.config.ts`: `images.remotePatterns` para `cdn.sanity.io` (habilita next/image).
2. `app/projects/[slug]/page.tsx`: server component con fetch por slug, `generateStaticParams`
   (de los slugs existentes en Sanity), `generateMetadata` (title/description/OG) y `revalidate`
   de 1h. Si no existe el slug → `notFound()`.
3. `components/ProjectDetail.tsx`: layout case study bilingüe (ES/EN): volver, badges,
   título + icono, métricas (tests/Docker/JWT), imagen principal, resumen, problema/solución,
   resultado + "decisiones técnicas" (highlights), diagrama de arquitectura (architectureImage),
   stack y CTAs Demo/Código.
4. `context/AppContext.tsx`: traducciones nuevas de la página de detalle (ES/EN) +
   notFound.
5. Navegación consistente en páginas de detalle: Header (logo → `/`, nav → `/#sección`) y
   Footer (links → `/#sección`) ahora funcionan desde cualquier ruta.
6. `Projects.tsx`: tarjetas `showcase` linkean al detalle (imagen + título) e imágenes
   migradas de `<img>` a `next/image` (fill, sizes, loading lazy).
7. Verificado: lint sin errores nuevos (los 23 errores son preexistentes y ya documentados),
   tests 18/18, build OK → 6 páginas de detalle SSG (revalidate 1h). PRÓXIMO: probar en
   localhost:3000 y aprobar visualmente → marcar [x] Sesión 4.

### SESIÓN 2026-09-13d (con Marcelo — SESIÓN 3 COMPLETADA: About/Hero "cómo trabajo" + SEO)
1. `About.tsx`: nueva sección "Cómo trabajo" (ES/EN) con 4 pasos: Análisis → Arquitectura →
   Implementación → Calidad (iconos FaSearch/FaProjectDiagram/FaCode/FaShieldAlt).
2. `Hero.tsx`: mensaje cambiado a "construyo soluciones completas" (de la idea al despliegue);
   contadores de stats con labels traducidos (tests/proyectos/stacks).
3. `app/layout.tsx`: `metadataBase` corregido (marcelo-palma-portfolio.vercel.app), title
   template %s, description ampliada, OpenGraph + Twitter con /me.jpg (512x640), JSON-LD
   schema.org/Person (sameAs GitHub + LinkedIn), alternates canonical + hreflang ES/EN.
4. Dark mode sin flash: script inline `beforeInteractive` en el `<head>` que aplica la clase
   `dark` (y colorScheme) desde localStorage antes de hidratar. `suppressHydrationWarning` en `<html>`.
5. Accesibilidad: `MotionConfig reducedMotion="user"` envuelve toda la app (AppContext) para
   respetar `prefers-reduced-motion` en las animaciones de framer-motion.
6. `<html lang>` dinámico: useEffect en AppContext sincroniza `document.documentElement.lang`
   con el idioma del contexto (base "es" en SSR).
7. Verificado: tests 18/18, build OK, lint solo con los errores preexistentes ya documentados.
   Aprobado por Marcelo en localhost:3000 (ES/EN + dark, sin flash).
8. Commit en `test-cambios`: sesiones 1+2+3 (schema + tarjetas case study + About/Hero/SEO).
9. PRÓXIMO: **Sesión 4** — páginas de detalle `app/projects/[slug]` + migración a `next/image`
   (remotePatterns de `cdn.sanity.io`). Pendiente también: definir slug de los 4 proyectos restantes
   (Modern Blog, BotWsp Store, BlackBox Monitor, Angular Music Player).

### SESIÓN 2026-09-13c (con Marcelo — SESIÓN 2 COMPLETADA: tarjetas = mini case study)
1. `Projects.tsx`: tarjeta ahora muestra el `problem` como tagline (line-clamp, fallback a
   description), badge "Caso de estudio" (ES/EN) + ring violeta en los `showcase`, badge único
   con gradiente para la métrica destacada (tests → Docker → JWT) y chips recortados a 3 (+N).
   Filtros intactos. `mapSanityToProject()` con los campos nuevos.
2. Completadas las métricas reales que faltaban (extraídas de los repos vía gh api):
   ShopBot AI 88 tests, Django Library 42 tests, CodeMp-AI 21 tests (los 6 showcase ya tienen
   métricas; Docker/JWT apagados donde no corresponden).
3. Verificado: lint sin errores nuevos, tests 18/18, build OK. Aprobado por Marcelo en
   localhost:3000 (incluye EN y dark).
4. PRÓXIMO: **Sesión 3** — Sobre mí + Hero ("cómo trabajo") + pulido frontend
   (metadataBase, OG, JSON-LD, dark sin flash, reduced-motion, `<html lang>` dinámico).
   También Sevilla: **Sesión 4** — páginas de detalle `app/projects/[slug]` + next/image.

### SESIÓN 2026-09-13b (con Marcelo — SESIÓN 1 COMPLETADA: schema + contenido)
1. Ampliado `sanity/schemas/project.ts` con `slug` (único: validación de formato y
   contra duplicados vía API), `showcase`, `problem/problemEn`, `solution/solutionEn`,
   `result/resultEn`, `highlights[]` y `architectureImage` (para Sesión 4).
   Corregido un duplicado accidental de `description`/`descriptionEn` que rompía el studio.
2. `app/page.tsx`: `SanityProject` + query GROQ con los campos nuevos (incluye
   `architectureImageUrl`). `types/index.ts` reflejado. Verificado: tests 18/18, build OK,
   lint solo con errores preexistentes (Hero/About/AppContext/jest, no tocados).
3. Setup del estudio local REPRODUCIBLE: instalados `sanity`, `@sanity/vision@6.13.2` y
   `styled-components` (los pedía el CLI), `allowBuilds` (esbuild, sharp, unrs-resolver) en
   `pnpm-workspace.yaml`. El estudio se levanta desde `sanity/`: `npx sanity dev` (localhost:3333).
4. Creado `backfill-case-studies.mjs` (modos `--list`, dry-run default, `--apply`).
   APLICADO con aprobación de Marcelo a 6 proyectos clave: ai-agent-toolkit, Task Manager Pro
   (además se completó su `metrics`: 86 tests + docker + jwt), ShopBot AI, PyFinFlow AI,
   CodeMp-AI y Django Library → `slug` + `showcase:true` + narrativa completa ES/EN +
   highlights. Verificado en Sanity (--list).
5. PENDIENTE PARA OTRA SESIÓN: definir slug (y opcionalmente narrativa) de los 4 restantes:
   Modern Blog, BotWsp Store, BlackBox Monitor, Angular Music Player.
6. PRÓXIMO: **Sesión 2** — tarjetas de la home como mini case study (Projects.tsx usa
   `problem` como tagline, badge con métrica destacada, destacar `showcase`).

### SESIÓN 2026-09-13 (con Marcelo — NUEVA MIRADA Y UNIFICACIÓN DEL PLAN)
1. Marcelo compartió su estrategia (2 notas de una IA): Nota 1 = narrativa/case studies;
   Nota 2 = evidencia técnica. Meta: terminar 1 y 2 y pasar a otro repositorio.
2. Opinión del agente: plan sólido, orden 1→2 correcto. En el codebase los filtros YA
   existen; el trabajo real es ampliar el schema de Sanity + rutas de detalle
   (app/projects/[slug]). Demos de 30s al final. About denso pero orientado a stacks.
3. Creada rama `test-cambios` desde main.
4. Unificado el plan: antes había dos archivos (`.opencode/PLAN-PORTFOLIO.md` local +
   `PLAN-MEJORAS-PORTFOLIO.md` en raíz). Ahora hay UNO SOLO: este `PLAN-PORTFOLIO.md`
   en la raíz, versionado. `.opencode/` queda solo con config del agente.
5. Agente `portfolio` actualizado para leer este archivo y dar seguimiento automático.
6. Creado AGENTS.md en la raíz para que CUALQUIER sesión de opencode lea el plan.
7. Marcela decidió: UNA sola rama de prueba permanente (`test-cambios`), sin crear
   ramas por feature.
8. INTEGRADAS mejoras de frontend de valor (decisión de Marcelo): Sesión 3 suma SEO
   (metadataBase correcto, OG image, JSON-LD), dark mode sin flash, prefers-reduced-motion
   y `<html lang>` dinámico; Sesión 4 suma migración a `next/image` con remotePatterns
   de Sanity.
9. PENDIENTE: arrancar **Sesión 1** (schema de Sanity) cuando Marcelo quiera.
   **Esta sesión fue SOLO planeación/configuración: NO se modificó código ni contenido.**

### SESIÓN 2026-08-12 (con Marcelo — EJECUCIÓN COMPLETA DEL PLAN DE SYNC)
1. Creada rama feat/sync-portfolio-2026-08 en el clon.
2. Token de Sanity generado por Marcelo y guardado en .env.local (gitignoreado).
3. sync-portfolio.mjs: dry-run aprobado por Marcelo → --apply: borrados 6 fantasmas,
   creado ai-agent-toolkit (featured) con datos reales (imagen card 800x450 como asset).
4. Código en la rama: Hero con projectCount dinámico (era 15 hardcoded x2),
   placeholder.png creado, FaTerminal en iconMap + schema.
5. Verificado: build OK + dev local con 10 proyectos.
6. Marcelo aprobó visualmente → MERGE a main + push (67be538).
7. PENDIENTE: verificar producción (Vercel deploy) — marcelo-palma.vercel.app.
8. Archivo maestro actualizado (Sección G #5 → COMPLETADO).

### SESIÓN 2026-08-11 (con Marcelo — AUDITORÍA INICIAL)
1. Marcelo confirmó que el portfolio estaba DESACTUALIZADO (repos que ya no existen).
2. Auditoría completa: query API de Sanity (15 proyectos) + gh api list (repos reales).
3. Hallazgos: 6 fantasmas en Sanity + faltaba ai-agent-toolkit (INSIGNIA).
4. Creados: agente opencode "portfolio", plan, manual de Sanity, .opencode/ gitignoreado.
5. Decisión: flujo = clon (rama feature) → probar local → aprobación → merge a main.
6. DECISIÓN: contenido se administra en Sanity Studio.