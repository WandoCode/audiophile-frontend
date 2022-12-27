import axios from 'axios'
import { useState, useEffect } from 'react'
import { formatImgUrl } from '../utility/images'
import urls from './config.json'

export interface DataLayout {
  footer: string
  category1: { name: string; image: string }
  category2: { name: string; image: string }
  category3: { name: string; image: string }
  mainDescription: {
    text: string
    title: string
    images: {
      mobile: string
      tablet: string
      desktop: string
    }
  }
}

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production
const img = formatImgUrl(baseURL, env)

const useGetLayout = (): [DataLayout | undefined, boolean, boolean] => {
  const [data, setData] = useState<DataLayout>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const getLayoutDatas = async () => {
    setLoading(true)

    try {
      const rep = await axios.get(baseURL + '/api/layout-data?populate=*')

      const raw = rep.data.data.attributes
      const structuredDatas: DataLayout = {
        category1: {
          name: raw?.category1,
          image: img.format(raw?.image1?.data?.attributes?.url),
        },
        category2: {
          name: raw?.category2,
          image: img.format(raw?.image2?.data?.attributes?.url),
        },
        category3: {
          name: raw?.category3,
          image: img.format(raw?.image3?.data?.attributes?.url),
        },
        mainDescription: {
          text: raw?.mainDescriptionText,
          title: raw?.mainDescriptionTitle,
          images: {
            mobile: img.format(
              raw?.mainDescriptionImages?.mobile?.data?.attributes?.url
            ),
            tablet: img.format(
              raw?.mainDescriptionImages?.tablet?.data?.attributes?.url
            ),
            desktop: img.format(
              raw?.mainDescriptionImages?.desktop?.data?.attributes?.url
            ),
          },
        },
        footer: raw?.footer,
      }

      setData(structuredDatas)
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
