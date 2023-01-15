import { Button, ImageSet } from '../../stories/Atoms'
import { DataHomepage } from '../../hooks/helpers/dataHomepage'
import React from 'react'
import { useRouter } from 'next/router'

interface Props {
  data: DataHomepage | undefined
}

function Product2({ data }: Props) {
  const router = useRouter()

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
            router.push(`/item/${data?.product2.slug}`)
          }}
        />
      </div>
    </article>
  )
}

export { Product2 }
// TODO: changer les btn en Link (important pour le prefetch des pages avec nextjs)
