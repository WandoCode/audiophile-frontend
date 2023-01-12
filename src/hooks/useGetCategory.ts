import { useState, useEffect } from 'react'
import urls from './config.json'
import dataCategory, { DataItemCategory } from './helpers/dataCategory'
import hookStore from '../store/hookStore'

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

interface Props {
  category?: string
}

function useGetCategory({
  category,
}: Props): [DataItemCategory[] | undefined, boolean] {
  const [data, setData] = useState<DataItemCategory[]>()
  const [loading, setLoading] = useState(true)

  const getCategoryDatas = async (categoryString: string) => {
    setLoading(true)

    try {
      const rep = await hookStore().fetchCategory(baseURL, categoryString)

      const raw = rep.data.data as any[]

      const structuredItemsArray = dataCategory(
        raw,
        baseURL,
        env
      ).getCleanDatas()

      setData(structuredItemsArray)
    } catch (error) {
      throw error // TODO:Afficher une page d'erreur
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (category) getCategoryDatas(category)
  }, [category])

  return [data, loading]
}

export { useGetCategory }
