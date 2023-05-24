import {
  CategoriesSection,
  ItemCategory,
  MainDescriptionSection,
} from '../../stories/Molecules'
import { Error } from '../Error'
import axios from 'axios'
import useSetLoader from '../../features/Loader/useSetLoader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { QueryClient, dehydrate, useQuery } from 'react-query'
import hookStore from '../../store/hookStore'
import dataCategory from '../../hooks/helpers/dataCategory'
import { Layout } from '../Layout'

const getCategoryDatas = async (category: string) => {
  const rep = await hookStore().fetchCategory(category || '')

  const raw = rep.data.data as any[]

  const structuredItemsArray = dataCategory(raw).getCleanDatas()

  return structuredItemsArray
}

export const getStaticPaths = async () => {
  // Todo: faire un appel à la DB pour connaitre les catégories à intégrer ici et ne pas avoir à les écrire en "dur"
  const paths = [
    {
      params: {
        category: 'headphones',
      },
    },
    {
      params: {
        category: 'speakers',
      },
    },
    {
      params: {
        category: 'earphones',
      },
    },
  ]

  return { paths, fallback: 'blocking' }
}

// TODO: trouver le type
export async function getStaticProps({ params }: any) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['category', params.category], () =>
    getCategoryDatas(params.category)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

function Category() {
  const router = useRouter()
  const setLoader = useSetLoader()

  // TODO: mettre une condition pour que router.query.category soit une string, sinon renvoyer vers page d'erreur
  const category = router.query.category as string
  const { data, isLoading, isError, error } = useQuery(
    ['category', router.query.category],
    () => getCategoryDatas(category)
  )

  useEffect(() => {
    setLoader(isLoading)
  }, [isLoading])

  const itemsDOM = data?.map((itemData, i) => {
    return (
      <ItemCategory
        className={`${i % 2 === 0 ? '' : 'invert'}`}
        data={itemData}
        key={itemData.slug}
        lazyLoad={i > 0}
      />
    )
  })

  if (isError) {
    const message = axios.isAxiosError(error) ? error.message : 'Uknown error'
    return <Error message={message} />
  } else {
    return (
      <Layout>
        <div className="category">
          <div className="category__title">
            <h1 className="h1 h1--medium">{category}</h1>
          </div>
          <div className="container">
            <section className="category__items">{itemsDOM}</section>
            <CategoriesSection />
            <MainDescriptionSection />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Category
