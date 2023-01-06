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

function Item() {
  const { slug } = useParams()
  const [dataItem] = useGetItem({ slug })

  const galleryImagesDOM = () => {
    if (!dataItem) return []
    const imagesDataArray = Object.values(dataItem?.galleryImages)

    return imagesDataArray.map((imgData, i) => {
      return <ImageSet className="gallery" data={imgData} key={i} />
    })
  }

  const shortCardsDOM = () => {
    if (!dataItem) return []

    const linkedItemsDataArray = Object.values(dataItem?.linkedItems)
    return linkedItemsDataArray.map((linkedItem, i) => {
      return <ItemShortCard data={linkedItem} key={i} />
    })
  }

  // /* TODO: Changer en <picture> et imgset? */
  return (
    <div className="item container">
      <InnerNav />

      <section className="item-details">
        <ProductPresentation dataItem={dataItem} slug={slug} />
        <ProductFeatures features={dataItem?.features ?? ''} />
        <ProductIncludes dataItem={dataItem} />
      </section>
      <section className="gallery">
        <div className="gallery__images">{galleryImagesDOM()}</div>
      </section>

      <section className="you-may-like">
        <h2 className="h2 h2--small text-black">You may also like</h2>
        <div className="you-may-like__items">{shortCardsDOM()}</div>
      </section>
      <CategoriesSection />
      <MainDescriptionSection />
    </div>
  )
}

export { Item }