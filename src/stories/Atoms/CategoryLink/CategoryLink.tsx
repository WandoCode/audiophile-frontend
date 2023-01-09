import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import { useState, useMemo } from 'react'

interface Props {
  category?: string
  image?: string
}

function CategoryLink({ category, image }: Props) {
  const navigate = useNavigate()
  const [linkHasBeenHovered, setLinkHasBeenHovered] = useState(false)

  const handleHover = () => {
    setLinkHasBeenHovered(true)
  }

  const labelClass = useMemo(() => {
    return linkHasBeenHovered
      ? 'category-link__container animate-on-hover'
      : 'category-link__container'
  }, [linkHasBeenHovered])

  return (
    <article className="category-link">
      <label
        htmlFor={category}
        className={labelClass}
        onMouseOver={handleHover}
      >
        <img src={image} alt={category} className="category-link__img" />
        <h3 className="h3">{category}</h3>
        <Button
          id={category}
          level="tertiary"
          text="Shop"
          onClickHandler={() => {
            navigate(`/category/${category}`)
          }}
        />
      </label>
    </article>
  )
}

export { CategoryLink }
