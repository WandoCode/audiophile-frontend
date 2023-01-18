import { BtnLink, ImageSet } from '../../Atoms'
import { DataItemCategory } from '../../../types/index'

interface Props {
  className: string
  data: DataItemCategory
}

function ItemCategory({ className, data }: Props) {
  return (
    <article className={`item-category ${className}`}>
      <ImageSet
        className="item-category"
        data={data?.images}
        altTxt={data?.name}
        width={{ desktop: 540, mobile: 327, tablet: 690 }}
        height={{ desktop: 560, mobile: 352, tablet: 352 }}
        priority={true}
      />

      <div className="item-category__text">
        {data.new && (
          <div className="item-category__new text-100 text-primary">
            new product
          </div>
        )}
        <h2 className="item-category__heading h2 h2--secondary h2--large">
          {data?.name}
        </h2>
        <p className="item-category__description">{data?.description}</p>
        <BtnLink
          level="primary"
          href={`/item/${data?.slug}`}
          text="See product"
        />
      </div>
    </article>
  )
}
export { ItemCategory }
