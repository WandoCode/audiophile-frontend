import { useContext, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Context } from './ContextProvider'
import { useGetLayout } from './hooks/useGetLayout'
import router from './router'

function App() {
  const { setLayout } = useContext(Context) as any
  const [dataLayout] = useGetLayout()

  useEffect(() => {
    setLayout(dataLayout)
  }, [dataLayout])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
