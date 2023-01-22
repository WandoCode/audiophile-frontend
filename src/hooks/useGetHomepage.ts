import dataHomepage from './helpers/dataHomepage'
import hookStore from '../store/hookStore'
import { useQuery } from 'react-query'

const useGetHomepage = () => {
  const getLayoutDatas = async () => {
    const rep = await hookStore().fetchHomepage()

    const raw = rep.data.data.attributes

    const structuredDatas = dataHomepage(raw).getCleanDatas()

    return structuredDatas
  }

  return useQuery('Homepage', getLayoutDatas)
}

export { useGetHomepage }
