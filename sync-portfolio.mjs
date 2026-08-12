/**
 * sync-portfolio.mjs - Sincroniza el portfolio (Sanity) con GitHub.
 * Borra proyectos FANTASMA (repos eliminados) y crea ai-agent-toolkit (insignia).
 *
 * USO:
 *   node sync-portfolio.mjs          -> DRY RUN (solo muestra qué haría)
 *   node sync-portfolio.mjs --apply  -> EJECUTA los cambios
 *
 * Requiere: .env.local con SANITY_API_TOKEN=...
 * Seguridad: el script NO imprime el token. Solo lectura/escritura vía API.
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const APPLY = process.argv.includes('--apply')

const envRaw = readFileSync(path.join(__dirname, '.env.local'), 'utf-8')
const token = envRaw.match(/^SANITY_API_TOKEN=(.+)$/m)[1].trim()

const client = createClient({
  projectId: 'x8oaorjf',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// Proyectos FANTASMA: repos verificados como eliminados/inexistentes en GitHub (auditoría 2026-08-11)
const FANTASMAS = [
  'Markdown Converter',
  'Weather App',
  'Programming Study Apps',
  'DevNotes',
  'Web Vault',
  'Frontend Mini Projects',
]

// ai-agent-toolkit (INSIGNIA) - datos reales del repo (gh api 2026-08-12)
const INSIGNIA = {
  _type: 'project',
  title: 'ai-agent-toolkit',
  description:
    'Suite de 5 agentes CLI con IA para automatizar el desarrollo de software: generación de documentación, tests, code review, refactoring y auditoría de seguridad.',
  descriptionEn:
    'Suite of 5 AI-powered CLI agents for automating software development: documentation, testing, code review, refactoring, and security auditing.',
  icon: 'FaTerminal',
  iconColor: 'from-blue-600 to-purple-600',
  category: 'fullstack',
  techStack: ['TypeScript', 'Node.js', 'CLI', 'AI', 'Ollama', 'OpenAI', 'Anthropic', 'Gemini', 'OWASP'],
  githubUrl: 'https://github.com/MarceloAdan73/ai-agent-toolkit',
  liveUrl: '',
  featured: true,
  metrics: { tests: 50, docker: false, jwt: false },
}

async function main() {
  console.log(`\n${APPLY ? '⚠️  MODO EJECUCION (--apply)' : '👀 DRY RUN - solo muestro, NO ejecuto'}\n`)

  // 1. Listar proyectos actuales
  const proyectos = await client.fetch('*[_type == "project"] { _id, title, featured }')
  console.log(`Total en Sanity: ${proyectos.length}\n`)

  // 2. Identificar fantasmas
  const aBorrar = proyectos.filter((p) => FANTASMAS.includes(p.title))
  console.log(`🔴 A BORRAR (${aBorrar.length} fantasmas):`)
  aBorrar.forEach((p) => console.log(`   - ${p.title}${p.featured ? ' (era FEATURED)' : ''} [${p._id}]`))

  // 3. Verificar si el insignia ya existe
  const existente = proyectos.find((p) => p.title === 'ai-agent-toolkit')
  console.log(`\n🟢 A CREAR: ai-agent-toolkit (INSIGNIA, featured)` + (existente ? ' - ⚠️ YA EXISTE, se omitirá' : ''))

  // 4. Verificar duplicados restantes (proyectos que quedan)
  const quedan = proyectos.filter((p) => !FANTASMAS.includes(p.title))
  const featuredQuedan = quedan.filter((p) => p.featured)
  console.log(`\n📊 RESULTADO FINAL: ${quedan.length} proyectos (${featuredQuedan.length} featured) + 1 insignia`)

  // 5. Ejecutar si --apply
  if (!APPLY) {
    console.log('\n✅ Para ejecutar: node sync-portfolio.mjs --apply')
    return
  }

  console.log('\n━━━━ EJECUTANDO ━━━━')

  // Borrar fantasmas
  for (const p of aBorrar) {
    try {
      await client.delete(p._id)
      console.log(`  ✓ Borrado: ${p.title}`)
    } catch (err) {
      console.error(`  ✗ Error borrando ${p.title}: ${err.message}`)
    }
  }

  // Crear insignia (si no existe)
  if (!existente) {
    try {
      const result = await client.create(INSIGNIA)
      console.log(`  ✓ Creado: ai-agent-toolkit [${result._id}]`)
    } catch (err) {
      console.error(`  ✗ Error creando ai-agent-toolkit: ${err.message}`)
    }
  } else {
    console.log('  - ai-agent-toolkit ya existe, sin cambios')
  }

  // Verificación final
  const final = await client.fetch('*[_type == "project"] { title, featured } | order(featured desc)')
  console.log(`\n━━━━ VERIFICACION FINAL: ${final.length} proyectos en Sanity ━━━━`)
  final.forEach((p) => console.log(`  ${p.featured ? '★' : ' '} ${p.title}`))
}

main().catch((err) => {
  console.error('ERROR FATAL:', err.message)
  process.exit(1)
})
