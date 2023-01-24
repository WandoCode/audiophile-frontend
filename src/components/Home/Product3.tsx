import { Button, ImageSet } from '../../stories/Atoms'
import { useNavigate } from 'react-router-dom'
import { DataHomepage } from '../../types'
import { useRef, useState } from 'react'
import Observer from '../Observer'
import { getConditionalClassName } from '../../utility/string'
import { Condition } from '../../types/index'

interface Props {
  data: DataHomepage | undefined
}

function Product3({ data }: Props) {
  const articleRef = useRef(null)
  const navigate = useNavigate()
  const [showText, setShowText] = useState(false)

  const textClassConditions: Condition[] = [
    { isFilled: showText, addedClass: 'text-apparition' },
    { isFilled: !showText, addedClass: 'text-apparition-setup' },
  ]

  const textClass = getConditionalClassName(
    'product3__text',
    textClassConditions
  )

  return (
    <article ref={articleRef} className="product3">
      <ImageSet
        className="product3"
        altTxt={data?.product3.name}
        data={data?.product3.images}
        lazy={true}
      />

      <Observer
        parentRef={articleRef}
        onCallBack={setShowText}
        threshold={0}
        margin="-30% 0% -15% 0%"
      >
        <div className={textClass}>
          <h2 className="h2 h2--secondary">{data?.product3.name}</h2>

          <Button
            level="secondary"
            text="See product"
            onClickHandler={() => {
              navigate(`/item/${data?.product3.slug}`)
            }}
          />
        </div>
      </Observer>
    </article>
  )
}

export { Product3 }
