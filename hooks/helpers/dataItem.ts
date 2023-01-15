import { formatImgUrl } from '../../utility'

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
  shortName: string
  name: string
  slug: string
  images: ImagesSet
}

export interface DataItem {
  name: string
  shortName: string
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

  cartImage: string
}

function dataItem(raw: any, baseURL: string, env: string) {
  const getCleanDatas = (): DataItem => {
    const img = formatImgUrl(baseURL, env)
    const rawOthers = raw.others.data

    return {
      name: raw?.name,
      shortName: raw?.shortName,
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
          shortName: rawOthers[0]?.attributes?.shortName,
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
              rawOthers[0].attributes?.shared?.desktop?.data?.attributes?.url
            ),
          },
        },
        second: {
          shortName: rawOthers[1]?.attributes?.shortName,
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
              rawOthers[1].attributes?.shared?.desktop?.data?.attributes?.url
            ),
          },
        },
        third: {
          shortName: rawOthers[2]?.attributes?.shortName,
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
              rawOthers[2].attributes?.shared?.desktop?.data?.attributes?.url
            ),
          },
        },
      },
      cartImage: img.format(raw?.cartImage.data.attributes.url),
    }
  }

  return { getCleanDatas }
}

export default dataItem
