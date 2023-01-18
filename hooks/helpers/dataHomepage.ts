import { formatImgUrl } from '../../utility'
import { DataHomepage } from '../../types/index'

function dataHomepage(raw: any, baseURL: string, env: string) {
  const img = formatImgUrl(baseURL, env)

  const getCleanDatas = (): DataHomepage => {
    return {
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
  }

  return { getCleanDatas }
}

export { dataHomepage }
