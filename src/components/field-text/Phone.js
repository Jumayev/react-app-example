import React, {useState, useEffect} from 'react'
import {cleanValue, formatValue} from './utils'

const Phone = ({onChange, className, name, value, ...attrs}) => {
	const [stateValue, setStateValue] = useState('+993 ')

  const handleChange = ({target}) => {
  	const {selectionStart, value} = target

  	if(selectionStart < 5 ) return

  	const valueOnly = cleanValue(value)
  	const formattedValue = formatValue(valueOnly)
   	setStateValue(formattedValue)
    onChange({ target: {
        name,
        value: valueOnly,
      }});
  }

  useEffect(() => {
    if(value.length <= 3) setStateValue('+993 ')
  }, [value, setStateValue])

  return(
    <input 
      className={className}
      name={name}
      type='tel' 
      onChange={handleChange} 
      value={stateValue} 
      autoComplete="off"
      {...attrs}
    />
  );
}
export default Phone