import { describe, expect, test, vi } from 'vitest'
import { render, screen, within, fireEvent } from '@testing-library/react'
import { Button } from '../../stories/Atoms'

describe('Buttons', () => {
  test('Should display the given text', () => {
    const text = 'test text'
    render(<Button text={text} level="primary" onClickHandler={(e) => {}} />)
    const title = screen.getByText(text)
    expect(title).not.toBeNull()
  })

  test('Should use the type "primary" to build the className of the button', () => {
    const text = 'test text'

    render(<Button text={text} level="primary" onClickHandler={(e) => {}} />)
    const btn = screen.getByText(text)
    expect(Array.from(btn.classList)).toContain('btn--primary')
  })

  test('Should use the type "secondary" to build the className of the button', () => {
    const text = 'test text'

    render(<Button text={text} level="secondary" onClickHandler={(e) => {}} />)
    const btn = screen.getByText(text)
    expect(Array.from(btn.classList)).toContain('btn--secondary')
  })

  test('Should use the type "tertiary" to build the className of the button', () => {
    const text = 'test text'

    render(<Button text={text} level="tertiary" onClickHandler={(e) => {}} />)
    const btn = screen.getByText(text)
    expect(Array.from(btn.classList)).toContain('btn--tertiary')
  })

  test('Should use the type "quaternary" to build the className of the button', () => {
    const text = 'test text'

    render(<Button text={text} level="quaternary" onClickHandler={(e) => {}} />)
    const btn = screen.getByText(text)
    expect(Array.from(btn.classList)).toContain('btn--quaternary')
  })

  test('Should display an image for "tertiary" level', () => {
    const text = 'test text'

    render(<Button text={text} level="tertiary" onClickHandler={(e) => {}} />)

    const btn = screen.getByText(text)
    const btnImg = within(btn).getByRole('img')

    expect(btnImg).not.toBeNull()
  })

  test('Should have the attribute "disabled" if the props "disabled" is set to true', () => {
    const text = 'test text'

    render(
      <Button
        text={text}
        level="primary"
        disabled={true}
        onClickHandler={(e) => {}}
      />
    )

    const btn = screen.getByText(text)
    const disabledAttribute = btn.getAttribute('disabled')

    expect(disabledAttribute).not.toBeNull()
  })

  test('Should not have the attribute "disabled" if the props "disabled" is not set', () => {
    const text = 'test text'

    render(<Button text={text} level="primary" onClickHandler={(e) => {}} />)

    const btn = screen.getByText(text)
    const disabledAttribute = btn.getAttribute('disabled')
    console.log(disabledAttribute)

    expect(disabledAttribute).toBeNull()
  })

  test('Should call the "onclickhandler" when user click on it', () => {
    const text = 'test text'
    const mockedOnClickHandler = vi.fn()

    render(
      <Button
        text={text}
        level="primary"
        onClickHandler={mockedOnClickHandler}
      />
    )

    const btn = screen.getByText(text)
    fireEvent.click(btn)

    expect(mockedOnClickHandler).toHaveBeenCalled()
  })

  test('Should use the "className" prop to build a custom className', () => {
    const text = 'test text'
    const classTest = 'test-class'

    render(
      <Button
        text={text}
        level="primary"
        className={classTest}
        onClickHandler={() => {}}
      />
    )

    const btn = screen.getByText(text)

    expect(Array.from(btn.classList)).toContain(classTest)
  })

  test('Should gie the "id" prop to the button', () => {
    const text = 'test text'
    const classTest = 'test-class'
    const id = 'test-id'

    render(
      <Button
        text={text}
        level="primary"
        className={classTest}
        onClickHandler={() => {}}
        id={id}
      />
    )

    const btn = screen.getByText(text)

    expect(btn.id).toBe(id)
  })
})
