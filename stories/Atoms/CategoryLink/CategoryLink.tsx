import { Button } from '../Button/Button'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

interface Props {
  category?: string
  image: string
}

function CategoryLink({ category, image }: Props) {
  const router = useRouter()
  const [linkHasBeenHovered, setLinkHasBeenHovered] = useState(false)

  const handleHover = () => {
    setLinkHasBeenHovered(true)
  }

  const labelClass = () => {
    return linkHasBeenHovered
      ? 'category-link__container animate-on-hover'
      : 'category-link__container'
  }

  return (
    <article className="category-link">
      <label
        htmlFor={category}
        className={labelClass()}
        onMouseOver={handleHover}
      >
        <div className="category-link__img-container">
          <Image
            src={image}
            alt={category ?? ''}
            fill={true}
            className="category-link__img"
          />
        </div>
        <h3 className="h3">{category}</h3>
        <Button
          id={category}
          level="tertiary"
          text="Shop"
          onClickHandler={() => {
            router.push(`/category/${category}`)
          }}
        />
      </label>
    </article>
  )
}
// TODO: passer à un Link pour NextJS

export { CategoryLink }
