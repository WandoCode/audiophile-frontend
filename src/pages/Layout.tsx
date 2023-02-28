import { LayoutContext } from '../features/Layout/LayoutProvider'
import { useGetLayout } from '../hooks/useGetLayout'
import { ScrollRestoration } from 'react-router-dom'
import { Footer } from '../components/Layout/Footer'
import { Header } from '../components/Layout/Header'
import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Error } from './Error'
import axios from 'axios'

function Layout() {
  const { setLayout } = useContext(LayoutContext)

  const { data, isLoading, isError, error } = useGetLayout()

  useEffect(() => {
    setLayout(data)
  }, [data])

  if (isError) {
    const message = axios.isAxiosError(error) ? error.message : 'Unknown error'
    return <Error message={message} />
  } else {
    return (
      <div className="layout">
        <ScrollRestoration />
        <Header loading={isLoading} />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    )
  }
}

export { Layout }
