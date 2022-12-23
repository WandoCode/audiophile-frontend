import { useParams } from 'react-router-dom'
import { useGetCategory } from '../hooks/useGetCategory'
import { useEffect } from 'react'

function Category() {
  const { category } = useParams()

  useGetCategory({ category })

  return <div className="category">{category}</div>
}

export { Category }
