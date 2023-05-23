import { PropsWithChildren, useContext, useEffect } from 'react'
import { CartContext } from '../../features/Cart/CartProvider'
import { useRouter } from 'next/router'

function NoAccessWithCartEmpty({ children }: PropsWithChildren) {
  const router = useRouter()
  const { cart, cartIsUpToDate } = useContext(CartContext)

  useEffect(() => {
    if (cartIsUpToDate && cart.length === 0) router.push('/')
  }, [cartIsUpToDate])

  return <>{children}</>
}

export default NoAccessWithCartEmpty
