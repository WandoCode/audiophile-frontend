import { useParams, useLocation, useNavigate } from 'react-router-dom'
import useGetItem from '../hooks/useGetItem'
import { useEffect, useState, useContext } from 'react'
import { formatPrice } from '../utility/string'
import { Button, ImageSet, InnerLink, NumberInput } from '../stories/Atoms'
import { Category } from '../stories/Atoms/CategoryLink/CategoryLink.stories'
import {
  CategoriesSection,
  ItemShortCard,
  MainDescriptionSection,
} from '../stories/Molecules'
import ReactMarkdown from 'react-markdown'
import { AddItem, Context, RemoveItem } from '../ContextProvider'

type AddItemFct = ({ slug, name, url, price, addedQty }: AddItem) => void
type RemoveItemFct = ({ slug, removeAll }: RemoveItem) => void

function Item() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [dataItem] = useGetItem({ slug })
  const [itemQuantity, setItemQuantity] = useState(1)
  const { addItem, removeItem } = useContext(Context) as {
    addItem: AddItemFct
    removeItem: RemoveItemFct
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
    if (slug) removeItem({ slug })
    // const newQuantity = itemQuantity - 1 >= 1 ? itemQuantity - 1 : 1
    // setItemQuantity(newQuantity)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (slug) addItem({ slug, price: 220, url: '', name: 'test', addedQty: 2 })

    // TODO: add item quantity to cart
    // TODO add a visual confirmation
  }

  const includedDOM = () => {
    return dataItem?.includes.map((part, index) => {
      return (
        <li key={index}>
          <strong>{part.quantity}x</strong>
          {part.item}
        </li>
      )
    })
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const galleryImagesDOM = () => {
    if (!dataItem) return []
    const imagesDataArray = Object.values(dataItem?.galleryImages)

    return imagesDataArray.map((imgData, i) => {
      return <ImageSet className="gallery" data={imgData} key={i} />
    })
  }

  const shortCardsDOM = () => {
    if (!dataItem) return []

    const linkedItemsDataArray = Object.values(dataItem?.linkedItems)
    return linkedItemsDataArray.map((linkedItem, i) => {
      return <ItemShortCard data={linkedItem} key={i} />
    })
  }

  // /* TODO: Changer en <picture> et imgset? */
  return (
    <div className="item container">
      <div className="empty-title" aria-hidden={true}></div>
      <section className="nav">
        <InnerLink text="Go Back" clickHandler={handleGoBack} />
      </section>
      <section className="item-details">
        <article className="item-details__short">
          <ImageSet
            data={dataItem?.mainImages}
            className="item-details"
            altTxt={dataItem?.name}
          />

          <div className="item-details__content">
            {dataItem?.newItem && (
              <p className="item-details__new text-100 text-primary">
                New Product
              </p>
            )}
            <h1 className="h1 h1--small text-black">{dataItem?.name}</h1>
            <div className="item-details__description">
              <ReactMarkdown>{dataItem?.description ?? ''}</ReactMarkdown>
            </div>
            <div className="item-details__price">
              <em>$ {formatPrice(dataItem?.price)}</em>
            </div>
            <form className="item-details__add-to-cart">
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
        <article className="item-details__features">
          <h2 className="h2 h2--small text-black">Features</h2>
          <div className="items-details__text-feature">
            <ReactMarkdown>{dataItem?.features ?? ''}</ReactMarkdown>
          </div>
        </article>
        <article className="item-details__included">
          <h2 className="h2 h2--small text-black">In the box</h2>
          <ul>{includedDOM()}</ul>
        </article>
      </section>

      <section className="gallery">
        <div className="gallery__images">{galleryImagesDOM()}</div>
      </section>

      <section className="you-may-like">
        <h2 className="h2 h2--small text-black">You may also like</h2>
        <div className="you-may-like__items">{shortCardsDOM()}</div>
      </section>
      <CategoriesSection />
      <MainDescriptionSection />
    </div>
  )
}

export { Item }
