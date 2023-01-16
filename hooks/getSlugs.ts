import { hookStore } from '../store'
import urls from './config.json'

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

async function getSlugs(): Promise<{ slugsArray: string[] }> {
  try {
    const rep = await hookStore().fetchSlugs(baseURL)

    if (Array.isArray(rep.data)) {
      const slugsArray = rep.data.map((item) => item.slug)

      return { slugsArray }
    } else throw new Error('The object recieved from DB is not an array')
  } catch (error) {
    throw error
  }
}

export { getSlugs }
