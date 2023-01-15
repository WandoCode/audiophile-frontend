import axios from 'axios'

function hookStore() {
  const fetchLayout = async (baseURL: string) => {
    const url = baseURL + '/api/layout-data?populate=*'

    let rep = await axios.get(url)

    handleErrorStatus(rep.status)
    return rep
  }

  const fetchItem = async (baseURL: string, slug: string) => {
    const url = baseURL + `/api/products/product/${slug}`
    let rep = await axios.get(url)

    handleErrorStatus(rep.status)

    return rep
  }

  const fetchHomepage = async (baseURL: string) => {
    const url = baseURL + '/api/home'
    let rep = await axios.get(url)

    handleErrorStatus(rep.status)

    return rep
  }

  const fetchCategory = async (baseURL: string, category: string) => {
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
