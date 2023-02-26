import { useState, useEffect } from 'react'
import axios from 'axios'
import { StripeObject } from '../types/index'

function useFetchStripeClientSecret(stripeDatas: StripeObject[]) {
  const [clientSecret, setClientSecret] = useState<string>()

  const getClientSecret = async (stripeDatas: StripeObject[]) => {
    try {
      const rep = await axios.post('http://localhost:3000/init_payment', {
        stripeDatas,
      })

      setClientSecret(rep.data.client_secret)
    } catch (err) {
      console.warn(err)
      console.warn('Error with stripe')
    }
  }
  //TODO: mettre dans le store

  useEffect(() => {
    if (stripeDatas.length >= 1) getClientSecret(stripeDatas)
  }, [stripeDatas])

  return clientSecret
}

export default useFetchStripeClientSecret
