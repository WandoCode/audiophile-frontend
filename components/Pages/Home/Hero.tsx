import { DataHomepage } from '../../../hooks/helpers/dataHomepage'
import { Button } from '../../Atoms'
import { useRouter } from 'next/router'

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
    </section>
  )
}

export { Hero }
