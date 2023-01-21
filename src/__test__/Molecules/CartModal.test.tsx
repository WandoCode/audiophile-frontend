import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CartModal } from '../../stories/Molecules'
import ContextProvider from '../../components/ContextProvider'
import MockContextProvider from '../../__mock__/MockContextProvider'

describe('Given I use the "CartModal" component', () => {
  let handleCheckout = vi.fn()
  let closeModal = vi.fn()

  beforeEach(() => {
    render(
      <CartModal closeModal={closeModal} handleCheckout={handleCheckout} />,
      { wrapper: ContextProvider }
    )
  })

  test('It should display a title', () => {
    const title = screen.queryByText('Cart (0)')

    expect(title).not.toBeNull()
  })
})

// TODO: add test with a mocked context?
