import axios from 'axios'
import { useState, useEffect } from 'react'
import urls from './config.json'
import dataHomepage, { DataHomepage } from './helpers/dataHomepage'

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

const useGetHomepage = (): [DataHomepage | undefined, boolean, boolean] => {
  const [data, setData] = useState<DataHomepage>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const getLayoutDatas = async () => {
    setLoading(true)
    try {
      const rep = await axios.get(baseURL + '/api/home')

      if (rep.status !== 200)
        throw new Error(`Server responded with status ${rep.status}`)

      const raw = rep.data.data.attributes

      const structuredDatas = dataHomepage(raw, baseURL, env).getCleanDatas()

      setData(structuredDatas)
    } catch (error) {
      setError(true) // TODO:Afficher une page d'erreur
      throw error
    }
    setLoading(false)
  }

  useEffect(() => {
    getLayoutDatas()
  }, [])

  return [data, loading, error]
}

export { useGetHomepage }
