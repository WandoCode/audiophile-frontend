import { CategoriesSection, MainDescriptionSection } from '../stories/Molecules'
import LoadStateWrapper from '../components/utils/LoadStateWrapper'
import { useGetHomepage } from '../hooks/useGetHomepage'
import { Product1 } from '../components/Home/Product1'
import { Product2 } from '../components/Home/Product2'
import { Product3 } from '../components/Home/Product3'
import { Hero } from '../components/Home/Hero'
import { Error } from './Error'
import axios from 'axios'

function Home() {
  const { data, isLoading, isError, error } = useGetHomepage()

  if (isError) {
    const message = axios.isAxiosError(error) ? error.message : 'Uknown error'
    return <Error message={message} />
  } else {
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

export default Home
