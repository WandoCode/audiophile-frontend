import { SVGLoader } from '../../stories/Atoms'
import { useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
  loading: boolean
}

function LoadStateWrapper({ children, loading }: Props) {
  const [showLoader, setShowLoader] = useState(true)

  const loaderClass = () => {
    let base = 'load-screen '
    if (!showLoader) base += 'load-screen--inactive'
    return base
  }

  useEffect(() => {
    if (!loading)
      setTimeout(() => {
        setShowLoader(false)
      }, 500)
  }, [loading])

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
