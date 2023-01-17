import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { Context } from '../../../components/App'
import { ImageSet } from '../../Atoms'
import { DataLayout } from '../../../hooks/helpers/dataLayout'

function MainDescriptionSection() {
  const { layout } = useContext(Context) as { layout: DataLayout | undefined }

  return (
    <section className="main-description">
      <ImageSet
        data={layout?.mainDescription.images}
        className="mainDescription"
        altTxt="Man listening music with headphones"
        width={{ desktop: 540, mobile: 689, tablet: 327 }}
        height={{ desktop: 588, mobile: 300, tablet: 33 }}
      />

      <div className="main-description__text">
        <ReactMarkdown
          components={{ p: 'h2' }}
          className="main-description__secondary"
        >
          {layout?.mainDescription.title ?? ''}
        </ReactMarkdown>
        <p className="main-description__description">
          {layout?.mainDescription.text}
        </p>
      </div>
    </section>
  )
}

export { MainDescriptionSection }
