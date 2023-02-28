import useSetLoader from '../../features/Loader/useSetLoader'
import { useEffect } from 'react'

function FallBackLoader() {
  const setLoader = useSetLoader()

  useEffect(() => {
    setLoader(true)
  }, [])

  return <></>
}

export default FallBackLoader
