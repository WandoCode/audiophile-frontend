import { formatImgUrl } from '../../utility/images'

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

function dataLayout(raw: any, baseURL: string, env: string) {
  const img = formatImgUrl(baseURL, env)

  const getCleanDatas = (): DataLayout => {
    return {
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
  }

  return { getCleanDatas }
}

export default dataLayout
