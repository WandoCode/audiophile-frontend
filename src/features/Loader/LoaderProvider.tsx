import { createContext, useRef, PropsWithChildren } from 'react'
import Loader from './Loader'

export const defaultLoaderOptions = {
  loading: false,
}

const setLoader = (loading: boolean) => {}

const defaultLoader = {
  setLoaderRef: { current: setLoader },
}

export const LoaderContext = createContext(defaultLoader)

function LoaderProvider({ children }: PropsWithChildren) {
  const setLoaderRef = useRef(setLoader)

  return (
    <LoaderContext.Provider value={{ setLoaderRef }}>
      <Loader />
      {children}
    </LoaderContext.Provider>
  )
}

export default LoaderProvider
