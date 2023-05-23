import { getConditionalClassName } from '../../utility/string'
import { Button, ImageSet } from '../../stories/Atoms'
import { Condition, DataHomepage } from '../../types'
import { useRef } from 'react'
import useObserver from '../../hooks/useObserver'
import { useRouter } from 'next/router'

interface Props {
  data: DataHomepage | undefined
}

function Product2({ data }: Props) {
  const router = useRouter()

  const articleRef = useRef(null)

  const showText = useObserver({
    parentRef: articleRef,
    threshold: 0,
    margin: '-40% 0% -25% 0%',
  })

  const textClassConditions: Condition[] = [
    { isFilled: showText, addedClass: 'text-apparition' },
    { isFilled: !showText, addedClass: 'text-apparition-setup' },
  ]

  const textClass = getConditionalClassName(
    'product2__text',
    textClassConditions
  )

  return (
    <article ref={articleRef} className="product2">
      <ImageSet
        className="product2"
        altTxt={data?.product2.name}
        data={data?.product2.images}
        lazy={true}
      />

      <div className={textClass}>
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
