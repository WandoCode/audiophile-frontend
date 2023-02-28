import {
  CategoriesSection,
  ItemCategory,
  MainDescriptionSection,
} from '../stories/Molecules'
import LoadStateWrapper from '../components/utils/LoadStateWrapper'
import { useGetCategory } from '../hooks/useGetCategory'
import { useParams } from 'react-router-dom'
import { Error } from './Error'
import axios from 'axios'

function Category() {
  const { category } = useParams()

  const { data, isLoading, isError, error } = useGetCategory({ category })

  const itemsDOM = data?.map((itemData, i) => {
    return (
      <ItemCategory
        className={`${i % 2 === 0 ? '' : 'invert'}`}
        data={itemData}
        key={itemData.slug}
        lazyLoad={i > 0}
      />
    )
  })

  if (isError) {
    const message = axios.isAxiosError(error) ? error.message : 'Uknown error'
    return <Error message={message} />
  } else {
    return (
      <div className="category">
        <LoadStateWrapper loading={isLoading}>
          <div className="category__title">
            <h1 className="h1 h1--medium">{category}</h1>
          </div>
          <div className="container">
            <section className="category__items">{itemsDOM}</section>
            <CategoriesSection />
            <MainDescriptionSection />
          </div>
        </LoadStateWrapper>
      </div>
    )
  }
}

export default Category
