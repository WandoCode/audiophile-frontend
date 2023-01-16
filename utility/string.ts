export const formatPrice = (priceInt?: number) => {
  if (!priceInt && priceInt !== 0) return ''
  return new Intl.NumberFormat('en-US').format(priceInt)
}
export const capitalize = (word: string) => {
  return word.at(0)?.toUpperCase() + word.slice(1)
}
