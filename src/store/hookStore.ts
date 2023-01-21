import axios from 'axios'
import urls from './config.json'

const env = process.env.NODE_ENV || 'development'
const baseURL = env !== 'development' ? urls.production : urls.dev

function hookStore() {
  const fetchLayout = async () => {
    const url = baseURL + '/api/layout-data?populate=*'

    let rep = await axios.get(url)

    handleErrorStatus(rep.status)
    return rep
  }

  const fetchItem = async (slug: string) => {
    const url = baseURL + `/api/products/product/${slug}`
    let rep = await axios.get(url)

    handleErrorStatus(rep.status)

    return rep
  }

  const fetchHomepage = async () => {
    const url = baseURL + '/api/home'
    let rep = await axios.get(url)

    handleErrorStatus(rep.status)

    return rep
  }

  const fetchCategory = async (category: string) => {
    const url = baseURL + `/api/category/${category}`
    let rep = await axios.get(url)

    handleErrorStatus(rep.status)

    return rep
  }

  const handleErrorStatus = (status: number) => {
    if (status !== 200)
      throw new Error(`Server responded with status ${status}`)
  }

  return { fetchLayout, fetchItem, fetchHomepage, fetchCategory }
}

export default hookStore
