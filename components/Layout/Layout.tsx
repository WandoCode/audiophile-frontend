import { ReactNode } from 'react-markdown/lib/ast-to-react'
import { Footer } from './Footer'
import { Header } from './Header'

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
