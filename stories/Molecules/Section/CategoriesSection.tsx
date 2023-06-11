import { CategoryLink } from '../../Atoms'
import { useContext } from 'react'
import { LayoutContext } from '../../../features/Layout/LayoutProvider'
import ImgPlaceholder from '/assets/image-placeholder.png'

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
          image={layout ? layout.category1.image : ImgPlaceholder}
        />
        <CategoryLink
          category={layout ? layout.category2.name : 'Speakers'}
          image={layout ? layout.category2.image : ImgPlaceholder}
        />
        <CategoryLink
          category={layout ? layout.category3.name : 'Earphones'}
          image={layout ? layout.category3.image : ImgPlaceholder}
        />
      </div>
    </section>
  )
}

export { CategoriesSection }
