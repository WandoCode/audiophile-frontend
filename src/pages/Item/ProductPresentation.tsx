import { DataItem } from '../../hooks/useGetItem'
import { Button, ImageSet, NumberInput } from '../../stories/Atoms'
import ReactMarkdown from 'react-markdown'
import { formatPrice } from '../../utility/string'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddItem, Context } from '../../ContextProvider'

type AddItemFct = ({ slug, name, url, price, addedQty }: AddItem) => void

interface Props {
  dataItem: DataItem | undefined
  slug: string | undefined
}

function ProductPresentation({ dataItem, slug }: Props) {
  const navigate = useNavigate()

  const [itemQuantity, setItemQuantity] = useState(1)

  const { addItem } = useContext(Context) as {
    addItem: AddItemFct
  }

  const handleAddItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setItemQuantity(itemQuantity + 1)
  }

  const handleRemoveItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const newQuantity = itemQuantity - 1 >= 1 ? itemQuantity - 1 : 1
    setItemQuantity(newQuantity)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if (slug && dataItem)
      addItem({
        slug,
        price: dataItem.price,
        url: dataItem.cartImage,
        name: dataItem.shortName,
        addedQty: itemQuantity,
      })

    // TODO: add item quantity to cart
    // TODO add a visual confirmation
  }

  return (
    <article className="product-presentation">
      <ImageSet
        data={dataItem?.mainImages}
        className="item-details"
        altTxt={dataItem?.name}
      />

      <div className="product-presentation__content">
        {dataItem?.newItem && (
          <p className="product-presentation__new text-100 text-primary">
            New Product
          </p>
        )}
        <h1 className="h1 h1--small text-black">{dataItem?.name}</h1>
        <div className="product-presentation__description">
          <ReactMarkdown>{dataItem?.description ?? ''}</ReactMarkdown>
        </div>
        <div className="item-details__price">
          <em>$ {formatPrice(dataItem?.price)}</em>
        </div>
        <form className="product-presentation__add-to-cart">
          <NumberInput
            name="quantity"
            id="quantity"
            currValue={itemQuantity}
            onAdd={handleAddItem}
            onRemove={handleRemoveItem}
          />
          <Button
            text="Add to cart"
            level="primary"
            onClickHandler={handleClick}
          />
        </form>
      </div>
    </article>
  )
}

export { ProductPresentation }
