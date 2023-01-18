import { Context } from '../../../components/App/ContextProvider'
import { NumberInput } from '../NumberInput/NumberInput'
import { useContext } from 'react'
import { formatPrice } from '../../../utility'
import { RemoveItem, AddItem, CartItem } from '../../../types/index'

type RemoveItemFct = ({ slug }: RemoveItem) => void
type AddItemFct = ({ slug, name, url, price, addedQty }: AddItem) => void

function ItemCart({ name, quantity, slug, price, url }: CartItem) {
  const { removeItem, addItem } = useContext(Context) as {
    removeItem: RemoveItemFct
    addItem: AddItemFct
  }

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
        <img src={url} alt="" className="item-cart__img" />
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
