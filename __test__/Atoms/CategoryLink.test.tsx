import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CategoryLink } from '../../stories/Atoms'

const mockedUsedNavigate = vi.fn()

vi.mock('react-router-dom', () => ({
  ...(vi.importActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}))

describe('Given I use the CategoryLink component', () => {
  const image = 'www.testurl.com'
  const category = 'headphones'

  beforeEach(() => {
    render(<CategoryLink image={image} category={category} />)
  })

  test('Then the "image" prop should be used as src of the image didplayed', () => {
    const img: HTMLImageElement = screen.getByAltText(category)
    const imgSrc = img.src

    expect(imgSrc).toBe('http://localhost:3000/' + image)
  })

  describe('When user hover the component', () => {
    test('Then it should add a "animate-on-hover" className', () => {
      const btn = screen.getByTestId('category-link-test-id')
      fireEvent.mouseOver(btn)

      expect(Array.from(btn.classList)).toContain('animate-on-hover')
    })
  })

  describe('When user do not hover the component', () => {
    test('Then it should not have a "animate-on-hover" className', () => {
      const btn = screen.getByTestId('category-link-test-id')

      expect(Array.from(btn.classList)).not.toContain('animate-on-hover')
    })
  })
})
