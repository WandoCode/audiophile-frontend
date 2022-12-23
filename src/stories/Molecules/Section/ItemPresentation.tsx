import { DataItemCategory } from '../../../hooks/useGetCategory'
import { Button } from '../../Atoms'
import { useNavigate } from 'react-router-dom'

interface Props {
  className: string
  data: DataItemCategory
}

function ItemPresentation({ className, data }: Props) {
  const navigate = useNavigate()

  return (
    <article className={`item-pres ${className}`}>
      <div className="item-pres__images">
        <img
          className="item-pres__img show-on-desktop"
          src={data?.images.desktop}
          alt={data?.name}
        />
        <img
          className="item-pres__img show-on-tablet"
          src={data?.images.tablet}
          alt={data?.name}
        />
        <img
          className="item-pres__img show-on-mobile"
          src={data?.images.mobile}
          alt={data?.name}
        />
      </div>
      <div className="item-pres__text">
        {data.new && (
          <div className="item-pres__new text-100 text-100--primary">
            new product
          </div>
        )}
        <h2 className="item-pres__heading h2 h2--secondary h2--large">
          {data?.name}
        </h2>
        <div className="item-pres__description">{data?.description}</div>
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
