import { useEffect } from 'react'
import { useGetHomepage } from '../hooks/useGetHomepage'
import { Button } from '../stories/Atoms'
import { CategoriesSection } from '../stories/Molecules'

function Home() {
  const [data, loading, error] = useGetHomepage()

  console.log(data?.product3.images)

  return (
    <div className="home ">
      <section className="hero">
        <div className="container">
          <div className="hero__container">
            {data?.hero.newItem && (
              <p className="text-100 text-100--gray">New product</p>
            )}

            <h1 className="h1">{data?.hero.name}</h1>
            <p className="subtitle">{data?.hero.description}</p>

            <Button
              text="see product"
              level="primary"
              onClickHandler={() => {}}
              className="hero__cta"
            />
            {/* //TODO: add handler */}
          </div>
        </div>
      </section>
      <CategoriesSection />
      <section className="products">
        <article className="product1 container">
          <div className="product1__img-container">
            <img
              className="product1__img show-on-desktop"
              src={data?.product1.images.desktop}
              alt={data?.product1.name}
            />
            <img
              className="product1__img show-on-tablet"
              src={data?.product1.images.tablet}
              alt={data?.product1.name}
            />
            <img
              className="product1__img show-on-mobile"
              src={data?.product1.images.mobile}
              alt={data?.product1.name}
            />
          </div>
          <div className="product1__text">
            <h2 className="h2">{data?.product1.name}</h2>
            <p className="product1__description white">
              {data?.product1.description}
            </p>
            <Button
              className="btn--secondary--dark"
              level="secondary"
              text="See product"
              onClickHandler={() => {}}
            />
          </div>
        </article>
        <article className="product2">
          <img
            className="product2__img show-on-desktop"
            src={data?.product2.images.desktop}
            alt={data?.product2.name}
          />
          <img
            id=""
            className="product2__img show-on-tablet"
            src={data?.product2.images.tablet}
            alt={data?.product2.name}
          />
          <img
            className="product2__img show-on-mobile"
            src={data?.product2.images.mobile}
            alt={data?.product2.name}
          />
          <div className="product2__text">
            <h2 className="h2">{data?.product2.name}</h2>
            <p className="product2__description">
              {data?.product2.description}
            </p>
            <Button
              level="secondary"
              text="See product"
              onClickHandler={() => {}}
            />
          </div>
        </article>
        <article className="product3">
          <img
            className="product3__img show-on-desktop"
            src={data?.product3.images.desktop}
            alt={data?.product3.name}
          />
          <img
            className="product3__img show-on-tablet"
            src={data?.product3.images.tablet}
            alt={data?.product3.name}
          />
          <img
            className="product3__img show-on-mobile"
            src={data?.product3.images.mobile}
            alt={data?.product3.name}
          />
          <div className="product3__text">
            <h2 className="h2">{data?.product3.name}</h2>
            <p className="product3__description">
              {data?.product3.description}
            </p>
            <Button
              level="secondary"
              text="See product"
              onClickHandler={() => {}}
            />
          </div>
        </article>
      </section>
    </div>
  )
}

export { Home }
