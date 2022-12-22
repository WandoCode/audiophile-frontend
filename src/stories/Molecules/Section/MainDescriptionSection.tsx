import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { Context } from '../../../ContextProvider'
import { DataLayout } from '../../../hooks/useGetLayout'

function MainDescriptionSection() {
  const { layout } = useContext(Context) as { layout: DataLayout | undefined }

  return (
    <section className="main-description">
      <div className="main-description__img-container">
        <img
          className="mainDescription__img show-on-desktop"
          src={layout?.mainDescription.images.desktop}
          alt=""
        />
        <img
          className="mainDescription__img show-on-tablet"
          src={layout?.mainDescription.images.tablet}
          alt=""
        />
        <img
          className="mainDescription__img show-on-mobile"
          src={layout?.mainDescription.images.mobile}
          alt=""
        />
      </div>

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
