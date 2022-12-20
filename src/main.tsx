import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ContextProvider from './ContextProvider'
import './stylesheets/main.scss'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
)
