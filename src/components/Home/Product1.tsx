import { Button, ImageSet } from '../../stories/Atoms'
import { useNavigate } from 'react-router-dom'
import { DataHomepage } from '../../types'
import { useRef, useEffect, useState } from 'react'
import Observer from '../Observer'
import { getConditionalClassName } from '../../utility/string'

interface Props {
  data: DataHomepage | undefined
}

const Product1 = ({ data }: Props) => {
  const articleRef = useRef(null)
  const navigate = useNavigate()
  const [showTitle, setShowTitle] = useState(false)
  const [showText, setShowText] = useState(false)

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
        <Observer
          parentRef={articleRef}
          onCallBack={setShowTitle}
          threshold={0.5}
        >
          <h2 className={titleClass}>{data?.product1.name}</h2>
        </Observer>
        <Observer
          parentRef={articleRef}
          onCallBack={setShowText}
          threshold={0.75}
        >
          <p className={textClass}>{data?.product1.description}</p>
          <Button
            className={btnClass}
            level="secondary"
            text="See product"
            onClickHandler={() => {
              navigate(`/item/${data?.product1.slug}`)
            }}
          />
        </Observer>
      </div>
    </article>
  )
}

export { Product1 }
