import ReactMarkdown from 'react-markdown'
import { useGetLayout } from '../../../hooks/useGetLayout'
import { ImageSet } from '../../Atoms'

function MainDescriptionSection() {
  const layoutQuery = useGetLayout()
  const layoutData = layoutQuery.data

  return (
    <section className="main-description">
      <ImageSet
        data={layoutData?.mainDescription.images}
        className="mainDescription"
        altTxt=" "
        lazy={true}
      />

      <div className="main-description__text">
        <ReactMarkdown
          components={{ p: 'h2' }}
          className="main-description__secondary"
        >
          {layoutData?.mainDescription.title ?? ''}
        </ReactMarkdown>
        <p className="main-description__description">
          {layoutData?.mainDescription.text}
        </p>
      </div>
    </section>
  )
}

export { MainDescriptionSection }
