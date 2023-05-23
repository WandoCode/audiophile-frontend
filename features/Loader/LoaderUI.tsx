import { SVGLoader } from '../../stories/Atoms'

interface Props {
  loaderClass: string
  isVisible: boolean
}

function LoaderUI({ loaderClass, isVisible }: Props) {
  return (
    <>
      {isVisible && (
        <div className={loaderClass}>
          <div className="loader-screen__icon">
            <SVGLoader />
          </div>
        </div>
      )}
    </>
  )
}

export default LoaderUI
