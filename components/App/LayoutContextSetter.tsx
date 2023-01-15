import { DataLayout } from '../../hooks/helpers/dataLayout'
import { useContext, useEffect } from 'react'
import { Context } from './ContextProvider'
function LayoutContextSetter({
  datasLayout,
}: {
  datasLayout: DataLayout | undefined
}) {
  const { setLayout } = useContext(Context) as {
    setLayout: React.Dispatch<React.SetStateAction<DataLayout | undefined>>
  }

  useEffect(() => {
    if (datasLayout) {
      setLayout(datasLayout)
    }
  }, [datasLayout])
  return <></>
}

export default LayoutContextSetter
