import { useParams } from 'react-router-dom'
import useGetItem from '../../hooks/useGetItem'
import { ImageSet } from '../../stories/Atoms'
import { ProductPresentation } from './ProductPresentation'
import { ProductFeatures } from './ProductFeatures'
import { ProductIncludes } from './ProductIncludes'
import {
  CategoriesSection,
  InnerNav,
  ItemShortCard,
  MainDescriptionSection,
} from '../../stories/Molecules'
import LoadStateWrapper from '../../components/LoadStateWrapper'

function Item() {
  const { slug } = useParams()
  const { data, isLoading } = useGetItem({ slug })

  const galleryImagesDOM = () => {
    if (!data) return []
    const imagesDataArray = Object.values(data?.galleryImages)

    return imagesDataArray.map((imgData, i) => {
      return <ImageSet className="gallery" data={imgData} key={i} lazy={true} />
    })
  }

  const shortCardsDOM = () => {
    if (!data) return []

    const linkedItemsDataArray = Object.values(data?.linkedItems)
    return linkedItemsDataArray.map((linkedItem, i) => {
      return <ItemShortCard data={linkedItem} key={i} />
    })
  }

  return (
    <div className="item container">
      <LoadStateWrapper loading={isLoading}>
        <InnerNav />
        <section className="item-details">
          <ProductPresentation dataItem={data} slug={slug} />
          <ProductFeatures features={data?.features ?? ''} />
          <ProductIncludes dataItem={data} />
        </section>
        <section className="gallery">
          <h2 className="visually-hidden">Gallery</h2>
          <div className="gallery__images">{galleryImagesDOM()}</div>
        </section>

        <section className="you-may-like">
          <h2 className="h2 h2--small text-black">You may also like</h2>
          <div className="you-may-like__items">{shortCardsDOM()}</div>
        </section>
        <CategoriesSection />
        <MainDescriptionSection />
      </LoadStateWrapper>
    </div>
  )
}

export { Item }
