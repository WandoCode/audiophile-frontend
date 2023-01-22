import { useGetHomepage } from '../../hooks/useGetHomepage'
import { Hero } from './Hero'
import { Product1 } from './Product1'
import { Product2 } from './Product2'
import { Product3 } from './Product3'
import LoadStateWrapper from '../../components/LoadStateWrapper'
import axios from 'axios'
import {
  CategoriesSection,
  MainDescriptionSection,
} from '../../stories/Molecules'
import { Error } from '../Error/Error'

function Home() {
  const { data, isLoading, isError, error } = useGetHomepage()

  if (isError) {
    const message = axios.isAxiosError(error) ? error.message : 'Uknown error'
    return <Error message={message} />
  }

  if (!isError) {
    return (
      <div className="home ">
        <LoadStateWrapper loading={isLoading}>
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
        </LoadStateWrapper>
      </div>
    )
  }
}

export { Home }
