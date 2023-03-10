import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CartProvider from './features/Cart/CartProvider'
import LayoutProvider from './features/Layout/LayoutProvider'
import './stylesheets/main.scss'
import ToastProvider from './features/Toast/ToastProvider'
import LoaderProvider from './features/Loader/LoaderProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LayoutProvider>
      <CartProvider>
        <LoaderProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </LoaderProvider>
      </CartProvider>
    </LayoutProvider>
  </React.StrictMode>
)
