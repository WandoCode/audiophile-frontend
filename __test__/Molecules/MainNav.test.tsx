import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MainNav } from '../../stories/Molecules'

describe('Given I use the "MainNav" component', () => {
  let mockOnToogleMenu = vi.fn()

  describe('When "openMenu" is "true"', () => {
    beforeEach(() => {
      render(<MainNav menuIsOpen={true} onToogleMenu={mockOnToogleMenu} />)
    })

    test('The nav tag should have a class that show that the menu is for mobile', () => {
      const nav = screen.getByRole('navigation')

      expect(Array.from(nav.classList)).toContain('main-nav--mobile')
    })
  })

  describe('When "openMenu" is "false"', () => {
    beforeEach(() => {
      render(<MainNav menuIsOpen={false} onToogleMenu={mockOnToogleMenu} />)
    })

    test('The nav tag should have a class that show that the menu is for desktop', () => {
      const nav = screen.getByRole('navigation')

      expect(Array.from(nav.classList)).toContain('show-on-desktop')
    })
  })
})
