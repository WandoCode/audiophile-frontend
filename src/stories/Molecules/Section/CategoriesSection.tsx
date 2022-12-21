import { CategoryLink } from '../../Atoms'
import { useContext } from 'react'
import { Context } from '../../../ContextProvider'
import { DataLayout } from '../../../hooks/useGetLayout'
const baseURL = 'http://localhost:1337'

function CategoriesSection() {
  const { layout } = useContext(Context) as { layout: DataLayout | undefined }

  return (
    <section className="categories">
      <div className="container">
        <div className="categories__container">
          <CategoryLink
            category={layout?.category1.name}
            image={baseURL + layout?.category1.image}
          />
          <CategoryLink
            category={layout?.category2.name}
            image={baseURL + layout?.category2.image}
          />
          <CategoryLink
            category={layout?.category3.name}
            image={baseURL + layout?.category3.image}
          />
        </div>
      </div>
    </section>
  )
}

export { CategoriesSection }
