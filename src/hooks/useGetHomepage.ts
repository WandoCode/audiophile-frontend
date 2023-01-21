import dataHomepage from './helpers/dataHomepage'
import hookStore from '../store/hookStore'
import { useQuery } from 'react-query'

const useGetHomepage = () => {
  const getLayoutDatas = async () => {
    try {
      const rep = await hookStore().fetchHomepage()

      const raw = rep.data.data.attributes

      const structuredDatas = dataHomepage(raw).getCleanDatas()

      return structuredDatas
    } catch (error) {
      throw error // TODO:Afficher une page d'erreur
    }
  }

  return useQuery('Homepage', getLayoutDatas)
}

export { useGetHomepage }
