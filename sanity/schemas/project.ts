import {defineType, defineField} from 'sanity'
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'x8oaorjf',
  dataset: 'production',
  apiVersion: '2024-01-01',
})

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      description: 'Identificador único para la URL del case study. Ej: ai-agent-toolkit',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('El slug es obligatorio'),
        Rule.custom((slug) => {
          if (!slug) return true
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
            return 'Solo minúsculas, números y guiones medios (ej: ai-agent-toolkit)'
          }
          return true
        }),
        Rule.custom(async (slug, context) => {
          if (!slug) return true
          const existing = await client.fetch(
            `*[_type == "project" && slug == $slug && _id != $currentId][0] {_id}`,
            {slug, currentId: context.document?._id ?? ''},
          )
          return existing ? 'Ya existe otro proyecto con este slug' : true
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description (Spanish)',
      type: 'text',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
    }),
    defineField({
      name: 'showcase',
      title: 'Showcase (case study destacado)',
      description: 'Los proyectos showcase tienen página de detalle propia',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'problem',
      title: 'Problem (Spanish) — caso de estudio',
      type: 'text',
    }),
    defineField({
      name: 'problemEn',
      title: 'Problem (English)',
      type: 'text',
    }),
    defineField({
      name: 'solution',
      title: 'Solution (Spanish)',
      type: 'text',
    }),
    defineField({
      name: 'solutionEn',
      title: 'Solution (English)',
      type: 'text',
    }),
    defineField({
      name: 'result',
      title: 'Result (Spanish)',
      type: 'text',
    }),
    defineField({
      name: 'resultEn',
      title: 'Result (English)',
      type: 'text',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      description: 'Logros puntuales o métricas destacadas (ej: "API con JWT y rate limiting")',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'architectureImage',
      title: 'Architecture Image (diagrama del case study)',
      description: 'Diagrama de arquitectura que se muestra en la página de detalle',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Code', value: 'FaCode' },
          { title: 'React', value: 'FaReact' },
          { title: 'Node.js', value: 'FaNodeJs' },
          { title: 'Python', value: 'FaPython' },
          { title: 'Angular', value: 'FaAngular' },
          { title: 'Server', value: 'FaServer' },
          { title: 'Database', value: 'FaDatabase' },
          { title: 'Crown', value: 'FaCrown' },
          { title: 'Robot', value: 'FaRobot' },
          { title: 'WhatsApp', value: 'FaWhatsapp' },
          { title: 'Terminal', value: 'FaTerminal' },
        ],
      },
    }),
    defineField({
      name: 'iconColor',
      title: 'Icon Color',
      type: 'string',
      options: {
        list: [
          { title: 'Blue-Purple', value: 'from-blue-600 to-purple-600' },
          { title: 'Purple-Blue', value: 'from-purple-600 to-blue-600' },
          { title: 'Red', value: 'from-red-600 to-red-400' },
          { title: 'Cyan-Blue', value: 'from-cyan-600 to-blue-600' },
          { title: 'Gray', value: 'from-gray-700 to-gray-900' },
          { title: 'Green', value: 'from-green-600 to-emerald-600' },
          { title: 'Dark Green', value: 'from-green-800 to-green-600' },
          { title: 'Yellow-Blue', value: 'from-yellow-600 to-blue-600' },
          { title: 'Orange-Red', value: 'from-orange-600 to-red-600' },
          { title: 'Emerald', value: 'from-emerald-600 to-teal-600' },
          { title: 'Indigo-Cyan', value: 'from-indigo-600 to-cyan-600' },
          { title: 'Amber', value: 'from-amber-600 to-yellow-600' },
        ],
      },
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Full Stack', value: 'fullstack' },
        ],
      },
      initialValue: 'fullstack',
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'object',
      fields: [
        defineField({
          name: 'tests',
          title: 'Tests Count',
          type: 'number',
        }),
        defineField({
          name: 'docker',
          title: 'Uses Docker',
          type: 'boolean',
        }),
        defineField({
          name: 'jwt',
          title: 'Uses JWT',
          type: 'boolean',
        }),
      ],
    }),
  ],
})
