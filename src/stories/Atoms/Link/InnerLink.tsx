import { Link } from 'react-router-dom'
interface Props {
  path: string
  text: string
}

function InnerLink({ path, text }: Props) {
  return (
    <Link className="inner-link" to={path}>
      {text}
    </Link>
  )
}

export { InnerLink }
