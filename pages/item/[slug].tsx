import {
  CategoriesSection,
  InnerNav,
  ItemShortCard,
  MainDescriptionSection,
} from '../../stories/Molecules'
import { ProductPresentation } from '../../components/Item/ProductPresentation'
import { ProductFeatures } from '../../components/Item/ProductFeatures'
import { ProductIncludes } from '../../components/Item/ProductIncludes'
import { ImageSet } from '../../stories/Atoms'
import Error from '../error'
import axios from 'axios'
import { useEffect } from 'react'
import useSetLoader from '../../features/Loader/useSetLoader'
import { GetStaticProps, GetStaticPaths } from 'next'
import { DehydratedState, QueryClient, dehydrate, useQuery } from 'react-query'
import hookStore from '../../store/hookStore'
import dataItem from '../../hooks/helpers/dataItem'
import { ProductSlug } from '../../types'
import { useRouter } from 'next/router'
import { Layout } from '../Layout'

const getItem = async (slug: string) => {
  const rep = await hookStore().fetchItem(slug || '')

  const raw = rep.data.data.attributes

  const structuredDatas = dataItem(raw).getCleanDatas()

  return structuredDatas
}
const getItemsSlug = async (): Promise<string[]> => {
  const rep = await hookStore().fetchProductsSlug()
  const rawProductsSlug = rep.data as ProductSlug[]

  const slugs = rawProductsSlug.map((rawProductSlug) => rawProductSlug.slug)

  return slugs
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getItemsSlug()

  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{
  dehydratedState: DehydratedState
}> = async ({ params }) => {
  const slug = params?.slug as string

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['slug', slug], () => getItem(slug))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

function Item() {
  const router = useRouter()
  const setLoader = useSetLoader()

  const slug = router.query.slug
  if (typeof slug !== 'string' && slug! instanceof String)
    return router.push('404')

  const { data, isLoading, error, isError } = useQuery(
    ['slug', router.query.slug],
    () => getItem(slug as string)
  )

  useEffect(() => {
    setLoader(isLoading)
  }, [isLoading])

  const galleryImagesDOM = () => {
    if (!data) return []
    const imagesDataArray = Object.values(data?.galleryImages)

    return imagesDataArray.map((imgData, i) => {
      return (
        <ImageSet
          className="gallery"
          data={imgData}
          key={`itemImg${i}`}
          lazy={true}
          altTxt={`gallery image ${i}`}
        />
      )
    })
  }

  const shortCardsDOM = () => {
    if (!data) return []

    const linkedItemsDataArray = Object.values(data?.linkedItems)
    return linkedItemsDataArray.map((linkedItem, i) => {
      return <ItemShortCard data={linkedItem} key={i} />
    })
  }

  if (isError || Array.isArray(slug)) {
    const message = axios.isAxiosError(error) ? error.message : 'Unknown error'
    return <Error message={message} />
  } else {
    return (
      <Layout>
        <div className="item container">
          <InnerNav />
          <section className="item-details">
            <h2 className="visually-hidden">Item details</h2>
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
        </div>
      </Layout>
    )
  }
}

export default Item
