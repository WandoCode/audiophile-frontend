import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CartProvider from './components/Cart/CartProvider'
import LayoutProvider from './components/Layout/LayoutProvider'
import './stylesheets/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LayoutProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </LayoutProvider>
  </React.StrictMode>
)
