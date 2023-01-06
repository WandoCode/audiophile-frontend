import { Outlet } from 'react-router-dom'

import { ScrollRestoration } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

// TODO: Pertinent de garder le contexte maintenant qu'il ne sert qu'au Layout? Juste utiliser le useGetLayout dans Layout suffit normalement => Penser à enlever si pas nécessaire pour le shopping Cart...

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
//TODO: Faire en sorte que le btn 'go back' renvoi vers la dernière page visitée
