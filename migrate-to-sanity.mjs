import { createClient } from '@sanity/client'
import { createReadStream, readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const envRaw = readFileSync(path.join(__dirname, '.env.local'), 'utf-8')
const token = envRaw.match(/^SANITY_API_TOKEN=(.+)$/m)[1].trim()

const client = createClient({
  projectId: 'x8oaorjf',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const projects = [
  {
    title: 'Task Manager Pro',
    description: 'Gestión de tareas full-stack con autenticación JWT, PostgreSQL y 86 tests automatizados.',
    image: '/taskScreenshot.png',
    technologies: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Docker', 'Jest'],
    demoLink: 'https://task-manager-pro-psi.vercel.app/',
    codeLink: 'https://github.com/MarceloAdan73/task-manager-pro',
    featured: true,
  },
  {
    title: 'CodeMp-AI',
    description: 'Herramienta de análisis de código con ESLint + IA local (Ollama). Sugerencias inteligentes.',
    image: '/codeAI.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'CodeMirror', 'ESLint', 'Ollama', 'Framer Motion'],
    demoLink: 'https://code-mp-ai.vercel.app',
    codeLink: 'https://github.com/MarceloAdan73/CodeMp-AI',
    featured: true,
  },
  {
    title: 'Angular Music Player',
    description: 'Reproductor de música con Angular, RxJS y SCSS.',
    image: '/angularScreen.png',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    demoLink: 'https://music-player-roan-eight.vercel.app/',
    codeLink: 'https://github.com/MarceloAdan73/Angular-Music-Player',
    featured: true,
  },
  {
    title: 'Markdown Converter',
    description: 'Conversor de Markdown a PDF/HTML. PWA y Electron.',
    image: '/markdownScreen.png',
    technologies: ['React', 'Electron', 'PWA', 'TypeScript'],
    demoLink: 'https://markdown-converter-six.vercel.app/',
    codeLink: 'https://github.com/MarceloAdan73/markdown-converter',
    featured: false,
  },
  {
    title: 'DevNotes',
    description: 'Aplicación de notas PWA con Next.js y sincronización offline.',
    image: '/devnotScreen.png',
    technologies: ['Next.js', 'PWA', 'Tailwind'],
    demoLink: 'https://dev-notes-ruby.vercel.app/',
    codeLink: 'https://github.com/MarceloAdan73/DevNotes-Next.js',
    featured: false,
  },
  {
    title: 'Modern Blog',
    description: 'Blog con Vue.js + FastAPI. JWT y PostgreSQL.',
    image: '/modernScreen.png',
    technologies: ['Vue.js', 'FastAPI', 'Python', 'PostgreSQL', 'JWT'],
    demoLink: 'https://modern-blog-tkzl.onrender.com/',
    codeLink: 'https://github.com/MarceloAdan73/Modern-Blog',
    featured: false,
  },
  {
    title: 'Django Library',
    description: 'Gestión de bibliotecas con Django y Tailwind.',
    image: '/librosScreen.png',
    technologies: ['Django', 'Python', 'Tailwind'],
    demoLink: 'https://biblioteca-django-5dbk.onrender.com/',
    codeLink: 'https://github.com/MarceloAdan73/Django-Library',
    featured: false,
  },
  {
    title: 'Weather App',
    description: 'App del clima con Vue.js + FastAPI.',
    image: '/Weather.png',
    technologies: ['Vue.js', 'FastAPI', 'Python'],
    demoLink: 'https://app-clima-python.onrender.com/',
    codeLink: 'https://github.com/MarceloAdan73/Weather-App-Python',
    featured: false,
  },
  {
    title: 'Frontend Mini Projects',
    description: 'Colección de 6 proyectos pequeños de frontend.',
    image: '/frontScreen.png',
    technologies: ['HTML/CSS', 'JavaScript', 'React'],
    demoLink: 'https://marceloadan73.github.io/mini-frontend-proyects/',
    codeLink: 'https://github.com/MarceloAdan73/frontend-proyects',
    featured: false,
  },
  {
    title: 'BotWsp Store',
    description: 'Bot de WhatsApp para e-commerce con panel admin, API REST, notificaciones en tiempo real y gestión de productos.',
    image: '/bot1.png',
    technologies: ['Node.js', 'Express', 'Next.js', 'Baileys', 'SQLite', 'JWT', 'SSE'],
    demoLink: '',
    codeLink: 'https://github.com/MarceloAdan73/wsp-bot',
    featured: false,
  },
  {
    title: 'ShopBot AI',
    description: 'Asistente virtual con IA (Google Gemini) para tiendas de ropa. Chatbot, CRUD, reservas y ventas.',
    image: '/bot2.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Gemini', 'SQLite', 'React'],
    demoLink: '',
    codeLink: 'https://github.com/MarceloAdan73/botShop-AI',
    featured: true,
  },
  {
    title: 'PyStreamflow AI',
    description: 'Gestor de finanzas personales con asistente IA. Rastrea ingresos/gastos, define presupuestos, metas de ahorro e insights inteligentes con HuggingFace.',
    image: '/desktop1.png',
    technologies: ['Python', 'Streamlit', 'HuggingFace', 'AI', 'Finance', 'Dashboard'],
    demoLink: 'https://pystreamflow-ai-ufg7wsp8pcxpatqt3lxrsk.streamlit.app/',
    codeLink: 'https://github.com/MarceloAdan73/pystreamflow-AI',
    featured: true,
  },
  {
    title: 'Programming Study Apps',
    description: 'Monorepo con 3 apps educativas: Matemáticas T, SO Study App y Python Interactivo.',
    image: '/mate-t.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'JavaScript', 'HTML/CSS'],
    demoLink: 'https://matematicas-t.vercel.app/',
    codeLink: 'https://github.com/MarceloAdan73/programming-study-apps',
    featured: false,
  },
  {
    title: 'Web Vault',
    description: 'Gestor de marcadores con Next.js, MongoDB y modo oscuro. Guarda y organiza sitios favoritos por categorías.',
    image: '/webvault.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Mongoose'],
    demoLink: 'https://web-vault-tawny.vercel.app/',
    codeLink: 'https://github.com/MarceloAdan73/web-vault',
    featured: false,
  },
]

async function uploadImage(filePath) {
  const fullPath = path.join(__dirname, 'public', filePath)
  const filename = path.basename(filePath)

  try {
    const asset = await client.assets.upload('image', createReadStream(fullPath), { filename })
    console.log(`  ✓ Image uploaded: ${filename}`)
    return asset._id
  } catch (err) {
    console.error(`  ✗ Image error (${filename}): ${err.message}`)
    return null
  }
}

async function migrate() {
  let successCount = 0

  for (const p of projects) {
    console.log(`\n[${p.title}]`)

    let imageAssetId = null
    if (p.image) {
      imageAssetId = await uploadImage(p.image)
    }

    const doc = {
      _type: 'project',
      title: p.title,
      description: p.description,
      ...(imageAssetId && {
        image: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAssetId },
        },
      }),
      techStack: p.technologies,
      liveUrl: p.demoLink || undefined,
      githubUrl: p.codeLink || undefined,
      featured: p.featured,
    }

    try {
      const result = await client.create(doc)
      console.log(`  ✓ Document created: ${result._id}`)
      successCount++
    } catch (err) {
      console.error(`  ✗ Error creating document: ${err.message}`)
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  console.log(`Migración completa: ${successCount} proyectos subidos a Sanity`)
}

migrate()
