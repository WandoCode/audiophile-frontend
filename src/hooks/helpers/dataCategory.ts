import { DataItemCategory } from '../../types'
import { formatImgUrl } from '../../utility'

function dataCategory(raw: any[], baseURL: string, env: string) {
  const img = formatImgUrl(baseURL, env)

  const getCleanDatas = (): DataItemCategory[] => {
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

    return structuredItemsArray
  }

  return { getCleanDatas }
}

export default dataCategory
