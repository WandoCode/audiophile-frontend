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

interface CartItem {
  slug: string
  name: string
  url: string
  price: number
  quantity: number
}

export interface RemoveItem {
  slug: string
  removeAll?: boolean
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

  const removeItem = ({ slug, removeAll = false }: RemoveItem) => {
    const currItems = [...cart]
    let rep

    if (removeAll) {
      rep = currItems.filter((item) => item.slug !== slug)
      setCart(rep)
    }

    if (!removeAll) {
      currItems.map((item) => {
        if (item.slug === slug && item.quantity > 0) item.quantity -= 1

        return item
      })

      rep = currItems.filter(
        (item) => item.slug === slug && item.quantity !== 0
      )
      setCart(rep)
    }
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
        addItem,
        removeItem,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
