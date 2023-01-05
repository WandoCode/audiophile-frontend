import { createContext, useState, useEffect } from 'react'
import { DataHomepage } from './hooks/useGetHomepage'
import { DataLayout } from './hooks/useGetLayout'

interface Props {
  children: React.ReactNode
}

export interface AddItem {
  slug: string
  name: string
  url: string
  price: number
  addedQty: number
}

export interface CartItem {
  slug: string
  name: string
  url: string
  price: number
  quantity: number
}

export interface RemoveItem {
  slug: string
}

export const Context = createContext({})

function ContextProvider({ children }: Props) {
  const [layout, setLayout] = useState<DataLayout>()
  const [homepage, setHomepage] = useState<DataHomepage>()
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState<CartItem[]>([])

  const addItem = ({ slug, name, url, price, addedQty }: AddItem) => {
    const currItems = [...cart]
    const itemPosInCart = currItems.findIndex((item) => item.slug === slug)

    if (itemPosInCart === -1)
      currItems.push({ slug, name, url, price, quantity: addedQty })
    else {
      currItems[itemPosInCart].quantity += addedQty
    }
    setCart(currItems)
  }

  const removeItem = ({ slug }: RemoveItem) => {
    const currItems = [...cart]

    const rep = currItems.map((item) => {
      if (item.slug === slug && item.quantity > 0) item.quantity -= 1

      return item
    })

    setCart(rep)
  }

  const cleanCart = () => {
    const currItems = [...cart]

    const cleanedCart = currItems.filter((item) => item.quantity !== 0)

    setCart(cleanedCart)
  }

  const emptyCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((currValue, item) => {
      return currValue + item.quantity * item.price
    }, 0)
  }

  return (
    <Context.Provider
      value={{
        layout,
        setLayout,
        homepage,
        setHomepage,
        loading,
        setLoading,
        cart,
        addItem,
        removeItem,
        emptyCart,
        getCartTotal,
        cleanCart,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
