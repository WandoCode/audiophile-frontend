import { useContext, useEffect } from 'react'
import { Context } from './ContextProvider'
import { DataLayout } from '../../types/index'

interface Props {
  datasLayout: DataLayout | undefined
}

function LayoutContextSetter({ datasLayout }: Props) {
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

export { LayoutContextSetter }
