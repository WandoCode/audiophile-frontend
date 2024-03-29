import { useRouter } from 'next/router'
import { DataItemCategory } from '../../../types'
import { Button, ImageSet } from '../../Atoms'

interface Props {
  className: string
  data: DataItemCategory
  lazyLoad: boolean
}

function ItemCategory({ className, data, lazyLoad }: Props) {
  const router = useRouter()

  return (
    <article className={`item-category ${className}`}>
      <ImageSet
        className="item-category"
        data={data?.images}
        altTxt={data?.name}
        lazy={lazyLoad}
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
        <Button
          level="primary"
          onClickHandler={() => {
            router.push(`/item/${data?.slug}`)
          }}
          text="See product"
        />
      </div>
    </article>
  )
}

export { ItemCategory }
