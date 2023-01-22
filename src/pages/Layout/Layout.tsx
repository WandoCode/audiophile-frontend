import { Outlet } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import LoadStateWrapper from '../../components/LoadStateWrapper'
import { Context } from '../../components/ContextProvider'
import { useContext, useEffect } from 'react'
import { useGetLayout } from '../../hooks/useGetLayout'
import { DataLayout } from '../../types/index'

function Layout() {
  const { setLayout } = useContext(Context) as {
    setIsLoading: (isLoading: boolean) => void
    setLayout: React.Dispatch<React.SetStateAction<DataLayout | undefined>>
    loading: boolean
  }

  const { data, isLoading } = useGetLayout()

  useEffect(() => {
    setLayout(data)
  }, [data])

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

export { Layout }
