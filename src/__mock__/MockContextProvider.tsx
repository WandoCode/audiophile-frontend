import { createContext } from 'react'

interface Props {
  children: React.ReactNode
}
export const MockedContext = createContext({})

function MockContextProvider({ children }: Props) {
  const SHIPPING = 50
  const cart = [
    {
      slug: 'one',
      name: 'Name One',
      url: 'url.One',
      price: 1023,
      quantity: 1,
    },
    {
      slug: 'two',
      name: 'Name Two',
      url: 'url.Two',
      price: 999,
      quantity: 5,
    },
  ]

  return (
    <MockedContext.Provider
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
        // emptyCart,
        // getCartTotal,
        // cleanCart,
        // getCartGrandTotal,
      }}
    >
      {children}
    </MockedContext.Provider>
  )
}

export default MockContextProvider
// TODO: trouver comment l'implémenter pour les test
