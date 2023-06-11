import config from '../config.json'
import { useState, useContext } from 'react'
import Modal from '../components/utils/Modal'
import { loadStripe } from '@stripe/stripe-js'
import { InnerNav } from '../stories/Molecules'
import { Elements } from '@stripe/react-stripe-js'
import StripeModal from '../features/Stripe/StripeModal'
import { CartContext } from '../features/Cart/CartProvider'
import useFetchStripeClientSecret from '../hooks/useFetchStripeClientSecret'
import CheckoutForm from '../components/Checkout/CheckoutForm'
import StripeStateManager from '../features/Stripe/StripeStateManager'
import { Layout } from '../components/Layout/Layout'

const stripePromise = loadStripe(config.stripeTestPublicAPIKey)

function Checkout() {
  const { stripeDatas } = useContext(CartContext)

  const stripeClientSecret = useFetchStripeClientSecret(stripeDatas)

  const [showModal, setShowModal] = useState(false)

  return (
    <Layout>
      <div className="checkout container">
        <InnerNav />
        <CheckoutForm onShowModal={() => setShowModal(true)} />
      </div>

      {stripeClientSecret && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: stripeClientSecret }}
        >
          <StripeStateManager>
            {showModal && (
              <Modal
                description={'Modal of paiement'}
                closeModal={() => setShowModal(false)}
              >
                <StripeModal />
              </Modal>
            )}
          </StripeStateManager>
        </Elements>
      )}
    </Layout>
  )
}

export default Checkout

// TODO: mettre un favicon
