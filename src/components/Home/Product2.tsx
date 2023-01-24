import { getConditionalClassName } from '../../utility/string'
import { Button, ImageSet } from '../../stories/Atoms'
import { Condition, DataHomepage } from '../../types'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import Observer from '../utils/Observer'

interface Props {
  data: DataHomepage | undefined
}

function Product2({ data }: Props) {
  const navigate = useNavigate()
  const articleRef = useRef(null)

  const [showText, setShowText] = useState(false)

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

      <Observer
        parentRef={articleRef}
        onCallBack={setShowText}
        threshold={0}
        margin="-40% 0% -25% 0%"
      >
        <div className={textClass}>
          <h2 className="h2 h2--secondary">{data?.product2.name}</h2>

          <Button
            level="secondary"
            text="See product"
            onClickHandler={() => {
              navigate(`/item/${data?.product2.slug}`)
            }}
          />
        </div>
      </Observer>
    </article>
  )
}

export { Product2 }
