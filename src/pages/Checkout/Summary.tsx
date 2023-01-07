import { useContext, useMemo } from 'react'
import { Context, CartItem } from '../../ContextProvider'
import { ItemSummary } from '../../stories/Atoms/CardElement/ItemSummary'
import { getVAT } from '../../utility/number'
import { formatPrice } from '../../utility/string'

function Summary() {
  const { cart, getCartTotal } = useContext(Context) as {
    cart: CartItem[]
    getCartTotal: () => number
  }

  const total = useMemo(() => {
    return getCartTotal()
  }, [getCartTotal, cart])

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
        <h2 className="h2">TOTAL</h2>
        <div className="summary__price">$ {formatPrice(total)}</div>
      </div>
      <div className="summary__price-text">
        <h2 className="h2">SHIPPING</h2>
        <div className="summary__price">$ 50</div>
      </div>
      <div className="summary__price-text">
        <h2 className="h2">VAT (INCLUDED)</h2>
        <div className="summary__price">$ {formatPrice(getVAT(total))}</div>
      </div>
      <div className="summary__price-text summary__price-text--primary">
        <h2 className="h2">TOTAL</h2>
        <div className="summary__price summary__price--primary">
          $ {formatPrice(total + 50)}
        </div>
      </div>
    </div>
  )
}

export default Summary
