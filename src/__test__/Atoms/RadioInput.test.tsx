import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { RadioInput } from '../../stories/Atoms'

describe('Given I use the "RadioInput" component', () => {
  let name = 'test-name'
  let label = 'test-label'
  let currValue = 'test current value'
  let value = 'test value'
  let mockedOnChangeHandler = vi.fn()

  describe('When I use default props', () => {
    beforeEach(() => {
      render(
        <RadioInput
          label={label}
          name={name}
          value={value}
          currValue={currValue}
          onChangeHandler={mockedOnChangeHandler}
        />
      )
    })

    test('It should have a label pointing to an input:radio field', () => {
      const input: HTMLInputElement | null = screen.queryByLabelText(label)

      expect(input).not.toBeNull()
      expect(input?.type).toBe('radio')
    })
    test('It should have an input field with the value set as "value" prop', () => {
      const input: HTMLInputElement = screen.getByLabelText(label)

      expect(input.value).toBe(value)
    })
  })

  describe('When currValue === value', () => {
    beforeEach(() => {
      render(
        <RadioInput
          label={label}
          name={name}
          value={value}
          currValue={value}
          onChangeHandler={mockedOnChangeHandler}
        />
      )
    })

    test('It should have a checked input field', () => {
      const input: HTMLInputElement = screen.getByLabelText(label)

      expect(input.checked).toBeTruthy()
    })

    test('It should have a label field with the class containing "radio--checked"', () => {
      const labelElement: HTMLInputElement = screen.getByText(label)

      expect(Array.from(labelElement.classList)).toContain('radio--checked')
    })
  })

  describe('When currValue !== value', () => {
    beforeEach(() => {
      render(
        <RadioInput
          label={label}
          name={name}
          value={value}
          currValue={currValue}
          onChangeHandler={mockedOnChangeHandler}
        />
      )
    })

    test('It should have an unchecked input field', () => {
      const input: HTMLInputElement = screen.getByLabelText(label)

      expect(input.checked).toBeFalsy()
    })
  })

  describe('When the "error" prop is true', () => {
    beforeEach(() => {
      render(
        <RadioInput
          label={label}
          name={name}
          value={value}
          currValue={currValue}
          onChangeHandler={mockedOnChangeHandler}
          error={true}
        />
      )
    })

    test('It should have a label field with the class containing "radio--error"', () => {
      const labelElement: HTMLInputElement = screen.getByText(label)

      expect(Array.from(labelElement.classList)).toContain('radio--error')
    })
  })

  describe('When the user clic on the label element', () => {
    beforeEach(() => {
      render(
        <RadioInput
          label={label}
          name={name}
          value={value}
          currValue={currValue}
          onChangeHandler={mockedOnChangeHandler}
        />
      )
    })

    test('It should call the "onChangeHandler" prop', () => {
      const labelElement: HTMLInputElement = screen.getByText(label)

      fireEvent.click(labelElement)
      expect(mockedOnChangeHandler).toHaveBeenCalledOnce()
    })
  })
})
