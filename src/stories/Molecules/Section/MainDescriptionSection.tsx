import { useContext, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { ImageSet } from '../../Atoms'
import { LayoutContext } from '../../../components/Layout/LayoutProvider'

function MainDescriptionSection() {
  const { layout } = useContext(LayoutContext)

  const richTextTitle = useMemo(() => {
    return (
      <ReactMarkdown
        components={{ p: 'h2' }}
        className="main-description__secondary"
      >
        {layout?.mainDescription.title ?? ''}
      </ReactMarkdown>
    )
  }, [layout?.mainDescription.title])

  return (
    <section className="main-description">
      <ImageSet
        data={layout?.mainDescription.images}
        className="mainDescription"
        altTxt="Chill guy listening music with headphones. Black and white colors."
        lazy={true}
      />

      <div className="main-description__text">
        {richTextTitle}
        <p className="main-description__description">
          {layout?.mainDescription.text}
        </p>
      </div>
    </section>
  )
}

export { MainDescriptionSection }
