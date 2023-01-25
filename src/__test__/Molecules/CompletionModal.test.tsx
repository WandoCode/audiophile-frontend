import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import MockCartProvider from '../../__mock__/MockCartProvider'
import { CompletionModal } from '../../stories/Molecules'

const mockedUsedNavigate = vi.fn()

vi.mock('react-router-dom', () => ({
  ...(vi.importActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('Given I use the "CompletionModal" component', () => {
  describe('When the cart have 2 items', () => {
    beforeEach(() => {
      render(<CompletionModal />, { wrapper: MockCartProvider })
    })

    test('It should display one item from the cart', () => {
      const shownItems = screen.queryAllByRole('listitem')

      expect(shownItems.length).toBe(1)
    })

    describe('When there is 2 items in the cart', () => {
      test('It should show a "and 1 more item(s)" button', () => {
        const showMoreBtn = screen.queryByRole('button', {
          name: 'and 1 other item(s)',
        })
        expect(showMoreBtn).not.toBeNull()
      })

      describe('When I click on the button to see more item,', () => {
        test('It should display the 2 items in the cart', async () => {
          const showMoreBtn = screen.getByRole('button', {
            name: 'and 1 other item(s)',
          })
          fireEvent.click(showMoreBtn)

          const shownItems = screen.queryAllByRole('listitem')

          expect(shownItems.length).toBe(2)
        })

        test('It should display a "View less" button', () => {
          const showMoreBtn = screen.getByRole('button', {
            name: 'and 1 other item(s)',
          })

          fireEvent.click(showMoreBtn)

          const viewLessBtn = screen.queryByRole('button', {
            name: 'view less',
          })

          expect(viewLessBtn).not.toBeNull()
        })

        describe('When I click the "View less" button', () => {
          test('It should display only one item from the cart', () => {
            const showMoreBtn = screen.getByRole('button', {
              name: 'and 1 other item(s)',
            })

            fireEvent.click(showMoreBtn)

            const viewLessBtn = screen.getByRole('button', {
              name: 'view less',
            })

            fireEvent.click(viewLessBtn)

            const shownItems = screen.queryAllByRole('listitem')

            expect(shownItems.length).toBe(1)
          })
        })
      })
    })

    test('It should display the total price (12599) of the items in the cart more shipping (50): 12649', () => {
      const totalPrice = screen.queryByText('$ 12,649')

      expect(totalPrice).not.toBeNull()
    })
    describe("When I click the 'Back to home' button", () => {
      test('It should navigate to the "/" path', async () => {
        const backHomeBtn = screen.getByRole('button', { name: 'Back To Home' })

        fireEvent.click(backHomeBtn)

        expect(mockedUsedNavigate).toHaveBeenCalledOnce()
        expect(mockedUsedNavigate.mock.calls[0][0]).toBe('/')
      })
    })
  })
})
