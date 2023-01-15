import useGetItem from '../hooks/getItem'
import { ImageSet } from '../stories/Atoms'
import { ProductFeatures } from '../components/Item/ProductFeatures'
import LoadStateWrapper from '../components/App/LoadStateWrapper'
import { GetStaticProps } from 'next'
import {
  CategoriesSection,
  InnerNav,
  ItemShortCard,
  MainDescriptionSection,
} from '../stories/Molecules'

function Item() {
  const { slug } = useParams()

  const galleryImagesDOM = () => {
    if (!dataItem) return []
    const imagesDataArray = Object.values(dataItem?.galleryImages)

    return imagesDataArray.map((imgData, i) => {
      return <ImageSet className="gallery" data={imgData} key={i} lazy={true} />
    })
  }

  const shortCardsDOM = () => {
    if (!dataItem) return []

    const linkedItemsDataArray = Object.values(dataItem?.linkedItems)
    return linkedItemsDataArray.map((linkedItem, i) => {
      return <ItemShortCard data={linkedItem} key={i} />
    })
  }

  return (
    <div className="item container">
      <InnerNav />
      <section className="item-details">
        <ProductPresentation dataItem={dataItem} slug={slug} />
        <ProductFeatures features={dataItem?.features ?? ''} />
        <ProductIncludes dataItem={dataItem} />
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
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ slug }) => {
  const { datasItem } = await useGetItem({ slug })
  return { props: { datasItem } }
}
export { Item }
