import { useState, useEffect } from 'react'
import urls from './config.json'
import axios from 'axios'
import dataItem, { DataItem } from './helpers/dataItem'

interface Props {
  slug?: string
}

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

function useGetItem({ slug }: Props): [DataItem | undefined, boolean, boolean] {
  const [data, setData] = useState<DataItem>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getItem = async () => {
      setLoading(true)

      if (!slug) {
        setError(true)
        return
      }

      try {
        const rep = await axios.get(baseURL + `/api/products/${slug}`)

        const raw = rep.data.data.attributes

        const structuredDatas = dataItem(raw, baseURL, env).getCleanDatas()

        setData(structuredDatas)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getItem()
  }, [slug])
  return [data, loading, error]
}

export default useGetItem
