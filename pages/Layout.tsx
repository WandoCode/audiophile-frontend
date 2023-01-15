import { ReactNode } from 'react-markdown/lib/ast-to-react'
import { Footer } from '../components/Layout/Footer'
import { Header } from '../components/Layout/Header'
import { DataLayout } from '../hooks/helpers/dataLayout'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { Layout }
