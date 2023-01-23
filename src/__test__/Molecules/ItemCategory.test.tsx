import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ItemCategory } from '../../stories/Molecules'
import { itemA, itemB } from '../../__mock__/data/Item'

const mockedUsedNavigate = vi.fn()

vi.mock('react-router-dom', () => ({
  ...(vi.importActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('Given I use the "ItemCategory" component', () => {
  describe('When the object is new', () => {
    beforeEach(() => {
      render(
        <ItemCategory
          className="classname-test"
          data={itemA}
          lazyLoad={false}
        />
      )
    })

    test('It should display a "New product" text', () => {
      const newProductElement = screen.queryByText('new product')

      expect(newProductElement).not.toBeNull()
    })
  })

  describe('When the object is not new', () => {
    beforeEach(() => {
      render(
        <ItemCategory
          className="classname-test"
          data={itemB}
          lazyLoad={false}
        />
      )
    })

    test('It should ot display a "New product" text', () => {
      const newProductElement = screen.queryByText('new product')

      expect(newProductElement).toBeNull()
    })
  })

  describe('When item is new or not', () => {
    beforeEach(() => {
      render(
        <ItemCategory
          className="classname-test"
          data={itemB}
          lazyLoad={false}
        />
      )
    })

    test('It should display a button to redirect to the product page (via slug)', () => {
      const redirectBtn = screen.queryByRole('button', { name: 'See product' })

      expect(redirectBtn).not.toBeNull()
    })

    test('When I click the redirect button', () => {
      test('It should redirect to the product page (via slug)', () => {
        const redirectBtn = screen.getByRole('button', { name: 'See product' })

        fireEvent.click(redirectBtn)

        expect(mockedUsedNavigate).toHaveBeenCalledOnce()
        expect(mockedUsedNavigate.mock.calls[0][0]).toBe(`/item/${itemB.slug}`)
      })
    })
  })
})
