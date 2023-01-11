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

      if (rep.status !== 200)
        throw new Error(`Server responded with status ${rep.status}`)

      const raw = rep.data.data as any[]

      const structuredItemsArray = dataCategory(
        raw,
        baseURL,
        env
      ).getCleanDatas()

      setData(structuredItemsArray)
    } catch (error) {
      setError(true) // TODO:Afficher une page d'erreur
      throw error
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
