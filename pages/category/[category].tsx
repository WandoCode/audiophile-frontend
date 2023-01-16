import { getCategories, getCategory } from '../../hooks'
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

interface Props {
  datasCategory: DataItemCategory[] | undefined
  category: string
}

function Category({ datasCategory, category }: Props) {
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
  const { categoriesArray } = await getCategories()

  const paths = categoriesArray.map((category) => {
    return { params: { category } }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (typeof params?.category === 'string') {
    const { datasCategory } = await getCategory({ category: params.category })

    if (datasCategory)
      return { props: { datasCategory, category: params?.category } }
  }

  return { notFound: true }
}

export default Category
