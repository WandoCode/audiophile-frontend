import { formatPrice } from '../../../utility'

interface Props {
  name: string
  price: number
  url: string
  quantity: number
}

function ItemSummary({ name, price, url, quantity }: Props) {
  return (
    <li className="item-summary">
      <div className="item-summary__image-container">
        <img src={url} alt="" className="item-summary__img" />
      </div>
      <div className="item-summary__text">
        <p className="text-black">{name}</p>
        <div className="item-summary__price">$ {formatPrice(price)}</div>
      </div>
      <div className="item-summary__quantity">
        <p>x{quantity}</p>
      </div>
    </li>
  )
}

export { ItemSummary }
