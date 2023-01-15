import hookStore from '../store/hookStore'
import urls from './config.json'
import dataLayout, { DataLayout } from './helpers/dataLayout'

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

const getLayout = async (): Promise<{
  datasLayout: DataLayout | undefined
}> => {
  try {
    const rep = await hookStore().fetchLayout(baseURL)

    const raw = rep.data.data.attributes

    const cleanDatas = dataLayout(raw, baseURL, env).getCleanDatas()

    return { datasLayout: cleanDatas }
  } catch (error) {
    throw error // TODO:Afficher une page d'erreur
  }
}

export { getLayout }
