import '../stylesheets/main.scss'
import { AppProps } from 'next/app'
import { ContextProvider, LayoutContextSetter } from '../components/App'
import { useState, useEffect } from 'react'
import { DataLayout } from '../hooks/helpers/dataLayout'
import { getLayout } from '../hooks/getLayout'

export default function App({ Component, pageProps }: AppProps) {
  const [datasLayout, setDatasLayout] = useState<DataLayout>()

  useEffect(() => {
    const fetchDatasLayout = async () => {
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
