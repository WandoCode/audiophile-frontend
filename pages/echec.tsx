import useSetLoader from '../features/Loader/useSetLoader'
import { useEffect } from 'react'
import { Layout } from './Layout'

function Echec() {
  const setLoader = useSetLoader()

  useEffect(() => {
    setLoader(false)
  }, [])

  return (
    <Layout>
      <div className="not-found container ">
        <h1 className="h1 text-black">Your payment has failed.</h1>
        <a href={window.location.origin + '/#/checkout'}>Please try again.</a>
      </div>
    </Layout>
  )
}

export default Echec
