import { useState, useEffect } from 'react'
import urls from './config.json'
import dataItem, { DataItem } from './helpers/dataItem'
import hookStore from '../store/hookStore'

interface Props {
  slug?: string
}

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production

function useGetItem({ slug }: Props): [DataItem | undefined, boolean] {
  const [data, setData] = useState<DataItem>()
  const [loading, setLoading] = useState(true)

  const getItem = async (slugString: string) => {
    setLoading(true)

    try {
      const rep = await hookStore().fetchItem(baseURL, slugString)

      const raw = rep.data.data.attributes

      const structuredDatas = dataItem(raw, baseURL, env).getCleanDatas()

      setData(structuredDatas)
    } catch (error) {
      throw error // TODO:Afficher une page d'erreur
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (slug) getItem(slug)
  }, [slug])
  return [data, loading]
}

export default useGetItem
