import Link from 'next/link'
import { Layout } from './Layout'

function NotFound() {
  return (
    <Layout>
      <div className="not-found container ">
        <h1 className="h1 text-black">Error</h1>
        <p>
          The page you're looking for doesn't exist, go back to{' '}
          <Link href="/">hompage</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound
