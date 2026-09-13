/**
 * backfill-case-studies.mjs - Rellena la narrativa de caso de estudio (Sesión 1)
 * sobre proyectos CLAVE en Sanity: slug, problem/solution/result (ES+EN),
 * highlights y showcase.
 *
 * USO:
 *   node backfill-case-studies.mjs            -> DRY RUN (muestra qué haría)
 *   node backfill-case-studies.mjs --list     -> lista los proyectos actuales
 *   node backfill-case-studies.mjs --apply    -> EJECUTA los cambios
 *
 * Requiere: .env.local con SANITY_API_TOKEN=...
 * Seguridad: el script NO imprime el token.
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const APPLY = process.argv.includes('--apply')
const LIST = process.argv.includes('--list')

const envRaw = readFileSync(path.join(__dirname, '.env.local'), 'utf-8')
const token = envRaw.match(/^SANITY_API_TOKEN=(.+)$/m)[1].trim()

const client = createClient({
  projectId: 'x8oaorjf',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// Narrativa de caso de estudio para los proyectos CLAVE (Sesión 1)
const KEY_PROJECTS = [
  {
    title: 'ai-agent-toolkit',
    slug: 'ai-agent-toolkit',
    showcase: true,
    problem: 'Los equipos de desarrollo pierden horas en tareas repetitivas: documentar, escribir tests, revisar PRs y auditar seguridad. Cada repo repite el mismo trabajo manual con estándares inconsistentes.',
    problemEn: 'Development teams lose hours on repetitive tasks: writing docs, tests, reviewing PRs and auditing security. Every repo repeats the same manual work with inconsistent standards.',
    solution: 'Suite CLI de 5 agentes con IA (docs, tests, code review, refactoring, seguridad) que ejecutan tareas sobre el código local con motores intercambiables (Ollama, OpenAI, Anthropic, Gemini) y checklists OWASP.',
    solutionEn: 'A CLI suite of 5 AI agents (docs, tests, code review, refactoring, security) that work on local code with swappable backends (Ollama, OpenAI, Anthropic, Gemini) and OWASP checklists.',
    result: '50 tests, 5 tareas de alto valor automatizadas con un solo comando y sin depender de la nube (modo local con Ollama).',
    resultEn: '50 tests, 5 high-value tasks automated with a single command, not tied to the cloud (local mode with Ollama).',
    highlights: ['5 agentes IA en un solo CLI', 'Motores intercambiables (Ollama, OpenAI, Anthropic, Gemini)', '50 tests automatizados', 'Checklists de seguridad OWASP'],
  },
  {
    title: 'Task Manager Pro',
    slug: 'task-manager-pro',
    showcase: true,
    problem: 'Las apps de tareas suelen ser CRUDs simples sin seguridad real ni backend robusto. Un gestor profesional necesita sesiones JWT, base relacional y un pipeline que garantice calidad.',
    problemEn: 'Task apps tend to be simple CRUDs with no real security or robust backend. A professional manager needs JWT sessions, a relational database and a pipeline that guarantees quality.',
    solution: 'Full-stack con Next.js + Express + PostgreSQL/Prisma: autenticación JWT, API REST tipada, entorno Docker y 86 tests con Jest.',
    solutionEn: 'Full-stack with Next.js + Express + PostgreSQL/Prisma: JWT auth, typed REST API, Docker environment and 86 Jest tests.',
    result: '86 tests automatizados, autenticación JWT completa y ambiente reproducible con Docker para desarrollar en equipo.',
    resultEn: '86 automated tests, full JWT authentication and a reproducible Docker environment for team development.',
    highlights: ['86 tests automatizados (Jest)', 'Auth JWT + API REST tipada', 'PostgreSQL con Prisma', 'Entorno Docker reproducible'],
    metrics: { tests: 86, docker: true, jwt: true },
  },
  {
    title: 'ShopBot AI',
    slug: 'shopbot-ai',
    showcase: true,
    problem: 'Una tienda de ropa chica no tiene presupuesto para un call center: las consultas llegan tarde y se pierden ventas y reservas por falta de atención.',
    problemEn: "A small clothing store can't afford a call center: inquiries get answered late and sales and reservations are lost due to lack of support.",
    solution: 'Asistente virtual con Google Gemini integrado a Next.js: chatbot 24/7, CRUD de productos, gestión de reservas y ventas, con SQLite para datos ágiles.',
    solutionEn: 'Virtual assistant powered by Google Gemini built into Next.js: 24/7 chatbot, product CRUD, reservations and sales management, with SQLite for agile data.',
    result: 'Atención al cliente 24/7 y gestión comercial completa en un solo lugar, sin infraestructura extra.',
    resultEn: '24/7 customer support and complete business management in one place, with no extra infrastructure.',
    highlights: ['Chatbot con IA (Google Gemini)', 'CRUD de productos + reservas + ventas', 'Atención 24/7', 'Next.js + SQLite'],
    metrics: { tests: 88, docker: false, jwt: false },
  },
  {
    title: 'PyFinFlow AI',
    slug: 'pyfinflow-ai',
    showcase: true,
    problem: 'Llevar las finanzas personales en planillas es propenso a errores: no hay forma de preguntar "¿cuánto gasté en comida este mes?" sobre datos actualizados y en varias monedas.',
    problemEn: "Tracking personal finances on spreadsheets is error-prone: there's no way to ask 'how much did I spend on food this month?' over up-to-date data in multiple currencies.",
    solution: 'Dashboard full-stack (FastAPI + Next.js + PostgreSQL) con asistente financiero basado en RAG (Ollama, HuggingFace, Gemini), multi-moneda (ARS, USD, EUR, BRL), importación CSV y gráficos Plotly.',
    solutionEn: 'Full-stack dashboard (FastAPI + Next.js + PostgreSQL) with a RAG-powered financial assistant (Ollama, HuggingFace, Gemini), multi-currency (ARS, USD, EUR, BRL), CSV import and Plotly charts.',
    result: '224 tests, detección inteligente de montos y respuestas del asistente fundamentadas en los datos reales del usuario.',
    resultEn: '224 tests, smart amount detection and assistant answers grounded in the user’s actual data.',
    highlights: ['224 tests automatizados', 'Asistente financiero con RAG', 'Multi-moneda ARS/USD/EUR/BRL', 'Docker + JWT'],
  },
  {
    title: 'CodeMp-AI',
    slug: 'codemp-ai',
    showcase: true,
    problem: 'Recibir feedback de calidad sobre el código suele requerir otro desarrollador: demora y no siempre está disponible. Las reglas de ESLint solas no explican el porqué.',
    problemEn: "Getting quality feedback on code usually requires another developer: it takes time and isn't always available. ESLint rules alone don't explain the why.",
    solution: 'Editor web con CodeMirror + IA local (Ollama): combina reglas de ESLint con sugerencias explicadas en lenguaje natural, todo dentro del navegador.',
    solutionEn: 'Web editor with CodeMirror + local AI (Ollama): combines ESLint rules with suggestions explained in natural language, all inside the browser.',
    result: 'Análisis y sugerencias inteligentes sin enviar el código a la nube: privacidad y costo cero.',
    resultEn: 'Analysis and intelligent suggestions without sending your code to the cloud: privacy and zero cost.',
    highlights: ['IA local con Ollama (sin nube)', 'Editor CodeMirror + ESLint', 'Sugerencias explicadas', 'Next.js + Framer Motion'],
    metrics: { tests: 21, docker: false, jwt: false },
  },
  {
    title: 'Django Library',
    slug: 'django-library',
    showcase: true,
    problem: 'Una biblioteca comunitaria o escolar registra los préstamos en papel o planillas: se pierden registros, demoras y devoluciones.',
    problemEn: 'A community or school library tracks book loans on paper or spreadsheets: records, delays and returns get lost.',
    solution: 'Sistema web con Django + Tailwind + Alpine.js: catálogo de libros, socios, préstamos y devoluciones con un flujo de gestión completo.',
    solutionEn: 'Web system with Django + Tailwind + Alpine.js: book catalog, members, loans and returns with a complete management flow.',
    result: 'Gestión digital completa del préstamo con interfaz clara y sin costo de infraestructura (Python).',
    resultEn: 'Complete digital loan management with a clean interface and zero infrastructure cost (Python).',
    highlights: ['CRUD libros / socios / préstamos', 'Django + Tailwind + Alpine.js', 'Gestión de préstamos y devoluciones', 'Deploy en Render'],
    metrics: { tests: 42, docker: false, jwt: false },
  },
]

async function main() {
  const proyectos = await client.fetch(
    '*[_type == "project"] { _id, title, featured, slug, showcase } | order(featured desc)',
  )

  if (LIST) {
    console.log(`Total en Sanity: ${proyectos.length}\n`)
    proyectos.forEach((p) => console.log(`  ${p.featured ? '★' : ' '} ${p.title} [${p._id}] slug=${p.slug ?? '(vacío)'} showcase=${p.showcase ?? false}`))
    return
  }

  const aActualizar = KEY_PROJECTS
    .map((k) => ({ ...k, actual: proyectos.find((p) => p.title === k.title) }))
    .filter((k) => k.actual)

  const faltantes = KEY_PROJECTS.filter((k) => !proyectos.some((p) => p.title === k.title))

  console.log(`\n${APPLY ? '⚠️  MODO EJECUCION (--apply)' : '👀 DRY RUN - solo muestro, NO ejecuto'}\n`)
  console.log(`Proyectos clave a actualizar: ${aActualizar.length}\n`)

  for (const k of aActualizar) {
    console.log(`━━━ ${k.title} (${k.actual._id}) ━━━`)
    console.log(`  slug:     ${k.slug}`)
    console.log(`  showcase: ${k.showcase}`)
    console.log(`  problem:  ${k.problem}`)
    console.log(`  problemEn:${k.problemEn}`)
    console.log(`  solution: ${k.solution}`)
    console.log(`  solutionEn:${k.solutionEn}`)
    console.log(`  result:   ${k.result}`)
    console.log(`  resultEn: ${k.resultEn}`)
    console.log(`  highlights: ${JSON.stringify(k.highlights)}`)
    if (k.metrics) console.log(`  metrics:  ${JSON.stringify(k.metrics)}`)
    console.log('')
  }

  if (faltantes.length) {
    console.log(`⚠️  No encontrados en Sanity (se omiten): ${faltantes.map((f) => f.title).join(', ')}\n`)
  }

  console.log(aActualizar.length === 0
    ? '✅ Nada que actualizar.\n'
    : (APPLY ? '✅ Listo.\n' : '✅ Para ejecutar: node backfill-case-studies.mjs --apply\n'))

  if (!APPLY) return

  for (const k of aActualizar) {
    try {
      const patch = {
        slug: k.slug,
        showcase: k.showcase,
        problem: k.problem,
        problemEn: k.problemEn,
        solution: k.solution,
        solutionEn: k.solutionEn,
        result: k.result,
        resultEn: k.resultEn,
        highlights: k.highlights,
        ...(k.metrics ? { metrics: k.metrics } : {}),
      }
      await client.patch(k.actual._id).set(patch).commit()
      console.log(`  ✓ ${k.title} actualizado`)
    } catch (err) {
      console.error(`  ✗ Error en ${k.title}: ${err.message}`)
    }
  }
}

main().catch((err) => {
  console.error('ERROR FATAL:', err.message)
  process.exit(1)
})