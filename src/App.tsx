import { useContext, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import LoadStateWrapper from './components/LoadStateWrapper'
import { Context } from './ContextProvider'
import { useGetLayout } from './hooks/useGetLayout'
import router from './router'

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
