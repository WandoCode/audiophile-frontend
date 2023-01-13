import axios from 'axios'

function hookStore() {
  const fetchLayout = async (baseURL: string) => {
    const url = baseURL + '/api/layout-data?populate=*'

    let rep = await axios.get(url)

    // Refetch once if failed to wake up server standby after inactivity
    if (rep.status === 404 || rep.status === 401) {
      rep = await handleFirstFetchError(url)
    }

    handleErrorStatus(rep.status)
    return rep
  }

  const fetchItem = async (baseURL: string, slug: string) => {
    const url = baseURL + `/api/products/${slug}`
    let rep = await axios.get(url)

    // Refetch once if failed to wake up server standby after inactivity
    if (rep.status === 404 || rep.status === 401) {
      rep = await handleFirstFetchError(url)
    }

    handleErrorStatus(rep.status)

    return rep
  }

  const fetchHomepage = async (baseURL: string) => {
    const url = baseURL + '/api/home'
    let rep = await axios.get(url)

    // Refetch once if failed to wake up server standby after inactivity
    if (rep.status === 404 || rep.status === 401) {
      rep = await handleFirstFetchError(url)
    }

    handleErrorStatus(rep.status)

    return rep
  }

  const fetchCategory = async (baseURL: string, category: string) => {
    const url = baseURL + `/api/category/${category}`
    let rep = await axios.get(url)

    // Refetch once if failed to wake up server standby after inactivity
    if (rep.status === 404 || rep.status === 401) {
      rep = await handleFirstFetchError(url)
    }

    handleErrorStatus(rep.status)

    return rep
  }

  const handleFirstFetchError = async (url: string) => {
    let rep: any
    setTimeout(async () => {
      rep = await axios.get(url)
      console.warn('refetch after error. Status after refetch: ', rep.status)
    }, 1500)

    return rep
  }

  const handleErrorStatus = (status: number) => {
    if (status !== 200)
      throw new Error(`Server responded with status ${status}`)
  }

  return { fetchLayout, fetchItem, fetchHomepage, fetchCategory }
}

export default hookStore
