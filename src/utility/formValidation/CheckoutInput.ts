type Type = 'number' | 'text' | 'tel' | 'email' | 'choice'

class CheckoutInput {
  type: Type
  options: string[]
  value: string

  constructor(type: Type, options: string[] = []) {
    this.type = type
    this.options = options
    this.value = ''
  }

  getValidationErrors() {
    if (this.type === 'text') return this.validateText()
    if (this.type === 'tel') return this.validateTel()
    if (this.type === 'email') return this.validateEmail()
    if (this.type === 'number') return this.validateNumber()
    if (this.type === 'choice') return this.validateChoice()
    return []
  }

  validateText() {
    const errors: string[] = []
    if (this.value.length === 0) errors.push('Field required')

    return errors
  }

  validateEmail() {
    const errors: string[] = []

    const emailRegEx = /^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi

    if (this.value.length === 0) errors.push('Field required')
    else if (!emailRegEx.test(this.value)) errors.push('Wrong format')

    return errors
  }

  validateTel() {
    const errors: string[] = []

    const telRegEx =
      /^\+?\d\s?\-?\(?[0-9]{2,3}\)?\s?\-?[0-9]{2,3}\s?\-?[0-9]{2,6}$/g

    if (this.value.length === 0) errors.push('Field required')
    else if (!telRegEx.test(this.value)) errors.push('Wrong format')

    return errors
  }

  validateNumber() {
    const errors: string[] = []

    const nb = parseFloat(this.value)

    if (this.value.length === 0) errors.push('Field required')
    else if (!Number.isInteger(nb)) errors.push('Wrong format')

    return errors
  }

  validateChoice() {
    const errors: string[] = []

    if (this.value.length === 0) errors.push('Field required')
    else if (!this.options.includes(this.value)) errors.push('Invalid choice')

    return errors
  }
}

export { CheckoutInput }
