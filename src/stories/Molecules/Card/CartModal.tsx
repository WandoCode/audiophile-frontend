import { Button, ItemCart } from '../../Atoms'
import { CartItem, Context } from '../../../components/ContextProvider'
import { useContext, useMemo, useEffect } from 'react'
import { formatPrice } from '../../../utility/string'

interface Props {
  handleCheckout: (e: React.MouseEvent) => void
  closeModal: () => void
}

function CartModal({ handleCheckout, closeModal }: Props) {
  const { cart, getCartTotal, emptyCart } = useContext(Context) as {
    cart: CartItem[]
    getCartTotal: () => number
    emptyCart: () => void
  }

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
    document.body.addEventListener('keydown', keyHandler)
    document.querySelector('main')?.setAttribute('aria-hidden', 'true')

    return () => {
      document.body.style.overflowY = 'auto'
      document.body.removeEventListener('keydown', keyHandler)
      document.querySelector('main')?.removeAttribute('aria-hidden')
    }
  }, [])

  const keyHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
  }

  const itemListDOM = useMemo(
    () =>
      cart.map((item, i) => {
        return (
          <ItemCart
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

  return (
    <form className="cart-modal" role="dialog" aria-labelledby="cart-title">
      <div className="container">
        <div className="cart-modal__container">
          <div className="cart-modal__header">
            <h2 className="h2 h2--extra-small text-black" id="cart-title">
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
            disabled={cart.length === 0}
          />
        </div>
      </div>
    </form>
  )
}
export { CartModal }
