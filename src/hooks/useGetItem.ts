import { useState, useEffect } from 'react'
import urls from './config.json'
import { formatImgUrl } from '../utility/images'
import axios from 'axios'

interface IncludeItem {
  quantity: number
  item: string
}

interface ImagesSet {
  mobile: string
  tablet: string
  desktop: string
}

export interface LinkedItem {
  name: string
  slug: string
  images: ImagesSet
}

interface DataItem {
  name: string
  slug: string
  price: number
  newItem: boolean
  description: string
  features: string
  includes: IncludeItem[]
  mainImages: ImagesSet
  galleryImages: {
    first: ImagesSet
    second: ImagesSet
    third: ImagesSet
  }

  linkedItems: {
    first: LinkedItem
    second: LinkedItem
    third: LinkedItem
  }
}

interface Props {
  slug?: string
}

const env = process.env.NODE_ENV || 'development'
const baseURL = env === 'development' ? urls.dev : urls.production
const img = formatImgUrl(baseURL, env)

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
        const rawOthers = rep.data.data.attributes.others.data

        const structuredDatas: DataItem = {
          name: raw?.name,
          slug: raw?.slug,
          newItem: raw?.new,
          price: raw?.price,
          features: raw?.features,
          description: raw?.description,
          includes: raw?.includes,
          mainImages: {
            mobile: img.format(raw?.image[0]?.mobile?.data?.attributes?.url),
            tablet: img.format(raw?.image[0]?.tablet?.data?.attributes?.url),
            desktop: img.format(raw?.image[0]?.desktop?.data?.attributes?.url),
          },
          galleryImages: {
            first: {
              mobile: img.format(
                raw?.gallery[0].first[0].mobile?.data?.attributes?.url
              ),
              tablet: img.format(
                raw?.gallery[0].first[0].tablet?.data?.attributes?.url
              ),
              desktop: img.format(
                raw?.gallery[0].first[0].desktop?.data?.attributes?.url
              ),
            },
            second: {
              mobile: img.format(
                raw?.gallery[0].second[0].mobile?.data?.attributes?.url
              ),
              tablet: img.format(
                raw?.gallery[0].second[0].tablet?.data?.attributes?.url
              ),
              desktop: img.format(
                raw?.gallery[0].second[0].desktop?.data?.attributes?.url
              ),
            },
            third: {
              mobile: img.format(
                raw?.gallery[0].third[0].mobile?.data?.attributes?.url
              ),
              tablet: img.format(
                raw?.gallery[0].third[0].tablet?.data?.attributes?.url
              ),
              desktop: img.format(
                raw?.gallery[0].third[0].desktop?.data?.attributes?.url
              ),
            },
          },
          linkedItems: {
            first: {
              name: rawOthers[0]?.attributes?.name,
              slug: rawOthers[0]?.attributes?.slug,
              images: {
                mobile: img.format(
                  rawOthers[0].attributes?.shared?.mobile?.data?.attributes?.url
                ),
                tablet: img.format(
                  rawOthers[0].attributes?.shared?.tablet?.data?.attributes?.url
                ),
                desktop: img.format(
                  rawOthers[0].attributes?.shared?.desktop?.data?.attributes
                    ?.url
                ),
              },
            },
            second: {
              name: rawOthers[1]?.attributes?.name,
              slug: rawOthers[1]?.attributes?.slug,

              images: {
                mobile: img.format(
                  rawOthers[1].attributes?.shared?.mobile?.data?.attributes?.url
                ),
                tablet: img.format(
                  rawOthers[1].attributes?.shared?.tablet?.data?.attributes?.url
                ),
                desktop: img.format(
                  rawOthers[1].attributes?.shared?.desktop?.data?.attributes
                    ?.url
                ),
              },
            },
            third: {
              name: rawOthers[2]?.attributes?.name,
              slug: rawOthers[2]?.attributes?.slug,
              images: {
                mobile: img.format(
                  rawOthers[2].attributes?.shared?.mobile?.data?.attributes?.url
                ),
                tablet: img.format(
                  rawOthers[2].attributes?.shared?.tablet?.data?.attributes?.url
                ),
                desktop: img.format(
                  rawOthers[2].attributes?.shared?.desktop?.data?.attributes
                    ?.url
                ),
              },
            },
          },
        }

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
