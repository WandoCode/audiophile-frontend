import { PropsWithChildren, useEffect, useState } from 'react'
import { useStripe } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'
import { PaymentIntent } from '@stripe/stripe-js'
import useSetLoader from '../Loader/useSetLoader'

function StripeStateManager({ children }: PropsWithChildren) {
  const stripe = useStripe()
  const navigate = useNavigate()

  const setLoader = useSetLoader()

  const [showLoader, setShowLoader] = useState(false)
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent>()

  useEffect(() => {
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )

    if (clientSecret) {
      setShowLoader(true)
      getPaymentIntent(clientSecret)
    }
  }, [stripe])

  useEffect(() => {
    if (!paymentIntent) return

    if (paymentIntent?.status === 'succeeded') navigate('/confirmation')
    else navigate('/echec')
  }, [paymentIntent])

  useEffect(() => {
    setLoader(showLoader)
  }, [showLoader])

  const getPaymentIntent = async (clientSecret: string) => {
    if (!stripe) {
      return
    }
    const paymentIntentRes = await stripe.retrievePaymentIntent(clientSecret)

    setPaymentIntent(paymentIntentRes.paymentIntent)
  }

  return <>{children}</>
}

export default StripeStateManager
