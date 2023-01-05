import { CartItem, Context, RemoveItem, AddItem } from '../../ContextProvider'
import { NumberInput } from '../../stories/Atoms'
import { formatPrice } from '../../utility/string'
import { useContext } from 'react'

type RemoveItemFct = ({ slug }: RemoveItem) => void
type AddItemFct = ({ slug, name, url, price, addedQty }: AddItem) => void

function ItemModal({ name, quantity, slug, price, url }: CartItem) {
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
    <li className="item-modal">
      <div className="item-modal__image-container">
        <img src={url} alt="" className="item-modal__img" />
      </div>
      <div className="item-modal__text">
        <h2 className="h3 text-black">{name}</h2>
        <div className="item-modal__price">$ {formatPrice(price)}</div>
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

export { ItemModal }
