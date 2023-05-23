import dataItem from './helpers/dataItem'
import hookStore from '../store/hookStore'
import { useQuery } from 'react-query'

interface Props {
  slug?: string
}

function useGetItem({ slug }: Props) {
  const getItem = async () => {
    const rep = await hookStore().fetchItem(slug || '')

    const raw = rep.data.data.attributes

    const structuredDatas = dataItem(raw).getCleanDatas()

    return structuredDatas
  }

  return useQuery(['Items', slug], getItem)
}

export default useGetItem
