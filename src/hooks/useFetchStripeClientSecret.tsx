import { useState, useEffect } from 'react'
import { StripeObject } from '../types/index'
import hookStore from '../store/hookStore'

function useFetchStripeClientSecret(stripeDatas: StripeObject[]) {
  const hooks = hookStore()
  const [clientSecret, setClientSecret] = useState<string>()

  const getClientSecret = async (stripeDatas: StripeObject[]) => {
    try {
      const rep = await hooks.fetchClientSecret(stripeDatas)

      setClientSecret(rep.data.client_secret)
    } catch (err) {
      console.warn(err)
      console.warn('Error with stripe')
    }
  }

  useEffect(() => {
    if (stripeDatas.length >= 1) getClientSecret(stripeDatas)
  }, [stripeDatas])

  return clientSecret
}

export default useFetchStripeClientSecret
