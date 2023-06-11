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
        data-testid="category-link-test-id"
      >
        <Image
          src={image}
          alt={category ?? ''}
          className="category-link__img"
          height={205}
          width={230}
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
