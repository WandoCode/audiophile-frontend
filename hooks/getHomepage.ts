import { hookStore } from '../store'
import urls from './config.json'
import { DataHomepage, dataHomepage } from './helpers/dataHomepage'

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

const getHomepage = async (): Promise<{
  datasHomepage: DataHomepage | undefined
}> => {
  try {
    const rep = await hookStore().fetchHomepage(baseURL)

    const raw = rep.data.data.attributes

    const structuredDatas = dataHomepage(raw, baseURL, env).getCleanDatas()

    return { datasHomepage: structuredDatas }
  } catch (error) {
    throw error // TODO:Afficher une page d'erreur
  }
}

export { getHomepage }
