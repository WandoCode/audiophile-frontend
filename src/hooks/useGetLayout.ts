import axios from 'axios'
import { useState, useEffect } from 'react'
import urls from './config.json'
import dataLayout, { DataLayout } from './helpers/dataLayout'

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

const useGetLayout = (): [DataLayout | undefined, boolean, boolean] => {
  const [data, setData] = useState<DataLayout>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const getLayoutDatas = async () => {
    setLoading(true)

    try {
      const rep = await axios.get(baseURL + '/api/layout-data?populate=*')

      const raw = rep.data.data.attributes

      const cleanDatas = dataLayout(raw, baseURL, env).getCleanDatas()

      setData(cleanDatas)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getLayoutDatas()
  }, [])

  return [data, loading, error]
}

export { useGetLayout }
