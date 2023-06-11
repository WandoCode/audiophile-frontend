import { CategoriesSection, MainDescriptionSection } from '../stories/Molecules'
import { Product1 } from '../components/Home/Product1'
import { Product2 } from '../components/Home/Product2'
import { Product3 } from '../components/Home/Product3'
import { Hero } from '../components/Home/Hero'
import { useEffect } from 'react'
import useSetLoader from '../features/Loader/useSetLoader'
import { Layout } from '../components/Layout/Layout'
import { QueryClient, dehydrate, useQuery } from 'react-query'
import hookStore from '../store/hookStore'
import dataHomepage from '../hooks/helpers/dataHomepage'
import Error from './error'
import axios from 'axios'

function Home() {
  const { data, isLoading, isError, error } = useQuery(
    'Homepage',
    getLayoutDatas
  )
  const setLoader = useSetLoader()

  useEffect(() => {
    setLoader(isLoading)
  }, [isLoading])

  if (isError) {
    const message = axios.isAxiosError(error) ? error.message : 'Uknown error'
    return <Error message={message} />
  } else {
    return (
      <Layout>
        <div className="home ">
          <Hero data={data} />
          <div className="container">
            <CategoriesSection />
            <section className="home__products">
              <h2 className="visually-hidden">Highlighted products</h2>
              <Product1 data={data} />
              <Product2 data={data} />
              <Product3 data={data} />
            </section>
            <MainDescriptionSection />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home

const getLayoutDatas = async () => {
  const rep = await hookStore().fetchHomepage()

  const raw = rep.data.data.attributes

  const structuredDatas = dataHomepage(raw).getCleanDatas()

  return structuredDatas
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('Homepage', getLayoutDatas)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
