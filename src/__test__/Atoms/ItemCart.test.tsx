import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ItemCart } from '../../stories/Atoms'

describe('Given I use the ItemCart component', () => {
  const name = 'test title'
  const quantity = 2
  const slug = 'azerty'
  const url = 'www.testurl.com'
  const price = 1200

  beforeEach(() => {
    render(
      <ItemCart
        name={name}
        slug={slug}
        quantity={quantity}
        url={url}
        price={price}
      />
    )
  })

  test('then it should display the name prop as title', () => {
    const title = screen.queryByText(name)

    expect(title).not.toBeNull()
  })

  test('then it should display an image with the "url" prop as source', () => {
    const image: HTMLImageElement | null = screen.queryByRole('img')

    const imgSrc = image?.src

    expect(imgSrc).toBe('http://localhost:3000/' + url)
  })

  test('then it should display the price formated', () => {
    const priceElement = screen.queryByText('$ 1,200')

    expect(priceElement).not.toBeNull()
  })
})
