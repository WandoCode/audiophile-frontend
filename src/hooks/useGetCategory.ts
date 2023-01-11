import axios from 'axios'
import { useState, useEffect } from 'react'
import { formatImgUrl } from '../utility/images'
import urls from './config.json'
import dataCategory, { DataItemCategory } from './helpers/dataCategory'

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

interface Props {
  category?: string
}
// TODO: gérer les fail de fetch ... Ou les satus autres que 200
function useGetCategory({
  category,
}: Props): [DataItemCategory[] | undefined, boolean, boolean] {
  const [data, setData] = useState<DataItemCategory[]>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const getItemsDatas = async () => {
    setLoading(true)

    try {
      const rep = await axios.get(baseURL + `/api/category/${category}`)
      const raw = rep.data.data as any[]

      const structuredItemsArray = dataCategory(
        raw,
        baseURL,
        env
      ).getCleanDatas()

      setData(structuredItemsArray)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (category) getItemsDatas()
  }, [category])

  return [data, loading, error]
}

export { useGetCategory }
