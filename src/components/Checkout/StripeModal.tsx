import {
  PaymentElement,
  useElements,
  useStripe,
  Elements,
} from '@stripe/react-stripe-js'
import { Button } from '../../stories/Atoms'
import { Stripe } from '@stripe/stripe-js'

interface Props {
  stripePromise: Promise<Stripe | null>
  stripClientSecret: string | undefined
}

function StripeModal() {
  const stripe = useStripe()
  const elements = useElements()

  const submitPayment = async () => {
    if (!stripe || !elements) {
      //TODO: Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: 'http://127.0.0.1:5173/#/confirmation',
      },
      // TODO: créer une page pour la modale de confirmation dans le router
    })
  }

  return (
    <div className="stripe-modal">
      <PaymentElement />
      <Button level="primary" text="Pay" onClickHandler={submitPayment} />
    </div>
  )
}

export default StripeModal
