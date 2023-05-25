import { LayoutContext } from '../../features/Layout/LayoutProvider'
import { Footer } from './Footer'
import { Header } from './Header'
import { PropsWithChildren, useContext, useEffect } from 'react'
import Error from '../../pages/error'
import axios from 'axios'
import { QueryClient, dehydrate, useQuery } from 'react-query'
import hookStore from '../../store/hookStore'
import dataLayout from '../../hooks/helpers/dataLayout'

const getLayoutDatas = async () => {
  const rep = await hookStore().fetchLayout()

  const raw = rep.data.data.attributes

  const cleanDatas = dataLayout(raw).getCleanDatas()

  return cleanDatas
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('layout', getLayoutDatas)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

function Layout({ children }: PropsWithChildren) {
  const { setLayout } = useContext(LayoutContext)

  const { data, isLoading, isError, error } = useQuery('layout', getLayoutDatas)

  useEffect(() => {
    setLayout(data)
  }, [data])

  if (isError) {
    const message = axios.isAxiosError(error) ? error.message : 'Unknown error'
    return <Error message={message} />
  } else {
    return (
      <div className="layout">
        <Header loading={isLoading} />
        <main className="main">{children}</main>
        <Footer />
      </div>
    )
  }
}

export { Layout }
