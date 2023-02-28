import { CategoryLink } from '../../Atoms'
import { useContext } from 'react'
import { LayoutContext } from '../../../features/Layout/LayoutProvider'

interface Props {
  className?: string
}

function CategoriesSection({ className }: Props) {
  const { layout } = useContext(LayoutContext)

  return (
    <section className={`categories ${className}`}>
      <div className="categories__container">
        <h2 className="visually-hidden">Links to category pages</h2>
        <CategoryLink
          category={layout ? layout.category1.name : 'Headphones'}
          image={layout?.category1.image}
        />
        <CategoryLink
          category={layout ? layout.category2.name : 'Speakers'}
          image={layout?.category2.image}
        />
        <CategoryLink
          category={layout ? layout.category3.name : 'Earphones'}
          image={layout?.category3.image}
        />
      </div>
    </section>
  )
}

export { CategoriesSection }
