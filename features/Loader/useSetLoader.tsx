import { useContext } from 'react'
import { LoaderContext } from './LoaderProvider'

function useSetLoader() {
  const { setLoaderRef } = useContext(LoaderContext)
  return (loading: boolean) => setLoaderRef.current(loading)
}

export default useSetLoader
