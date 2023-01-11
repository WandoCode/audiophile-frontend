import { CategoryLink } from '../../Atoms'
import { useContext } from 'react'
import { Context } from '../../../ContextProvider'
import { DataLayout } from '../../../hooks/helpers/dataLayout'

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
          category={layout?.category1.name}
          image={layout?.category1.image}
        />
        <CategoryLink
          category={layout?.category2.name}
          image={layout?.category2.image}
        />
        <CategoryLink
          category={layout?.category3.name}
          image={layout?.category3.image}
        />
      </div>
    </section>
  )
}

export { CategoriesSection }
