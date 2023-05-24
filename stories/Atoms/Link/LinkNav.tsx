import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  path: string
  text?: string
}

function LinkNav({ path, text }: Props) {
  const router = useRouter()

  const linkClass = () => {
    if (router.asPath === path) return 'nav-link nav-link--active'
    else return 'nav-link'
  }

  return (
    <Link href={path} className={linkClass()}>
      {text?.toUpperCase()}
    </Link>
  )
}

export { LinkNav }
