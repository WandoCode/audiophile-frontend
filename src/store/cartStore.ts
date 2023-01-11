import { CartItem } from '../components/ContextProvider'

function cartStore() {
  const save = (cart: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const load = () => {
    return localStorage.getItem('cart')
  }

  const empty = () => {
    localStorage.removeItem('cart')
  }

  return {
    save,
    load,
    empty,
  }
}

export default cartStore
