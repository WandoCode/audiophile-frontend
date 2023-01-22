import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ItemShortCard } from '../../stories/Molecules'
import { linkedItemA } from '../../__mock__/data/LinkedItem'

const mockedUsedNavigate = vi.fn()

vi.mock('react-router-dom', () => ({
  ...(vi.importActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('Given I use the "ItemCategory" component', () => {
  beforeEach(() => {
    render(<ItemShortCard data={linkedItemA} />)
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
      expect(mockedUsedNavigate.mock.calls[0][0]).toBe(
        `/item/${linkedItemA.slug}`
      )
    })
  })
})
