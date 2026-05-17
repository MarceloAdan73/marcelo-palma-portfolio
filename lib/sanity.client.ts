import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'x8oaorjf',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

export default client
