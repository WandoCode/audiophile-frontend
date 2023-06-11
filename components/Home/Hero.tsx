import { useRouter } from 'next/router'
import { Button } from '../../stories/Atoms'
import { DataHomepage } from '../../types'

interface Props {
  data: DataHomepage | undefined
}

function Hero({ data }: Props) {
  const router = useRouter()

  return (
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
              router.push(`/item/${data?.hero.slug}`)
            }}
            className="hero__cta"
          />
        </div>
      </div>
      {data && (
        <picture>
          <source
            media="(min-width:950px)"
            srcSet="/assets/home/image-hero-lg.jpg"
          />
          <source
            media="(min-width:500px)"
            srcSet="/assets/home/image-hero-md.jpg"
          />
          <img
            className={`hero__img`}
            src="/assets/home/image-hero-sm.jpg"
            alt="XX99 MARK II HEADPHONES"
            loading={'eager'}
          />
        </picture>
      )}
    </section>
  )
}

export { Hero }
