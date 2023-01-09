import axios from 'axios'
import { useState, useEffect } from 'react'
import { formatImgUrl } from '../utility/images'
import urls from './config.json'

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production
const img = formatImgUrl(baseURL, env)

export interface DataItemCategory {
  name: string
  new: boolean
  description: string
  slug: string
  images: {
    mobile: string
    tablet: string
    desktop: string
  }
}

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

      const structuredItemsArray = [] as DataItemCategory[]
      raw.map((itemRaw) => {
        const structuredItem = {
          name: itemRaw.attributes?.name,
          description: itemRaw.attributes?.description,
          new: itemRaw.attributes?.new,
          slug: itemRaw.attributes?.slug,
          images: {
            mobile: img.format(
              itemRaw.attributes.categoryImage[0].mobile.data.attributes.url
            ),
            tablet: img.format(
              itemRaw.attributes.categoryImage[0].tablet.data.attributes.url
            ),
            desktop: img.format(
              itemRaw.attributes.categoryImage[0].desktop.data.attributes.url
            ),
          },
        }
        structuredItemsArray.push(structuredItem)
      })

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
