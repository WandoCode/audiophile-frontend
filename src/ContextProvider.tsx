import { createContext, useState } from 'react'
import { DataHomepage } from './hooks/useGetHomepage'
import { DataLayout } from './hooks/useGetLayout'

interface Props {
  children: React.ReactNode
}

export const Context = createContext({})

function ContextProvider({ children }: Props) {
  const [layout, setLayout] = useState<DataLayout>()
  const [homepage, setHomepage] = useState<DataHomepage>()
  const [loading, setLoading] = useState(true)

  return (
    <Context.Provider
      value={{ layout, setLayout, homepage, setHomepage, loading, setLoading }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
