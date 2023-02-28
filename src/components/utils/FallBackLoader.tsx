import useSetLoader from '../../features/Loader/useSetLoader'

function FallBackLoader() {
  const setLoader = useSetLoader()
  setLoader(true)
  return <></>
}

export default FallBackLoader
