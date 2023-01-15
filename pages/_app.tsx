import '../stylesheets/main.scss'
import { AppProps } from 'next/app'
import ContextProvider from '../components/App/ContextProvider'
import { useState, useEffect } from 'react'
import { DataLayout } from '../hooks/helpers/dataLayout'
import { getLayout } from '../hooks/getLayout'
import LayoutContextSetter from '../components/App/LayoutContextSetter'

export default function App({ Component, pageProps }: AppProps) {
  const [datasLayout, setDatasLayout] = useState<DataLayout>()

  useEffect(() => {
    const fetchDatasLayout = async () => {
      console.log(1)

      const { datasLayout } = await getLayout()
      setDatasLayout(datasLayout)
    }

    fetchDatasLayout()
  }, [])

  return (
    <ContextProvider>
      <LayoutContextSetter datasLayout={datasLayout} />
      <Component {...pageProps} datasLayout={datasLayout} />
    </ContextProvider>
  )
}

// TODO: ajout le <LoadStateWrapper loading={loading}>???
