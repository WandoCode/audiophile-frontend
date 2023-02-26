import { PropsWithChildren, useContext, useEffect } from 'react'
import { CartContext } from '../Cart/CartProvider'
import { useNavigate } from 'react-router-dom'

function NoAccessWithCartEmpty({ children }: PropsWithChildren) {
  const navigate = useNavigate()

  const { cart, cartIsUpToDate } = useContext(CartContext)

  useEffect(() => {
    if (cartIsUpToDate && cart.length === 0) navigate('/')
  }, [cartIsUpToDate])

  return <>{children}</>
}

export default NoAccessWithCartEmpty
