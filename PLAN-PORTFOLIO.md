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
- [ ] **Objetivo:** evidencia técnica profunda para proyectos clave.
- [ ] **Pasos:**
      1. Nueva ruta `app/projects/[slug]/page.tsx` (server component, fetch por slug,
         `generateStaticParams`).
      2. Layout case study: resumen, problema, solución, decisiones técnicas, diagrama de
         arquitectura (imagen subida a Sanity), resultado + métricas, links (demo/código).
      3. Schema: agregar campo `architectureImage` (image) en la Sesión 1.
      4. Tarjetas `showcase` de la home linkean al detalle.
      5. Navegación consistente (Header/Footer/volver).
      6. Rendimiento: migrar las imágenes de proyectos a `next/image` (hoy `Projects.tsx`
         usa `<img>` crudo) con `loading="lazy"` y `sizes`; agregar el CDN de Sanity
         (`cdn.sanity.io`) a `next.config.ts` (remotePatterns). Aplica a grilla + detalle.
- [ ] **Criterio:** proyectos clave tienen página propia con decisiones técnicas; navegación OK.

### Sesión 5 — Sección de ingeniería + evolución
- [ ] **Objetivo:** sección corta de método + cómo crecen los proyectos.
- [ ] **Pasos:**
      1. Nueva sección (o bloque en About): "Ingeniería" = método + stack real de trabajo
         (Next.js, TypeScript, Node, Prisma/Postgres, Jest, Docker, JWT).
      2. Bloque "Evolución": v1 → v2 → v3 de un proyecto representativo (ej. Task Manager Pro).
      3. Navegación intuitiva: anclas y filtros pulidos.
- [ ] **Criterio:** la sección presenta método + evidencia de crecimiento sin inflar el sitio.

### Sesión 6 — Pulido final (QA) y cierre
- [ ] **Objetivo:** calidad y cierre del ciclo.
- [ ] **Pasos:**
      1. `pnpm lint`, `pnpm test`, `pnpm build`, Lighthouse, a11y.
      2. (Opcional) demo 30s (gif) para proyectos clave.
      3. Merge de `test-cambios` a main con aprobación de Marcelo.
      4. Verificar producción (Vercel) sin 404s.
      5. Actualizar README y este plan; pasar a otro repositorio (meta final).
- [ ] **Criterio:** todo verde + aprobación visual en local + producción OK.

---

## REGLAS DE TRABAJO

1. UNA sola rama de prueba permanente: `test-cambios` (decisión de Marcelo
   2026-09-13). Se trabaja SIEMPRE sobre esa rama; NUNCA main directo sin que
   Marcelo pruebe en local y apruebe.
2. Cambios de CONTENIDO → Sanity Studio (web). Cambios de CÓDIGO → repo (rama → local → merge).
3. Repo público: nunca commitear secretos (.env.local tiene el token de Sanity, gitignoreado,
   NUNCA pushearlo). `.opencode/` gitignoreado.
4. Mantener el portfolio bilingüe (ES + EN en cada proyecto).
5. Al completar una tarea: marcar [x] + fecha acá. SIEMPRE documentar la sesión en la bitácora.

---

## BITÁCORA DE SESIONES (las entradas nuevas van al PRINCIPIO)

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