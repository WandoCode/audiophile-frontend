export const formatPrice = (priceInt?: number) => {
  if (!priceInt) return ''
  return new Intl.NumberFormat('en-US').format(priceInt)
}
