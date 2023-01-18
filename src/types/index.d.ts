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

export interface AddItem {
  slug: string
  name: string
  url: string
  price: number
  addedQty: number
}

export interface CartItem {
  slug: string
  name: string
  url: string
  price: number
  quantity: number
}

export interface RemoveItem {
  slug: string
}
