import { Button, ImageSet } from '../../stories/Atoms'
import { DataHomepage } from '../../hooks/helpers/dataHomepage'
import { useRouter } from 'next/router'

interface Props {
  data: DataHomepage | undefined
}

function Product3({ data }: Props) {
  const router = useRouter()

  return (
    <article className="product3">
      <ImageSet
        className="product3"
        altTxt={data?.product3.name}
        data={data?.product3.images}
        lazy={true}
      />

      <div className="product3__text">
        <h2 className="h2 h2--secondary">{data?.product3.name}</h2>

        <Button
          level="secondary"
          text="See product"
          onClickHandler={() => {
            router.push(`/item/${data?.product3.slug}`)
          }}
        />
      </div>
    </article>
  )
}

export { Product3 }
