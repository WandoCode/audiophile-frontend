import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button, SVGLoader } from '../../stories/Atoms'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import config from '../../config.json'

const env = process.env.NODE_ENV || 'development'
const baseURLSelf =
  env !== 'development' ? config.self.production : config.self.development

function StripeModal() {
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()

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
      navigate('/echec')
    }

    setStripeProcessing(false)
  }

  return (
    <div className="stripe-modal">
      {showLoader && <SVGLoader />}
      <PaymentElement onReady={handleReady} />
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
