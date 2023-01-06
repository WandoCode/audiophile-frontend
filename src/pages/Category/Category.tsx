import { useParams } from 'react-router-dom'
import { useGetCategory } from '../../hooks/useGetCategory'

import {
  CategoriesSection,
  ItemCategory,
  MainDescriptionSection,
} from '../../stories/Molecules'

function Category() {
  const { category } = useParams()

  const [data, loading, error] = useGetCategory({ category })

  const itemsDOM = data?.map((itemData, i) => {
    return (
      <ItemCategory
        className={`${i % 2 === 0 ? '' : 'invert'}`}
        data={itemData}
        key={i}
      />
    )
  })
  return (
    <div className="category">
      <section className="category__title">
        <h1 className="h1 h1--small">{category}</h1>
      </section>
      <div className="container">
        <section className="category__items">{itemsDOM}</section>
        <CategoriesSection />
        <MainDescriptionSection />
      </div>
    </div>
  )
}

export { Category }
