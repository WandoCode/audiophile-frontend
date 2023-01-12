import axios from 'axios'

function hookStore() {
  const fetchLayout = async (baseURL: string) => {
    const rep = await axios.get(baseURL + '/api/layout-data?populate=*')

    handleErrorStatus(rep.status)
    return rep
  }

  const fetchItem = async (baseURL: string, slug: string) => {
    const rep = await axios.get(baseURL + `/api/products/${slug}`)

    handleErrorStatus(rep.status)

    return rep
  }

  const fetchHomepage = async (baseURL: string) => {
    const rep = await axios.get(baseURL + '/api/home')

    handleErrorStatus(rep.status)

    return rep
  }

  const fetchCategory = async (baseURL: string, category: string) => {
    const rep = await axios.get(baseURL + `/api/category/${category}`)

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
