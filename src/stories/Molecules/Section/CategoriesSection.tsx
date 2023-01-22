import { CategoryLink } from '../../Atoms'
import { useContext, useEffect } from 'react'
import { Context } from '../../../components/ContextProvider'
import { DataLayout } from '../../../types/index'

interface Props {
  className?: string
}

function CategoriesSection({ className }: Props) {
  const { layout } = useContext(Context) as { layout: DataLayout | undefined }

  return (
    <section className={`categories ${className}`}>
      <div className="categories__container">
        <h2 className="visually-hidden">Links to category pages</h2>
        <CategoryLink
          category={layout ? layout.category1.name : 'Headphones'}
          image={
            layout ? layout.category1.image : 'https://via.placeholder.com/200'
          }
        />
        <CategoryLink
          category={layout ? layout.category2.name : 'Speakers'}
          image={
            layout ? layout.category2.image : 'https://via.placeholder.com/200'
          }
        />
        <CategoryLink
          category={layout ? layout.category3.name : 'Earphones'}
          image={
            layout ? layout.category3.image : 'https://via.placeholder.com/200'
          }
        />
      </div>
    </section>
  )
}

export { CategoriesSection }
