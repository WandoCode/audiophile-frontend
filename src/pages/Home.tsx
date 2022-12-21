import { useEffect } from 'react'
import { useGetHomepage } from '../hooks/useGetHomepage'
import { Button } from '../stories/Atoms'

function Home() {
  const [data, loading, error] = useGetHomepage()

  return (
    <div className="home ">
      <div className="hero">
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
      </div>
    </div>
  )
}

export { Home }
