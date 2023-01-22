import { createContext, useState } from 'react'
import { Context } from '../components/ContextProvider'
import { CartItem } from '../types'
import { cartItemA, cartItemB } from './data/CartItem'

interface Props {
  children: React.ReactNode
  mockedCart?: CartItem[]
  mockedCartTotal?: number
}

const initialCart: CartItem[] = [cartItemA, cartItemB]

function MockContextProvider({ children, mockedCart, mockedCartTotal }: Props) {
  const [cart, setCart] = useState<CartItem[]>(mockedCart || initialCart)

  const SHIPPING = 50

  const getCartTotal = () => {
    return mockedCartTotal || 12599
  }

  const emptyCart = () => {
    setCart([])
  }

  return (
    <Context.Provider
      value={{
        SHIPPING,
        // layout,
        // setLayout,
        // homepage,
        // setHomepage,
        // loading,
        // setLoading,
        cart,
        // addItem,
        // removeItem,
        emptyCart,
        getCartTotal,
        // cleanCart,
        // getCartGrandTotal,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default MockContextProvider
