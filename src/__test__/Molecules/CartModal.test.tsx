import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CartModal } from '../../stories/Molecules'
import MockContextProvider from '../../__mock__/MockContextProvider'

describe('Given I use the "CartModal" component', () => {
  let handleCheckout = vi.fn()
  let closeModal = vi.fn()

  describe('When the cart have 2 items', () => {
    beforeEach(() => {
      render(
        <CartModal closeModal={closeModal} handleCheckout={handleCheckout} />,
        { wrapper: MockContextProvider }
      )
    })

    test('It should display a title containing the number (2) of item currently in the cart', () => {
      const title = screen.queryByText('Cart (2)')

      expect(title).not.toBeNull()
    })

    test('It should display the total price (12599) of the items in the cart', () => {
      const totalPrice = screen.queryByText('$ 12,599')

      expect(totalPrice).not.toBeNull()
    })

    describe('When I click on the "Remove all" button', () => {
      test('It should remove all items inside the modal', async () => {
        const removeAllBtn = screen.getByRole('button', { name: /Remove all/i })

        await fireEvent.click(removeAllBtn)

        const title = await screen.queryByText('Cart (0)')

        expect(title).not.toBeNull()
      })
    })
  })

  describe('When there is no item in the cart', () => {
    beforeEach(() => {
      render(
        <MockContextProvider mockedCart={[]}>
          <CartModal closeModal={closeModal} handleCheckout={handleCheckout} />
        </MockContextProvider>
      )
    })

    test('It should disable the "checkout" button', async () => {
      const checkoutBtn: HTMLButtonElement = screen.getByRole('button', {
        name: /checkout/i,
      })

      expect(checkoutBtn.disabled).toBeTruthy()
    })
  })
})
