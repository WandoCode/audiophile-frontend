import { useRouter } from 'next/router'
import Link from 'next/link'

interface Props {
  path: string
  text?: string
}

function LinkNav({ path, text }: Props) {
  const { pathname } = useRouter()

  const linkClass = () => {
    if (text)
      return pathname.includes(text.toLowerCase())
        ? 'nav-link nav-link--active'
        : 'nav-link'
  }

  return (
    <Link href={path} className={linkClass()}>
      {text?.toUpperCase()}
    </Link>
  )
}

export { LinkNav }
