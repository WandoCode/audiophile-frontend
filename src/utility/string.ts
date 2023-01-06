export const formatPrice = (priceInt?: number) => {
  if (!priceInt && priceInt !== 0) return ''
  return new Intl.NumberFormat('en-US').format(priceInt)
}
