import config from '../config.json'
import { useState, useContext } from 'react'
import Modal from '../components/utils/Modal'
import { loadStripe } from '@stripe/stripe-js'
import { InnerNav } from '../stories/Molecules'
import { Elements } from '@stripe/react-stripe-js'
import StripeModal from '../components/Checkout/StripeModal'
import { CartContext } from '../components/Cart/CartProvider'
import StripeStateManager from '../components/Checkout/StripeStateManager'
import useFetchStripeClientSecret from '../hooks/useFetchStripeClientSecret'
import CheckoutForm from '../components/Checkout/CheckoutForm'

const stripePromise = loadStripe(config.stripeTestPublicAPIKey)

function Checkout() {
  const { stripeDatas } = useContext(CartContext)

  const stripeClientSecret = useFetchStripeClientSecret(stripeDatas)

  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
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
    </>
  )
}

export { Checkout }
