import { DataItemCategory } from '../../types'
import { formatImgUrl } from '../../utility'

function dataCategory(raw: any[]) {
  const img = formatImgUrl()

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
            itemRaw.attributes.categoryImage[0].mobile.data.attributes.formats
              .small.url
          ),
          tablet: img.format(
            itemRaw.attributes.categoryImage[0].tablet.data.attributes.formats
              .large.url
          ),
          desktop: img.format(
            itemRaw.attributes.categoryImage[0].desktop.data.attributes.formats
              .small.url
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
