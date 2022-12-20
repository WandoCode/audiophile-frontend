import { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export const Context = createContext({})

function ContextProvider({ children }: Props) {
  const [layout, setLayout] = useState({})
  const [homepage, setHomepage] = useState({})
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
