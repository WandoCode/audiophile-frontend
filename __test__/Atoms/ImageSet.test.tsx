import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ImageSet } from '../../stories/Atoms'

describe('Given I use the ImageSet component', () => {
  const data = {
    tablet: 'url.tablet',
    desktop: 'url.desktop',
    mobile: 'url.mobile',
  }

  const className = 'test-class'

  describe('When I only give the mandatory props', () => {
    let img: HTMLImageElement

    beforeEach(() => {
      render(<ImageSet data={data} className={className} />)
      img = screen.getByRole('img')
    })

    test('It sould render an image with an empty alt text', () => {
      expect(img.getAttribute('alt')).toBe(' ')
    })

    test('It sould render an image with the given classname', () => {
      expect(img.className).toBe(className + '__img')
    })

    test('It sould render an image with "eager" as loading attribute', () => {
      expect(img.getAttribute('loading')).toBe('eager')
    })
  })

  describe('When I give the "altTxt" prop', () => {
    test('It sould render an image with the given alt text', () => {
      const altTxt = 'alt text test'
      let img: HTMLImageElement

      render(<ImageSet data={data} className={className} altTxt={altTxt} />)

      img = screen.getByRole('img')

      expect(img.getAttribute('alt')).toBe(altTxt)
    })

    describe('When I set the "lazy" prop to true', () => {
      test('It sould render an image with "lazy" as loading attribute', () => {
        let img: HTMLImageElement

        render(<ImageSet data={data} className={className} lazy={true} />)

        img = screen.getByRole('img')

        expect(img.getAttribute('loading')).toBe('lazy')
      })
    })
  })

  // TODO: Test responsive. "window.innerWidth = <number>" with "window.dispatchEvent(new Event('resize'));" don't seems to work. Other solution?
})
