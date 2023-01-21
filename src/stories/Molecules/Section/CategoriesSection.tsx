import { CategoryLink } from '../../Atoms'
import { useGetLayout } from '../../../hooks/useGetLayout'

interface Props {
  className?: string
}

function CategoriesSection({ className }: Props) {
  const layoutQuery = useGetLayout()
  const layoutData = layoutQuery.data

  return (
    <section className={`categories ${className}`}>
      <div className="categories__container">
        <h2 className="visually-hidden">Links to category pages</h2>
        <CategoryLink
          category={layoutData ? layoutData.category1.name : 'Headphones'}
          image={
            layoutData
              ? layoutData.category1.image
              : 'https://via.placeholder.com/200'
          }
        />
        <CategoryLink
          category={layoutData ? layoutData.category2.name : 'Speakers'}
          image={
            layoutData
              ? layoutData.category2.image
              : 'https://via.placeholder.com/200'
          }
        />
        <CategoryLink
          category={layoutData ? layoutData.category3.name : 'Earphones'}
          image={
            layoutData
              ? layoutData.category3.image
              : 'https://via.placeholder.com/200'
          }
        />
      </div>
    </section>
  )
}

export { CategoriesSection }
