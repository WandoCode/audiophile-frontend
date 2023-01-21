import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { NumberInput } from '../../stories/Atoms'

describe('Given I use the "NumberInput" component', () => {
  let name = 'test-name'
  let id = 'test-id'
  let currValue = 5
  let mockedOnAdd = vi.fn()
  let mockedOnRemove = vi.fn()

  describe('When I use default props', () => {
    beforeEach(() => {
      render(
        <NumberInput
          name={name}
          id={id}
          currValue={currValue}
          onAdd={mockedOnAdd}
          onRemove={mockedOnRemove}
        />
      )
    })

    test('It should  display a readonly input field', () => {
      const input: HTMLInputElement | null = screen.queryByLabelText('Quantity')

      expect(input).not.toBeNull()
      expect(input?.tagName).toBe('INPUT')
      expect(input?.readOnly).toBeTruthy()
    })

    test('It should  display a button to increase number by 1', () => {
      const btn: HTMLInputElement | null =
        screen.queryByLabelText('Decrease by 1')

      expect(btn).not.toBeNull()
      expect(btn?.tagName).toBe('BUTTON')
    })

    test('It should  display a button to decrease number by 1', () => {
      const btn: HTMLInputElement | null =
        screen.queryByLabelText('Increase by 1')

      expect(btn).not.toBeNull()
      expect(btn?.tagName).toBe('BUTTON')
    })

    test('It should  display an input field with the given value', () => {
      const input: HTMLInputElement = screen.getByLabelText('Quantity')

      expect(input.value).toBe(currValue.toString())
    })
    describe('When I click on the "+" button', () => {
      test('It should call the "onAdd" prop function', () => {
        const btn: HTMLInputElement = screen.getByLabelText('Increase by 1')

        fireEvent.click(btn)
        expect(mockedOnAdd).toHaveBeenCalledOnce()
      })
    })

    describe('When I click on the "-" button', () => {
      test('It should call the "onRemove" prop function', () => {
        const btn: HTMLInputElement = screen.getByLabelText('Decrease by 1')

        fireEvent.click(btn)
        expect(mockedOnRemove).toHaveBeenCalledOnce()
      })
    })
  })
})
