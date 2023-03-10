import { ItemSummary } from '../../stories/Atoms/CardElement/ItemSummary'
import { formatPrice, getVAT } from '../../utility'
import { CartContext } from '../../features/Cart/CartProvider'
import { useContext } from 'react'

function Summary() {
  const { cart, getCartTotal, getCartGrandTotal, SHIPPING } =
    useContext(CartContext)

  const total = getCartTotal()

  const grandTotal = getCartGrandTotal()

  const summaryItemsDOM = () => {
    return cart.map((item) => {
      return (
        <ItemSummary
          key={item.slug}
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
