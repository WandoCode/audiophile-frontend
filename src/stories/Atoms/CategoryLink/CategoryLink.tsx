import { Button } from '../Button/Button'

interface Props {
  category: string
  image: string
}

function CategoryLink({ category, image }: Props) {
  return (
    <article className="category-link">
      <div className="category-link__container">
        <img src={image} alt={category} className="category-link__img" />
        <div className="category-link__text">
          <h3 className="h3">{category}</h3>
          <Button level="tertiary" text="Shop" onClickHandler={() => {}} />
        </div>
      </div>
    </article>
  )
}
// TODO: Add handler
//  TODO: revoir l'animation...
export { CategoryLink }
