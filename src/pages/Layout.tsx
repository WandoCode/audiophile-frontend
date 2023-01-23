import { Outlet } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'
import { Footer } from '../components/Layout/Footer'
import LoadStateWrapper from '../components/LoadStateWrapper'
import { Context } from '../components/ContextProvider'
import { useContext, useEffect } from 'react'
import { useGetLayout } from '../hooks/useGetLayout'
import { DataLayout } from '../types/index'
import axios from 'axios'
import { Error } from './Error'
import { Header } from '../components/Layout/Header'

function Layout() {
  const { setLayout } = useContext(Context) as {
    setIsLoading: (isLoading: boolean) => void
    setLayout: React.Dispatch<React.SetStateAction<DataLayout | undefined>>
    loading: boolean
  }

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
