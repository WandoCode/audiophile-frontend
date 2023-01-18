import { hookStore } from '../store'
import urls from './config.json'
import { dataCategory } from './helpers/dataCategory'
import { DataItemCategory } from '../types/index'

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

interface Props {
  category: string
}

async function getCategory({ category }: Props): Promise<{
  datasCategory: DataItemCategory[] | undefined
}> {
  try {
    const rep = await hookStore().fetchCategory(baseURL, category)

    const raw = rep.data.data

    const structuredItemsArray = dataCategory(raw, baseURL, env).getCleanDatas()

    return { datasCategory: structuredItemsArray }
  } catch (error) {
    throw error // TODO:Afficher une page d'erreur
  }
}

export { getCategory }
