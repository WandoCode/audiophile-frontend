import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ItemSummary } from '../../stories/Atoms/CardElement/ItemSummary'

describe('Given I use the ItemSummary component', () => {
  const name = 'test title'
  const quantity = 2
  const url = 'www.testurl.com'
  const price = 1200

  beforeEach(() => {
    render(
      <ItemSummary name={name} quantity={quantity} url={url} price={price} />
    )
  })

  test('Then it should display the "name" prop', () => {
    const paragraph = screen.queryByText(name)
    expect(paragraph).not.toBeNull()
  })

  test('Then it should display the "price" prop formatted as a price', () => {
    const price = screen.queryByText('$ 1,200')
    expect(price).not.toBeNull()
  })

  test('Then it should display an image with "url" prop as the source', () => {
    const img: HTMLImageElement | null = screen.queryByRole('img')
    const imgSrc = img?.src
    expect(imgSrc).toBe('http://localhost:3000/' + url)
  })
})
