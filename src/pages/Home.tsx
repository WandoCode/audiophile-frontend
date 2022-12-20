import { useGetHomepage } from '../hooks/useGetHomepage'
import { Button } from '../stories/Atoms'

function Home() {
  const [data, loading, error] = useGetHomepage()

  return (
    <div className="home ">
      <div className="hero">
        <div className="container">
          <div className="hero__container">
            <p className="text-100 text-100--gray">New product</p>
            <h1 className="h1">XX99 Mark II Headphones</h1>
            <p className="subtitle">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

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
