import Head from 'next/head'
import Link from 'next/link'
import { Layout } from '../components/Layout'

function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta
          name="description"
          content="You're lost. Please go back to homepage"
        />
      </Head>
      <Layout>
        <div className="not-found container ">
          <h1 className="h1 text-black">Page not found</h1>
          <p>
            The page you're looking for doesn't exist. Go back to{' '}
            <Link href="/">homepage</Link>
          </p>
        </div>
      </Layout>
    </>
  )
}

export default NotFound
