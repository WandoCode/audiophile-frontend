import useSetLoader from '../features/Loader/useSetLoader'
import { useEffect } from 'react'

function Echec() {
  const setLoader = useSetLoader()

  useEffect(() => {
    setLoader(false)
  }, [])

  return (
    <div className="not-found container ">
      <h1 className="h1 text-black">Your payment has failed.</h1>
      <a href={window.location.origin + '/#/checkout'}>Please try again.</a>
    </div>
  )
}

export default Echec
