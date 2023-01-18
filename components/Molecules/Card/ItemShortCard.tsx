import { BtnLink, ImageSet } from '../../Atoms'
import { LinkedItem } from '../../../types/index'

interface Props {
  data: LinkedItem
}

function ItemShortCard({ data }: Props) {
  return (
    <div className="item-short-card">
      <ImageSet
        data={data.images}
        className="item-short-card"
        altTxt={data.name}
        width={{ desktop: 350, mobile: 327, tablet: 223 }}
        height={{ desktop: 318, mobile: 120, tablet: 318 }}
      />
      <div className="item-short-card__content">
        <h3 className="h3 h3--big">{data.shortName}</h3>
        <BtnLink
          level="primary"
          text="see product"
          href={`/item/${data?.slug}`}
        />
      </div>
    </div>
  )
}
export { ItemShortCard }
