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
// TODO: passer à un Link pour NextJS
export { InnerLink }
