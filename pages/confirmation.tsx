import confirmationIcon from '../public/assets/icon-order-confirmation.svg'
import { ItemSummary } from '../stories/Atoms/CardElement/ItemSummary'
import { useEffect, useContext, useState, useMemo } from 'react'
import { CartContext } from '../features/Cart/CartProvider'
import { CartItem } from '../types'
import { formatPrice } from '../utility'
import useSetLoader from '../features/Loader/useSetLoader'
import Image from 'next/image'
import { Layout } from '../components/Layout/Layout'
import Link from 'next/link'

function Confirmation() {
  const setLoader = useSetLoader()

  const [showAllItems, setShowAllItems] = useState(false)
  const [cartCopy, setCartCopy] = useState<CartItem[]>()
  const [totalPriceCopy, setTotalPriceCopy] = useState<number>(0)

  const { cart, getCartTotal, emptyCart, SHIPPING, cartIsUpToDate } =
    useContext(CartContext)

  useEffect(() => {
    setLoader(false)
  }, [])

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
      return cartCopy.map((item) => {
        return (
          <ItemSummary
            name={item.name}
            price={item.price}
            url={item.url}
            quantity={item.quantity}
            key={item.slug}
          />
        )
      })
  }, [cartCopy])

  return (
    <Layout>
      <div className="confirmation">
        <div className="confirmation__container container">
          <Image src={confirmationIcon} alt="Icon of confirmation" />
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
          <Link href="/" className="btn btn--primary">
            <div className="btn__content">Home</div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Confirmation
