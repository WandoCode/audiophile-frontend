import { DataItem } from '../../types'

interface Props {
  dataItem: DataItem | undefined
}

function ProductIncludes({ dataItem }: Props) {
  const includedDOM = () => {
    return dataItem?.includes.map((part) => {
      return (
        <li key={part.item}>
          <strong>{part.quantity}x</strong>
          {part.item}
        </li>
      )
    })
  }

  return (
    <article className="product-includes">
      <h2 className="h2 h2--small text-black">In the box</h2>
      <ul>{includedDOM()}</ul>
    </article>
  )
}

export { ProductIncludes }
