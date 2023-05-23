import ReactMarkdown from 'react-markdown'
import { useMemo } from 'react'

interface Props {
  features: string
}

function ProductFeatures({ features }: Props) {
  const richTextFeature = useMemo(() => {
    return <ReactMarkdown>{features}</ReactMarkdown>
  }, [features])

  return (
    <article className="product-features">
      <h2 className="h2 h2--small text-black">Features</h2>
      <div className="product-features__text">{richTextFeature}</div>
    </article>
  )
}

export { ProductFeatures }
