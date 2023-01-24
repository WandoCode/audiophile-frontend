import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CartProvider from './components/Cart/CartProvider'
import LayoutProvider from './components/Layout/LayoutProvider'
import './stylesheets/main.scss'
import ToastProvider from './components/Toast/ToastProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LayoutProvider>
      <CartProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </CartProvider>
    </LayoutProvider>
  </React.StrictMode>
)
