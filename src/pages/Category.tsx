import { useParams } from 'react-router-dom'
import { useGetCategory, DataItemCategory } from '../hooks/useGetCategory'
import { useEffect } from 'react'
import {
  CategoriesSection,
  ItemPresentation,
  MainDescriptionSection,
} from '../stories/Molecules'

function Category() {
  const { category } = useParams()

  const [data, loading, error] = useGetCategory({ category })

  const itemsDOM = data?.map((itemData, i) => {
    return (
      <ItemPresentation
        className={`${i % 2 === 0 ? '' : 'invert'}`}
        data={itemData}
        key={i}
      />
    )
  })
  return (
    <div className="category">
      <section className="title">
        <h1 className="h1 h1--small">{category}</h1>
      </section>
      <div className="container">
        <section className="items">{itemsDOM}</section>
        <CategoriesSection />
        <MainDescriptionSection />
      </div>
    </div>
  )
}

export { Category }
