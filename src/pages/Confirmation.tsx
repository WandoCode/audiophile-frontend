import confirmationIcon from '../assets/icon-order-confirmation.svg'
import { ItemSummary } from '../stories/Atoms/CardElement/ItemSummary'
import { useEffect, useContext, useState, useMemo } from 'react'
import { CartContext } from '../components/Cart/CartProvider'
import { CartItem } from '../types'
import { formatPrice } from '../utility'

function Confirmation() {
  const [showAllItems, setShowAllItems] = useState(false)
  const [cartCopy, setCartCopy] = useState<CartItem[]>()
  const [totalPriceCopy, setTotalPriceCopy] = useState<number>(0)

  const { cart, getCartTotal, emptyCart, SHIPPING, cartIsUpToDate } =
    useContext(CartContext)

  useEffect(() => {
    if (!cartIsUpToDate) return
    if (!cartCopy && !totalPriceCopy) {
      setCartCopy([...cart])
      setTotalPriceCopy(getCartTotal())
    }
  }, [cart])

  useEffect(() => {
    if (cartIsUpToDate) emptyCart()
  }, [cartIsUpToDate])

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
  }, [cartCopy])

  return (
    <div className="confirmation">
      <div className="confirmation__container container">
        <img src={confirmationIcon} alt="Icon of confirmation" />
        <h1
          className="h1 h1--medium-responsive text-black"
          id="title-completion"
        >
          Thank you <br />
          for your order
        </h1>
        <p>You will receive an email confirmation shortly.</p>
        <div className="confirmation__body">
          <ul className="confirmation__items">
            {cartCopy?.length !== 0 && allItemsDOM?.at(0)}

            {showAllItems === true && <>{allItemsDOM?.slice(1)}</>}

            {cartCopy && cartCopy.length > 1 && (
              <div className="confirmation__other-items">
                <button
                  className="confirmation__other-items-button"
                  onClick={toggleShowItem}
                >
                  {showAllItems
                    ? 'view less'
                    : `and ${cartCopy.length - 1} other item(s)`}
                </button>
              </div>
            )}
          </ul>

          <div className="confirmation__total">
            <p className="confirmation__heading">Grand Total</p>
            <p className="confirmation__price white">
              $ {formatPrice(totalPriceCopy + SHIPPING)}
            </p>
          </div>
        </div>
        <a href={window.location.origin} className="btn btn--primary">
          <div className="btn__content">Home</div>
        </a>
      </div>
    </div>
  )
}

export default Confirmation
// TODO: faire une page si une erreur arrive pendant le paiment?
