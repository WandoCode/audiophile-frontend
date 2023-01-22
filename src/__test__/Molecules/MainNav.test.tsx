import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import MockContextProvider from '../../__mock__/MockContextProvider'
import { MainNav } from '../../stories/Molecules'
import { layoutDatas } from '../../__mock__/data/Layout'

const mockedUsedNavigate = vi.fn()
const mockedUseLocation = vi.fn()
const MockedNavLink = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual: any = vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockedUsedNavigate,
    useLocation: () => mockedUseLocation,
    NavLink: () => MockedNavLink,
  }
})

describe('Given I use the "MainNav" component', () => {
  let mockOnToogleMenu = vi.fn()

  describe('When "openMenu" is "true"', () => {
    beforeEach(() => {
      render(<MainNav menuIsOpen={true} onToogleMenu={mockOnToogleMenu} />, {
        wrapper: MockContextProvider,
      })
    })

    test('The nav tag should have a class that show that the menu is for mobile', () => {
      const nav = screen.getByRole('navigation')

      expect(Array.from(nav.classList)).toContain('main-nav--mobile')
    })
  })

  describe('When "openMenu" is "false"', () => {
    beforeEach(() => {
      render(<MainNav menuIsOpen={false} onToogleMenu={mockOnToogleMenu} />, {
        wrapper: MockContextProvider,
      })
    })

    test('The nav tag should have a class that show that the menu is for desktop', () => {
      const nav = screen.getByRole('navigation')

      expect(Array.from(nav.classList)).toContain('show-on-desktop')
    })
  })
})
