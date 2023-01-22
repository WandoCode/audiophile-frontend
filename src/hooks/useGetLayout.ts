import hookStore from '../store/hookStore'
import dataLayout from './helpers/dataLayout'
import { useQuery } from 'react-query'

const getLayoutDatas = async () => {
  const rep = await hookStore().fetchLayout()

  const raw = rep.data.data.attributes

  const cleanDatas = dataLayout(raw).getCleanDatas()

  return cleanDatas
}

const useGetLayout = () => {
  return useQuery('layout', getLayoutDatas)
}

export { useGetLayout }
