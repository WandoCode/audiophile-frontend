import { useState, useEffect } from 'react'
import hookStore from '../store/hookStore'
import urls from './config.json'
import dataLayout from './helpers/dataLayout'
import { DataLayout } from '../types/index'

const env = process.env.NODE_ENV || 'development'
const baseURL = env !== 'development' ? urls.production : urls.dev

const useGetLayout = (): [DataLayout | undefined, boolean] => {
  const [data, setData] = useState<DataLayout>()
  const [loading, setLoading] = useState(true)

  const getLayoutDatas = async () => {
    setLoading(true)

    try {
      const rep = await hookStore().fetchLayout(baseURL)

      const raw = rep.data.data.attributes

      const cleanDatas = dataLayout(raw, baseURL, env).getCleanDatas()

      setData(cleanDatas)
    } catch (error) {
      throw error // TODO:Afficher une page d'erreur
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getLayoutDatas()
  }, [])

  return [data, loading]
}

export { useGetLayout }
