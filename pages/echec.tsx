import useSetLoader from '../features/Loader/useSetLoader'
import { useEffect } from 'react'
import { Layout } from '../components/Layout/Layout'
import Link from 'next/link'

function Echec() {
  const setLoader = useSetLoader()

  useEffect(() => {
    setLoader(false)
  }, [])

  return (
    <Layout>
      <div className="not-found container ">
        <h1 className="h1 text-black">Your payment has failed.</h1>
        <Link href="/checkout">Please try again.</Link>
      </div>
    </Layout>
  )
}

export default Echec
