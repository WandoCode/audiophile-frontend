import { useContext } from 'react'
import { Context } from '../ContextProvider'
import { ItemSummary } from '../../stories/Atoms/CardElement/ItemSummary'
import { CartItem } from '../../types'
import { formatPrice, getVAT } from '../../utility'

function Summary() {
  const { cart, getCartTotal, getCartGrandTotal, SHIPPING } = useContext(
    Context
  ) as {
    SHIPPING: number
    cart: CartItem[]
    getCartTotal: () => number
    getCartGrandTotal: () => number
  }

  const total = getCartTotal()

  const grandTotal = getCartGrandTotal()

  const summaryItemsDOM = () => {
    return cart.map((item, i) => {
      return (
        <ItemSummary
          key={i}
          name={item.name}
          price={item.price}
          url={item.url}
          quantity={item.quantity}
        />
      )
    })
  }

  return (
    <div className="summary">
      <ul className="summary__items">{summaryItemsDOM()}</ul>
      <div className="summary__price-text">
        <h3 className="h3 h3--summary">TOTAL</h3>
        <div className="summary__price">$ {formatPrice(total)}</div>
      </div>
      <div className="summary__price-text">
        <h3 className="h3 h3--summary">SHIPPING</h3>
        <div className="summary__price">
          $ {cart.length !== 0 ? SHIPPING : 0}
        </div>
      </div>
      <div className="summary__price-text">
        <h3 className="h3 h3--summary">VAT (INCLUDED)</h3>
        <div className="summary__price">$ {formatPrice(getVAT(total))}</div>
      </div>
      <div className="summary__price-text summary__price-text--primary">
        <h3 className="h3 h3--summary">TOTAL</h3>
        <div className="summary__price summary__price--primary">
          $ {formatPrice(grandTotal)}
        </div>
      </div>
    </div>
  )
}

export { Summary }
