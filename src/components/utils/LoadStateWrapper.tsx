import { SVGLoader } from '../../stories/Atoms'
import { useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
  loading: boolean
  defaultLoading?: boolean
  minimalTime?: number
}

function LoadStateWrapper({
  children,
  loading,
  defaultLoading = true,
  minimalTime = 500,
}: Props) {
  const [showLoader, setShowLoader] = useState(defaultLoading)
  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout>()
  const [hasLoadedOnce, setHasLoadedOnce] = useState(defaultLoading)

  const loaderClass = () => {
    let base = 'load-screen '
    if (!showLoader) base += 'load-screen--inactive'
    return base
  }

  useEffect(() => {
    if (timeOutId) {
      clearTimeout(timeOutId)
      setTimeOutId(undefined)
    }

    if (loading && !hasLoadedOnce) {
      setShowLoader(true)
      setHasLoadedOnce(true)
    } else {
      const timeOutRef = setTimeout(() => {
        setShowLoader(false)
        console.log('done')
      }, minimalTime)
      setTimeOutId(timeOutRef)
    }
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
