import { Button, ImageSet } from '../../stories/Atoms'
import { useNavigate } from 'react-router-dom'
import { DataHomepage } from '../../types'

interface Props {
  data: DataHomepage | undefined
}

function Product2({ data }: Props) {
  const navigate = useNavigate()

  return (
    <article className="product2">
      <ImageSet
        className="product2"
        altTxt={data?.product2.name}
        data={data?.product2.images}
        lazy={true}
      />

      <div className="product2__text">
        <h2 className="h2 h2--secondary">{data?.product2.name}</h2>

        <Button
          level="secondary"
          text="See product"
          onClickHandler={() => {
            navigate(`/item/${data?.product2.slug}`)
          }}
        />
      </div>
    </article>
  )
}

export { Product2 }
