import Image from 'next/image'
import { formatPrice } from '../../../utility/string'

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
        <Image
          src={url}
          alt={`${name} mignature`}
          height={64}
          width={64}
          className="item-summary__img"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WQ8AAlcBas53/MIAAAAASUVORK5CYII="
        />
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
