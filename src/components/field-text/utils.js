export const removeCommas = value => value.replace(/\D/g, "")

export const cleanValue = value => {
		return removeCommas(value).slice(0, 11)
}

export const formatValue = value => {
	const _value = value.slice(3)
	if(_value.length <= 2) {
		return `+993 ${_value}`
	}
  return `+993 ${_value.slice(0, 2)} ${_value.slice(2, 8)}`
}