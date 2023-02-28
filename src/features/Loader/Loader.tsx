import LoaderUI from './LoaderUI'
import { useContext, useCallback, useState, useEffect } from 'react'
import { LoaderContext } from './LoaderProvider'

function Loader() {
  const { setLoaderRef } = useContext(LoaderContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [showLoader, setShowLoader] = useState(false)
  const [timeOutId, setTimeOutId] = useState<NodeJS.Timeout>()
  // const [hasLoadedOnce, setHasLoadedOnce] = useState(false)

  setLoaderRef.current = useCallback(
    (isLoading: boolean) => {
      setLoading(isLoading)
    },
    [setLoaderRef]
  )

  useEffect(() => {
    if (loading) setShowLoader(true)

    if (!loading) {
      clearTimeout(timeOutId)
      const timerRef = setTimeout(() => setShowLoader(false), 750)
      setTimeOutId(timerRef)
    }
  }, [loading])

  const loaderClass = () => {
    let base = 'load-screen '
    if (!showLoader) base += 'load-screen--inactive'
    return base
  }

  return <LoaderUI loaderClass={loaderClass()} isVisible={showLoader} />
}

export default Loader
