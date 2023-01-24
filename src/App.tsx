import { RouterProvider } from 'react-router-dom'
import router from './components/router'
import { QueryClientProvider, QueryClient } from 'react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  )
}

export default App
