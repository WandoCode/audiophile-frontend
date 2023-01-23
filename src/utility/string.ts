import { Condition } from '../types'

export const formatPrice = (priceInt?: number) => {
  if (!priceInt && priceInt !== 0) return ''
  return new Intl.NumberFormat('en-US').format(priceInt)
}

export const getConditionalClassName = (
  baseClass: string,
  conditions: Condition[]
) => {
  let base = baseClass + ' '
  conditions.forEach((condition) => {
    if (condition.isFilled) base += condition.addedClass + ' '
  })

  return base.trim()
}
