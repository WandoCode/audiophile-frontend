import { BtnLink, ImageSet } from '../../Atoms'
import { DataHomepage } from '../../../hooks/helpers/dataHomepage'

interface Props {
  data: DataHomepage | undefined
}

function Product3({ data }: Props) {
  return (
    <article className="product3">
      <ImageSet
        className="product3"
        altTxt={data?.product3.name}
        data={data?.product3.images}
      />

      <div className="product3__text">
        <h2 className="h2 h2--secondary">{data?.product3.name}</h2>

        <BtnLink
          level="secondary"
          text="See product"
          href={`/item/${data?.product3.slug}`}
        />
      </div>
    </article>
  )
}

export { Product3 }
