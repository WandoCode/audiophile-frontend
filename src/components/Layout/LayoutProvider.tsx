import { PropsWithChildren, createContext, useState } from 'react'
import { LayoutContextType, DataLayout } from '../../types'

const defaultValue: LayoutContextType = {
  layout: undefined,
  setLayout: () => {},
}

export const LayoutContext = createContext(defaultValue)

function LayoutProvider({ children }: PropsWithChildren) {
  const [layout, setLayout] = useState<DataLayout>()

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutProvider
