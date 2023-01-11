import { useContext, useMemo } from 'react'
import { Context, CartItem } from '../../components/ContextProvider'
import { ItemSummary } from '../../stories/Atoms/CardElement/ItemSummary'
import { getVAT } from '../../utility/number'
import { formatPrice } from '../../utility/string'

function Summary() {
  const { cart, getCartTotal, getCartGrandTotal } = useContext(Context) as {
    cart: CartItem[]
    getCartTotal: () => number
    getCartGrandTotal: () => number
  }

  const total = useMemo(() => {
    return getCartTotal()
  }, [getCartTotal, cart])

  const grandTotal = useMemo(() => {
    return getCartGrandTotal()
  }, [getCartGrandTotal, cart])

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
        <div className="summary__price">$ {cart.length !== 0 ? 50 : 0}</div>
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

export default Summary
