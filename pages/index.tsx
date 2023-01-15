import { getHomepage } from '../hooks/getHomepage'
import { Hero } from '../components/Home/Hero'
import { CategoriesSection, MainDescriptionSection } from '../stories/Molecules'
import { Product1 } from '../components/Home/Product1'
import { Product2 } from '../components/Home/Product2'
import { Product3 } from '../components/Home/Product3'
import { Layout } from './Layout'
import { DataLayout } from '../hooks/helpers/dataLayout'
import { DataHomepage } from '../hooks/helpers/dataHomepage'

function Home({ datasHomepage }: { datasHomepage: DataHomepage }) {
  return (
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
  )
}

export const getStaticProps = async () => {
  const { datasHomepage } = await getHomepage()

  return { props: { datasHomepage } }
}

// TODO: Add loadwrapper?
// TODO getStatic est la bonne maniere? Client side? server side?
export default Home
