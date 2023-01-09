import { Button, ItemModal } from '../../Atoms'
import { CartItem, Context } from '../../../ContextProvider'
import { useContext, useMemo, useEffect, useRef } from 'react'
import { formatPrice } from '../../../utility/string'

interface Props {
  handleCheckout: (e: React.MouseEvent) => void
}

function CartModal({ handleCheckout }: Props) {
  const { cart, getCartTotal, emptyCart } = useContext(Context) as {
    cart: CartItem[]
    getCartTotal: () => number
    emptyCart: () => void
  }

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [])

  // TODO: fermer la modale si on click en-dehors ou change de page. Compliqué...(?)
  const itemListDOM = useMemo(
    () =>
      cart.map((item, i) => {
        return (
          <ItemModal
            key={i}
            slug={item.slug}
            name={item.name}
            quantity={item.quantity}
            url={item.url}
            price={item.price}
          />
        )
      }),
    [cart]
  )

  const handleRemoveAll = (e: React.MouseEvent) => {
    e.preventDefault()

    emptyCart()
  }

  // TODO: rendre la modal accessible au clavier
  return (
    <form className="cart-modal">
      <div className="container">
        <div className="cart-modal__container">
          <div className="cart-modal__header">
            <h2 className="h2 h2--extra-small text-black">
              Cart ({cart.length})
            </h2>
            <Button
              level="quaternary"
              onClickHandler={handleRemoveAll}
              text="remove all"
            />
          </div>
          <ul className="cart-modal__body">{itemListDOM}</ul>
          <div className="cart-modal__total">
            <h3 className="h3">TOTAL</h3>
            <div className="cart-modal__price">
              $ {formatPrice(getCartTotal())}
            </div>
          </div>
          <Button
            text="Checkout"
            level="primary"
            className="cart-modal__checkout"
            onClickHandler={handleCheckout}
          />
        </div>
      </div>
    </form>
  )
}
export { CartModal }
