import { CartContext } from '../../../features/Cart/CartProvider'
import { NumberInput } from '../NumberInput/NumberInput'
import { CartItem } from '../../../types'
import { formatPrice } from '../../../utility'
import { useContext } from 'react'

function ItemCart({ name, quantity, slug, price, url }: CartItem) {
  const { removeItem, addItem } = useContext(CartContext)

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({ slug, name, url, price, addedQty: 1 })
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault()
    removeItem({ slug })
  }

  return (
    <li className="item-cart">
      <div className="item-cart__image-container">
        <img src={url} alt={`${name} mignature`} className="item-cart__img" />
      </div>
      <div className="item-cart__text">
        <h2 className="h3 text-black">{name}</h2>
        <div className="item-cart__price">$ {formatPrice(price)}</div>
      </div>
      <NumberInput
        name={`${slug}-quantity`}
        id={`${slug}-quantity`}
        currValue={quantity}
        onAdd={handleAdd}
        onRemove={handleRemove}
        small={true}
      />
    </li>
  )
}

export { ItemCart }
