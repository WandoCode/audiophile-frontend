import ReactMarkdown from 'react-markdown'

interface Props {
  features: string
}

function ProductFeatures({ features }: Props) {
  return (
    <article className="product-features">
      <h2 className="h2 h2--small text-black">Features</h2>
      <div className="product-features__text">
        <ReactMarkdown>{features}</ReactMarkdown>
      </div>
    </article>
  )
}

export { ProductFeatures }
