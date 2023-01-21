import dataCategory from './helpers/dataCategory'
import hookStore from '../store/hookStore'
import { useQuery } from 'react-query'

interface Props {
  category?: string
}

function useGetCategory({ category }: Props) {
  const getCategoryDatas = async () => {
    try {
      const rep = await hookStore().fetchCategory(category || '')

      const raw = rep.data.data as any[]

      const structuredItemsArray = dataCategory(raw).getCleanDatas()

      return structuredItemsArray
    } catch (error) {
      throw error // TODO:Afficher une page d'erreur
    }
  }

  return useQuery(['category', category], getCategoryDatas)
}

export { useGetCategory }
