export const validateText = (text: string) => {
  const errors: string[] = []
  if (text.length === 0) errors.push('Field required.')

  return errors
}

export const validateEmail = (text: string) => {
  const errors: string[] = []

  if (text.length === 0) errors.push('Field required.')

  const emailRegEx = /^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi

  if (!emailRegEx.test(text)) errors.push('Wrong format.')

  return errors
}

export const validateTel = (text: string) => {
  const errors: string[] = []

  if (text.length === 0) errors.push('Field required.')

  const telRegEx = /^\+?\d\s?\-?\(?[0-9]{3}\)?\s?\-?[0-9]{3}\s?\-?[0-9]{4}$/g

  if (!telRegEx.test(text)) errors.push('Wrong format.')

  return errors
}

export const validateZip = (text: string) => {
  const errors: string[] = []

  const nb = parseFloat(text)

  if (text.length === 0) errors.push('Field required.')

  if (!Number.isInteger(nb)) errors.push('Wrong format.')

  return errors
}
