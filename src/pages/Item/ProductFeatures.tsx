import ReactMarkdown from 'react-markdown'

interface Props {
  features: string
}

function ProductDescription({ features }: Props) {
  return (
    <article className="item-details__features">
      <h2 className="h2 h2--small text-black">Features</h2>
      <div className="items-details__text-feature">
        <ReactMarkdown>{features}</ReactMarkdown>
      </div>
    </article>
  )
}

export { ProductDescription }
