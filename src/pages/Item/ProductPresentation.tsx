import { Button, ImageSet, NumberInput } from '../../stories/Atoms'
import { useState, useContext } from 'react'
import { AddItem, Context } from '../../components/ContextProvider'
import { DataItem } from '../../hooks/helpers/dataItem'
import { formatPrice } from '../../utility/string'

type AddItemFct = ({ slug, name, url, price, addedQty }: AddItem) => void

interface Props {
  dataItem: DataItem | undefined
  slug: string | undefined
}

function ProductPresentation({ dataItem, slug }: Props) {
  const [itemQuantity, setItemQuantity] = useState(1)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()

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

    if (!slug || !dataItem) return

    addItem({
      slug,
      price: dataItem.price,
      url: dataItem.cartImage,
      name: dataItem.shortName,
      addedQty: itemQuantity,
    })

    triggerVisualConfirmation()
  }

  const triggerVisualConfirmation = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(undefined)
    }

    setShowConfirmation(true)

    const timeoutRef = setTimeout(() => setShowConfirmation(false), 2000)
    setTimeoutId(timeoutRef)
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
        <h1 className="h1 h1--medium text-black">{dataItem?.name}</h1>
        <div className="product-presentation__description">
          {dataItem?.description ?? ''}
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
          {showConfirmation && (
            <div className="product-presentation__confirmation">
              Successfully added!
            </div>
          )}
        </form>
      </div>
    </article>
  )
}

export { ProductPresentation }
