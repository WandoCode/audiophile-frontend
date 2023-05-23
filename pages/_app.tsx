import { AppProps } from 'next/app'
import '../stylesheets/main.scss'
import Head from 'next/head'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import LayoutProvider from '../features/Layout/LayoutProvider'
import CartProvider from '../features/Cart/CartProvider'
import LoaderProvider from '../features/Loader/LoaderProvider'
import ToastProvider from '../features/Toast/ToastProvider'

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <LayoutProvider>
            <CartProvider>
              <LoaderProvider>
                <ToastProvider>
                  <Component {...pageProps} />
                </ToastProvider>
              </LoaderProvider>
            </CartProvider>
          </LayoutProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default App
