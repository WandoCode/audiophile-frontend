import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '../../stories/Atoms'

let label = 'label-test'
let name = 'name test'
let id = 'test-it'
let currValue = 'test'
let mockedOnChangeHandler = vi.fn()
let error = false
let errorText = 'test error'
describe('Given I use the "Input" component', () => {
  describe('When I use default props', () => {
    beforeEach(() => {
      render(
        <Input
          label={label}
          type="text"
          name={name}
          id={id}
          currValue={currValue}
          onChangeHandler={mockedOnChangeHandler}
          error={error}
          errorText={errorText}
        />
      )
    })

    test('It should display the "label" prop as the label text', () => {
      const labelEl = screen.getByText(label)

      expect(labelEl.tagName).toBe('LABEL')
    })

    test('It should display a label pointing to an input tag', () => {
      const labelledEl: HTMLInputElement = screen.getByLabelText(label) // Input element
      expect(labelledEl.tagName).toBe('INPUT')
    })

    test('It should use the "name" prop as name attribute for the input element', () => {
      const labelledEl: HTMLInputElement = screen.getByLabelText(label) // Input element
      expect(labelledEl.getAttribute('name')).toBe(name)
    })

    test('It should use the "currValue" prop as value attribute for the input element', () => {
      const labelledEl: HTMLInputElement = screen.getByLabelText(label) // Input element
      expect(labelledEl.value).toBe(currValue)
    })
    test('It should not display "errorText"', () => {
      const errorElement = screen.queryByText(errorText)

      expect(errorElement).toBeNull()
    })
  })

  describe('When error is set to true', () => {
    beforeEach(() => {
      render(
        <Input
          label={label}
          type="text"
          name={name}
          id={id}
          currValue={currValue}
          onChangeHandler={mockedOnChangeHandler}
          error={true}
          errorText={errorText}
        />
      )
    })
    test('It should display the "errorText"', () => {
      const errorElement = screen.queryByText(errorText)

      expect(errorElement).not.toBeNull()
    })

    test('It should add "input--error" as class to the input Element', () => {
      const inputElement = screen.getByLabelText(label)

      expect(Array.from(inputElement.classList)).toContain('input--error')
    })

    test('It should add "input__label--error" as class to the label Element', () => {
      const labelElement = screen.getByText(label)

      expect(Array.from(labelElement.classList)).toContain(
        'input__label--error'
      )
    })
  })

  describe('When "type" is set to "text"', () => {
    test('The input type should be "text"', () => {
      render(
        <Input
          label={label}
          type="text"
          name={name}
          id={id}
          currValue={currValue}
          onChangeHandler={mockedOnChangeHandler}
          error={error}
          errorText={errorText}
        />
      )

      const inputElement = screen.getByLabelText(label)

      expect(inputElement.getAttribute('type')).toBe('text')
    })
  })
  describe('When "type" is set to "email"', () => {
    test('The input type should be "email"', () => {
      render(
        <Input
          label={label}
          type="email"
          name={name}
          id={id}
          currValue={currValue}
          onChangeHandler={mockedOnChangeHandler}
          error={error}
          errorText={errorText}
        />
      )

      const inputElement = screen.getByLabelText(label)

      expect(inputElement.getAttribute('type')).toBe('email')
    })
  })
  describe('When "type" is set to "tel"', () => {
    test('The input type should be "tel"', () => {
      render(
        <Input
          label={label}
          type="tel"
          name={name}
          id={id}
          currValue={currValue}
          onChangeHandler={mockedOnChangeHandler}
          error={error}
          errorText={errorText}
        />
      )

      const inputElement = screen.getByLabelText(label)

      expect(inputElement.getAttribute('type')).toBe('tel')
    })
  })
  describe('When "type" is set to "number"', () => {
    test('The input type should be "number"', () => {
      render(
        <Input
          label={label}
          type="number"
          name={name}
          id={id}
          currValue={currValue}
          onChangeHandler={mockedOnChangeHandler}
          error={error}
          errorText={errorText}
        />
      )

      const inputElement = screen.getByLabelText(label)

      expect(inputElement.getAttribute('type')).toBe('number')
    })
  })

  describe('When the user add text into the input', () => {
    test('It should call the "onChangeHandler" prop function', () => {
      render(
        <Input
          label={label}
          type="number"
          name={name}
          id={id}
          currValue={currValue}
          onChangeHandler={mockedOnChangeHandler}
          error={error}
          errorText={errorText}
        />
      )

      const inputElement = screen.getByLabelText(label)

      fireEvent.change(inputElement, { target: { value: 'A' } })

      expect(mockedOnChangeHandler).toHaveBeenCalled()
    })
  })
})
