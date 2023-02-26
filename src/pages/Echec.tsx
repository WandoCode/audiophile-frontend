import { Link } from 'react-router-dom'

function Echec() {
  return (
    <div className="not-found container ">
      <h1 className="h1 text-black">Your payment has failed.</h1>
      <Link to="/checkout">Please try again.</Link>
    </div>
  )
}

export default Echec
