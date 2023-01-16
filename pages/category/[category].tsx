import { getCategory } from '../../hooks'
import { DataItemCategory } from '../../hooks/helpers/dataCategory'
import {
  CategoriesSection,
  ItemCategory,
  MainDescriptionSection,
} from '../../components/Molecules'
import { GetStaticProps } from 'next'
import { Layout } from '../../components/Layout'
import Head from 'next/head'
import { capitalize } from '../../utility'

function Category({
  datasCategory,
  category,
}: {
  datasCategory: DataItemCategory[]
  category: string
}) {
  const itemsDOM = datasCategory?.map((itemData, i) => {
    return (
      <ItemCategory
        className={`${i % 2 === 0 ? '' : 'invert'}`}
        data={itemData}
        key={i}
      />
    )
  })

  return (
    <>
      <Head>
        <title>{capitalize(category)}</title>
        <meta
          name="description"
          content={`Discover our hight quality products in the ${capitalize(
            category
          )} category`}
        />
      </Head>
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
    </>
  )
}

export async function getStaticPaths() {
  const a = () => [
    { params: { category: 'headphones' } },
    { params: { category: 'earphones' } },
    { params: { category: 'speakers' } },
  ]
  const paths = a()
  return {
    paths,
    fallback: false,
  }
  // TODO: faire une fct to fetch les category depuis la db, et générer l'array 'path' (depuis datasLayout???)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.category === 'string' && params?.category) {
    const { datasCategory } = await getCategory({ category: params.category })

    return { props: { datasCategory, category: params?.category } }
  } else {
    return { notFound: true }
  }
}

export default Category
