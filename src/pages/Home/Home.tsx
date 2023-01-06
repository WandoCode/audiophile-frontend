import { useGetHomepage } from '../../hooks/useGetHomepage'
import {
  CategoriesSection,
  MainDescriptionSection,
} from '../../stories/Molecules'
import { useNavigate } from 'react-router-dom'
import { Hero } from './Hero'
import { Product1 } from './Product1'
import { Product2 } from './Product2'
import { Product3 } from './Product3'

function Home() {
  const [data, loading, error] = useGetHomepage()
  const navigate = useNavigate()

  return (
    <div className="home ">
      <Hero data={data} />
      <div className="container">
        <CategoriesSection />
        <section className="products">
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
