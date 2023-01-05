import { useGetHomepage } from '../hooks/useGetHomepage'
import { Button, ImageSet } from '../stories/Atoms'
import { CategoriesSection, MainDescriptionSection } from '../stories/Molecules'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [data, loading, error] = useGetHomepage()
  const navigate = useNavigate()

  return (
    <div className="home ">
      <section className="hero">
        <div className="container">
          <div className="hero__container">
            {data?.hero.newItem && (
              <p className="text-100 text-gray">New product</p>
            )}

            <h1 className="h1">{data?.hero.name}</h1>
            <p className="subtitle">{data?.hero.description}</p>

            <Button
              text="see product"
              level="primary"
              onClickHandler={() => {
                navigate(`/item/${data?.hero.slug}`)
              }}
              className="hero__cta"
            />
          </div>
        </div>
      </section>
      <div className="container">
        <CategoriesSection />
        <section className="products">
          <article className="product1 ">
            <ImageSet
              className="product1"
              altTxt={data?.product1.name}
              data={data?.product1.images}
            />
            <div className="product1__text">
              <h2 className="h2">{data?.product1.name}</h2>
              <p className="product1__description white">
                {data?.product1.description}
              </p>
              <Button
                className="btn--secondary--dark"
                level="secondary"
                text="See product"
                onClickHandler={() => {
                  navigate(`/item/${data?.product1.slug}`)
                }}
              />
            </div>
          </article>
          <article className="product2">
            <ImageSet
              className="product2"
              altTxt={data?.product2.name}
              data={data?.product2.images}
            />

            <div className="product2__text">
              <h2 className="h2 h2--secondary">{data?.product2.name}</h2>

              <Button
                level="secondary"
                text="See product"
                onClickHandler={() => {
                  navigate(`/item/${data?.product2.slug}`)
                }}
              />
            </div>
          </article>
          <article className="product3">
            <ImageSet
              className="product3"
              altTxt={data?.product3.name}
              data={data?.product3.images}
            />

            <div className="product3__text">
              <h2 className="h2 h2--secondary">{data?.product3.name}</h2>

              <Button
                level="secondary"
                text="See product"
                onClickHandler={() => {
                  navigate(`/item/${data?.product3.slug}`)
                }}
              />
            </div>
          </article>
        </section>
        <MainDescriptionSection />
      </div>
    </div>
  )
}

export { Home }
