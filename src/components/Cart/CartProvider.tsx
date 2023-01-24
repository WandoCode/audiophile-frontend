import { AddItem, CartItem, CartType, RemoveItem } from '../../types'
import { createContext, useState, useEffect } from 'react'
import cartStore from '../../store/cartStore'

interface Props {
  children: React.ReactNode
}

const defaultValue: CartType = {
  SHIPPING: 50,
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  emptyCart: () => {},
  getCartTotal: () => 0,
  cleanCart: () => {},
  getCartGrandTotal: () => 50,
}

export const CartContext = createContext(defaultValue)

function CartProvider({ children }: Props) {
  const cartStoreManager = cartStore()

  const SHIPPING = 50
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const stringCart = cartStoreManager.load()
    if (stringCart) setCart(JSON.parse(stringCart))
  }, [])

  useEffect(() => {
    if (cart.length > 0) cartStoreManager.save(cart)
  }, [cart])

  const addItem = ({ slug, name, url, price, addedQty }: AddItem) => {
    const currItems = [...cart]
    const itemPosInCart = currItems.findIndex((item) => item.slug === slug)

    if (itemPosInCart === -1)
      currItems.push({ slug, name, url, price, quantity: addedQty })
    else currItems[itemPosInCart].quantity += addedQty

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

    if (cleanCart.length === 0) cartStoreManager.empty()
  }

  const emptyCart = () => {
    setCart([])
    cartStoreManager.empty()
  }

  const getCartTotal = () => {
    return cart.reduce((currValue, item) => {
      return currValue + item.quantity * item.price
    }, 0)
  }

  const getCartGrandTotal = () => {
    return cart.length !== 0 ? getCartTotal() + SHIPPING : 0
  }

  return (
    <CartContext.Provider
      value={{
        SHIPPING,
        cart,
        addItem,
        removeItem,
        emptyCart,
        getCartTotal,
        cleanCart,
        getCartGrandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
