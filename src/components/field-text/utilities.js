export const addCommas = (value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const removeCommas = (value) => value.replace(/,/g, '')

export const checkIsValidNumber = (input) => {
  if (Number(input) < 0 || isNaN(Number(input))) {
    return false
  }

  return true
};

/**
 * Remove prefix, commas and extra decimals from value
 */
export const cleanValue = (
  value,
  allowDecimals,
  decimalsLimit,
  prefix,
) => {
  const withoutPrefix = prefix ? value.replace(prefix, '') : value
  const withoutCommas = removeCommas(withoutPrefix)

  if (withoutCommas.includes('.')) {
    const [int, decimals] = withoutCommas.split('.')
    const includeDecimals = allowDecimals
      ? `.${decimalsLimit ? decimals.slice(0, decimalsLimit) : decimals}`
      : ''

    return `${int}${includeDecimals}`
  }

  return withoutCommas
};

/**
 * Format value with commas and prefix
 */
export const formatValue = (value, prefix) => {
  const [int, decimals] = value.split('.')
  const includePrefix = prefix ? prefix : ''
  const includeDecimals = value.includes('.') ? `.${decimals}` : ''
  return `${includePrefix}${addCommas(int)}${includeDecimals}`
}
