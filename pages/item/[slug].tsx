import { ImageSet } from '../../components/Atoms'
import {
  ProductFeatures,
  ProductPresentation,
  ProductIncludes,
} from '../../components/Pages'
import { GetStaticProps } from 'next'
import {
  CategoriesSection,
  InnerNav,
  ItemShortCard,
  MainDescriptionSection,
} from '../../components/Molecules'
import { DataItem } from '../../hooks/helpers/dataItem'
import { Layout } from '../../components/Layout'
import { getItem, getSlugs } from '../../hooks'
import Head from 'next/head'

function Item({ dataItem }: { dataItem: DataItem | undefined }) {
  const galleryImagesDOM = () => {
    if (!dataItem) return []
    const imagesDataArray = Object.values(dataItem?.galleryImages)

    return imagesDataArray.map((imgData, i) => {
      return (
        <ImageSet
          className="gallery"
          data={imgData}
          key={i}
          altTxt={`illustration image ${i + 1}`}
        />
      )
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
    <>
      <Head>
        <title>{dataItem?.name}</title>
        <meta
          name="description"
          content={`Discover all the qualities of the ${dataItem?.name}`}
        />
      </Head>

      <Layout>
        <div className="item container">
          <InnerNav />
          <section className="item-details">
            <ProductPresentation dataItem={dataItem} slug={dataItem?.slug} />
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
      </Layout>
    </>
  )
}
export async function getStaticPaths() {
  const { slugsArray } = await getSlugs()

  const paths = slugsArray.map((slug) => {
    return { params: { slug } }
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.slug === 'string') {
    const { datasItem } = await getItem({ slug: params.slug })

    return { props: { dataItem: datasItem, key: datasItem?.slug } }
  } else {
    return { notFound: true }
  }
}

export default Item
