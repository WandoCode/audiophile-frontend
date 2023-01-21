import hookStore from '../store/hookStore'
import dataLayout from './helpers/dataLayout'
import { useQuery } from 'react-query'

const useGetLayout = () => {
  const getLayoutDatas = async () => {
    try {
      const rep = await hookStore().fetchLayout()

      const raw = rep.data.data.attributes

      const cleanDatas = dataLayout(raw).getCleanDatas()

      return cleanDatas
    } catch (error) {
      throw error // TODO:Afficher une page d'erreur
    }
  }
  // TODO: besoin du try/catch avec react query?
  return useQuery('layout', getLayoutDatas)
}

export { useGetLayout }
