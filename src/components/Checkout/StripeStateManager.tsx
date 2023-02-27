import { PropsWithChildren, useEffect, useState } from 'react'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom'
import { PaymentIntent } from '@stripe/stripe-js'

function StripeStateManager({ children }: PropsWithChildren) {
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent>()

  useEffect(() => {
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    )

    if (clientSecret) {
      getPaymentIntent(clientSecret)
    }
  }, [stripe])

  useEffect(() => {
    if (!paymentIntent) return

    if (paymentIntent?.status === 'succeeded') navigate('/confirmation')
    else navigate('/echec')
  }, [paymentIntent])

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
