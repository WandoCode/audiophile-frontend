import dataItem from './helpers/dataItem'
import hookStore from '../store/hookStore'
import { useQuery } from 'react-query'

interface Props {
  slug?: string
}

function useGetItem({ slug }: Props) {
  const getItem = async () => {
    try {
      const rep = await hookStore().fetchItem(slug || '')

      const raw = rep.data.data.attributes

      const structuredDatas = dataItem(raw).getCleanDatas()

      return structuredDatas
    } catch (error) {
      throw error // TODO:Afficher une page d'erreur
    }
  }

  return useQuery('Items', getItem)
}

export default useGetItem
