import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { Context } from '../../../ContextProvider'
import { DataLayout } from '../../../hooks/useGetLayout'
import { ImageSet } from '../../Atoms'

function MainDescriptionSection() {
  const { layout } = useContext(Context) as { layout: DataLayout | undefined }

  return (
    <section className="main-description">
      <ImageSet
        data={layout?.mainDescription.images}
        className="mainDescription"
        altTxt=""
        lazy={true}
      />

      <div className="main-description__text">
        <h2 className="h2 h2--secondary">
          <ReactMarkdown>{layout?.mainDescription.title ?? ''}</ReactMarkdown>
        </h2>
        <p className="main-description__description">
          {layout?.mainDescription.text}
        </p>
      </div>
    </section>
  )
}

export { MainDescriptionSection }
