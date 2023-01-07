import { Button, ImageSet } from '../../stories/Atoms'
import { useNavigate } from 'react-router-dom'
import { DataHomepage } from '../../hooks/useGetHomepage'

interface Props {
  data: DataHomepage | undefined
}

function Product1({ data }: Props) {
  const navigate = useNavigate()

  return (
    <article className="product1 ">
      <ImageSet
        className="product1"
        altTxt={data?.product1.name}
        data={data?.product1.images}
        lazy={true}
      />
      <div className="product1__text">
        <h2 className="h2">{data?.product1.name}</h2>
        <p className="product1__description white">
          {data?.product1.description}
        </p>
        <Button
          className="btn--secondary--dark"
          level="secondary"
          text="See product"
          onClickHandler={() => {
            navigate(`/item/${data?.product1.slug}`)
          }}
        />
      </div>
    </article>
  )
}

export { Product1 }
