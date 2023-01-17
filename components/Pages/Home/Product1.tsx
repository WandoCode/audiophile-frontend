import { BtnLink, ImageSet } from '../../Atoms'
import { DataHomepage } from '../../../hooks/helpers/dataHomepage'

interface Props {
  data: DataHomepage | undefined
}

function Product1({ data }: Props) {
  return (
    <article className="product1 ">
      <ImageSet
        className="product1"
        altTxt={data?.product1.name}
        data={data?.product1.images}
        width={{ desktop: 410, mobile: 172, tablet: 197 }}
        height={{ desktop: 495, mobile: 207, tablet: 237 }}
      />
      <div className="product1__text">
        <h2 className="h2">{data?.product1.name}</h2>
        <p className="product1__description white">
          {data?.product1.description}
        </p>
        <BtnLink
          className="btn--secondary--dark"
          level="secondary"
          text="See product"
          href={`/item/${data?.product1.slug}`}
        />
      </div>
    </article>
  )
}

export { Product1 }
