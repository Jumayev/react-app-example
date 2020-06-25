import React, { useState, useEffect, useRef } from 'react';
import { checkIsValidNumber, cleanValue, formatValue } from './utilities';

export const CurrencyInput = ({
  allowDecimals = true,
  name,
  className,
  decimalsLimit = 2,
  defaultValue,
  onChange,
  prefix,
  ...attrs
}) => {
  const _defaultValue = defaultValue ? formatValue(String(defaultValue), prefix) : '';
  const [stateValue, setStateValue] = useState(_defaultValue);
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const onFocus = () => (stateValue ? stateValue.length : 0);

  const processChange = (event) => {
    const {
      target: { selectionStart, value },
    } = event;

    const valueOnly = cleanValue(value, allowDecimals, decimalsLimit, prefix);

    if (!Number(valueOnly)) {
      onChange({ target: {
        name,
        value: ''
      }});
      return setStateValue('');
    }

    if (checkIsValidNumber(valueOnly)) {
      const formattedValue = formatValue(valueOnly, prefix);
      if (selectionStart) {
        const cursor = selectionStart + (formattedValue.length - value.length) || 1;
        setCursor(cursor);
      }
      setStateValue(formattedValue);
    }

    onChange({ target: {
        name,
        value: valueOnly,
      }});
  };

  useEffect(() => {
    if (!defaultValue) setStateValue(defaultValue)
  }, [defaultValue, setStateValue])

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.setSelectionRange(cursor, cursor);
    }
  }, [cursor, inputRef, stateValue]);

  return (
    <input
      className={className}
      name={name}
      type="tel"
      onChange={processChange}
      onFocus={onFocus}
      value={stateValue}
      ref={inputRef}
      autoComplete="off"
      {...attrs}
    />
  );
};

export default CurrencyInput;
