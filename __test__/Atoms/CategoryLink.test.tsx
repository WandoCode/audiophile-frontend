import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CategoryLink } from '../../stories/Atoms'

const useMokedRouter = vi.fn()

vi.mock('next/router', () => ({
  ...(vi.importActual('next/router') as any),
  useRouter: () => useMokedRouter,
}))

describe('Given I use the CategoryLink component', () => {
  const imagePath = 'testURL'
  const category = 'headphones'

  beforeEach(() => {
    render(<CategoryLink image={`/${imagePath}`} category={category} />)
  })

  test('Then the "Path" prop should be used as src of the Path displayed', () => {
    const img: HTMLImageElement = screen.getByAltText(category)
    const imgSrc = img.src

    expect(imgSrc).toEqual(expect.stringContaining(imagePath))
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
