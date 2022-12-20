import axios from 'axios'
import { useState, useEffect } from 'react'

interface DataHomepage {
  hero: {
    slug: string
    images: {
      mobile: string
      tablet: string
      desktop: string
    }
  }
  product1: {
    slug: string
    images: {
      mobile: string
      tablet: string
      desktop: string
    }
  }
  product2: {
    slug: string
    images: {
      mobile: string
      tablet: string
      desktop: string
    }
  }
  product3: {
    slug: string
    images: {
      mobile: string
      tablet: string
      desktop: string
    }
  }
}
const baseURL = 'http://localhost:1337'

const useGetHomepage = (): [DataHomepage | undefined, boolean, boolean] => {
  const [data, setData] = useState<DataHomepage>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const getLayoutDatas = async () => {
    setLoading(true)
    try {
      const rep = await axios.get(baseURL + '/api/home')

      const raw = rep.data.data.attributes

      const structuredDatas = {
        hero: {
          slug: raw?.heroProduct?.slug,
          images: {
            mobile: raw?.heroProduct?.image?.mobile?.data?.attributes?.url,
            tablet: raw?.heroProduct?.image?.tablet?.data?.attributes?.url,
            desktop: raw?.heroProduct?.image?.desktop?.data?.attributes?.url,
          },
        },
        product1: {
          slug: raw?.product1?.slug,
          images: {
            mobile: raw?.product1?.image?.mobile?.data?.attributes?.url,
            tablet: raw?.product1?.image?.tablet?.data?.attributes?.url,
            desktop: raw?.product1?.image?.desktop?.data?.attributes?.url,
          },
        },
        product2: {
          slug: raw?.product2?.slug,
          images: {
            mobile: raw?.product2?.image?.mobile?.data?.attributes?.url,
            tablet: raw?.product2?.image?.tablet?.data?.attributes?.url,
            desktop: raw?.product2?.image?.desktop?.data?.attributes?.url,
          },
        },
        product3: {
          slug: raw?.product3?.slug,
          images: {
            mobile: raw?.product3?.image?.mobile?.data?.attributes?.url,
            tablet: raw?.product3?.image?.tablet?.data?.attributes?.url,
            desktop: raw?.product?.image?.desktop?.data?.attributes?.url,
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
