import { getConditionalClassName } from '../../utility/string'
import { Button, ImageSet } from '../../stories/Atoms'
import { useNavigate } from 'react-router-dom'
import { DataHomepage } from '../../types'
import { useRef } from 'react'
import useObserver from '../../hooks/useObserver'

interface Props {
  data: DataHomepage | undefined
}

const Product1 = ({ data }: Props) => {
  const articleRef = useRef(null)
  const navigate = useNavigate()

  const showTitle = useObserver({
    parentRef: articleRef,
    threshold: 0.3,
    margin: '-35% 0% -30% 0%',
  })

  const showText = useObserver({
    parentRef: articleRef,
    threshold: 0.3,
    margin: '-10% 0% -40% 0%',
  })

  let titleClassConditions = [
    { isFilled: showTitle, addedClass: 'text-apparition' },
    { isFilled: !showTitle, addedClass: 'text-apparition-setup' },
  ]

  let textClassConditions = [
    { isFilled: showText, addedClass: 'text-apparition' },
    { isFilled: !showText, addedClass: 'text-apparition-setup' },
  ]

  const titleClass = getConditionalClassName('h2', titleClassConditions)

  const textClass = getConditionalClassName(
    'product1__description white',
    textClassConditions
  )

  const btnClass = getConditionalClassName(
    'btn--secondary--dark',
    textClassConditions
  )

  return (
    <article ref={articleRef} className="product1">
      <ImageSet
        className="product1"
        altTxt={data?.product1.name}
        data={data?.product1.images}
        lazy={true}
      />
      <div className="product1__text">
        <h2 className={titleClass}>{data?.product1.name}</h2>
        <p className={textClass}>{data?.product1.description}</p>
        <Button
          className={btnClass}
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
