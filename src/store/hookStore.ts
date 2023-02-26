import axios from 'axios'
import { StripeObject } from '../types'
import config from '../config.json'

const env = process.env.NODE_ENV || 'development'
const baseURLStrapi =
  env !== 'development' ? config.strapi.production : config.strapi.development

const baseURLStripe =
  env !== 'development' ? config.stripe.production : config.stripe.development

function hookStore() {
  const fetchLayout = async () => {
    const url = baseURLStrapi + '/api/layout-data?populate=*'

    let rep = await axios.get(url)

    handleErrorStatus(rep.status)
    return rep
  }

  const fetchItem = async (slug: string) => {
    const url = baseURLStrapi + `/api/products/product/${slug}`
    let rep = await axios.get(url)

    handleErrorStatus(rep.status)

    return rep
  }

  const fetchHomepage = async () => {
    const url = baseURLStrapi + '/api/home'
    let rep = await axios.get(url)

    handleErrorStatus(rep.status)

    return rep
  }

  const fetchCategory = async (category: string) => {
    const url = baseURLStrapi + `/api/category/${category}`
    let rep = await axios.get(url)

    handleErrorStatus(rep.status)

    return rep
  }

  const fetchClientSecret = async (stripeDatas: StripeObject[]) => {
    const rep = await axios.post(baseURLStripe + ' /init_payment', {
      stripeDatas,
    })

    handleErrorStatus(rep.status)

    return rep.data.client_secret
  }

  const handleErrorStatus = (status: number) => {
    if (status !== 200)
      throw new Error(`Server responded with status ${status}`)
  }

  return {
    fetchLayout,
    fetchItem,
    fetchHomepage,
    fetchCategory,
    fetchClientSecret,
  }
}

export default hookStore
