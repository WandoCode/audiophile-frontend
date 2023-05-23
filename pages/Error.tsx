interface Props {
  message: string
}

function Error({ message }: Props) {
  return (
    <div className="not-found container ">
      <h1 className="h1 text-black">An error occurred</h1>
      <p>{message}</p>
      <p>Please try again later.</p>
    </div>
  )
}

export { Error }
