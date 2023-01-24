import LoadStateWrapper from '../components/LoadStateWrapper'
import { Context } from '../components/ContextProvider'
import { useGetLayout } from '../hooks/useGetLayout'
import { ScrollRestoration } from 'react-router-dom'
import { Footer } from '../components/Layout/Footer'
import { Header } from '../components/Layout/Header'
import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ContextType } from '../types'
import { Error } from './Error'
import axios from 'axios'

function Layout() {
  const { setLayout } = useContext(Context) as ContextType

  const { data, isLoading, isError, error } = useGetLayout()

  useEffect(() => {
    setLayout(data)
  }, [data])

  if (isError) {
    const message = axios.isAxiosError(error) ? error.message : 'Uknown error'
    return <Error message={message} />
  } else {
    return (
      <div className="layout">
        <ScrollRestoration />
        <LoadStateWrapper loading={isLoading}>
          <Header loading={isLoading} />
          <main className="main">
            <Outlet />
          </main>
          <Footer />
        </LoadStateWrapper>
      </div>
    )
  }
}

export { Layout }
