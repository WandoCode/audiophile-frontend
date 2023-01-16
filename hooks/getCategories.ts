import { hookStore } from '../store'
import urls from './config.json'

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

async function getCategories(): Promise<{ categoriesArray: string[] }> {
  try {
    const rep = await hookStore().fetchCategories(baseURL)

    const categoriesArray: string[] = []

    for (const key in rep.data) {
      const element = rep.data[key]

      if (key !== 'id') categoriesArray.push(element)
    }

    return { categoriesArray }
  } catch (error) {
    throw error
  }
}

export { getCategories }
