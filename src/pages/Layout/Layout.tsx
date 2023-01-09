import { Outlet } from 'react-router-dom'

import { ScrollRestoration } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

function Layout() {
  return (
    <div className="layout">
      <ScrollRestoration />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export { Layout }
