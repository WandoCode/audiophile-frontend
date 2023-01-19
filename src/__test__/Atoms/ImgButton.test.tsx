import { describe, expect, test, vi } from 'vitest'
import { render, screen, within, fireEvent } from '@testing-library/react'
import { ImgButton } from '../../stories/Atoms'

describe('Given I use the ImgButton', () => {
  describe('When the "type" is "cart"', () => {
    test('Then it should display the button with the cart image inside.', () => {
      const mockedClickHandler = vi.fn()
      render(<ImgButton type="cart" onClickHandler={mockedClickHandler} />)

      const btn = screen.getByRole('button')

      const cartImg = within(btn).getByAltText('Cart')

      expect(cartImg).not.toBeNull()
    })

    test('Then it the component className should contain "img-btn--cart"', () => {
      const mockedClickHandler = vi.fn()
      render(<ImgButton type="cart" onClickHandler={mockedClickHandler} />)

      const btn = screen.getByRole('button')

      expect(Array.from(btn.classList)).toContain('img-btn--cart')
    })
  })

  describe('When the "type" is "burger"', () => {
    test('Then it should display the button with the burger menu image inside.', () => {
      const mockedClickHandler = vi.fn()
      render(<ImgButton type="burger" onClickHandler={mockedClickHandler} />)

      const btn = screen.getByRole('button')

      const cartImg = within(btn).getByAltText('Burger Menu')

      expect(cartImg).not.toBeNull()
    })

    test('Then it the component className should contain "img-btn--burger"', () => {
      const mockedClickHandler = vi.fn()
      render(<ImgButton type="burger" onClickHandler={mockedClickHandler} />)

      const btn = screen.getByRole('button')

      expect(Array.from(btn.classList)).toContain('img-btn--burger')
    })
  })

  describe('When the "type" is "close"', () => {
    test('Then it should display the button with the cross image inside.', () => {
      const mockedClickHandler = vi.fn()
      render(<ImgButton type="close" onClickHandler={mockedClickHandler} />)

      const btn = screen.getByRole('button')

      const cartImg = within(btn).getByAltText('Close Menu Icon')

      expect(cartImg).not.toBeNull()
    })

    test('Then it the component className should contain "img-btn--close"', () => {
      const mockedClickHandler = vi.fn()
      render(<ImgButton type="close" onClickHandler={mockedClickHandler} />)

      const btn = screen.getByRole('button')

      expect(Array.from(btn.classList)).toContain('img-btn--close')
    })
  })

  describe('When the user click on the button', () => {
    test('Then it should trigger the "onClickHanlder" prop', () => {
      const mockedClickHandler = vi.fn()
      render(<ImgButton type="cart" onClickHandler={mockedClickHandler} />)

      const btn = screen.getByRole('button')
      fireEvent.click(btn)

      expect(mockedClickHandler).toHaveBeenCalled()
    })
  })

  describe('When the "className" is used', () => {
    test('Then it should appear in the component className', () => {
      const className = 'test-class'
      const mockedClickHandler = vi.fn()
      render(
        <ImgButton
          type="close"
          onClickHandler={mockedClickHandler}
          className={className}
        />
      )

      const btn = screen.getByRole('button')

      expect(Array.from(btn.classList)).toContain(className)
    })
  })

  describe('When "isOpen" is set to true', () => {
    test('Then the attribute "data-open" should be "true"', () => {
      const mockedClickHandler = vi.fn()
      render(
        <ImgButton
          type="close"
          onClickHandler={mockedClickHandler}
          isOpen={true}
        />
      )

      const btn = screen.getByRole('button')
      const dataOpenAttribute = btn.getAttribute('data-open')
      expect(dataOpenAttribute).toBe('true')
    })
  })

  describe('When "isOpen" is not set', () => {
    test('Then the attribute "data-open" should be "false"', () => {
      const mockedClickHandler = vi.fn()
      render(<ImgButton type="close" onClickHandler={mockedClickHandler} />)

      const btn = screen.getByRole('button')
      const dataOpenAttribute = btn.getAttribute('data-open')

      expect(dataOpenAttribute).toBe('false')
    })
  })
})
