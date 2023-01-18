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
// TODO:react: Changer btn en link quand nécessaire.

// TODO: put exported types in a types/index.d.ts file
