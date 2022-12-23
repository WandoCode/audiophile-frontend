import { useParams } from 'react-router-dom'
import { useGetCategory, DataItemCategory } from '../hooks/useGetCategory'
import { useEffect } from 'react'

function Category() {
  const { category } = useParams()

  const [data, loading, error] = useGetCategory({ category })

  return <div className="category">{category}</div>
}

export { Category }
