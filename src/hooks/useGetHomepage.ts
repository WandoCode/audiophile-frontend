import axios from 'axios'
import { useState, useEffect } from 'react'
import { formatImgUrl } from '../utility/images'
import urls from './config.json'

export interface DataHomepage {
  [key: string]: {
    slug: string
    name: string
    description: string
    newItem: boolean
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

const useGetHomepage = (): [DataHomepage | undefined, boolean, boolean] => {
  const [data, setData] = useState<DataHomepage>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const getLayoutDatas = async () => {
    setLoading(true)
    try {
      const rep = await axios.get(baseURL + '/api/home')

      const raw = rep.data.data.attributes

      const structuredDatas: DataHomepage = {
        hero: {
          slug: raw?.heroProduct?.slug,
          newItem: raw?.heroProduct?.new,
          name: raw?.heroProduct?.title,
          description: raw?.heroProduct?.subtitle,
          images: {
            mobile: img.format(
              raw?.heroProduct?.image?.mobile?.data?.attributes?.url
            ),
            tablet: img.format(
              raw?.heroProduct?.image?.tablet?.data?.attributes?.url
            ),
            desktop: img.format(
              raw?.heroProduct?.image?.desktop?.data?.attributes?.url
            ),
          },
        },
        product1: {
          slug: raw?.product1?.slug,
          newItem: raw?.product1?.new,
          name: raw?.product1?.title,
          description: raw?.product1?.subtitle,
          images: {
            mobile: img.format(
              raw?.product1?.image?.mobile?.data?.attributes?.url
            ),
            tablet: img.format(
              raw?.product1?.image?.tablet?.data?.attributes?.url
            ),
            desktop: img.format(
              raw?.product1?.image?.desktop?.data?.attributes?.url
            ),
          },
        },
        product2: {
          slug: raw?.product2?.slug,
          newItem: raw?.product2?.new,
          name: raw?.product2?.title,
          description: raw?.product2?.subtitle,
          images: {
            mobile: img.format(
              raw?.product2?.image?.mobile?.data?.attributes?.url
            ),
            tablet: img.format(
              raw?.product2?.image?.tablet?.data?.attributes?.url
            ),
            desktop: img.format(
              raw?.product2?.image?.desktop?.data?.attributes?.url
            ),
          },
        },
        product3: {
          slug: raw?.product3?.slug,
          newItem: raw?.product3?.new,
          name: raw?.product3?.title,
          description: raw?.product3?.subtitle,
          images: {
            mobile: img.format(
              raw?.product3?.image?.mobile?.data?.attributes?.url
            ),
            tablet: img.format(
              raw?.product3?.image?.tablet?.data?.attributes?.url
            ),
            desktop: img.format(
              raw?.product3?.image?.desktop?.data?.attributes?.url
            ),
          },
        },
      }

      setData(structuredDatas)
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    getLayoutDatas()
  }, [])

  return [data, loading, error]
}

export { useGetHomepage }
