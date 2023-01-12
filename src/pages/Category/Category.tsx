import { useParams } from 'react-router-dom'
import { useGetCategory } from '../../hooks/useGetCategory'

import {
  CategoriesSection,
  ItemCategory,
  MainDescriptionSection,
} from '../../stories/Molecules'
import LoadStateWrapper from '../../components/LoadStateWrapper'

function Category() {
  const { category } = useParams()

  const [data, loading] = useGetCategory({ category })

  const itemsDOM = data?.map((itemData, i) => {
    return (
      <ItemCategory
        className={`${i % 2 === 0 ? '' : 'invert'}`}
        data={itemData}
        key={i}
        lazyLoad={i > 1}
      />
    )
  })

  return (
    <div className="category">
      <div className="category__title">
        <h1 className="h1 h1--medium">{category}</h1>
      </div>

      <LoadStateWrapper loading={loading}>
        <div className="container">
          <section className="category__items">{itemsDOM}</section>
          <CategoriesSection />
          <MainDescriptionSection />
        </div>
      </LoadStateWrapper>
    </div>
  )
}

export { Category }
