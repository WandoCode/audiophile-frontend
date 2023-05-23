import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button, SVGLoader } from '../../stories/Atoms'
import { useState, useEffect } from 'react'
import config from '../../config.json'
import { useRouter } from 'next/router'

const env = process.env.NODE_ENV || 'development'
const baseURLSelf =
  env !== 'development' ? config.self.production : config.self.development

function StripeModal() {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()

  const [stripeProcessing, setStripeProcessing] = useState(false)
  const [preLoading, setPreLoading] = useState(true)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (!preLoading) setTimeout(() => setShowLoader(false), 500)
  }, [preLoading])

  const handleReady = () => {
    setPreLoading(false)
  }

  const submitPayment = async () => {
    if (!stripe || !elements) {
      return
    }

    setStripeProcessing(true)

    try {
      await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: baseURLSelf + '/#/checkout',
        },
      })
    } catch (err) {
      router.push('/echec')
    }

    setStripeProcessing(false)
  }

  return (
    <div className="stripe-modal" id="out-modal">
      <div className="stripe-modal__container">
        {showLoader && <SVGLoader />}
        <PaymentElement onReady={handleReady} />
        <Button
          level="primary"
          text={stripeProcessing ? 'Wait...' : 'Pay'}
          onClickHandler={submitPayment}
          disabled={stripeProcessing}
          id="last-focus"
        />
      </div>
    </div>
  )
}

export default StripeModal
