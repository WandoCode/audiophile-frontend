import loaderIcon from '../../assets/loadingIcon.png'
import { SVGLoader } from '../../stories/Atoms'

interface Props {
  children: React.ReactNode
  loading: boolean
}

function LoadStateWrapper({ children, loading }: Props) {
  const loaderClass = () => {
    let base = 'load-screen '
    if (!loading) base += 'load-screen--inactive'
    return base
  }

  return (
    <>
      <div className={loaderClass()}>
        <div className="loader-screen__icon">
          <SVGLoader />
        </div>
      </div>
      {children}
    </>
  )
}

export default LoadStateWrapper
