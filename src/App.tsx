import { useContext, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import LoadStateWrapper from './components/LoadStateWrapper'
import { Context } from './components/ContextProvider'
import { useGetLayout } from './hooks/useGetLayout'
import router from './components/router'

function App() {
  const { setLayout } = useContext(Context) as any
  const [dataLayout, loading] = useGetLayout()

  useEffect(() => {
    setLayout(dataLayout)
  }, [dataLayout])

  return (
    <div className="App">
      <LoadStateWrapper loading={loading}>
        <RouterProvider router={router} />
      </LoadStateWrapper>
    </div>
  )
}

export default App
