import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import arrow from '../../../assets/icon-arrow-right.svg'
import Link from 'next/link'

interface Props {
  category?: string
  image?: string
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
      <Link
        href={`/category/${category}`}
        className={labelClass()}
        onMouseOver={handleHover}
      >
        {image && (
          <img
            src={image}
            alt={category ?? ''}
            className="category-link__img"
          />
        )}
        <h3 className="h3">{category}</h3>
        <div className="btn btn--tertiary">
          Shop <Image src={arrow} alt="" />
        </div>
      </Link>
    </article>
  )
}
// TODO: passer à un Link pour NextJS

export { CategoryLink }
