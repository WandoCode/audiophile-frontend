import { CartContext } from '../../../components/Cart/CartProvider'
import { useContext, useMemo, useEffect, useRef } from 'react'
import { Button, ItemCart } from '../../Atoms'
import { formatPrice } from '../../../utility'

interface Props {
  handleCheckout: (e: React.MouseEvent) => void
  closeModal: () => void
}

function CartModal({ handleCheckout, closeModal }: Props) {
  const formRef = useRef<HTMLFormElement>(null)
  const { cart, getCartTotal, emptyCart } = useContext(CartContext)

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
    if (e.key === 'Tab') handleLastTab()
  }

  const handleLastTab = () => {
    const activeElement = document.activeElement
    if (activeElement && activeElement.id === 'btn-checkout') {
      if (formRef.current) formRef.current.focus()
    }
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
    <form
      ref={formRef}
      className="cart-modal"
      role="dialog"
      aria-labelledby="cart-title"
      tabIndex={0}
    >
      <div className="container">
        <div className="cart-modal__container">
          <div className="cart-modal__header">
            <h2 className="h2 h2--extra-small text-black" id="cart-title">
              Cart ({cart.length})
            </h2>
            <Button
              id="btn-remove"
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
            id="btn-checkout"
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
