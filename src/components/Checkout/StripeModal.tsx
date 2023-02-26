import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button } from '../../stories/Atoms'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import config from '../../config.json'
import { PaymentIntent } from '@stripe/stripe-js'

const env = process.env.NODE_ENV || 'development'
const baseURLSelf =
  env !== 'development' ? config.self.production : config.self.development

function StripeModal() {
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()

  const [stripeProcessing, setStripeProcessing] = useState(false)
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
    console.log(`${paymentIntent?.status}`)

    if (paymentIntent?.status === 'succeeded') navigate('/confirmation')
    else navigate('/echec')
  }, [paymentIntent])

  const submitPayment = async () => {
    if (!stripe || !elements) {
      return
    }

    setStripeProcessing(true)
    try {
      await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: baseURLSelf + '/checkout',
        },
      })
    } catch (err) {
      navigate('/echec')
    }

    setStripeProcessing(false)
  }

  const getPaymentIntent = async (clientSecret: string) => {
    if (!stripe) {
      return
    }
    const paymentIntentRes = await stripe.retrievePaymentIntent(clientSecret)

    setPaymentIntent(paymentIntentRes.paymentIntent)
  }

  return (
    <div className="stripe-modal">
      <PaymentElement />
      <Button
        level="primary"
        text={stripeProcessing ? 'Wait...' : 'Pay'}
        onClickHandler={submitPayment}
        disabled={stripeProcessing}
      />
    </div>
  )
}

export default StripeModal
