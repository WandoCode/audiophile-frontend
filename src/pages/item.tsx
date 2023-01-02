import { useParams, useLocation, useNavigate } from 'react-router-dom'
import useGetItem from '../hooks/useGetItem'
import { useEffect, useState } from 'react'
import { formatPrice } from '../utility/string'
import { Button, InnerLink, NumberInput } from '../stories/Atoms'
import { Category } from '../stories/Atoms/CategoryLink/CategoryLink.stories'
import { CategoriesSection, MainDescriptionSection } from '../stories/Molecules'

function Item() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [dataItem] = useGetItem({ slug })
  const [itemQuantity, setItemQuantity] = useState(1)

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

  // /* TODO: Changer en <picture> et imgset? */
  return (
    <div className="item container">
      <div className="empty-title" aria-hidden={true}></div>
      <section className="nav">
        <InnerLink text="Go Back" clickHandler={handleGoBack} />
      </section>
      <section className="item-details">
        <article className="item-details__short">
          <div className="item-details__img-container">
            <img
              className="item-details__img show-on-desktop"
              src={dataItem?.mainImages.desktop}
              alt={dataItem?.name}
            />
            <img
              className="item-details__img show-on-tablet"
              src={dataItem?.mainImages.tablet}
              alt={dataItem?.name}
            />
            <img
              className="item-details__img show-on-mobile"
              src={dataItem?.mainImages.mobile}
              alt={dataItem?.name}
            />
          </div>
          <div className="item-details__content">
            {dataItem?.newItem && (
              <p className="item-details__new text-100 text-primary">
                New Product
              </p>
            )}
            <h1 className="h1 h1--small text-black">{dataItem?.name}</h1>
            <p className="item-details__description">{dataItem?.description}</p>
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
          <p className="items-details__text-feature">{dataItem?.features}</p>
        </article>
        <article className="item-details__included">
          <h2 className="h2 h2--small text-black">In the box</h2>
          <ul>{includedDOM()}</ul>
        </article>
      </section>

      <CategoriesSection />
      <MainDescriptionSection />
    </div>
  )
}

export { Item }
