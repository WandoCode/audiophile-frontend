import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'

interface Props {
  category?: string
  image?: string
}

function CategoryLink({ category, image }: Props) {
  const navigate = useNavigate()

  return (
    <article className="category-link">
      <label htmlFor={category} className="category-link__container">
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
//  TODO: revoir l'animation...
export { CategoryLink }

// TODO: faire les loading page pour toutes les pages
