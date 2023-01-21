import { useState, useEffect } from 'react'
import dataCategory from './helpers/dataCategory'
import hookStore from '../store/hookStore'
import { DataItemCategory } from '../types'

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
      const rep = await hookStore().fetchCategory(categoryString)

      const raw = rep.data.data as any[]

      const structuredItemsArray = dataCategory(raw).getCleanDatas()

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
