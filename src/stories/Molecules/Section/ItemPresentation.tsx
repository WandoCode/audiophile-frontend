import { DataItemCategory } from '../../../hooks/useGetCategory'
import { Button, ImageSet } from '../../Atoms'
import { useNavigate } from 'react-router-dom'

interface Props {
  className: string
  data: DataItemCategory
}

function ItemPresentation({ className, data }: Props) {
  const navigate = useNavigate()

  return (
    <article className={`item-pres ${className}`}>
      <ImageSet className="item-pres" data={data?.images} altTxt={data?.name} />

      <div className="item-pres__text">
        {data.new && (
          <div className="item-pres__new text-100 text-primary">
            new product
          </div>
        )}
        <h2 className="item-pres__heading h2 h2--secondary h2--large">
          {data?.name}
        </h2>
        <p className="item-pres__description">{data?.description}</p>
        <Button
          level="primary"
          onClickHandler={() => {
            navigate(`/item/${data?.slug}`)
          }}
          text="See product"
        />
      </div>
    </article>
  )
}

export { ItemPresentation }
