import { getCategory } from '../../hooks/getCategory'
import { DataItemCategory } from '../../hooks/helpers/dataCategory'
import {
  CategoriesSection,
  ItemCategory,
  MainDescriptionSection,
} from '../../stories/Molecules'
import { GetStaticProps } from 'next'
import { Layout } from '../Layout'
import { DataLayout } from '../../hooks/helpers/dataLayout'

function Category({
  datasCategory,
  category,
  datasLayout,
}: {
  datasCategory: DataItemCategory[]
  datasLayout: DataLayout
  category: string
}) {
  const itemsDOM = datasCategory?.map((itemData, i) => {
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
    <Layout>
      <div className="category">
        <div className="category__title">
          <h1 className="h1 h1--medium">{category}</h1>
        </div>

        <div className="container">
          <section className="category__items">{itemsDOM}</section>
          <CategoriesSection />
          <MainDescriptionSection />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = [
    { params: { category: 'headphones' } },
    { params: { category: 'earphones' } },
    { params: { category: 'speakers' } },
  ]
  return {
    paths,
    fallback: false,
  }
  // TODO: faire une fct to fetch les category depuis la db, et générer l'array 'path'
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.category === 'string') {
    const { datasCategory } = await getCategory({ category: params?.category })

    return { props: { datasCategory, category: params?.category } }
  } else {
    return { notFound: true }
  }
}
export default Category
