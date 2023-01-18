import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ContextProvider from './components/ContextProvider'
import './stylesheets/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
)
// TODO: version react: vider le cart quand on revient on clique pour revenir sur la page principale
// TODO:react: Changer btn en link quand nécessaire.
// TODO: react: adapter la tailler des titre h2--large en ajoutant un breakpoint-down(small = 500px) pour dminuer la taille de la font
// TODO: put exported types in a types/index.d.ts file
