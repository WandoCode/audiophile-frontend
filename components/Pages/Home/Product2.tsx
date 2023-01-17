import { BtnLink, ImageSet } from '../../Atoms'
import { DataHomepage } from '../../../hooks/helpers/dataHomepage'

interface Props {
  data: DataHomepage | undefined
}

function Product2({ data }: Props) {
  return (
    <article className="product2">
      <ImageSet
        className="product2"
        altTxt={data?.product2.name}
        data={data?.product2.images}
        width={{ desktop: 1110, mobile: 327, tablet: 690 }}
        height={{ desktop: 320, mobile: 320, tablet: 320 }}
      />

      <div className="product2__text">
        <h2 className="h2 h2--secondary">{data?.product2.name}</h2>

        <BtnLink
          level="secondary"
          text="See product"
          href={`/item/${data?.product2.slug}`}
        />
      </div>
    </article>
  )
}

export { Product2 }
// TODO: changer les btn en Link (important pour le prefetch des pages avec nextjs)
