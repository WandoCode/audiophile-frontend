import { Button } from '../Button/Button'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface Props {
  category?: string
  image?: string
}

function CategoryLink({ category, image }: Props) {
  const router = useRouter()

  const [linkHasBeenHovered, setLinkHasBeenHovered] = useState(false)
  const [imagIsLoaded, setImagIsLoaded] = useState(false)

  const handleHover = () => {
    setLinkHasBeenHovered(true)
  }

  const labelClass = () => {
    return linkHasBeenHovered
      ? 'category-link__container animate-on-hover'
      : 'category-link__container'
  }

  const imgClass = () => {
    return imagIsLoaded
      ? 'category-link__img'
      : 'category-link__img category-link__img--loading'
  }

  return (
    <article className="category-link">
      <label
        htmlFor={category}
        className={labelClass()}
        onMouseOver={handleHover}
        data-testid="category-link-test-id"
      >
        <img
          src={image}
          alt={category}
          className={imgClass()}
          onLoad={() => setImagIsLoaded(true)}
        />
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

export { CategoryLink }
