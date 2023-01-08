import { useEffect, useContext } from 'react'
import confirmationIcon from '../../../assets/icon-order-confirmation.svg'
import { Button } from '../../Atoms'
import { Context, CartItem } from '../../../ContextProvider'
import { ItemSummary } from '../../Atoms/CardElement/ItemSummary'
import { formatPrice } from '../../../utility/string'
import { useNavigate } from 'react-router-dom'

function CompletionModal() {
  const navigate = useNavigate()

  const { cart, getCartTotal } = useContext(Context) as {
    cart: CartItem[]
    getCartTotal: () => number
  }

  const handleBackHome = () => {
    navigate('/')
  }

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [])
  // TODO: ajouter les autres items quand on clique sur le boutton
  return (
    <div className="completion-modal">
      <div className="completion-modal__container container">
        <img src={confirmationIcon} alt="Icon of confirmation" />
        <h1 className="h1 h1--medium-responsive text-black">
          Thank you <br />
          for your order
        </h1>
        <p>You will receive an email confirmation shortly.</p>
        <div className="completion-modal__body">
          <div className="completion-modal__items">
            {cart.length !== 0 && (
              <ItemSummary
                name={cart[0].name}
                price={cart[0].price}
                url={cart[0].url}
                quantity={cart[0].quantity}
              />
            )}

            {cart.length > 1 && (
              <div className="completion-modal__other-items">
                <button className="completion-modal__other-items-button">
                  and {cart.length - 1} other item(s)
                </button>
              </div>
            )}
          </div>
          <div className="completion-modal__total">
            <p className="completion-modal__heading">Grand Total</p>
            <p className="completion-modal__price white">
              $ {formatPrice(getCartTotal() + 50)}
            </p>
          </div>
        </div>
        <Button
          level="primary"
          text="Back To Home"
          onClickHandler={handleBackHome}
        />
      </div>
    </div>
  )
}

export { CompletionModal }
