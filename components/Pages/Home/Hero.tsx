import { DataHomepage } from '../../../hooks/helpers/dataHomepage'
import { BtnLink } from '../../Atoms'

interface Props {
  data: DataHomepage | undefined
}
function Hero({ data }: Props) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__container">
          {data?.hero.newItem && (
            <p className="text-100 text-gray">New product</p>
          )}

          <h1 className="h1">{data?.hero.name}</h1>
          <p className="subtitle">{data?.hero.description}</p>
          <BtnLink
            text="see product"
            level="primary"
            href={`/item/${data?.hero.slug}`}
            className="hero__cta"
          />
        </div>
      </div>
    </section>
  )
}

export { Hero }
