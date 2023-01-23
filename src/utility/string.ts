export const formatPrice = (priceInt?: number) => {
  if (!priceInt && priceInt !== 0) return ''
  return new Intl.NumberFormat('en-US').format(priceInt)
}

interface Condition {
  isFilled: boolean
  addedClass: string
}

export const getConditionalClassName = (
  baseClass: string,
  conditions: Condition[]
) => {
  let base = baseClass
  conditions.forEach((condition) => {
    base += ' '
    if (condition.isFilled) base += condition.addedClass
  })

  base.trimEnd()

  return base
}
