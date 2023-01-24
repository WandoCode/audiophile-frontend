import confirmationIcon from '../../../assets/icon-order-confirmation.svg'
import { ItemSummary } from '../../Atoms/CardElement/ItemSummary'
import { useEffect, useContext, useState, useMemo } from 'react'
import { Context } from '../../../components/ContextProvider'
import { CartItem, ContextType } from '../../../types'
import { formatPrice } from '../../../utility'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../Atoms'

function CompletionModal() {
  const navigate = useNavigate()
  const [showAllItems, setShowAllItems] = useState(false)
  const [cartCopy, setCartCopy] = useState<CartItem[]>()
  const [totalPriceCopy, setTotalPriceCopy] = useState<number>(0)

  const { cart, getCartTotal, emptyCart, SHIPPING } = useContext(
    Context
  ) as ContextType

  const handleBackHome = () => {
    navigate('/')
  }

  useEffect(() => {
    setCartCopy([...cart])
    emptyCart()
    setTotalPriceCopy(getCartTotal())
    document.body.style.overflowY = 'hidden'
    document.querySelector('main')?.setAttribute('aria-hidden', 'true')

    return () => {
      document.body.style.overflowY = 'auto'
      document.querySelector('main')?.removeAttribute('aria-hidden')
    }
  }, [])

  const toggleShowItem = () => {
    setShowAllItems(!showAllItems)
  }

  const allItemsDOM = useMemo(() => {
    if (cartCopy)
      return cartCopy.map((item, i) => {
        return (
          <ItemSummary
            name={item.name}
            price={item.price}
            url={item.url}
            quantity={item.quantity}
            key={i}
          />
        )
      })
  }, [cart])

  return (
    <div
      className="completion-modal"
      role="dialog"
      aria-labelledby="title-completion"
    >
      <div className="completion-modal__container container">
        <img src={confirmationIcon} alt="Icon of confirmation" />
        <h1
          className="h1 h1--medium-responsive text-black"
          id="title-completion"
        >
          Thank you <br />
          for your order
        </h1>
        <p>You will receive an email confirmation shortly.</p>
        <div className="completion-modal__body">
          <ul className="completion-modal__items">
            {cartCopy?.length !== 0 && allItemsDOM?.at(0)}

            {showAllItems === true && <>{allItemsDOM?.slice(1)}</>}

            {cartCopy && cartCopy.length > 1 && (
              <div className="completion-modal__other-items">
                <button
                  className="completion-modal__other-items-button"
                  onClick={toggleShowItem}
                >
                  {showAllItems
                    ? 'view less'
                    : `and ${cartCopy.length - 1} other item(s)`}
                </button>
              </div>
            )}
          </ul>

          <div className="completion-modal__total">
            <p className="completion-modal__heading">Grand Total</p>
            <p className="completion-modal__price white">
              $ {formatPrice(totalPriceCopy + SHIPPING)}
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
