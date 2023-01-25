import { CartContext } from '../components/Cart/CartProvider'
import { cartItemA, cartItemB } from './data/CartItem'
import { CartItem } from '../types'
import { useState } from 'react'

interface Props {
  children: React.ReactNode
  mockedCart?: CartItem[]
  mockedCartTotal?: number
}

const initialCart: CartItem[] = [cartItemA, cartItemB]

function MockCartProvider({ children, mockedCart, mockedCartTotal }: Props) {
  const [cart, setCart] = useState<CartItem[]>(mockedCart || initialCart)

  const SHIPPING = 50
  const getCartTotal = () => {
    return mockedCartTotal || 12599
  }

  const emptyCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        SHIPPING,
        cart,
        addItem: () => {},
        removeItem: () => {},
        emptyCart,
        getCartTotal,
        getCartGrandTotal: () => 50,
        cleanCart: () => {},
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default MockCartProvider
