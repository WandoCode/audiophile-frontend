import dataCategory from './helpers/dataCategory'
import hookStore from '../store/hookStore'
import { useQuery } from 'react-query'

interface Props {
  category?: string
}

function useGetCategory({ category }: Props) {
  const getCategoryDatas = async () => {
    const rep = await hookStore().fetchCategory(category || '')

    const raw = rep.data.data as any[]

    const structuredItemsArray = dataCategory(raw).getCleanDatas()

    return structuredItemsArray
  }

  return useQuery(['category', category], getCategoryDatas)
}

export { useGetCategory }
