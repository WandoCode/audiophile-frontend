import axios from 'axios'
import { useState, useEffect } from 'react'

const baseURL = 'http://localhost:1337'

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

function useGetCategory({ category }: Props) {
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
            mobile:
              baseURL +
              itemRaw.attributes.categoryImage[0].mobile.data.attributes.url,
            tablet:
              baseURL +
              itemRaw.attributes.categoryImage[0].tablet.data.attributes.url,
            desktop:
              baseURL +
              itemRaw.attributes.categoryImage[0].desktop.data.attributes.url,
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
