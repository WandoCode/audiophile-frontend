import { Link } from 'react-router-dom'
interface Props {
  clickHandler: () => void
  text: string
}

function InnerLink({ clickHandler, text }: Props) {
  return (
    <button className="inner-link" onClick={clickHandler}>
      {text}
    </button>
  )
}

export { InnerLink }
