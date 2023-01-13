import { useState, useEffect } from 'react'
import urls from './config.json'
import dataHomepage, { DataHomepage } from './helpers/dataHomepage'
import hookStore from '../store/hookStore'

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

const useGetHomepage = (): [DataHomepage | undefined, boolean] => {
  const [data, setData] = useState<DataHomepage>()
  const [loading, setLoading] = useState(true)

  const getLayoutDatas = async () => {
    setLoading(true)
    try {
      const rep = await hookStore().fetchHomepage(baseURL)

      const raw = rep.data.data.attributes

      const structuredDatas = dataHomepage(raw, baseURL, env).getCleanDatas()

      setData(structuredDatas)
    } catch (error) {
      throw error // TODO:Afficher une page d'erreur
    }
    setLoading(false)
  }

  useEffect(() => {
    getLayoutDatas()
  }, [])

  return [data, loading]
}

export { useGetHomepage }