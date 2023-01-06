import { useGetHomepage } from '../../hooks/useGetHomepage'
import { Hero } from './Hero'
import { Product1 } from './Product1'
import { Product2 } from './Product2'
import { Product3 } from './Product3'
import {
  CategoriesSection,
  MainDescriptionSection,
} from '../../stories/Molecules'

function Home() {
  const [data, loading, error] = useGetHomepage()

  return (
    <div className="home ">
      <Hero data={data} />
      <div className="container">
        <CategoriesSection />
        <section className="home__products">
          <Product1 data={data} />
          <Product2 data={data} />
          <Product3 data={data} />
        </section>
        <MainDescriptionSection />
      </div>
    </div>
  )
}

export { Home }