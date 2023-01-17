import { getHomepage } from '../hooks'
import { DataHomepage } from '../hooks/helpers/dataHomepage'

import {
  CategoriesSection,
  MainDescriptionSection,
} from '../components/Molecules'
import { Product1, Product2, Product3, Hero } from '../components/Pages'
import { Layout } from '../components/Layout'
import Head from 'next/head'

function Home({ datasHomepage }: { datasHomepage: DataHomepage }) {
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta
          name="description"
          content="Discover all of our hight quality products for music enthousiast"
        />
      </Head>
      <Layout>
        <div className="home ">
          <Hero data={datasHomepage} />
          <div className="container">
            <CategoriesSection />
            <section className="home__products">
              <Product1 data={datasHomepage} />
              <Product2 data={datasHomepage} />
              <Product3 data={datasHomepage} />
            </section>
            <MainDescriptionSection />
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const { datasHomepage } = await getHomepage()
  return { props: { datasHomepage } }
}

// TODO getStatic est la bonne maniere? Client side? server side?
export default Home
