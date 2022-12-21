import axios from 'axios'
import { useState, useEffect } from 'react'
const baseURL = 'http://localhost:1337'

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
          image: raw?.image1?.data?.attributes?.url,
        },
        category2: {
          name: raw?.category2,
          image: raw?.image2?.data?.attributes?.url,
        },
        category3: {
          name: raw?.category3,
          image: raw?.image3?.data?.attributes?.url,
        },
        mainDescription: {
          text: raw?.mainDescriptionText,
          title: raw?.mainDescriptionTitle,
          images: {
            mobile: raw?.mainDescriptionImages?.mobile?.data?.attributes?.url,
            tablet: raw?.mainDescriptionImages?.tablet?.data?.attributes?.url,
            desktop: raw?.mainDescriptionImages?.desktop?.data?.attributes?.url,
          },
        },
        footer: raw?.footer,
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

export { useGetLayout }
