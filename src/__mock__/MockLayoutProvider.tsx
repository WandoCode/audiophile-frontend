import { PropsWithChildren } from 'react'
import { LayoutContext } from '../components/Layout/LayoutProvider'
import { layoutDatas } from './data/Layout'

function MockLayoutProvider({ children }: PropsWithChildren) {
  const layout = layoutDatas

  return (
    <LayoutContext.Provider value={{ layout, setLayout: () => {} }}>
      {children}
    </LayoutContext.Provider>
  )
}

export default MockLayoutProvider
